import React from "react";
import { homeContent } from "@/data/home";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FaqSection() {
  const { faqs } = homeContent;

  return (
    <Section
      id="faqs"
      badge="Got Questions?"
      title="Frequently Asked Questions"
      subtitle="Clear, upfront answers about Pakistani tax returns, company formation, and compliance."
      className="bg-slate-50/70 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <Accordion items={faqs} defaultOpenIndex={0} />
        </Reveal>
      </div>
    </Section>
  );
}
