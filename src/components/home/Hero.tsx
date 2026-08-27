import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { homeContent } from "@/data/home";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export function Hero() {
  const { hero } = homeContent;
  const hasBgImage = Boolean(hero.bg && hero.bg.trim() !== "");

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
      {/* Background Layer: Image Overlay or Ambient Radial Gradient */}
      {hasBgImage ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            style={{ backgroundImage: `url(${hero.bg})` }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Ambient Glows */}
          <div className="absolute -top-[20%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-royal/15 dark:bg-royal/20 blur-[120px]" />
          <div className="absolute top-[30%] -right-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-lime/15 dark:bg-lime/10 blur-[120px]" />
          <div className="absolute -bottom-[20%] left-[20%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-royal-light/10 dark:bg-royal-light/15 blur-[120px]" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white dark:to-[#0a0a0a]" />
        </div>
      )}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Eyebrow Trust Badge */}
        <Reveal delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-royal/20 dark:border-royal/30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-lime-600 dark:text-lime-400" />
            <span
              className={`text-xs font-bold tracking-wide uppercase ${
                hasBgImage
                  ? "text-white"
                  : "text-royal dark:text-royal-light"
              }`}
            >
              Registered Income Tax Practitioner (ITP) Led
            </span>
          </div>
        </Reveal>

        {/* Single H1 Headline */}
        <Reveal delay={120}>
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] ${
              hasBgImage ? "text-white" : "text-ink"
            }`}
          >
            Professional Tax &amp;{" "}
            <span className="gradient-text">Business Consultancy</span> in Pakistan
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={240}>
          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed ${
              hasBgImage
                ? "text-slate-200"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            {hero.subtitle}
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={360}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href={hero.ctaLink || "#contact"}
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-lg shadow-royal/25 hover:shadow-royal/40"
            >
              {hero.cta}
            </Button>

            <Button
              href={hero.secondaryCtaLink || "#services"}
              variant={hasBgImage ? "ghost" : "secondary"}
              size="lg"
              className={`w-full sm:w-auto ${
                hasBgImage
                  ? "text-white border border-white/30 hover:bg-white/10"
                  : ""
              }`}
            >
              {hero.secondaryCta || "Our Services"}
            </Button>
          </div>
        </Reveal>

        {/* Quick Highlights / Trust Badges */}
        <Reveal delay={480}>
          <div
            className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 text-xs sm:text-sm font-semibold ${
              hasBgImage
                ? "text-slate-300"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span>100% FBR &amp; SECP Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span>Federal &amp; Provincial Authorities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
              <span>Fast Digital Filing</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
