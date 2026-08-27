import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";

export interface RelatedServicesProps {
  currentSlug: string;
  limit?: number;
}

export function RelatedServices({ currentSlug, limit = 3 }: RelatedServicesProps) {
  const otherServices = services
    .filter((svc) => svc.slug !== currentSlug)
    .slice(0, limit);

  return (
    <div className="pt-12 mt-12 border-t border-slate-200 dark:border-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
        Complementary Services &amp; Filings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherServices.map((svc) => (
          <Card key={svc.slug} className="p-5 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                {svc.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {svc.shortDesc}
              </p>
            </div>
            <div className="pt-4">
              <Link
                href={`/services/${svc.slug}`}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group"
              >
                <span>Learn Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
