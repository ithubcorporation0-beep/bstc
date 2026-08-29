import React from "react";
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
              className="h-full flex flex-col justify-between p-6 hover:border-royal/40 dark:hover:border-royal-light/40 group overflow-hidden transition-all duration-300 hover:shadow-soft-lg"
            >
              <div>
                {/* Service Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light flex items-center justify-center mb-5 border border-royal/15 dark:border-royal/30 group-hover:bg-royal group-hover:text-white dark:group-hover:bg-royal-light dark:group-hover:text-slate-950 transition-all duration-300 shadow-soft">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-ink group-hover:text-royal dark:group-hover:text-royal-light transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-royal dark:text-royal-light group-hover:text-royal-dark dark:group-hover:text-white transition-colors">
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

