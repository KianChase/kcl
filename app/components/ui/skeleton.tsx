"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface SkeletonProps extends HTMLMotionProps<"div"> {
  animation?: "pulse" | "wave" | "none";
  className?: string;
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
  animation = "pulse",
  ...props
}: SkeletonProps) {
  const baseClasses = cn(
    "bg-gray-200",
    {
      "rounded-md": animation === "pulse",
      "rounded-full": animation === "wave",
      "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]":
        animation === "wave"
    },
    className
  );
  if (animation === "none") {
    const { animate, variants, initial, ...otherProps } = props;
    //@ts-ignore
    return <div className={baseClasses} {...otherProps} />;
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