import React from "react";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import About from "@/components/home/About";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowWeWork from "@/components/home/HowWeWork";
import WhyChoose from "@/components/home/WhyChoose";
import TeamGrid from "@/components/home/TeamGrid";

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
    </>
  );
}
