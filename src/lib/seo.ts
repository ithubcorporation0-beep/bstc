import { Metadata } from "next";
import { siteSettings } from "@/data/settings";

export interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Resolves the primary base URL of the website.
 * Falls back to localhost in dev and production domain in production.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.replace(/\/$/, "");
  }
  return "https://bstc.com.pk";
}

/**
 * Builds standard compliant Next.js Metadata for any page.
 */
export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: MetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalUrl = path ? `${siteUrl}${path.startsWith("/") ? path : `/${path}`}` : siteUrl;
  const ogImageUrl = image || `${siteUrl}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteSettings.siteName,
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteSettings.companyName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
