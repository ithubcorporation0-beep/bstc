import type { Metadata } from "next";
import { siteSettings } from "@/data/settings";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Engagement & Advisory Services",
  description: "Terms of engagement, client obligations, and service conditions for Business Solutions Tax Consultants (BSTC).",
  canonicalPath: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={[{ name: "Terms of Engagement", url: "/terms" }]} />
        </div>

        <Card className="p-8 sm:p-12 bg-white dark:bg-slate-900 space-y-8">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>Professional Engagement Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Terms of Engagement
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Effective: January 2026 · {siteSettings.companyName}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                1. Scope of Professional Advisory
              </h2>
              <p>
                {siteSettings.companyName} (&ldquo;{siteSettings.siteName}&rdquo;) provides taxation, SECP incorporation, provincial sales tax, and corporate bookkeeping services. Our role is that of professional tax advisors and authorized consultants acting upon client-provided factual records.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                2. Client Responsibility for Accuracy of Records
              </h2>
              <p>
                The accuracy and completeness of all income tax declarations, wealth reconciliations, and sales tax invoices depend directly upon the bank statements, invoices, and expense vouchers supplied by the client. The client warrants that all provided figures represent bona fide commercial and financial records.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                3. Government Statutory Fees &amp; Challans
              </h2>
              <p>
                Professional consultancy fees quoted by BSTC cover our advisory, preparation, and electronic filing services. Official government statutory challans (e.g., SECP incorporation fees, FBR penalty CPRs, IPO trademark filing fees, Chamber membership challans) are the direct responsibility of the client and are payable to official government treasury accounts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                4. Confidentiality &amp; Authorization
              </h2>
              <p>
                By engaging BSTC, the client authorizes our registered consultants (ITP) to represent them before the Federal Board of Revenue (FBR), SECP, and provincial revenue authorities in accordance with executed Letters of Authorization (Wakalatnama / Power of Attorney).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                5. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed under the laws of the Islamic Republic of Pakistan. Any disputes arising hereunder shall be subject to the jurisdiction of competent courts in Islamabad / Khyber Pakhtunkhwa.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
