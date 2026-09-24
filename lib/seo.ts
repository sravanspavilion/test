import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/config";

/**
 * SEO helpers — consistent metadata (title, description, canonical,
 * Open Graph, Twitter) across every page.
 */

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title: rawTitle,
  description = SITE_DESCRIPTION,
  path = "/",
  image,
  type = "website",
  publishedTime,
}: SeoInput): Metadata {
  const title = rawTitle.includes(SITE_NAME)
    ? rawTitle
    : `${rawTitle} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type,
      ...(image ? { images: [{ url: image }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}