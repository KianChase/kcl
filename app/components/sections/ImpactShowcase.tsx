"use client";

import { motion } from "framer-motion";
import { Globe, Users, Building, Award } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const stats = [
  {
    icon: Building,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Across East Africa"
  },
  {
    icon: Users,
    value: 50,
    suffix: "K+",
    label: "Meals Served Daily",
    description: "Through our kitchens"
  },
  {
    icon: Globe,
    value: 5,
    suffix: "",
    label: "Countries Served",
    description: "Regional presence"
  },
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Industry expertise"
  }
];

export default function ImpactShowcase() {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-red-500 text-lg font-medium mb-4 tracking-wider"
          >
            OUR IMPACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Making a Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Our contributions to East Africa's hospitality and food service industry
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 w-fit mb-4">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                    />
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                      {stat.suffix}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 