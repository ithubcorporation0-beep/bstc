"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { siteSettings } from "@/data/settings";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/layout/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Monitor scroll for shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key and body scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-soft border-b border-slate-200/80 dark:border-slate-800/80"
          : "glass-nav border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal rounded-xl p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-royal p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-display font-extrabold text-white text-base sm:text-lg tracking-tight">
                B
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl text-ink tracking-tight leading-none group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                {siteSettings.siteName}
              </span>
              <span className="text-[10px] font-semibold text-lime-600 dark:text-lime-400 tracking-wider uppercase leading-tight mt-0.5">
                Tax Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-royal dark:hover:text-royal-light hover:bg-royal/5 dark:hover:bg-royal/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle & Book Consultation CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* CTA Button: Hidden below sm breakpoint per PRD §6.1 row 1 */}
            <Button
              href="/#contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex"
            >
              Book Consultation
            </Button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-ink hover:text-royal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-slate-950/40 backdrop-blur-md z-50 animate-in fade-in duration-200 flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-soft-lg space-y-6">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-2xl text-base font-bold text-ink hover:bg-royal/10 hover:text-royal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <Button
                href="/#contact"
                variant="primary"
                size="md"
                onClick={closeMenu}
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book Free Consultation
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2">
                <a
                  href={`tel:${siteSettings.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-royal"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <span>•</span>
                <a
                  href={`https://wa.me/${siteSettings.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
