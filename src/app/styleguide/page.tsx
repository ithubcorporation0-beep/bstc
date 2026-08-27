"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Sparkles, MoveUpRight, CheckCircle2 } from "lucide-react";

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
              Design System &amp; Tokens
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink mt-2">
            BSTC Styleguide &amp; Visual Audit
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Visual verification of color tokens, self-hosted typography, and PRD §8 effect classes.
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

      {/* 1. Colour Swatches */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-royal" />
            <span>1. Colour Palette (PRD §8)</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            CSS custom properties mapped to Tailwind utility classes (e.g. <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-royal">bg-royal</code>, <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-lime">text-lime</code>).
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

      {/* 2. Typography (Inter & Plus Jakarta Sans) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-ink">2. Self-Hosted Typography</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Self-hosted .woff2 font files in <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">public/fonts/</code> using <code className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">next/font/local</code>.
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

      {/* 3. Effects & Utility Classes */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-ink">3. PRD §8 Reusable Effects</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Classes for glassmorphic containers, gradients, hover lift elevations, and soft shadows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Glass */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900/40 relative overflow-hidden border border-slate-300 dark:border-slate-800">
            <div className="glass p-6 rounded-xl space-y-3">
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-royal text-white">
                .glass
              </span>
              <h3 className="text-lg font-bold text-ink">Glassmorphic Container</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Backdrop filter blur 16px over translucent white (light) and near-black (dark) with a subtle border.
              </p>
            </div>
          </div>

          {/* Gradient Royal */}
          <div className="gradient-royal p-8 rounded-2xl text-white space-y-3 shadow-md">
            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-white/20 text-white">
              .gradient-royal
            </span>
            <h3 className="text-lg font-bold">135° Royal Gradient</h3>
            <p className="text-xs text-blue-100 leading-relaxed">
              Linear gradient from royal-dark (#1e3a8a) to royal (#1d4ed8) at 55% to royal-light (#3b82f6).
            </p>
          </div>

          {/* Gradient Text */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
            <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-royal">
              .gradient-text
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">
              120° Royal to Lime Bright Gradient Text
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Text clipped gradient running from royal-light into vibrant lime-bright.
            </p>
          </div>

          {/* Lift Effect */}
          <div className="lift p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft hover:shadow-soft-lg space-y-3 cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-lime text-slate-950">
                .lift
              </span>
              <MoveUpRight className="w-4 h-4 text-royal" />
            </div>
            <h3 className="text-lg font-bold text-ink">Hover Me for Lift Elevation</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Smooth translateY(-8px) with cubic-bezier easing and responsive soft shadow.
            </p>
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
            <strong>Effects Parity</strong>: Reusable utility classes for <code className="font-mono">.glass</code>, <code className="font-mono">.gradient-royal</code>, <code className="font-mono">.gradient-text</code>, and <code className="font-mono">.lift</code> replicate prototype styling.
          </li>
          <li>
            <strong>Reduced Motion Guard</strong>: Disables transforms and animations when <code className="font-mono">prefers-reduced-motion: reduce</code> is active.
          </li>
        </ul>
      </section>
    </div>
  );
}
