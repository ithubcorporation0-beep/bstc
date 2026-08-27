import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteSettings } from "@/data/settings";
import { getSiteUrl } from "@/lib/seo";
import ThemeScript from "@/components/layout/ThemeScript";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingButtons from "@/components/layout/FloatingButtons";

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteSettings.seoTitle,
    template: `%s | ${siteSettings.siteName}`,
  },
  description: siteSettings.seoDesc,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    siteName: siteSettings.siteName,
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-[#f8fafc] relative">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
