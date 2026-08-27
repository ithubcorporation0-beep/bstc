import React from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { siteSettings } from "@/data/settings";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export function ContactSection() {
  const cleanPhone = siteSettings.phone.replace(/[^0-9+]/g, "");
  const cleanWa = siteSettings.wa.replace(/[^0-9]/g, "");
  const hasValidMapLink = Boolean(
    siteSettings.mapsLink &&
      siteSettings.mapsLink.trim() !== "" &&
      siteSettings.mapsLink !== "#"
  );

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      heading="Schedule Your Tax Consultation"
      description="Connect directly with our registered tax practitioners in Islamabad &amp; Swat. We provide prompt, confidential advisory for all your filing and incorporation needs."
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
                Whether you need urgent income tax filing, sales tax registration, or company incorporation advisory, our certified team is ready to assist you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Phone &amp; Landline
                  </div>
                  <a
                    href={`tel:${cleanPhone}`}
                    className="font-display font-bold text-base text-ink hover:text-royal dark:hover:text-royal-light transition-colors"
                  >
                    {siteSettings.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    WhatsApp Instant Support
                  </div>
                  <a
                    href={`https://wa.me/${cleanWa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold text-base text-ink hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>+{cleanWa}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
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

              {/* Physical Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Office Location
                  </div>
                  <p className="text-sm font-semibold text-ink leading-snug">
                    {siteSettings.address}
                  </p>
                  {/* Google Maps link: only rendered if non-empty URL per PRD §9 O13 */}
                  {hasValidMapLink && (
                    <a
                      href={siteSettings.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-royal dark:text-royal-light hover:underline pt-1"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
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

        {/* Right Column: Form Container (7 cols) */}
        <div className="lg:col-span-7">
          <Reveal delay={200} direction="left">
            {/* ConsultationForm goes here — Prompt 18 */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-soft-lg space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl gradient-royal flex items-center justify-center text-white">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink">
                    Book Online Consultation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your details for a fast response within 2 business hours.
                  </p>
                </div>
              </div>

              {/* Form Placeholder Container */}
              <div className="py-12 px-6 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-royal/10 text-royal dark:bg-royal/20 dark:text-royal-light flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-sm font-bold text-ink">
                  Consultation Inquiry Form
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Interactive multi-service consultation submission form will be integrated in Prompt 18.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
