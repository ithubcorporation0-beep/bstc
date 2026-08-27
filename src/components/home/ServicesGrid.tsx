import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getActiveServices } from "@/data";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

export function ServicesGrid() {
  const services = getActiveServices();

  return (
    <Section
      id="services"
      eyebrow="Our Services"
      heading="Full-Spectrum Tax &amp; Corporate Solutions"
      description="Professional tax filing, business registrations, bookkeeping, and regulatory compliance tailored for individuals, startups, and growing enterprises across Pakistan."
      centered
      className="py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Reveal
            key={service.slug}
            delay={(index % 4) * 80}
            className="h-full"
          >
            <Card
              href={`/services/${service.slug}`}
              className="h-full flex flex-col justify-between p-4 sm:p-5 hover:border-royal/40 dark:hover:border-royal-light/40 group overflow-hidden"
            >
              <div>
                {/* Service Image Header with Floating Icon Badge */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4.5 bg-slate-100 dark:bg-slate-800 shadow-inner">
                  {service.banner && (
                    <Image
                      src={service.banner}
                      alt={`${service.title} — Business Solutions Tax Consultants`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  )}
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Glass Icon Badge */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-royal dark:text-royal-light flex items-center justify-center shadow-soft border border-white/40 dark:border-slate-700/50 group-hover:bg-royal group-hover:text-white transition-all duration-300">
                    <Icon name={service.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-ink group-hover:text-royal dark:group-hover:text-royal-light transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-royal dark:text-royal-light group-hover:text-royal-dark dark:group-hover:text-white transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default ServicesGrid;

