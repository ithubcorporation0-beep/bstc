import React from "react";
import { homeContent } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  const { processSteps } = homeContent;

  return (
    <Section
      id="process"
      badge="Simple &amp; Systematic"
      title="How We Work With You"
      subtitle="A seamless four-step journey from initial consultation to final government certificate delivery."
      className="bg-slate-50/70 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {processSteps.map((step, index) => (
          <Reveal key={step.stepNumber} delay={index * 100}>
            <Card className="p-6 h-full bg-white dark:bg-slate-900 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-blue-600/30 dark:text-blue-400/20 tracking-tight">
                    {step.stepNumber}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Phase {step.stepNumber}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
