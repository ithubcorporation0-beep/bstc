"use client";

import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Sparkles,
  MoveUpRight,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Building2,
  FileText,
  Users,
  Award,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import Icon from "@/components/ui/Icon";

export default function StyleguidePage() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("bstc_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("bstc_theme", "light");
    }
  };

  const colors = [
    {
      name: "Royal",
      token: "--royal",
      hexLight: "#1d4ed8",
      hexDark: "#2563eb",
      bgClass: "bg-royal",
      textClass: "text-white",
      desc: "Primary brand accent, main buttons & active highlights",
    },
    {
      name: "Royal Dark",
      token: "--royal-dark",
      hexLight: "#1e3a8a",
      hexDark: "#1e3a8a",
      bgClass: "bg-royal-dark",
      textClass: "text-white",
      desc: "Deep navy base, gradients & header backgrounds",
    },
    {
      name: "Royal Light",
      token: "--royal-light",
      hexLight: "#3b82f6",
      hexDark: "#60a5fa",
      bgClass: "bg-royal-light",
      textClass: "text-white",
      desc: "Glow effects, text gradient start & hover outlines",
    },
    {
      name: "Lime",
      token: "--lime",
      hexLight: "#84cc16",
      hexDark: "#84cc16",
      bgClass: "bg-lime",
      textClass: "text-slate-950 font-bold",
      desc: "Secondary accent, success icons & trust badges",
    },
    {
      name: "Lime Bright",
      token: "--lime-bright",
      hexLight: "#a3e635",
      hexDark: "#a3e635",
      bgClass: "bg-lime-bright",
      textClass: "text-slate-950 font-bold",
      desc: "Vibrant high-contrast CTA & gradient finish",
    },
    {
      name: "Ink",
      token: "--ink",
      hexLight: "#0a0a0a",
      hexDark: "#f8fafc",
      bgClass: "bg-ink",
      textClass: "text-white dark:text-slate-950 font-bold",
      desc: "Primary body copy and deep background contrast",
    },
  ];

  const interWeights = [
    { weight: 400, label: "Regular (400)", sample: "The quick brown fox jumps over the lazy dog" },
    { weight: 500, label: "Medium (500)", sample: "Tax and corporate consultancy services for businesses across Pakistan" },
    { weight: 600, label: "SemiBold (600)", sample: "Registered Income Tax Practitioner (ITP) Led" },
    { weight: 700, label: "Bold (700)", sample: "Federal Board of Revenue (FBR) & SECP Compliance" },
  ];

  const displayWeights = [
    { weight: 600, label: "SemiBold (600)", sample: "Business Solutions Tax Consultants" },
    { weight: 700, label: "Bold (700)", sample: "Professional Tax & Corporate Advisory in Pakistan" },
    { weight: 800, label: "ExtraBold (800)", sample: "BSTC — 100% Compliant & Registered" },
  ];

  const faqItems = [
    {
      id: "faq-1",
      question: "What documents are required for individual income tax return filing in Pakistan?",
      answer:
        "For salaried individuals, you will need your salary certificate / pay slips, bank account statements for the tax year (July 1 to June 30), tax deduction certificates from utilities and telecom providers, vehicle registration details, and records of any assets bought or sold during the financial year. Our certified consultants assist in organizing all necessary documentation.",
    },
    {
      id: "faq-2",
      question: "How long does SECP private limited company incorporation take?",
      answer:
        "The standard SECP private limited company registration process typically takes between 3 to 7 working days once all subscriber CNICs, proposed business names, digital signatures, and memorandum/articles of association are submitted through the eServices portal.",
    },
    {
      id: "faq-3",
      question: "What is the difference between an Active Taxpayer (ATL) and Non-Active status?",
      answer:
        "Active Taxpayer List (ATL) status gives individuals and businesses access to lower withholding tax rates on banking transactions, vehicle token tax, property purchases, and import/export activities. Non-filers face double or punitive withholding tax rates on everyday financial transactions.",
    },
  ];

  const iconsShowcase = [
    "ShieldCheck",
    "Calculator",
    "Building2",
    "FileText",
    "Users",
    "Award",
    "Scale",
    "FileSpreadsheet",
    "TrendingUp",
    "Briefcase",
    "Sparkles",
    "Phone",
    "Mail",
    "MapPin",
    "Clock",
    "CheckCircle2",
  ];

  return (
    <div className="min-h-screen p-6 sm:p-10 md:p-16 max-w-6xl mx-auto space-y-16">
      {/* Header with Theme Toggle */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-royal text-white">
              PRD §8
            </span>
            <span className="text-xs font-semibold text-lime dark:text-lime-bright uppercase tracking-wider">
              Design System &amp; Base Components
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
            BSTC Styleguide &amp; Component Library
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Visual verification of color tokens, self-hosted typography, and base UI components.
          </p>
        </div>

        {mounted && (
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-ink shadow-sm hover:scale-105 transition-all cursor-pointer font-semibold text-sm"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Switch to Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-royal" />
                <span>Switch to Dark Mode</span>
              </>
            )}
          </button>
        )}
      </header>

      {/* 1. Base UI Components */}
      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-royal" />
            <span>1. Base UI Components (src/components/ui/)</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Reusable, fully typed, accessible components styled with design tokens.
          </p>
        </div>

        {/* 1.1 Button Component */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-bold text-lg text-ink">1.1 Button (Button.tsx)</h3>
            <p className="text-xs text-slate-500">Variants, sizes, and polymorphic Next.js Link support.</p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Primary Large
              </Button>
              <Button variant="primary" size="md">
                Primary Medium
              </Button>
              <Button variant="primary" size="sm">
                Primary Small
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="md">
                Secondary Outline
              </Button>
              <Button variant="ghost" size="md">
                Ghost Action
              </Button>
              <Button variant="lime" size="md" icon={<Sparkles className="w-4 h-4" />}>
                Lime Accent CTA
              </Button>
              <Button variant="primary" size="md" href="#cards" icon={<ArrowRight className="w-4 h-4" />}>
                Rendered as &lt;Link&gt;
              </Button>
              <Button variant="primary" size="md" disabled>
                Disabled State
              </Button>
            </div>
          </div>
        </div>

        {/* 1.2 Card Component */}
        <div id="cards" className="space-y-4">
          <h3 className="font-bold text-lg text-ink">1.2 Card (Card.tsx)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-ink mb-1">Standard Surface Card</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Rounded-2xl surface with subtle border, dark mode support, and .lift hover elevation.
              </p>
            </Card>

            <Card href="#faq" className="cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-lime/20 text-lime-700 dark:text-lime-400 flex items-center justify-center mb-4">
                <MoveUpRight className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-ink mb-1 group-hover:text-royal transition-colors">
                Interactive Link Card
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Pass an href prop to automatically wrap the entire card in an accessible Next.js Link.
              </p>
            </Card>

            <Card glass>
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-ink mb-1">Glassmorphic Card</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Pass glass=&#123;true&#125; for 16px backdrop blur over translucent white or near-black.
              </p>
            </Card>
          </div>
        </div>

        {/* 1.3 Section Component */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <Section
            eyebrow="Section Component"
            heading="Consistent Spacing & Containers"
            description="Section.tsx standardizes vertical padding, max-width containers, and header layouts."
            centered
            className="py-12 sm:py-16"
          >
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center text-xs font-mono text-slate-500">
              [ Section Inner Children Container Slot ]
            </div>
          </Section>
        </div>

        {/* 1.4 Accordion Component */}
        <div id="faq" className="space-y-4">
          <div>
            <h3 className="font-bold text-lg text-ink">1.4 Accordion (Accordion.tsx)</h3>
            <p className="text-xs text-slate-500">
              Natural dynamic height animation (zero clipping), aria attributes, keyboard navigation.
            </p>
          </div>
          <Accordion items={faqItems} defaultOpenId="faq-1" />
        </div>

        {/* 1.5 Reveal & CountUp Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reveal */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
            <h3 className="font-bold text-lg text-ink">1.5 Reveal (Reveal.tsx)</h3>
            <p className="text-xs text-slate-500">
              IntersectionObserver fade-in &amp; slide-up with staggering delay.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <Reveal delay={100}>
                <div className="p-3 rounded-xl bg-royal/10 text-royal text-center text-xs font-bold">
                  Delay 100ms
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div className="p-3 rounded-xl bg-royal/10 text-royal text-center text-xs font-bold">
                  Delay 250ms
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="p-3 rounded-xl bg-royal/10 text-royal text-center text-xs font-bold">
                  Delay 400ms
                </div>
              </Reveal>
            </div>
          </div>

          {/* CountUp */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
            <h3 className="font-bold text-lg text-ink">1.6 CountUp (CountUp.tsx)</h3>
            <p className="text-xs text-slate-500">
              Scroll-triggered metric counters with cubic ease-out animation.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-extrabold text-royal dark:text-royal-light font-display">
                  <CountUp value={15} suffix="+" />
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-extrabold text-lime-600 dark:text-lime-400 font-display">
                  <CountUp value={500} suffix="+" />
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Clients Served</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-extrabold text-ink font-display">
                  <CountUp value={100} suffix="%" />
                </div>
                <div className="text-[10px] text-slate-500 mt-1">FBR Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.7 Icon Mapper */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4">
          <h3 className="font-bold text-lg text-ink">1.7 Icon Mapper (Icon.tsx)</h3>
          <p className="text-xs text-slate-500">
            Maps string names from static data files to individually imported Lucide icons.
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {iconsShowcase.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center gap-1.5"
              >
                <Icon name={name} className="w-5 h-5 text-royal dark:text-royal-light" />
                <span className="text-[10px] font-mono text-slate-500 truncate w-full">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Colour Swatches */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-royal" />
            <span>2. Colour Palette (PRD §8)</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            CSS custom properties mapped to Tailwind utility classes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((c) => (
            <div
              key={c.name}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 shadow-sm"
            >
              <div
                className={`h-24 rounded-xl ${c.bgClass} ${c.textClass} flex items-end p-3 shadow-inner`}
              >
                <span className="text-xs font-mono">{c.token}</span>
              </div>
              <div>
                <h3 className="font-bold text-base text-ink">{c.name}</h3>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  <span>Light: {c.hexLight}</span>
                  <span>Dark: {c.hexDark}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Typography (Inter & Plus Jakarta Sans) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-ink">3. Self-Hosted Typography</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Self-hosted .woff2 font files in <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">public/fonts/</code>.
          </p>
        </div>

        {/* Display Font: Plus Jakarta Sans */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="font-bold text-sm text-royal dark:text-royal-light uppercase tracking-wider">
              Display Font: Plus Jakarta Sans (.font-display, tracking -0.02em)
            </span>
            <span className="text-xs font-mono text-slate-400">Headings &amp; Hero</span>
          </div>

          <div className="space-y-6">
            {displayWeights.map((w) => (
              <div key={w.weight} className="space-y-1">
                <span className="text-xs font-mono text-slate-400">{w.label}</span>
                <p
                  style={{ fontWeight: w.weight }}
                  className="font-display text-2xl sm:text-3xl text-ink tracking-tight"
                >
                  {w.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Body Font: Inter */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="font-bold text-sm text-royal dark:text-royal-light uppercase tracking-wider">
              Body Font: Inter
            </span>
            <span className="text-xs font-mono text-slate-400">Prose, Tables &amp; Forms</span>
          </div>

          <div className="space-y-6">
            {interWeights.map((w) => (
              <div key={w.weight} className="space-y-1">
                <span className="text-xs font-mono text-slate-400">{w.label}</span>
                <p style={{ fontWeight: w.weight }} className="text-base sm:text-lg text-ink">
                  {w.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Prototype Comparison Notes */}
      <section className="p-6 sm:p-8 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-400" />
          <span>Design System Parity Audit vs bstc_final.html</span>
        </h3>
        <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc pl-5 leading-relaxed">
          <li>
            <strong>All 6 Tokens Match</strong>: <code className="font-mono">--royal (#1d4ed8)</code>, <code className="font-mono">--royal-dark (#1e3a8a)</code>, <code className="font-mono">--royal-light (#3b82f6)</code>, <code className="font-mono">--lime (#84cc16)</code>, <code className="font-mono">--lime-bright (#a3e635)</code>, <code className="font-mono">--ink (#0a0a0a)</code>.
          </li>
          <li>
            <strong>Typography</strong>: Self-hosted Inter (400, 500, 600, 700) and Plus Jakarta Sans (600, 700, 800) with identical font metrics and <code className="font-mono">-0.02em</code> display tracking.
          </li>
          <li>
            <strong>Class-Based Dark Mode</strong>: Driven by the <code className="font-mono">.dark</code> class on <code className="font-mono">&lt;html&gt;</code> with zero flash on initial load.
          </li>
          <li>
            <strong>Accordion Height Fix</strong>: Replaced prototype&apos;s clipped <code className="font-mono">max-h-40</code> with CSS grid row transition to guarantee full unclipped content rendering.
          </li>
          <li>
            <strong>Reduced Motion Guard</strong>: Automatically disables transforms and animations when <code className="font-mono">prefers-reduced-motion: reduce</code> is active.
          </li>
        </ul>
      </section>
    </div>
  );
}
