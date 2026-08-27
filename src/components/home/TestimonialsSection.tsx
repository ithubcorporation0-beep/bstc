import React from "react";
import { Star, Quote } from "lucide-react";
import { homeContent } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsSection() {
  const { testimonials } = homeContent;

  return (
    <Section
      badge="Client Stories"
      title="What Our Clients Say"
      subtitle="Trusted by business owners, startups, and corporate executives across Pakistan."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 150}>
            <Card className="p-8 h-full bg-white dark:bg-slate-900 relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600/15 dark:text-blue-400/10" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm flex items-center justify-center shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.company}
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
