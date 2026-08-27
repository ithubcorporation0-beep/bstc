"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, ShieldCheck, ArrowRight } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { services } from "@/data/services";
import { formatPhoneHref } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesDropdown(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services", isServices: true },
    { label: "Why Us", href: "/#why-us" },
    { label: "Process", href: "/#process" },
    { label: "Team", href: "/team/hassan-zeb" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform duration-200">
              B
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {siteSettings.siteName}
                </span>
                <span className="text-[10px] font-bold tracking-widest text-lime-600 dark:text-lime-400 uppercase bg-lime-500/10 px-1.5 py-0.5 rounded">
                  CONSULTANTS
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide hidden sm:inline-block">
                Tax &amp; Corporate Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              if (link.isServices) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesDropdown(!servicesDropdown)}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdown ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Mega Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="rounded-2xl glass p-4 shadow-2xl border border-slate-200 dark:border-slate-800">
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 px-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              Corporate &amp; Taxation Services (14)
                            </span>
                            <Link
                              href="/#services"
                              onClick={() => setServicesDropdown(false)}
                              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                            >
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1 max-h-[360px] overflow-y-auto pr-1">
                            {services.map((svc) => (
                              <Link
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                onClick={() => setServicesDropdown(false)}
                                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800/80 transition-colors group"
                              >
                                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                                    {svc.title}
                                  </span>
                                  <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                    {svc.shortDesc}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={formatPhoneHref(siteSettings.phone)}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{siteSettings.phone}</span>
            </a>
            <Button size="sm" href="/#contact" variant="primary">
              Book Consultation
            </Button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-6 overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 py-1"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={formatPhoneHref(siteSettings.phone)}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call: {siteSettings.phone}</span>
              </a>
              <Button href="/#contact" onClick={closeMenu} variant="primary" size="lg" className="w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
