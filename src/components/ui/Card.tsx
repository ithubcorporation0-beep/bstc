import React from "react";
import Link from "next/link";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  glass?: boolean;
  lift?: boolean;
  className?: string;
}

export function Card({
  children,
  href,
  target,
  rel,
  glass = false,
  lift = true,
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl p-6 transition-all duration-300 relative";
  const liftStyles = lift ? "lift" : "";
  const surfaceStyles = glass
    ? "glass shadow-soft"
    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-soft hover:border-royal/30 dark:hover:border-royal-light/30";

  const combinedClassName = `${baseStyles} ${surfaceStyles} ${liftStyles} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          className={`block group ${combinedClassName}`}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`block group ${combinedClassName}`}>
        {children}
      </Link>
    );
  }

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}

export default Card;
