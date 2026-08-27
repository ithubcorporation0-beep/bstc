import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  children: React.ReactNode;
}

export function Card({ hoverEffect = true, glass = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        glass ? "glass" : "bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800",
        hoverEffect && "card-lift hover:border-blue-500/40 dark:hover:border-blue-400/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
