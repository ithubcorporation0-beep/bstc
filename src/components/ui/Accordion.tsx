"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id?: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: readonly AccordionItemData[];
  defaultOpenIndex?: number;
  className?: string;
}

export function Accordion({ items, defaultOpenIndex, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3.5", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = item.id || `accordion-item-${index}`;

        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-white dark:bg-slate-900 border-blue-500/40 shadow-sm shadow-blue-500/10"
                : "bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            <button
              type="button"
              id={`heading-${itemId}`}
              aria-controls={`content-${itemId}`}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
            >
              <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200",
                  isOpen
                    ? "rotate-180 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div
                id={`content-${itemId}`}
                role="region"
                aria-labelledby={`heading-${itemId}`}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
