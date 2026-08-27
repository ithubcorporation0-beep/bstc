import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { teamMembers } from "@/data/team";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bstc.com.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Service routes (14 services)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((svc) => ({
    url: `${BASE_URL}/services/${svc.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Team routes
  const teamRoutes: MetadataRoute.Sitemap = teamMembers.map((member) => ({
    url: `${BASE_URL}/team/${member.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes];
}
