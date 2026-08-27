import React from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { formatMailtoHref, formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  const whatsappUrl = formatWhatsAppHref(
    siteSettings.whatsapp,
    "Hello BSTC, I am requesting a tax and corporate consultation."
  );

  return (
    <Section
      id="contact"
      badge="Get In Touch"
      title="Book a Confidential Consultation"
      subtitle="Fill out the form below or reach out directly to speak with our registered consultants."
      align="left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Form */}
        <div className="lg:col-span-7">
          <Reveal>
            <Card className="p-6 sm:p-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Consultation Request Form
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Please provide your contact particulars and requirement summary.
                </p>
              </div>
              <ConsultationForm />
            </Card>
          </Reveal>
        </div>

        {/* Right Column: Direct Office Cards */}
        <div className="lg:col-span-5 space-y-6">
          <Reveal delay={100}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Direct Practitioner Support</span>
              </div>
              <h3 className="text-xl font-bold">
                {siteSettings.companyName}
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed">
                Registered Income Tax Practitioners (ITP) dedicated to corporate structuring, tax dispute resolution, and compliance in Pakistan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Card className="p-6 bg-white dark:bg-slate-900 space-y-5">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Contact &amp; Location Particulars
              </h4>

              <div className="space-y-4 text-xs">
                {/* Physical Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Office Address</span>
                    <span className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {siteSettings.address}
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Telephone / Mobile</span>
                    <a
                      href={formatPhoneHref(siteSettings.phone)}
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      {siteSettings.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">WhatsApp Business</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      {siteSettings.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Official Email</span>
                    <a
                      href={formatMailtoHref(siteSettings.email)}
                      className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      {siteSettings.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900 dark:text-white">Working Hours</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {siteSettings.hours}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
