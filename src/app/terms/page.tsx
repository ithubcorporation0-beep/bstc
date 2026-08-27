import React from "react";
import { Metadata } from "next";
import { Scale, ShieldCheck, FileCheck, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/services/Breadcrumb";
import { siteSettings } from "@/data/settings";

export const metadata: Metadata = {
  title: "Terms of Service | Business Solutions Tax Consultants (BSTC)",
  description:
    "Terms of Service governing the use of BSTC consultancy services, website inquiries, and regulatory filing engagements.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* TODO: client's lawyer must review before launch */}

      {/* Royal Gradient Banner */}
      <section className="gradient-royal text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
            Professional engagement conditions and service terms for Business Solutions Tax Consultants (&ldquo;BSTC&rdquo;).
          </p>
        </div>
      </section>

      {/* Main Terms Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {/* Lawyer Review Notice */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-3">
          <Scale className="w-4 h-4 shrink-0" />
          <span>
            <strong>Legal Notice:</strong> Standard professional advisory terms. Subject to formal review by legal counsel prior to commercial advertising.
          </span>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              1. Engagement &amp; Advisory Scope
            </h2>
            <p>
              Business Solutions Tax Consultants (&ldquo;BSTC&rdquo;) provides professional taxation, corporate registration, SECP incorporation, provincial sales tax advisory, and bookkeeping services in Pakistan. Submitting a website form does not automatically establish an attorney-client or practitioner-client relationship until a formal service quote is agreed upon.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              2. Accuracy of Client Information &amp; Records
            </h2>
            <p>
              Clients are strictly responsible for providing authentic, complete, and accurate financial books, bank statements, sales registers, and identity documentation. BSTC prepares filings based entirely on records and declarations supplied by the client.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              3. Regulatory Compliance &amp; Official Filings
            </h2>
            <p>
              All income tax returns, sales tax statements, and SECP corporate submissions are executed in strict accordance with the Income Tax Ordinance 2001, Sales Tax Act 1990, Companies Act 2017, and relevant provincial authority laws (PRA, SRB, KPRA, BRA).
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              4. Confidentiality &amp; Ethical Standards
            </h2>
            <p>
              BSTC maintains strict professional confidentiality regarding all client financial ledgers, wealth statements, bank transactions, and corporate business plans.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms of engagement and any advisory contracts shall be governed by and construed in accordance with the substantive laws of the Islamic Republic of Pakistan.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink">
              6. Inquiries &amp; Contact
            </h2>
            <p>
              For legal questions regarding these terms, please contact our administrative desk:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-royal dark:text-royal-light">
              Email: {siteSettings.email} | Phone: {siteSettings.phone}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
