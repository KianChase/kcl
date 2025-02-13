"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.jpeg"
          alt="Professional Commercial Kitchen"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />

      </motion.div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Crafting Excellence in{" "}
              <span className="text-red-500">
                Kitchen Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-100">
              {BRAND.tagline}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                variant="primary"
                icon={<ArrowRight className="h-5 w-5" />}
                className="shadow-lg"
                asChild
              >
                <Link href="/consultation">
                  Get Custom Quote
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100"
                asChild
              >
                <Link href="/projects">
                  View Our Projects
                </Link>
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}

const stats = [
  {
    value: "25+",
    label: "Years Experience"
  },
  {
    value: "500+",
    label: "Projects Completed"
  },
  {
    value: "100%",
    label: "Client Satisfaction"
  }
]; 