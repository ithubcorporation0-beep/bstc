import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { constructMetadata } from "@/lib/seo";
import { generateServiceSchema, generateBreadcrumbSchema, generateFaqSchema } from "@/lib/jsonld";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { RelatedServices } from "@/components/services/RelatedServices";
import { Accordion } from "@/components/ui/Accordion";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return constructMetadata({
      title: "Service Not Found",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    canonicalPath: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", url: "/#services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const faqSchema = service.faqs.length > 0 ? generateFaqSchema(service.faqs) : null;

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { name: "Services", url: "/#services" },
                { name: service.title, url: `/services/${service.slug}` },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Header Hero */}
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-md">
                  <Icon name={service.icon} className="w-7 h-7" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {service.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span>Key Benefits &amp; Advantages</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <Card key={index} className="p-4 bg-white dark:bg-slate-900">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-lime-600 dark:text-lime-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                          {benefit}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span>Required Documents Checklist</span>
                </h2>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Please prepare clear digital copies of the following:
                  </p>
                  {service.requiredDocs.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Process */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Execution &amp; Filing Workflow
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.processSteps.map((step, index) => (
                    <Card key={index} className="p-5 bg-white dark:bg-slate-900">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5 uppercase tracking-wider">
                        <span>Step 0{index + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {step}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              {service.faqs.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Frequently Asked Questions
                  </h2>
                  <Accordion items={service.faqs} defaultOpenIndex={0} />
                </div>
              )}

              {/* Book Consultation Form for this Service */}
              <div id="service-booking" className="space-y-6 pt-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Request Consultation for {service.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Submit your case details below to receive expert procedural advice and quotation.
                    </p>
                  </div>
                  <ConsultationForm preselectedService={service.title} />
                </div>
              </div>

              {/* Related Services */}
              <RelatedServices currentSlug={service.slug} />
            </div>

            {/* Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 sticky top-24">
              <ServiceSidebar currentSlug={service.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
