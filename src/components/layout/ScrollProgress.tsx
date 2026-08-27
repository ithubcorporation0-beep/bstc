"use client";

import React, { useEffect, useState } from "react";

/**
 * Scroll Progress Bar Component.
 * 3px fixed bar at the very top of the viewport tracking page scroll percentage.
 * Throttled using requestAnimationFrame for optimal performance (PRD §6.1 row 2).
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const calculateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const percentage = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
        setProgress(percentage);
      }
      animationFrameId = null;
    };

    const handleScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(calculateScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    calculateScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none"
    >
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-gradient-to-r from-royal via-royal-light to-lime-bright transition-[width] duration-75 ease-out"
      />
    </div>
  );
}

export default ScrollProgress;
