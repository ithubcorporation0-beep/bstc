"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { siteSettings } from "@/data/settings";

// Clean inline SVG for official WhatsApp icon
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.677.15-.201.301-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.101-.201.05-.376-.025-.527-.075-.15-.677-1.633-.928-2.235-.244-.587-.493-.507-.677-.517l-.578-.01c-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.079 2.909 1.229 3.11c.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.086 1.782-.728 2.033-1.43.25-.702.25-1.304.175-1.43-.075-.126-.275-.201-.576-.351zM12.04 2C6.528 2 2.05 6.478 2.05 11.99c0 1.954.563 3.778 1.536 5.32L2 22l4.832-1.538a9.92 9.92 0 0 0 5.208 1.528c5.512 0 9.99-4.478 9.99-9.99C22.03 6.478 17.552 2 12.04 2zm0 18.232a8.21 8.21 0 0 1-4.225-1.163l-.303-.18-3.13.996.997-3.048-.198-.315a8.23 8.23 0 0 1-1.264-4.532c0-4.545 3.698-8.242 8.243-8.242 4.545 0 8.243 3.697 8.243 8.242 0 4.545-3.698 8.242-8.243 8.242z" />
    </svg>
  );
}

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // Clean WhatsApp number from settings (digits only)
  const cleanWaNumber = siteSettings.wa.replace(/[^0-9]/g, "");

  return (
    <>
      {/* 1. Back-to-Top FAB (Bottom-Left) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-ink hover:text-royal dark:hover:text-royal-light shadow-soft hover:shadow-soft-lg flex items-center justify-center transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* 2. WhatsApp FAB (Bottom-Right) — Brand-locked #25D366 */}
      <a
        href={`https://wa.me/${cleanWaNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        {/* Gentle Pulse Glow Animation */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"
        />
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </>
  );
}

export default FloatingButtons;
