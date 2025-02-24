"use client";

import { motion } from "framer-motion";
import { PenTool, Settings, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: PenTool,
    title: "Consultation",
    description: "We start with a detailed consultation to understand your needs, space requirements, and operational goals.",
    details: [
      "Site assessment",
      "Requirements gathering",
      "Budget planning",
      "Initial concept discussion"
    ]
  },
  {
    icon: Settings,
    title: "Design & Planning",
    description: "Our team creates comprehensive designs and detailed plans tailored to your specifications.",
    details: [
      "3D visualization",
      "Layout optimization",
      "Equipment selection",
      "Workflow mapping"
    ]
  },
  {
    icon: Wrench,
    title: "Manufacturing",
    description: "Each component is crafted in our workshop using premium materials and precise specifications.",
    details: [
      "Quality materials",
      "Expert craftsmanship",
      "Quality control",
      "Custom fabrication"
    ]
  },
  {
    icon: CheckCircle,
    title: "Installation",
    description: "Professional installation by our experienced team, ensuring everything works perfectly.",
    details: [
      "Professional setup",
      "Testing & calibration",
      "Staff training",
      "Final inspection"
    ]
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50/50">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,64,60,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-red-50 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-5 block">
              Our Approach
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We follow a systematic approach to ensure every project is delivered with precision, 
            quality, and attention to detail
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-red-200 via-red-300 to-red-200 -z-10" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 group-hover:border-red-100">
                <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-red-600" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="text-sm text-gray-500 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-gradient-to-br from-red-500 to-red-600 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/consultation">
            <Button 
              size="lg"
              variant="primary"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 