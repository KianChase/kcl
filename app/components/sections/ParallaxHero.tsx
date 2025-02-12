"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/constants/brand";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1567159644489-31c8e01c57de?q=80&w=2000"
          alt="Professional Commercial Kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>

      <div className="relative h-full flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4 max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Kitchen Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
            {BRAND.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/consultation"
              className={`group inline-flex items-center gap-2 bg-[${BRAND.theme.colors.primary.DEFAULT}] text-white px-8 py-4 rounded-full font-semibold hover:bg-[${BRAND.theme.colors.primary.dark}] transition-colors shadow-lg shadow-red-600/20`}
            >
              Get Custom Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              View Our Projects
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-white/20 pt-12">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
} 