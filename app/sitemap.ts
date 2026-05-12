import type { MetadataRoute } from "next";
import { siteConfig, brands, services } from "@/lib/site-config";
import { featuredBikes, newsPosts } from "@/lib/sample-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths = [
    "/",
    "/merken",
    "/occasions",
    "/occasions/demo",
    "/occasions/straat",
    "/occasions/off-road",
    "/diensten",
    "/verhuur",
    "/verhuur/boeken",
    "/nieuws",
    "/contact",
    "/privacy",
    "/cookies",
    "/algemene-voorwaarden",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1 : 0.7,
    })),
    ...brands.flatMap((b) => [
      { url: `${base}/merken/${b.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
      ...b.categories.map((c) => ({
        url: `${base}/merken/${b.slug}/${c}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ]),
    ...services.map((s) => ({
      url: `${base}/diensten/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...featuredBikes.map((b) => ({
      url: `${base}/occasions/${b.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...newsPosts.map((p) => ({
      url: `${base}/nieuws/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
