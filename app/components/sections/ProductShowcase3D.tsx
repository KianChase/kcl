"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

export function ProductShowcase3D({ products }: { products: Product[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[600px] perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full h-full"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            animate={{
              scale: index === activeIndex ? 1 : 0.8,
              opacity: index === activeIndex ? 1 : 0,
              z: index === activeIndex ? 100 : 0
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-200">{product.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-red-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
} 