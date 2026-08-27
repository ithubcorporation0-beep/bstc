import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { siteSettings } from "@/data/settings";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";

export interface ServiceSidebarProps {
  currentSlug: string;
}

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  const whatsappUrl = formatWhatsAppHref(
    siteSettings.whatsapp,
    `Hello BSTC, I am inquiring regarding the ${services.find((s) => s.slug === currentSlug)?.title || "Tax"} service.`
  );

  return (
    <aside className="space-y-6">
      {/* Service Directory Navigation */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>All Services</span>
        </h3>
        <nav className="space-y-1">
          {services.map((svc) => {
            const isActive = svc.slug === currentSlug;
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="truncate pr-2">{svc.title}</span>
                <ArrowRight
                  className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                    isActive ? "translate-x-0.5" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Direct Contact Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-blue-200 text-[10px] font-bold tracking-wider uppercase">
            ⚡ Direct ITP Assistance
          </div>
          <h4 className="text-lg font-extrabold leading-snug">
            Need immediate advice on this service?
          </h4>
          <p className="text-xs text-blue-200/90 leading-relaxed">
            Speak directly with Hassan Zeb (ITP) or our senior tax consultants for instant procedural clarity.
          </p>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={formatPhoneHref(siteSettings.phone)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-blue-900 text-xs font-bold hover:bg-blue-50 transition-colors shadow"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call {siteSettings.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
