import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "lime" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] select-none gap-2";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base font-bold",
  }[size];

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:brightness-110",
    secondary:
      "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700",
    lime:
      "bg-gradient-to-r from-lime-500 to-lime-400 text-slate-950 font-bold shadow-md shadow-lime-500/25 hover:shadow-lg hover:shadow-lime-500/35 hover:brightness-105",
    outline:
      "bg-transparent text-blue-600 dark:text-blue-400 border-2 border-blue-600/60 dark:border-blue-400/60 hover:bg-blue-50 dark:hover:bg-blue-950/30",
    ghost:
      "bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
  }[variant];

  const combinedClass = cn(baseClasses, sizeClasses, variantClasses, className);

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https://wa.me")) {
      return (
        <a href={href} target={target} rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)} className={combinedClass}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
