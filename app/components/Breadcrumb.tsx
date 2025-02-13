"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center flex-wrap">
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Link 
            href="/" 
            className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </motion.li>

        {items.map((item, index) => (
          <motion.li 
            key={item.label} 
            className="flex items-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <ChevronRight className="h-4 w-4 text-gray-500 mx-2" aria-hidden="true" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className="text-gray-200 font-medium"
                aria-current={index === items.length - 1 ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </motion.li>
        ))}
      </ol>
    </nav>
  );
} 