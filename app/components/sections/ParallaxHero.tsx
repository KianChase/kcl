"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useSpring(useTransform(scrollY, [0, 300], [0, 50]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900" />
        <motion.div style={{ y }} className="relative h-full">
          <Image
            src="/images/hero.webp"
            alt="Commercial Kitchen"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative h-screen">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              style={{ y: textY }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <span className="inline-block text-red-500 text-lg font-medium mb-4 tracking-wider">
                  PREMIUM KITCHEN SOLUTIONS
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  Crafting Excellence in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    Commercial Kitchens
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                East Africa's premier manufacturer of custom stainless steel solutions, 
                delivering world-class craftsmanship for over 25 years.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg"
                  variant="primary"
                  className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  View Portfolio
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="relative p-4 backdrop-blur-sm rounded-lg border border-white/10 bg-white/5"
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 