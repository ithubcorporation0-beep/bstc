import { siteSettings } from "@/data/settings";
import type { Service, TeamMember, FaqItem, ServiceFaq } from "@/types/content";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bstc.com.pk";

/**
 * Generates Schema.org LocalBusiness & AccountingService structured data
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "FinancialService", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: siteSettings.companyName,
    alternateName: siteSettings.siteName,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.svg`,
    image: `${BASE_URL}/images/og/og-image.svg`,
    description: siteSettings.seoDescription,
    telephone: siteSettings.phone,
    email: siteSettings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blue Area / Mingora",
      addressLocality: "Islamabad & Swat",
      addressRegion: "Federal Capital & KPK",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.7167",
      longitude: "73.0667",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: Object.values(siteSettings.socialLinks).filter((url) => url !== "#"),
    founder: {
      "@type": "Person",
      name: "Hassan Zeb",
      jobTitle: "CEO & Principal Tax Consultant (ITP)",
    },
    priceRange: "$$",
  };
}

/**
 * Generates Schema.org Service structured data
 */
export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: "Corporate & Taxation Consultancy",
    description: service.fullDesc,
    provider: {
      "@type": "AccountingService",
      name: siteSettings.companyName,
      url: BASE_URL,
      telephone: siteSettings.phone,
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    url: `${BASE_URL}/services/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax & Corporate Services",
      itemListElement: service.benefits.map((b, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: b,
        },
        position: index + 1,
      })),
    },
  };
}

/**
 * Generates Schema.org BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

/**
 * Generates Schema.org FAQPage structured data
 */
export function generateFaqSchema(faqs: readonly (FaqItem | ServiceFaq)[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org Person structured data
 */
export function generatePersonSchema(member: TeamMember) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.designation,
    worksFor: {
      "@type": "Organization",
      name: siteSettings.companyName,
    },
    description: member.bio,
    email: member.email,
    telephone: member.phone,
    url: `${BASE_URL}/team/${member.slug}`,
  };
}
