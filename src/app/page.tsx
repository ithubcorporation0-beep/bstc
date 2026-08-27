import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteSettings } from "@/data/settings";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import About from "@/components/home/About";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowWeWork from "@/components/home/HowWeWork";
import WhyChoose from "@/components/home/WhyChoose";
import TeamGrid from "@/components/home/TeamGrid";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = buildMetadata({
  title: siteSettings.seoTitle,
  description: siteSettings.seoDesc,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <ServicesGrid />
      <HowWeWork />
      <WhyChoose />
      <TeamGrid />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </>
  );
}
