import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { homeContent } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  const { about, aboutCards } = homeContent;

  return (
    <Section id="about" align="left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Story & Founder */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {about.badge}
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {about.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
              {about.intro}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {about.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-blue-600 shadow-md relative">
                  <Image
                    src={about.image}
                    alt={about.founderName}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {about.founderName}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {about.founderTitle}
                  </p>
                </div>
              </div>

              <div className="sm:border-l sm:border-slate-200 sm:dark:border-slate-800 sm:pl-6">
                <Button href="/team/hassan-zeb" variant="outline" size="sm">
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: 4 Credential Feature Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {aboutCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 100}>
              <Card className="p-5 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-lime-50 dark:bg-lime-950/60 text-lime-600 dark:text-lime-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
