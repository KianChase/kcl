"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "circular" | "rounded";
  animation?: "pulse" | "wave" | "none";
}

const pulseVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const waveVariants = {
  initial: { backgroundPosition: "-200% 0" },
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export function Skeleton({
  className,
  variant = "default",
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const baseClasses = cn(
    "bg-gray-200",
    {
      "rounded-md": variant === "default",
      "rounded-full": variant === "circular",
      "rounded-lg": variant === "rounded",
      "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]":
        animation === "wave"
    },
    className
  );

  if (animation === "none") {
    return <div className={baseClasses} {...props} />;
  }

  return (
    <motion.div
      className={baseClasses}
      variants={animation === "pulse" ? pulseVariants : waveVariants}
      initial="initial"
      animate="animate"
      {...props}
    />
  );
} 