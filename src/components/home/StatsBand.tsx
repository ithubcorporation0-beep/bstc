import React from "react";
import { homeContent } from "@/data/home";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

export function StatsBand() {
  const { stats } = homeContent;

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-soft-lg p-6 sm:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800/80">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 120}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "pt-6 sm:pt-0" : ""
              }`}
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-royal dark:text-royal-light tracking-tight">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={1800}
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBand;
