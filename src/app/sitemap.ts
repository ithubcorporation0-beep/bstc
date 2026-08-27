import { MetadataRoute } from "next";
import { services, team } from "@/data";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  // 1. Static Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. All 14 Service Routes
  const serviceRoutes: MetadataRoute.Sitemap = services
    .filter((service) => service.status === "active")
    .map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // 3. All Team Consultant Routes
  const teamRoutes: MetadataRoute.Sitemap = team
    .filter((member) => member.status === "active")
    .map((member) => ({
      url: `${siteUrl}/team/${member.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...serviceRoutes, ...teamRoutes];
}
