import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

/**
 * Static sitemap. Dynamic routes (products, stations, news) are added
 * by the sitemap index of each section once the content API is live;
 * here we enumerate the canonical page tree.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/products-and-services",
    "/locate",
    "/partnerships",
    "/rewards",
    "/news",
    "/faqs",
    "/contact",
    "/careers",
    "/legal/privacy",
    "/admin/login",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  return staticRoutes;
}