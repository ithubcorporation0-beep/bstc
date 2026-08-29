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
  email: "bs.taxconsultants@gmail.com",
  phone: "+92 333 9860439",
  wa: "923339860439",
  hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  address: "Office No. 03, Shehzad Plaza, Saidu Road, Makan Bagh, Mingora, District Swat",
  mapsLink: "https://maps.google.com/?q=Shehzad+Plaza+Saidu+Road+Makan+Bagh+Mingora+Swat",

  // Global SEO & Analytics
  seoTitle: "BSTC — Business Solutions Tax Consultants | Tax & Corporate Advisory Pakistan",
  seoDesc:
    "Leading tax consultancy in Swat & Pakistan. Income tax filing, sales tax, SECP company registration, NTN, and corporate bookkeeping led by Javed Hussain (Owner & Income Tax Practitioner).",
  gaId: "G-XXXXXXXXXX",

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
