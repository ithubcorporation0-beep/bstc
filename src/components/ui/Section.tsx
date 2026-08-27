import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  containerClassName?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  badge,
  title,
  subtitle,
  align = "center",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 relative overflow-hidden", className)} {...props}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        {(badge || title || subtitle) && (
          <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl")}>
            {badge && (
              <div className={cn("mb-3", align === "center" ? "flex justify-center" : "")}>
                <Badge variant="primary">{badge}</Badge>
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
