import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesSection() {
  return (
    <Section
      id="services"
      badge="Comprehensive Solutions"
      title="Our Corporate &amp; Taxation Services"
      subtitle="From individual NTN issuance and corporate company incorporation to multi-provincial sales tax filings and legal audit representation."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((svc, index) => (
          <Reveal key={svc.slug} delay={index * 50}>
            <Card className="h-full p-6 sm:p-7 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon name={svc.icon} className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {svc.shortDesc}
                  </p>
                </div>

                {/* Key Benefits snippet */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800/80">
                  {svc.benefits.slice(0, 2).map((benefit, bIndex) => (
                    <div key={bIndex} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  <span>Explore Service &amp; Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
