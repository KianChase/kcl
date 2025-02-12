"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { BRAND } from "@/constants/brand";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  // Update document body when banner visibility changes
  useEffect(() => {
    document.body.classList.toggle('banner-closed', !isVisible);
  }, [isVisible]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-white text-center flex-1">
              <span className="font-medium">24/7 Emergency Support Available</span>
              {" • "}
              <a 
                href={`tel:${BRAND.contact.phone}`}
                className="underline hover:no-underline"
              >
                {BRAND.contact.phone}
              </a>
            </p>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 