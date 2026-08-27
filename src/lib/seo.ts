import type { Metadata } from "next";
import { siteSettings } from "@/data/settings";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bstc.com.pk";

export interface PageMetadataProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  image = "/images/og/og-image.svg",
  noIndex = false,
}: PageMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteSettings.siteName} Consultants`
    : siteSettings.seoTitle;

  const fullDescription = description || siteSettings.seoDescription;
  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
  const ogImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: "Hassan Zeb (ITP)", url: BASE_URL }],
    creator: siteSettings.companyName,
    publisher: siteSettings.companyName,
    keywords: [
      "Tax Consultant Pakistan",
      "FBR Income Tax Filing",
      "NTN Registration Pakistan",
      "SECP Company Registration",
      "Sales Tax Registration STRN",
      "PRA Sales Tax Punjab",
      "KPRA Tax Khyber Pakhtunkhwa",
      "SRB Tax Sindh",
      "BRA Tax Balochistan",
      "Hassan Zeb ITP",
      "Business Solutions Tax Consultants",
      "Corporate Bookkeeping Pakistan",
      "Trademark Registration IPO Pakistan",
    ],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: siteSettings.companyName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_PK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImageUrl],
      creator: "@BSTC_PK",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
