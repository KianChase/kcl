"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface RotatingCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

export function RotatingCard({
  title,
  description,
  image,
  features,
  link
}: RotatingCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      className="relative h-[400px] w-full cursor-pointer group perspective"
      onClick={handleFlip}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        className="preserve-3d w-full h-full"
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-900 p-8">
            <div className="absolute inset-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-50"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-300 mb-8">{description}</p>
              <div className="flex items-center text-white group-hover:text-red-500 transition-colors">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-xl"
        >
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href={link}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mt-6"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ x: 5 }}
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 