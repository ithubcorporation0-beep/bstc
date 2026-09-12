import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Code2, Zap } from "lucide-react";
import { homeContent } from "@/data/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export function About() {
  const { about } = homeContent;

  const valueCards = [
    {
      icon: ShieldCheck,
      title: "Certified Tax Experts",
      desc: "Registered Income Tax Practitioners (ITPs) with over 20 years of regulatory compliance experience.",
    },
    {
      icon: Code2,
      title: "IT & Digital Solutions",
      desc: "Custom business software, responsive modern websites, branding, and performance digital marketing.",
    },
    {
      icon: Award,
      title: "Trusted Track Record",
      desc: "Proven reliability with 15,000+ satisfied individual, SME, and corporate clients across Pakistan.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      desc: "Expedited turnaround for tax filings, SECP registrations, and enterprise digital deployments.",
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="About BSTC"
      heading={about.title}
      className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/60"
    >
      <div className="space-y-16">
        {/* Top Split: Text Narrative & Showcase Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0}>
              <p className="text-lg sm:text-xl font-bold text-ink leading-relaxed border-l-4 border-royal pl-4">
                {about.intro}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {about.desc.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Official BSTC Logo Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={200} direction="left" className="w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-2 border-slate-200 dark:border-slate-800 group bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
                {/* Ambient Radial Glows */}
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-royal/25 dark:bg-royal/35 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-lime/20 dark:bg-lime/15 blur-3xl pointer-events-none" />

                {/* Subtle grid pattern background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-950/80 pointer-events-none" />

                {/* Large Authentic BSTC Logo Emblem */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 my-2 group-hover:scale-105 transition-transform duration-500 shrink-0">
                  <Image
                    src="/images/bstc-logo-badge.svg"
                    alt="Official Business Solutions Tax Consultants (BSTC) Logo Emblem"
                    fill
                    className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>

                {/* Firm Details Under Emblem */}
                <div className="relative z-10 mt-5 space-y-2">
                  <div className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                    Business Solutions
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-lime-400 tracking-widest uppercase">
                    Tax Consultants &amp; IT Services
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                      <span>Registered ITP &amp; Corporate Advisory • Est. 2004</span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Grid: 4 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {valueCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <Reveal key={card.title} delay={index * 120} className="h-full">
                <Card className="h-full p-6 space-y-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light flex items-center justify-center shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-ink">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default About;
