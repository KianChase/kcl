"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
} 