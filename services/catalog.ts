import { API_URL } from "@/lib/config";
import { delay } from "@/lib/utils";
import { mockProducts, mockProductCategories } from "@/lib/data/catalog";
import type { Product, ProductCategory } from "@/types";

/**
 * Catalog service.
 * When NEXT_PUBLIC_API_URL is set, returns live data from the NestJS API;
 * otherwise serves clearly-labelled demo data so the site runs standalone.
 */

async function get<T>(path: string): Promise<T> {
  if (!API_URL) return undefined as unknown as Promise<T>;
  const res = await fetch(`${API_URL}/api/v1${path}`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`);
  const body = await res.json();
  return body.data as T;
}

export async function getProducts(): Promise<Product[]> {
  if (API_URL) return get<Product[]>("/products");
  await delay(150);
  return mockProducts.filter((p) => p.status === "ACTIVE");
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (API_URL) return get<Product | null>(`/products/${slug}`);
  return mockProducts.find((p) => p.slug === slug) ?? null;
}

export async function getCategories(): Promise<ProductCategory[]> {
  if (API_URL) return get<ProductCategory[]>("/product-categories");
  return mockProductCategories;
}

export async function getProductsByCategory(code: string): Promise<Product[]> {
  if (API_URL) return get<Product[]>(`/products?category=${code}`);
  return mockProducts.filter((p) => p.category === code && p.status === "ACTIVE");
}