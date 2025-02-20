"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  year: string;
  href: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  location,
  year,
  href,
  className
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <motion.article 
        className={cn(
          "group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",
          className
        )}
        whileHover={{ y: -4 }}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{year}</span>
            </div>
          </div>

          {/* View Details Link */}
          <div className="flex items-center text-red-600 font-medium">
            <span className="mr-2">View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
} 