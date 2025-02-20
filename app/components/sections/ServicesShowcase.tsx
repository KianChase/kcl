"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PenTool, Settings, Wrench, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: PenTool,
    title: "Custom Fabrication",
    description: "Bespoke stainless steel solutions tailored to your needs",
    image: "/images/services/custom.jpeg",
    features: [
      "Custom dimensions",
      "Premium materials",
      "Quality craftsmanship",
      "Unique designs"
    ]
  },
  {
    icon: Settings,
    title: "Kitchen Planning",
    description: "Expert kitchen layout and workflow optimization",
    image: "/images/services/kitchen.jpeg",
    features: [
      "3D visualization",
      "Workflow analysis",
      "Space optimization",
      "Equipment selection"
    ]
  },
  {
    icon: Wrench,
    title: "Installation & Support",
    description: "Professional installation and ongoing maintenance",
    image: "/images/services/installation.jpeg",
    features: [
      "Expert installation",
      "24/7 support",
      "Regular maintenance",
      "Performance monitoring"
    ]
  }
];

export default function ServicesShowcase() {
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
            OUR SERVICES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive Kitchen Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            From design to installation, we provide end-to-end solutions for your commercial kitchen needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                        <Icon className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            variant="primary"
            className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 