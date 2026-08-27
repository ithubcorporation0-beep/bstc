import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Lock, Mail, Eye, Clock, Database } from "lucide-react";
import Breadcrumb from "@/components/services/Breadcrumb";
import Card from "@/components/ui/Card";
import { siteSettings } from "@/data/settings";

export const metadata: Metadata = {
  title: "Privacy Policy | Business Solutions Tax Consultants (BSTC)",
  description:
    "Privacy Policy for BSTC. Learn how we handle, protect, and process personal consultation data and financial information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* TODO: client's lawyer must review before launch */}

      {/* Royal Gradient Banner */}
      <section className="gradient-royal text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            How Business Solutions Tax Consultants (&ldquo;BSTC&rdquo;) collects, protects, and handles your information.
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {/* Lawyer Review Notice */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-3">
          <Lock className="w-4 h-4 shrink-0" />
          <span>
            <strong>Legal Notice:</strong> This privacy document is drafted for professional compliance. Subject to formal review by legal counsel prior to commercial ad campaigns.
          </span>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              1. Information We Collect
            </h2>
            <p>
              When you submit a consultation request through our website contact form or contact us via WhatsApp or phone, we collect the following details:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li><strong>Full Name:</strong> To identify you and address your consultancy request.</li>
              <li><strong>Phone / WhatsApp Number:</strong> Primary channel used by our consultants to schedule and deliver advice.</li>
              <li><strong>Email Address (Optional):</strong> For formal written quotes, document checklists, and acknowledgments.</li>
              <li><strong>Inquiry Message (Optional):</strong> High-level summary of your required tax or corporate registration service.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              2. How We Use Your Information
            </h2>
            <p>
              Your contact details are processed strictly to fulfill your requested consultancy. Specifically, your inquiry is securely dispatched via encrypted email to our certified tax practitioners at BSTC. We use your details solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Evaluate your tax filing, NTN, or SECP corporate registration requirements.</li>
              <li>Contact you via phone or WhatsApp to provide initial guidance and pricing quotes.</li>
              <li>Deliver ongoing client advisory during the course of your active engagement.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              3. Zero Data Sharing &amp; Non-Disclosure
            </h2>
            <p>
              <strong>We do not sell, rent, lease, or monetize your personal data to third parties.</strong> Your information is never provided to marketing lists, data brokers, or external advertising networks. It is accessed strictly by authorized BSTC practitioners.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              4. Data Retention &amp; Storage
            </h2>
            <p>
              We retain consultation inquiries for the duration necessary to deliver advisory services and maintain compliance records as mandated under Pakistani tax and accounting regulations. Inactive inquiry records that do not result in formal engagement are regularly purged.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              5. How to Request Data Deletion or Correction
            </h2>
            <p>
              You have the right to request a copy of the personal information we hold about you or request its prompt deletion from our active records. To make a deletion request, please email our compliance desk:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-royal dark:text-royal-light">
              Email: {siteSettings.email} (Subject: &ldquo;Data Deletion Request&rdquo;)
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              6. Cookies &amp; Website Analytics
            </h2>
            <p>
              Our website uses basic local storage purely to remember your light/dark theme preference across sessions. If website analytics (such as Google Analytics 4) are enabled, anonymized telemetry (such as page views and browser type) is collected to improve website performance without tracking personal identities across third-party websites.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
