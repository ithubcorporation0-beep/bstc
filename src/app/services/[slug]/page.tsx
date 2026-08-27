import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { services, getServiceBySlug, getActiveServices } from "@/data";
import { buildMetadata } from "@/lib/seo";
import {
  getServiceJsonLd,
  getBreadcrumbJsonLd,
  getFaqPageJsonLd,
  JsonLdScript,
} from "@/lib/jsonld";
import Breadcrumb from "@/components/services/Breadcrumb";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import Accordion from "@/components/ui/Accordion";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Pre-render all 14 service slugs statically at build time.
 */
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

/**
 * Generate per-page SEO metadata using buildMetadata helper.
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || service.status !== "active") {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested tax or corporate consultancy service could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDesc,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  // Return real HTTP 404 for unknown or inactive service slugs
  if (!service || service.status !== "active") {
    notFound();
  }

  const allActiveServices = getActiveServices();
  const relatedServices = allActiveServices.filter((s) => s.slug !== service.slug);

  // Check which sections have verified content
  const hasOverview = Boolean(service.fullDesc && service.fullDesc.trim() !== "");
  const hasBenefits = Boolean(service.benefits && service.benefits.length > 0);
  const hasReqDocs = Boolean(service.reqDocs && service.reqDocs.length > 0);
  const hasProcess = Boolean(service.process && service.process.length > 0);
  const hasFaqs = Boolean(service.faqs && service.faqs.length > 0);

  const faqItems = hasFaqs
    ? service.faqs.map((faq, i) => ({
        id: `faq-${i}`,
        question: faq.q,
        answer: faq.a,
      }))
    : [];

  // JSON-LD Structured Data
  const serviceSchema = getServiceJsonLd(service);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/#services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const faqSchema = hasFaqs ? getFaqPageJsonLd(service.faqs) : null;

  return (
    <div className="min-h-screen">
      {/* Schema.org Structured Data */}
      <JsonLdScript data={serviceSchema} />
      <JsonLdScript data={breadcrumbSchema} />
      {faqSchema && <JsonLdScript data={faqSchema} />}

      {/* 1. Royal Gradient Hero Banner */}
      <section className="gradient-royal text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Ambient decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-lime/15 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumb
            items={[
              { label: "Services", href: "/#services" },
              { label: service.title },
            ]}
          />

          <div className="flex items-start gap-5 pt-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-lime-bright shrink-0 shadow-soft">
              <Icon name={service.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                {service.title}
              </h1>
              <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Service Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Featured Visual Hero Image */}
            {service.banner && (
              <Reveal delay={0}>
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden shadow-soft-lg border border-slate-200 dark:border-slate-800 bg-slate-900">
                  <Image
                    src={service.banner}
                    alt={`${service.title} — Professional Advisory`}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              </Reveal>
            )}
            {/* Overview Section */}
            {hasOverview && (
              <Reveal delay={0}>
                <section className="space-y-4">
                  <h2 className="font-display font-bold text-2xl text-ink">
                    Overview &amp; Regulatory Context
                  </h2>
                  <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                    {service.fullDesc.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Key Benefits Section */}
            {hasBenefits && (
              <Reveal delay={100}>
                <section className="space-y-4">
                  <h2 className="font-display font-bold text-2xl text-ink">
                    Key Advantages
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                      >
                        <CheckCircle2 className="w-5 h-5 text-lime-700 dark:text-lime-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-ink leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Required Documents Section (Visually Distinct Block) */}
            {hasReqDocs && (
              <Reveal delay={150}>
                <section className="p-8 rounded-3xl bg-blue-50/70 dark:bg-blue-950/40 border-2 border-blue-200 dark:border-blue-800/60 space-y-5">
                  <div className="flex items-center gap-3 border-b border-blue-200/80 dark:border-blue-800/60 pb-3">
                    <FileText className="w-5 h-5 text-royal dark:text-royal-light" />
                    <h2 className="font-display font-bold text-xl text-ink">
                      Required Documents Checklist
                    </h2>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {service.reqDocs.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-royal" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            )}

            {/* Step-by-Step Process Timeline */}
            {hasProcess && (
              <Reveal delay={200}>
                <section className="space-y-6">
                  <h2 className="font-display font-bold text-2xl text-ink">
                    Step-by-Step Filing Workflow
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                      >
                        <div className="w-9 h-9 rounded-xl gradient-royal text-white font-extrabold font-display text-sm flex items-center justify-center shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-ink leading-relaxed">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Service-Specific FAQs */}
            {hasFaqs && (
              <Reveal delay={250}>
                <section className="space-y-6">
                  <h2 className="font-display font-bold text-2xl text-ink">
                    Frequently Asked Questions
                  </h2>
                  <Accordion items={faqItems} defaultOpenId="faq-0" />
                </section>
              </Reveal>
            )}

            {/* Default Clean State when content awaits client (TODO O1) */}
            {!hasOverview && !hasBenefits && !hasReqDocs && !hasProcess && !hasFaqs && (
              <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-soft space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-royal/10 text-royal dark:bg-royal/20 dark:text-royal-light flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-ink">
                      Professional Advisory &amp; Fast E-Filing
                    </h2>
                    <p className="text-xs text-slate-500">
                      Registered Income Tax Practitioner (ITP) Guided Service
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our certified team provides full-spectrum assistance for <strong>{service.title}</strong> in accordance with the latest Federal Board of Revenue (FBR), SECP, and provincial tax regulations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
                    <div className="font-display font-bold text-lg text-royal dark:text-royal-light">
                      100% Compliant
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Audit-Proof Accuracy</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
                    <div className="font-display font-bold text-lg text-lime-700 dark:text-lime-400">
                      Fast Turnaround
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Digital Processing</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-center">
                    <div className="font-display font-bold text-lg text-ink">
                      Dedicated Support
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Personalized Counsel</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4">
            <ServiceSidebar
              currentSlug={service.slug}
              relatedServices={relatedServices}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
