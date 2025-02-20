"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseEnter = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const isClickable = e.target.matches('a, button, input, [role="button"]');
        setIsHovering(isClickable);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseEnter);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: mousePosition.x - (isHovering ? 24 : 16),
            y: mousePosition.y - (isHovering ? 24 : 16),
            scale: isHovering ? 1.5 : 1,
            opacity: 1
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        >
          <div className="w-8 h-8 bg-white rounded-full blur-sm" />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 