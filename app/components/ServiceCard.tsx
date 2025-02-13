"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  features: string[];
}

export function ServiceCard({
  title,
  description,
  icon,
  features
}: ServiceCardProps) {
  const Icon = Icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
    >
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-red-600 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-2">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
              <Check className="h-3 w-3 text-green-600" />
            </div>
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 