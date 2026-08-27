import React from "react";
import { Star, Quote } from "lucide-react";
import { homeContent } from "@/data/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export function Testimonials() {
  const { testimonials } = homeContent;

  // PRD Open Item Rule: If testimonials array is empty, render nothing at all
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <Section
      id="testimonials"
      eyebrow="Client Success"
      heading="Trusted by Businesses Across Pakistan"
      description="Read how our certified tax practitioners and corporate advisors help entrepreneurs, startups, and established enterprises maintain total financial compliance."
      centered
      className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/60"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 150} className="h-full">
            <Card className="h-full flex flex-col justify-between p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft">
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text with Quote Mark */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-royal/10 dark:text-royal-light/10 absolute -top-3 -left-2 -z-0" />
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic relative z-10">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div className="font-display font-bold text-base text-ink">
                  {item.name}
                </div>
                <div className="text-xs font-semibold text-royal dark:text-royal-light mt-0.5">
                  {item.comp}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
