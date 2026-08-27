import Link from "next/link";
import { ArrowLeft, HelpCircle, Phone } from "lucide-react";
import { siteSettings } from "@/data/settings";
import { formatPhoneHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/10">
          <HelpCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-sm font-bold uppercase tracking-widest text-lime-600 dark:text-lime-400">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The tax service or page you are looking for might have been moved or does not exist.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Button>
          <Button
            href={formatPhoneHref(siteSettings.phone)}
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>Call Support</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
