"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/constants/brand";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "full" | "monogram";
  theme?: "light" | "dark";
}

export default function Logo({ 
  className = "", 
  variant = "full",
  theme = "light" 
}: LogoProps) {
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const subTextColor = theme === "light" ? "text-gray-500" : "text-gray-300";
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const borderColor = theme === "light" ? "border-gray-100" : "border-gray-800";

  return (
    <Link href="/" className={`block ${className}`}>
      {variant === "monogram" ? (
        // Simple monogram version
        <motion.div 
          className={`flex items-center justify-center w-8 h-8 ${bgColor} shadow-sm rounded-md overflow-hidden border ${borderColor}`}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Image 
            src="/images/logo-icon.png" 
            alt={BRAND.name} 
            width={24} 
            height={24}
            className="object-contain"
          />
        </motion.div>
      ) : (
        // Full version with company name
        <motion.div 
          className={`flex items-center gap-2 ${bgColor} shadow-sm rounded-md p-1.5 border ${borderColor}`}
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 1 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative w-8 h-8">
            <Image 
              src="/images/logo.png" 
              alt={BRAND.name} 
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-bold ${textColor} leading-tight`}>
              {BRAND.shortName}
            </span>
            <span className={`text-[10px] ${subTextColor}`}>
              Commercial Kitchens
            </span>
          </div>
        </motion.div>
      )}
    </Link>
  );
} 