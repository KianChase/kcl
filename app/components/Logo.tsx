"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/constants/brand";

interface LogoProps {
  className?: string;
  variant?: "full" | "monogram";
}

export default function Logo({ className = "", variant = "full" }: LogoProps) {
  return (
    <Link href="/" className={`block ${className}`}>
      {variant === "monogram" ? (
        // Simple monogram version
        <motion.div 
          className="flex items-center justify-center w-10 h-10"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-2xl font-bold text-red-600">
            {BRAND.shortName}
          </span>
        </motion.div>
      ) : (
        // Full version with company name
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col">
            <div className="text-2xl font-bold leading-none">
              <span className="text-red-600">{BRAND.shortName}</span>
            </div>
            <div className="text-xs tracking-wider text-gray-600">
              {BRAND.name}
            </div>
          </div>
        </motion.div>
      )}
    </Link>
  );
} 