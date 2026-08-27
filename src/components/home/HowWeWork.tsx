import React from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Initial discussion to assess your tax status, business structure, and compliance objectives.",
    },
    {
      num: "02",
      title: "Documentation",
      desc: "Fast digital collection and verification of required CNICs, invoices, and certificates.",
    },
    {
      num: "03",
      title: "Processing",
      desc: "Accurate drafting and e-filing through FBR Iris, SECP eServices, or provincial portals.",
    },
    {
      num: "04",
      title: "Delivery",
      desc: "Delivery of official registration certificates, ATL activation, and filing acknowledgment receipts.",
    },
  ];

  return (
    <Section
      id="process"
      eyebrow="Our Process"
      heading="How We Work"
      description="A streamlined, transparent 4-step workflow designed to save you time and ensure complete regulatory accuracy."
      centered
      className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/60"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Horizontal Connecting Line */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-royal/30 via-royal to-lime/40 z-0"
        />

        {/* Responsive Steps Grid / Stack */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 relative z-10">
          {steps.map((step, index) => (
            <Reveal
              key={step.num}
              delay={index * 150}
              className="flex flex-col items-center text-center relative"
            >
              {/* Step Circle with Gradient Number */}
              <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-900 border-2 border-royal/20 dark:border-royal-light/20 shadow-soft flex items-center justify-center mb-5 group hover:border-royal transition-all duration-300">
                <span className="font-display font-extrabold text-2xl gradient-text">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HowWeWork;
