import React from "react";
import { MessageCircle, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  const whatsappUrl = formatWhatsAppHref(
    siteSettings.whatsapp,
    "Hello BSTC, I would like to schedule a tax and business registration consultation."
  );

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 p-8 sm:p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background glowing shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-lime-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Confidential Consultation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Organize Your Taxes &amp; Register Your Business?
              </h2>

              <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
                Avoid FBR non-compliance penalties, secure lower withholding tax rates, and establish your corporate identity with registered practitioners.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Button href="#contact" variant="lime" size="lg" className="w-full sm:w-auto shadow-lg shadow-lime-500/20">
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Directly</span>
                </Button>
                <a
                  href={formatPhoneHref(siteSettings.phone)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-semibold"
                >
                  <Phone className="w-4 h-4 text-blue-300" />
                  <span>{siteSettings.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
