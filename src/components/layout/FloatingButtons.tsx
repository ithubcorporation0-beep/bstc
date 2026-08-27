"use client";

import React, { useEffect, useState } from "react";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";

export function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = formatWhatsAppHref(
    siteSettings.whatsapp,
    "Hello BSTC, I would like to inquire about your tax and corporate services."
  );
  const phoneUrl = formatPhoneHref(siteSettings.phone);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/85 dark:bg-slate-800/85 text-white backdrop-blur-md border border-slate-700/50 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct Call Floating CTA */}
      <a
        href={phoneUrl}
        aria-label="Call BSTC Office"
        className="pointer-events-auto w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:scale-110 active:scale-95 transition-all duration-200 hover:brightness-110"
      >
        <Phone className="w-5 h-5 animate-pulse" />
      </a>

      {/* WhatsApp Floating CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BSTC on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-xl shadow-green-600/35 hover:scale-105 active:scale-95 transition-all duration-200 hover:brightness-110"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">WhatsApp Chat</span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-lime-500"></span>
        </span>
      </a>
    </div>
  );
}
