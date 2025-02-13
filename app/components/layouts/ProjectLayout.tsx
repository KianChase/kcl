"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectLayoutProps {
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  year: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
  children?: React.ReactNode;
}

export function ProjectLayout({
  title,
  description,
  image,
  category,
  location,
  year,
  challenge,
  solution,
  results,
  gallery,
  children
}: ProjectLayoutProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-900"
                icon={<ArrowLeft className="h-4 w-4" />}
                iconPosition="left"
                asChild
              >
                <Link href="/projects">Back to Projects</Link>
              </Button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mb-6">
                {description}
              </p>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {category}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {year}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600">{challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-600">{solution}</p>
            </section>

            {children}

            <section>
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {gallery.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Key Results</h3>
              <ul className="space-y-3">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 