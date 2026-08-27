import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Users, Zap } from "lucide-react";
import { homeContent } from "@/data/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export function About() {
  const { about } = homeContent;

  const valueCards = [
    {
      icon: ShieldCheck,
      title: "Certified Experts",
      desc: "Registered Income Tax Practitioners (ITPs) with over 20 years of regulatory experience.",
    },
    {
      icon: Award,
      title: "Trusted Services",
      desc: "Proven track record with 15,000+ satisfied individual, SME, and corporate clients.",
    },
    {
      icon: Users,
      title: "Professional Support",
      desc: "Dedicated consultants who guide you through every notice, audit, and filing step.",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      desc: "Expedited turnaround times for NTN issuance, SECP incorporation, and sales tax filings.",
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

          {/* Right Column: Next.js Optimized Image (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={200} direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border-2 border-slate-200 dark:border-slate-800 group bg-slate-950">
                <Image
                  src={about.img || "/images/about-consultant.jpg"}
                  alt="About Business Solutions Tax Consultants (BSTC) — Professional Tax Advisory Pakistan"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority={false}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Official BSTC Emblem Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3 sm:p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-soft-lg flex items-center gap-3 animate-in fade-in duration-300">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-700">
                    <Image
                      src="/images/bstc-logo-badge.svg"
                      alt="Official BSTC Logo Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-xs sm:text-sm text-ink leading-tight">
                      Hassan Zeb (ITP)
                    </div>
                    <div className="text-[11px] font-bold text-lime-700 dark:text-lime-400 mt-0.5">
                      Registered Tax Practitioner
                    </div>
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
