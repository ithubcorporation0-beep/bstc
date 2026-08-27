import type { Metadata } from "next";
import "./globals.css";
import { siteSettings } from "@/data/settings";
import ThemeScript from "@/components/layout/ThemeScript";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingButtons from "@/components/layout/FloatingButtons";

export const metadata: Metadata = {
  title: siteSettings.seoTitle,
  description: siteSettings.seoDesc,
  icons: {
    icon: "/favicon.svg",
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
