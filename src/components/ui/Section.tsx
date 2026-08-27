import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  centered?: boolean;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  eyebrow,
  heading,
  description,
  centered = false,
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps) {
  const hasHeader = eyebrow || heading || description;

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden ${className}`.trim()}
      {...props}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`.trim()}
      >
        {hasHeader && (
          <div
            className={`mb-12 sm:mb-16 ${
              centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
            }`}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light border border-royal/20 dark:border-royal/30 mb-3 tracking-wide uppercase">
                {eyebrow}
              </div>
            )}
            {heading && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
                {heading}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
