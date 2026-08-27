import React from "react";
import { homeContent } from "@/data/home";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function StatsSection() {
  const { stats } = homeContent;

  return (
    <section className="py-12 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-lime-900/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} className="pt-6 md:pt-0">
              <div className="space-y-1.5">
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-0.5">
                  <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
