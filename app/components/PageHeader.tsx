"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function PageHeader({
  title,
  description,
  className,
  align = "center",
  theme = "dark"
}: PageHeaderProps) {
  const containerStyles = cn(
    "relative overflow-hidden",
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900",
    className
  );

  const contentStyles = cn(
    "max-w-7xl mx-auto px-4 py-16 sm:py-24",
    align === "center" ? "text-center" : "text-left"
  );

  const descriptionStyles = cn(
    "mt-4 text-lg",
    theme === "dark" ? "text-gray-300" : "text-gray-600"
  );

  return (
    <div className={containerStyles}>
      {/* Background Pattern */}
      {theme === "dark" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:16px_16px]" />
        </div>
      )}

      <div className={contentStyles}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={descriptionStyles}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      {theme === "dark" && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      )}
    </div>
  );
} 