"use client";

import Link from "next/link";
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
        <div className="flex items-center justify-center w-10 h-10">
          <span className="text-2xl font-bold text-red-600">
            KCL
          </span>
        </div>
      ) : (
        // Full version with company name
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="text-2xl font-bold leading-none">
              <span className="text-red-600">KCL</span>
            </div>
            <div className="text-xs tracking-wider text-gray-600">
              Kitchen Commercial Limited
            </div>
          </div>
        </div>
      )}
    </Link>
  );
} 