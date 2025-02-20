"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface HoverCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  logo: string;
  location: string;
  className?: string;
}

export function HoverCard({ 
  title, 
  subtitle,
  description, 
  image, 
  logo,
  location,
  className = "" 
}: HoverCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      className={`relative group overflow-hidden rounded-xl ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image */}
      <div className="relative h-64 w-full">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="relative h-12 w-24 mb-4 opacity-90 bg-white rounded-lg p-2">
          <Image
            src={logo}
            alt={`${title} logo`}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-200 text-sm mb-2">{subtitle}</p>
        <p className="text-gray-300 text-xs mb-2">{location}</p>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 