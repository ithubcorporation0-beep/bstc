import type { Metadata } from "next";
import { siteSettings } from "@/data/settings";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy & Client Data Protection",
  description: "Privacy policy and statutory data protection protocols for clients of Business Solutions Tax Consultants (BSTC).",
  canonicalPath: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumb items={[{ name: "Privacy Policy", url: "/privacy" }]} />
        </div>

        <Card className="p-8 sm:p-12 bg-white dark:bg-slate-900 space-y-8">
          <div className="space-y-3 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-lime-600 dark:text-lime-400 uppercase tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Statutory Client Confidentiality</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Last updated: January 2026 · {siteSettings.companyName}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                1. Commitment to Client Confidentiality
              </h2>
              <p>
                At {siteSettings.companyName} (&ldquo;{siteSettings.siteName}&rdquo;), we recognize that taxation, corporate records, financial statements, and CNIC particulars are sensitive and private. We treat all client disclosures with strict professional secrecy under the Income Tax Ordinance 2001 and professional codes of conduct.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                2. Information We Collect
              </h2>
              <p>
                To perform authorized tax return preparation, corporate incorporation, and statutory representation, we collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Personal identity records (CNIC, NICOP, Passport copies, phone, email).</li>
                <li>Business incorporation documents, partnership deeds, and tenancy agreements.</li>
                <li>Financial statements, bank maintenance certificates, withholding certificates, and expense logs.</li>
                <li>FBR IRIS, SECP eServices, and provincial revenue portal credentials provided for filing purposes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                3. Purpose of Processing
              </h2>
              <p>
                Your documentation is utilized solely for:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Preparing and lodging tax returns with FBR, PRA, KPRA, SRB, or BRA.</li>
                <li>Incorporating and maintaining corporate compliance with SECP.</li>
                <li>Communicating procedural updates, payment challans, and official acknowledgments.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                4. Zero Third-Party Commercial Sharing
              </h2>
              <p>
                We do not sell, rent, or lease client data to third parties, commercial advertisers, or lead brokers. Information is transmitted only to official government revenue portals (FBR, SECP, Provincial Authorities) as instructed by you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                5. Contacting Our Data Officer
              </h2>
              <p>
                For questions regarding your retained files or to request data archiving, contact us at{" "}
                <a href={`mailto:${siteSettings.email}`} className="text-blue-600 dark:text-blue-400 font-semibold underline">
                  {siteSettings.email}
                </a>{" "}
                or call {siteSettings.phone}.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
