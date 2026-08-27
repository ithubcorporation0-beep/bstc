import React from "react";
import { homeContent } from "@/data/home";
import Section from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

export function FaqSection() {
  const { faqs } = homeContent;

  const accordionItems = faqs.map((faq, index) => ({
    id: `faq-${index}`,
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <Section
      id="faq"
      eyebrow="Common Questions"
      heading="Frequently Asked Questions"
      description="Clear, straightforward answers about income tax filing, sales tax registration, SECP corporate procedures, and compliance deadlines in Pakistan."
      centered
      className="py-20 lg:py-28"
    >
      <div className="max-w-3xl mx-auto">
        <Reveal delay={100}>
          <Accordion items={accordionItems} defaultOpenId="faq-0" />
        </Reveal>
      </div>
    </Section>
  );
}

export default FaqSection;
