import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://tagdempt-promotions.vercel.app";

  const [projects, news] = await Promise.all([
    prisma.project.findMany({
      select: {
        slug: true,
        updatedAt: true,
      },
    }),
    prisma.news.findMany({
      where: {
        published: true,
      },
      select: {
        id: true,
        createdAt: true,
      },
    }),
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...projects.map((item) => ({
      url: `${baseUrl}/projects/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...news.map((item) => ({
      url: `${baseUrl}/news/${item.id}`,
      lastModified: item.createdAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    {
      url: `${baseUrl}/investment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/investor-center`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/opportunities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}