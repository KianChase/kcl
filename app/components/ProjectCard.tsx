"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  year: string;
  href?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  location,
  year,
  href
}: ProjectCardProps) {
  const Card = motion(href ? Link : "div");

  return (
    <Card
      href={href || "#"}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={href ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="space-y-2 text-sm text-gray-500">
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

        {href && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-red-600 group-hover:text-red-700">
              View Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        )}
      </div>
    </Card>
  );
} 