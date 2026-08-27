import { SiteSettings } from "@/types/content";

/**
 * Global Site Settings & Contact Configurations.
 * Single source of truth for navigation, footer, metadata, and contact widgets.
 */
export const siteSettings: SiteSettings = {
  siteName: "BSTC",
  companyName: "Business Solutions Tax Consultants",
  logo: "/logo.svg",
  favicon: "/favicon.ico",

  // Contact Information
  email: "consult@bstc.com.pk", // TODO(O6): real email address from client
  phone: "+92 300 0000000", // TODO(O2): real phone number from client
  wa: "923000000000", // TODO(O3): real WhatsApp number from client
  hours: "Mon - Sat: 9:00 AM - 6:00 PM", // TODO(O7): confirmed business hours from client
  address: "Blue Area, Islamabad, Pakistan", // TODO(O4): real office address from client
  mapsLink: "https://maps.google.com", // TODO(O5): Google Maps link from client

  // Global SEO & Analytics
  seoTitle: "BSTC — Business Solutions Tax Consultants | Tax & Corporate Advisory Pakistan",
  seoDesc:
    "Leading tax consultancy in Pakistan. Income tax filing, sales tax, SECP company registration, NTN, and corporate bookkeeping led by Hassan Zeb (Registered ITP).",
  gaId: "G-XXXXXXXXXX", // TODO(O16): Google Analytics 4 Measurement ID from client

  // Social Channels
  fb: "https://facebook.com", // TODO(O8): Facebook page URL from client
  li: "https://linkedin.com", // TODO(O9): LinkedIn company URL from client
  tw: "https://twitter.com", // TODO(O10): Twitter/X profile URL from client
  ig: "https://instagram.com", // TODO(O11): Instagram profile URL from client
  yt: "https://youtube.com", // TODO(O12): YouTube channel URL from client

  // Footer & Copyright
  footerText:
    "Business Solutions Tax Consultants (BSTC) delivers certified tax, accounting, and corporate advisory services across Pakistan. Led by Registered Income Tax Practitioners.",
  copyright: "© 2026 Business Solutions Tax Consultants (BSTC). All rights reserved.",
};
