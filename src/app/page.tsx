import React from "react";
import Hero from "@/components/home/Hero";
import StatsBand from "@/components/home/StatsBand";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesGrid />
    </>
  );
}
