import React from "react";
import { Metadata } from "next";
import { Home, FileText, ShieldAlert } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description: "The requested page or tax service could not be located on the BSTC website.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-royal/10 dark:bg-royal/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-lime/10 dark:bg-lime/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-8">
        {/* Error Code Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-royal/20 dark:border-royal/30 bg-royal/5 dark:bg-royal/10 text-royal dark:text-royal-light text-xs font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4 text-royal" />
          <span>Error 404 — Page Not Found</span>
        </div>

        {/* Big 404 Typography */}
        <div className="font-display font-extrabold text-7xl sm:text-9xl gradient-text tracking-tight">
          404
        </div>

        {/* Headline & Explanation */}
        <div className="space-y-3">
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-ink tracking-tight">
            The Page You Are Looking For Does Not Exist
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
            The requested URL or tax service could not be located. It may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Return to Homepage
          </Button>

          <Button
            href="/#services"
            variant="secondary"
            size="md"
            icon={<FileText className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </div>
  );
}
