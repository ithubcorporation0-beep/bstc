import React from "react";
import { homeContent } from "@/data/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export function WhyChoose() {
  const { why } = homeContent;
  // Focus on the 3 primary pillars as requested
  const displayItems = why.slice(0, 3);

  return (
    <Section
      id="why"
      eyebrow="Why Choose BSTC"
      heading="Delivering Certainty in Every Filing"
      description="We combine deep technical mastery of Pakistani tax legislation with responsive client care to keep your entity fully compliant."
      centered
      className="py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 150} className="h-full">
            <Card className="h-full p-8 space-y-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group hover:border-royal/40 dark:hover:border-royal-light/40">
              <div className="w-14 h-14 rounded-2xl bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light flex items-center justify-center group-hover:scale-110 group-hover:bg-royal group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon name={item.icon} className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default WhyChoose;
