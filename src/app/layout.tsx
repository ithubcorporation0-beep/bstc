import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/jsonld";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ThemeScript } from "@/components/layout/ThemeScript";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
