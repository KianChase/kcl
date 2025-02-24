"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BRAND } from "@/constants/brand";

const categories = [
  {
    title: "Cooker",
    description: "Professional kitchen cookers designed for efficiency",
    image: "/images/products/work station.jpg",
    href: "/products/cooker"
  },
  {
    title: "Sink",
    description: "Commercial grade stainless steel sinks and wash stations",
    image: "/images/products/sink.jfif",
    href: "/products/sink"
  },
  {
    title: "Ovens",
    description: "High-performance commercial ovens and cooking equipment",
    image: "/images/products/oven.jfif",
    href: "/products/ovens"
  },
  {
    title: "Hood",
    description: "Industrial kitchen ventilation and exhaust systems",
    image: "/images/products/hood.jfif",
    href: "/products/hood"
  },
  {
    title: "Custom Made",
    description: "Bespoke kitchen solutions tailored to your needs",
    image: "/images/products/customized.jfif",
    href: "/products/custom"
  },
  {
    title: "Tables",
    description: "Durable stainless steel tables and work surfaces",
    image: "/images/products/table.jfif",
    href: "/products/tables"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-4">{BRAND.name} Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional kitchen equipment designed for performance and durability
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={category.href}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <span className="text-sm font-medium">View Products</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


