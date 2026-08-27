import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "primary" | "lime" | "outline" | "slate";
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "primary", className, children }: BadgeProps) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide select-none";

  const variants = {
    primary: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
    lime: "bg-lime-50 text-lime-800 dark:bg-lime-950/60 dark:text-lime-300 border border-lime-200 dark:border-lime-800",
    outline: "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
    slate: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  }[variant];

  return <span className={cn(base, variants, className)}>{children}</span>;
}
