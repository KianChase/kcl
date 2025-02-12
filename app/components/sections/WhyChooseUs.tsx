"use client";

import { motion } from "framer-motion";
import { Shield, PenTool, Clock, Users, Award, Zap } from "lucide-react";
import { BRAND } from "@/constants/brand";

const features = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium grade stainless steel and world-class craftsmanship in every project"
  },
  {
    icon: PenTool,
    title: "Custom Solutions",
    description: "Tailored designs that perfectly match your space and operational needs"
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Efficient project completion with minimal disruption to your business"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with decades of combined industry experience"
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Meeting international standards and local health regulations"
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Sustainable solutions that reduce operational costs"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">Why Choose KCL</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of craftsmanship, technology, and service
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group p-8 rounded-xl bg-gray-50 hover:bg-[${BRAND.theme.colors.primary.DEFAULT}] transition-colors duration-300 hover:shadow-xl hover:shadow-red-600/10`}
            >
              <feature.icon 
                className={`h-8 w-8 text-[${BRAND.theme.colors.primary.DEFAULT}] group-hover:text-white mb-4 transition-colors`}
              />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 