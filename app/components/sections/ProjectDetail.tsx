"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="h-[70vh] relative">
        <div className="absolute inset-0 bg-gray-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <div className="pt-24">
            <Link
              href="/projects"
              className="inline-flex items-center text-white hover:text-gray-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="h-full flex items-center">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-200 mb-8"
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-6 text-white"
              >
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{project.year}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {project.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Project Highlights</h2>
          <div className="space-y-4">
            {project.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-600">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mt-20"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Kitchen?</h3>
          <p className="text-gray-600 mb-8">
            Let's create a kitchen that exceeds your expectations.
          </p>
          <Link href="/consultation">
            <Button size="lg" variant="primary">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 