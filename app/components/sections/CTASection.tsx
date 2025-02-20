"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:16px_16px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's create a kitchen that exceeds your expectations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg transition-colors"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 