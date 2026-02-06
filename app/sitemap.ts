import { MetadataRoute } from "next";
import { NICHE_DATA } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.giftgenius.es";

  // 1. Páginas estáticas (Inicio)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // 2. Páginas de categorías (profesiones)
  const nichePages: MetadataRoute.Sitemap = NICHE_DATA.map((niche) => ({
    url: `${baseUrl}/regalos/${niche.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...nichePages];
}
