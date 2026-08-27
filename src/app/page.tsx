import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
