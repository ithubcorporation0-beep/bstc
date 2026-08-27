"use client";

import React, { useEffect, useRef, useState } from "react";

export interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
