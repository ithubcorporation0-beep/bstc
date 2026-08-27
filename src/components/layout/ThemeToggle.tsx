"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("bstc_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("bstc_theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/50",
          className
        )}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 flex items-center justify-center transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 cursor-pointer shadow-sm",
        className
      )}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-blue-600 animate-in spin-in-180 duration-300" />
      )}
    </button>
  );
}
