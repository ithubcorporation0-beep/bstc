import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 ${className || ""}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" />
              {isLast ? (
                <span className="text-slate-900 dark:text-white font-semibold truncate max-w-[200px] sm:max-w-xs">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
