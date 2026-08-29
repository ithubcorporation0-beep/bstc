import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  Award,
} from "lucide-react";
import { team, getTeamMemberBySlug } from "@/data";
import { buildMetadata } from "@/lib/seo";
import {
  getPersonJsonLd,
  getBreadcrumbJsonLd,
  JsonLdScript,
} from "@/lib/jsonld";
import Breadcrumb from "@/components/services/Breadcrumb";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.64 1.64 0 0 0-1.66 1.64c0 .9.74 1.63 1.66 1.63a1.64 1.64 0 0 0 1.64-1.63c0-.9-.74-1.64-1.64-1.64Z" />
    </svg>
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-render all consultant profiles statically at build time.
 */
export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

/**
 * Generate per-consultant SEO metadata using buildMetadata helper.
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member || member.status !== "active") {
    return buildMetadata({
      title: "Consultant Profile Not Found",
      description: "The requested tax consultant profile could not be found.",
      path: `/team/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${member.name} — ${member.desig}`,
    description: member.shortDesc || member.bio.slice(0, 160),
    path: `/team/${member.slug}`,
    image: member.img || `/images/team/${member.slug}.svg`,
  });
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  // Return real HTTP 404 for unknown or inactive member slugs
  if (!member || member.status !== "active") {
    notFound();
  }

  // Active contact checks (omit if empty or "#")
  const hasPhone = Boolean(member.phone && member.phone.trim() !== "" && !member.phone.includes("0000000"));
  const hasEmail = Boolean(member.email && member.email.trim() !== "");
  const hasWa = Boolean(member.wa && member.wa.trim() !== "" && !member.wa.includes("0000000"));
  const hasLi = Boolean(member.li && member.li.trim() !== "" && member.li !== "#");

  const cleanPhone = member.phone ? member.phone.replace(/[^0-9+]/g, "") : "";
  const cleanWa = member.wa ? member.wa.replace(/[^0-9]/g, "") : "";

  // JSON-LD Structured Data
  const personSchema = getPersonJsonLd(member);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Our Team", url: "/#team" },
    { name: member.name, url: `/team/${member.slug}` },
  ]);

  return (
    <div className="min-h-screen">
      {/* Schema.org Structured Data */}
      <JsonLdScript data={personSchema} />
      <JsonLdScript data={breadcrumbSchema} />

      {/* 1. Royal Gradient Banner */}
      <section className="gradient-royal text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-lime/15 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumb
            items={[
              { label: "Our Team", href: "/#team" },
              { label: member.name },
            ]}
          />
          <div className="text-xs font-bold uppercase tracking-wider text-lime-bright">
            {member.dept}
          </div>
        </div>
      </section>

      {/* 2. Main Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Direct Contact Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <Reveal delay={0}>
              <Card className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft-lg space-y-6">
                {/* Portrait Photo */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
                  <Image
                    src={member.img || `/images/team/${member.slug}.svg`}
                    alt={`${member.name} — ${member.desig}`}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover"
                  />
                  {(member.desig.includes("ITP") || member.name.includes("ITP")) && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-royal text-white text-xs font-bold shadow-md flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
                      <span>ITP Licensed</span>
                    </div>
                  )}
                </div>

                {/* Direct Contact Endpoints (Omitted if empty) */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                    Direct Contact Channels
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm">
                    {hasEmail && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-royal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
                      >
                        <Mail className="w-4 h-4 text-royal shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    )}

                    {hasPhone && (
                      <a
                        href={`tel:${cleanPhone}`}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-royal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
                      >
                        <Phone className="w-4 h-4 text-royal shrink-0" />
                        <span>
                          {member.phone}
                          {member.ext ? ` Ext. ${member.ext}` : ""}
                        </span>
                      </a>
                    )}

                    {hasWa && (
                      <a
                        href={`https://wa.me/${cleanWa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Direct WhatsApp</span>
                      </a>
                    )}

                    {hasLi && (
                      <a
                        href={member.li}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/30 text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <LinkedinIcon className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>LinkedIn Profile</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="pt-2">
                  <Button
                    href="/#contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Book Consultation
                  </Button>
                </div>
              </Card>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Credentials (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <Reveal delay={100}>
              <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
                  {member.name}
                </h1>
                <p className="font-display font-bold text-lg sm:text-xl text-royal dark:text-royal-light">
                  {member.desig}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-lime-700 dark:text-lime-400" />
                  <span>{member.dept}</span>
                </div>
              </div>
            </Reveal>

            {/* Biography */}
            <Reveal delay={200}>
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl text-ink">
                  Professional Biography &amp; Practice Overview
                </h2>
                <div className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                  {member.bio.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Practice Areas / Advisory Competencies */}
            <Reveal delay={300}>
              <Card className="p-8 bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="font-display font-bold text-lg text-ink flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-royal dark:text-royal-light" />
                  <span>Key Advisory Competencies</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-royal" />
                    <span>Income Tax &amp; Wealth Statement Reconciliation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-royal" />
                    <span>SECP Incorporation &amp; Corporate Governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-royal" />
                    <span>Multi-Provincial Sales Tax (PRA, SRB, KPRA, BRA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-royal" />
                    <span>FBR Audit Representation &amp; Notice Appeals</span>
                  </li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
