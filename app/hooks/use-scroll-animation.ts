"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(ref: React.RefObject<HTMLElement>) {
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return {
    isInView,
    hasAnimated,
    className: `transition-all duration-700 ${
      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`
  };
} 