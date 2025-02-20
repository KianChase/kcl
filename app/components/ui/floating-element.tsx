"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 4,
  className = "" 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [-1, 1, -1]
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
} 