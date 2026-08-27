/**
 * =======================================================================
 * SITE SETTINGS & CONTACT CONTENT FILE — BSTC Website
 * =======================================================================
 * HOW TO EDIT THIS FILE SAFELY (Guide for non-programmers):
 *
 * 1. This file contains global contact information, company details,
 *    social links, and footer text shown across the entire website.
 * 2. Edit values inside quotes "like this" (e.g., phone, email, address).
 * 3. Placeholders marked with `// TODO(client): confirm` should be verified
 *    and updated with official client credentials before launch.
 * =======================================================================
 */

import type { SiteSettings } from "@/types/content";

export const siteSettings: SiteSettings = {
  siteName: "BSTC",
  companyName: "Business Solutions Tax Consultants",
  email: "consult@bstc.com.pk", // TODO(client): confirm official company email (O3)
  phone: "+92 300 0000000", // TODO(client): confirm official office telephone / mobile (O1)
  whatsapp: "+923000000000", // TODO(client): confirm official WhatsApp business number (O2)
  address: "Blue Area, Islamabad & Mingora, Swat, Pakistan", // TODO(client): confirm physical office address (O4, O5)
  hours: "Mon - Fri, 9:00 AM - 6:00 PM", // TODO(client): confirm operating hours (O7)
  mapsLink: "https://maps.google.com", // TODO(client): confirm Google Maps business location URL (O6)
  socialLinks: {
    facebook: "#", // TODO(client): confirm Facebook page URL (O8)
    linkedin: "#", // TODO(client): confirm LinkedIn company page URL (O8)
    twitter: "#", // TODO(client): confirm Twitter / X profile URL (O8)
    instagram: "#", // TODO(client): confirm Instagram profile URL (O8)
    youtube: "#", // TODO(client): confirm YouTube channel URL (O8)
  },
  seoTitle:
    "BSTC — Business Solutions Tax Consultants | Tax & Corporate Consultancy Pakistan",
  seoDescription:
    "Business Solutions Tax Consultants (BSTC) — professional tax filing, NTN/SECP registration, bookkeeping, and corporate consultancy in Pakistan. Led by Hassan Zeb (ITP).",
  footerText:
    "Premium tax and corporate consultancy services in Pakistan. Led by Hassan Zeb (ITP).",
  copyright: "© 2026 Business Solutions Tax Consultants. All rights reserved.",
} as const;

export const settings = siteSettings;
