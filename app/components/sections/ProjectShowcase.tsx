"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ProjectStats {
  capacity: string;
  area: string;
  stations: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  stats: ProjectStats;
  href: string;
}

const projects: Project[] = [
  {
    title: "Utalii College",
    category: "Educational",
    description: "State-of-the-art training kitchen facility",
    image: "/images/projects/utalii/main.jfif",
    location: "Nairobi, Kenya",
    stats: {
      capacity: "200+ Students",
      area: "1,500 sqm",
      stations: "20 Units"
    },
    href: "/portfolio/utalii-college"
  },
  {
    title: "Serena Hotel",
    category: "Hospitality",
    description: "High-capacity commercial kitchen installation",
    image: "/images/projects/serena/main.jpeg",
    location: "Nairobi, Kenya",
    stats: {
      capacity: "1000+ Meals/day",
      area: "800 sqm",
      stations: "12 Units"
    },
    href: "/portfolio/serena-hotel"
  },
  {
    title: "Queens Pizza",
    category: "Hospitality",
    description: "Complete kitchen renovation and upgrade",
    image: "/images/projects/queens/main.jpeg",
    location: "Nairobi, Kenya",
    stats: {
      capacity: "800+ Meals/day",
      area: "600 sqm",
      stations: "8 Units"
    },
    href: "/portfolio/queens-pizza"
  }
];

export default function ProjectShowcase() {
  const router = useRouter();

  const handleViewProject = (href: string) => {
    router.push(href);
  };

  const handleViewAllProjects = () => {
    router.push("/portfolio");
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-red-500 text-lg font-medium mb-4 tracking-wider"
          >
            FEATURED PROJECTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Latest Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful commercial kitchen installations across East Africa
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => router.push(project.href)}
            >
              <div className="relative h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-sm font-medium text-gray-900">
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center text-red-600 group-hover:text-red-700">
                  <span className="font-medium">View Details</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="primary"
              className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 