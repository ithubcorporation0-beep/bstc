import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Phone, Mail, MessageCircle, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { teamMembers } from "@/data/team";
import { constructMetadata } from "@/lib/seo";
import { generatePersonSchema, generateBreadcrumbSchema } from "@/lib/jsonld";
import { formatMailtoHref, formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

interface TeamPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return constructMetadata({
      title: "Team Member Not Found",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${member.name} — ${member.designation}`,
    description: member.shortDesc,
    canonicalPath: `/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({ params }: TeamPageProps) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  const personSchema = generatePersonSchema(member);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Team", url: "/#about" },
    { name: member.name, url: `/team/${member.slug}` },
  ]);

  const whatsappUrl = formatWhatsAppHref(
    member.whatsapp,
    `Hello ${member.name}, I am reaching out through the BSTC website to discuss a tax/corporate case.`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { name: "Team", url: "/#about" },
                { name: member.name, url: `/team/${member.slug}` },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Consultant Profile Sidebar (4 cols) */}
            <div className="md:col-span-4 space-y-6">
              <Card className="p-6 text-center bg-white dark:bg-slate-900 shadow-lg">
                <div className="w-36 h-36 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 mx-auto mb-4 border-2 border-blue-600/40 shadow-inner relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {member.name}
                </h1>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {member.designation}
                </p>
                <div className="inline-block mt-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                  {member.department}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs text-left">
                  {member.phone && (
                    <a
                      href={formatPhoneHref(member.phone)}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="truncate">{member.phone}</span>
                    </a>
                  )}

                  {member.whatsapp && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>WhatsApp Direct</span>
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={formatMailtoHref(member.email)}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  )}
                </div>
              </Card>
            </div>

            {/* Biography & Case Intake (8 cols) */}
            <div className="md:col-span-8 space-y-8">
              <Card className="p-8 bg-white dark:bg-slate-900 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-600 dark:text-lime-400">
                  <Award className="w-4 h-4" />
                  <span>Professional Background &amp; Practice</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  About {member.name}
                </h2>

                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {member.shortDesc}
                </p>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                  <p>{member.bio}</p>
                </div>
              </Card>

              {/* Consultation booking with this consultant */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Request Case Review with {member.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Direct submission to {member.name}&apos;s desk for professional evaluation.
                </p>
                <ConsultationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
