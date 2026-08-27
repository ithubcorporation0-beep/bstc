import React from "react";
import { homeContent } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUsSection() {
  const { whyUs } = homeContent;

  return (
    <Section
      id="why-us"
      badge="The BSTC Difference"
      title="Why Leading Businesses Trust BSTC"
      subtitle="We blend direct regulatory expertise, transparent fixed fee structures, and rapid digital execution."
      className="bg-slate-50/70 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {whyUs.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <Card className="p-8 h-full bg-white dark:bg-slate-900 flex flex-col justify-start">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-600/25">
                <Icon name={item.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
