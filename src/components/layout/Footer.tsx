import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { services } from "@/data/services";
import { formatMailtoHref, formatPhoneHref } from "@/lib/utils";

export function Footer() {
  const primaryServices = services.slice(0, 6);

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-600/20">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {siteSettings.siteName}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-lime-400 uppercase">
                  TAX CONSULTANTS
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteSettings.footerText}
            </p>

            <div className="pt-2 flex flex-col gap-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">
                {siteSettings.companyName}
              </span>
              <span>Registered Income Tax Practitioner (ITP) Led</span>
              <span>Islamabad &amp; Swat, Pakistan</span>
            </div>
          </div>

          {/* Column 2: Key Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {primaryServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1 group"
                  >
                    <span className="line-clamp-1">{svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#about" className="hover:text-blue-400 transition-colors">
                  About BSTC
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-400 transition-colors">
                  All 14 Services
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-blue-400 transition-colors">
                  Our 4-Step Process
                </Link>
              </li>
              <li>
                <Link href="/team/hassan-zeb" className="hover:text-blue-400 transition-colors">
                  Consultant Profile
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-blue-400 transition-colors">
                  Taxation FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-400 transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Official Office
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                <span>{siteSettings.address}</span>
              </li>
              <li>
                <a
                  href={formatPhoneHref(siteSettings.phone)}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{siteSettings.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={formatMailtoHref(siteSettings.email)}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{siteSettings.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>{siteSettings.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{siteSettings.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
