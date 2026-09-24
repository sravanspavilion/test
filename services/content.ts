import { API_URL } from "@/lib/config";
import { delay } from "@/lib/utils";
import { mockNews, mockNewsCategories } from "@/lib/data/news";
import { mockFAQs, mockFAQCategories } from "@/lib/data/faqs";
import { mockJobs } from "@/lib/data/careers";
import type {
  FAQ,
  FAQCategory,
  Job,
  NewsArticle,
  NewsCategory,
} from "@/types";

/** Content service — newsroom, FAQs, careers. */

async function get<T>(path: string): Promise<T> {
  if (!API_URL) return undefined as unknown as Promise<T>;
  const res = await fetch(`${API_URL}/api/v1${path}`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`);
  const body = await res.json();
  return body.data as T;
}

export async function getNews(): Promise<NewsArticle[]> {
  if (API_URL) return get<NewsArticle[]>("/news");
  await delay(200);
  return mockNews.filter((n) => n.status === "PUBLISHED");
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  if (API_URL) return get<NewsArticle | null>(`/news/${slug}`);
  return mockNews.find((n) => n.slug === slug && n.status === "PUBLISHED") ?? null;
}

export async function getNewsCategories(): Promise<NewsCategory[]> {
  if (API_URL) return get<NewsCategory[]>("/news/categories");
  return mockNewsCategories;
}

export async function getFAQs(): Promise<FAQ[]> {
  if (API_URL) return get<FAQ[]>("/faqs");
  await delay(150);
  return mockFAQs.filter((f) => f.status === "ACTIVE");
}

export async function getFAQCategories(): Promise<FAQCategory[]> {
  if (API_URL) return get<FAQCategory[]>("/faqs/categories");
  return mockFAQCategories;
}

export async function getJobs(): Promise<Job[]> {
  if (API_URL) return get<Job[]>("/careers/jobs");
  return mockJobs.filter((j) => j.status === "PUBLISHED");
}