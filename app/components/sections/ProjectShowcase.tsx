"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Sarova Stanley",
    category: "Hotel",
    description: "Complete kitchen renovation with custom stainless steel installations",
    image: "https://images.unsplash.com/photo-1567159644489-31c8e01c57de?q=80&w=2000",
    stats: {
      area: "450 m²",
      duration: "45 days",
      equipment: "35+ units"
    }
  },
  {
    title: "Utalii College",
    category: "Education",
    description: "State-of-the-art training kitchen facility for culinary students",
    image: "https://images.unsplash.com/photo-1588544644883-8aa1ff8c0e48?q=80&w=2000",
    stats: {
      area: "600 m²",
      duration: "60 days",
      equipment: "50+ units"
    }
  },
  {
    title: "Nairobi Hospital",
    category: "Healthcare",
    description: "Modern hospital kitchen with specialized equipment",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000",
    stats: {
      area: "350 m²",
      duration: "40 days",
      equipment: "25+ units"
    }
  }
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(0);

  const currentProject = projects[selectedProject];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Excellence delivered across East Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-sm font-medium text-emerald-400 mb-2">
                    {currentProject.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-200">
                    {currentProject.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Details */}
          <div>
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {currentProject.stats.area}
                </div>
                <div className="text-sm text-gray-600">Area</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {currentProject.stats.duration}
                </div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {currentProject.stats.equipment}
                </div>
                <div className="text-sm text-gray-600">Equipment</div>
              </div>
            </div>

            <div className="space-y-3">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => setSelectedProject(index)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${
                    index === selectedProject
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div>
                    <div className={index === selectedProject ? "text-emerald-400" : "text-gray-600"}>
                      {project.category}
                    </div>
                    <div className="font-medium">{project.title}</div>
                  </div>
                  <ArrowRight className={`h-5 w-5 transition-transform ${
                    index === selectedProject ? "rotate-90" : ""
                  }`} />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-colors"
              >
                View All Projects
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 