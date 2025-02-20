"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

interface ProductView {
  id: string;
  angle: number;
  image: string;
}

interface Product3DViewerProps {
  name: string;
  views: ProductView[];
  features?: string[];
}

export function Product3DViewer({ name, views, features }: Product3DViewerProps) {
  const [currentView, setCurrentView] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isRotating) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const startAutoRotate = () => {
    setIsRotating(true);
    const interval = setInterval(() => {
      setCurrentView((prev) => (prev + 1) % views.length);
    }, 100);
    return () => clearInterval(interval);
  };

  const stopAutoRotate = () => {
    setIsRotating(false);
  };

  return (
    <div className="relative">
      {/* Main Viewer */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[500px] w-full perspective bg-gray-100 rounded-xl overflow-hidden"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            scale: zoom,
            transformStyle: "preserve-3d"
          }}
          className="w-full h-full"
        >
          {/* Product Image */}
          <div className="relative w-full h-full">
            <Image
              src={views[currentView].image}
              alt={`${name} - View ${currentView + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
          <button
            onClick={() => setCurrentView((prev) => (prev - 1 + views.length) % views.length)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onMouseEnter={startAutoRotate}
            onMouseLeave={stopAutoRotate}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <RotateCw className="h-5 w-5" />
          </button>

          <button
            onClick={() => setCurrentView((prev) => (prev + 1) % views.length)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="w-px h-6 bg-gray-300" />

          <button
            onClick={() => setZoom((prev) => Math.min(prev + 0.25, 2))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ZoomIn className="h-5 w-5" />
          </button>

          <button
            onClick={() => setZoom((prev) => Math.max(prev - 0.25, 0.5))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features List */}
      {features && (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-medium">
                {index + 1}
              </span>
              <span className="text-gray-600">{feature}</span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
} 