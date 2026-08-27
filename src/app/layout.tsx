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
        {/* Skip to Main Content Link (First focusable element for keyboard & screen readers) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-royal focus:text-white focus:font-bold focus:shadow-soft-lg focus:outline-none focus:ring-2 focus:ring-lime-bright focus:ring-offset-2"
        >
          Skip to main content
        </a>

        <ScrollProgress />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
