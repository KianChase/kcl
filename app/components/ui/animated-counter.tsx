"use client";

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
  suffix = ""
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      if (node) {
        const controls = animate(from, to, {
          duration,
          onUpdate(value) {
            node.textContent = Math.round(value).toString() + suffix;
          },
          ease: "easeOut"
        });

        return () => controls.stop();
      }
    }
  }, [from, to, duration, suffix, isInView]);

  return <span ref={nodeRef} className={className}>{from + suffix}</span>;
} 