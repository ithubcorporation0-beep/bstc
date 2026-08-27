import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { homeContent } from "@/data/home";
import { siteSettings } from "@/data/settings";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const { hero } = homeContent;
  const whatsappUrl = formatWhatsAppHref(
    siteSettings.whatsapp,
    "Hello BSTC, I would like to book a consultation regarding tax and corporate registration services."
  );

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="hero-ambient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <Reveal delay={100}>
            <div className="inline-flex items-center gap-2">
              <Badge variant="lime" className="px-4 py-1.5 text-xs sm:text-sm font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-lime-500 animate-ping mr-1" />
                {hero.badge}
              </Badge>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Professional Tax &amp; Corporate <br className="hidden sm:inline" />
              <span className="grad-text">Consultancy in Pakistan</span>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={300}>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              {hero.subtitle}
            </p>
          </Reveal>

          {/* Call to Actions */}
          <Reveal delay={400}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto shadow-xl shadow-blue-600/30">
                <span>{hero.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                variant="lime"
                size="lg"
                className="w-full sm:w-auto shadow-xl shadow-lime-500/25"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Instant WhatsApp</span>
              </Button>
              <Button
                href={formatPhoneHref(siteSettings.phone)}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{siteSettings.phone}</span>
              </Button>
            </div>
          </Reveal>

          {/* Trust Indicators */}
          <Reveal delay={500}>
            <div className="pt-10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Registered Income Tax Practitioner (ITP)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-lime-600 dark:text-lime-400" />
                <span>FBR, SECP, PRA, KPRA, SRB &amp; BRA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>100% Confidential &amp; Compliant</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
