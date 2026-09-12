import React from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  ExternalLink,
  Building2,
  CalendarCheck,
} from "lucide-react";
import { siteSettings } from "@/data/settings";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ConsultationForm from "@/components/forms/ConsultationForm";

export function ContactSection() {
  const cleanPhone = siteSettings.phone.replace(/[^0-9+]/g, "");
  const cleanWa = siteSettings.wa.replace(/[^0-9]/g, "");

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      heading="Schedule Your Consultation"
      description="Connect directly with our registered tax practitioners in Mardan &amp; Swat. We provide prompt, confidential advisory for all your tax compliance, corporate legal, and IT solutions."
      className="py-20 lg:py-28 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-800/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
        {/* Left Column: Direct Contact Details & Business Hours (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <Reveal delay={0}>
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                Reach Our Advisory Desk
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you need urgent income tax filing, sales tax compliance, company incorporation, or cutting-edge IT solutions, our certified leadership team is ready to assist you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              {/* Office Locations (Mardan Main Office & Swat Branch) */}
              {(siteSettings.offices || []).map((office) => {
                const offCleanPhone = office.phone.replace(/[^0-9+]/g, "");
                const offCleanWa = office.wa ? office.wa.replace(/[^0-9]/g, "") : "";
                const hasOffMap = Boolean(office.mapsLink && office.mapsLink !== "#");

                return (
                  <div
                    key={office.city}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2.5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-royal dark:text-royal-light px-2 py-0.5 rounded-full bg-royal/10 dark:bg-royal/20">
                            {office.name}
                          </span>
                          {office.lead && (
                            <span className="text-[11px] font-bold text-lime-700 dark:text-lime-400 truncate">
                              {office.lead}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-ink leading-snug pt-1.5">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-3">
                        <a
                          href={`tel:${offCleanPhone}`}
                          className="font-bold text-ink hover:text-royal dark:hover:text-royal-light flex items-center gap-1 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-royal" />
                          <span>{office.phone}</span>
                        </a>
                        {offCleanWa && (
                          <a
                            href={`https://wa.me/${offCleanWa}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        )}
                      </div>

                      {hasOffMap && (
                        <a
                          href={office.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-royal dark:text-royal-light hover:underline inline-flex items-center gap-1"
                        >
                          <span>Directions</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Official Inquiries
                  </div>
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="font-display font-bold text-base text-ink hover:text-royal dark:hover:text-royal-light transition-colors"
                  >
                    {siteSettings.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Office Hours
                  </div>
                  <p className="text-sm font-semibold text-ink">
                    {siteSettings.hours}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Live Interactive Consultation Form (7 cols) */}
        <div className="lg:col-span-7">
          <Reveal delay={200} direction="left">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 sm:p-10 shadow-soft-lg space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-5">
                <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center text-white shadow-sm">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink">
                    Book Online Consultation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct advisory with certified Income Tax Practitioners (ITPs).
                  </p>
                </div>
              </div>

              {/* Live Interactive Form Component */}
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
