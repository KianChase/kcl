"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Shield, PenTool, Clock, Star } from "lucide-react";
import { BRAND } from "@/constants/brand";

const features = [
  {
    title: "Premium Quality",
    description: "Using only the highest grade stainless steel and professional components",
    icon: Star,
    image: "/features/quality.jpg"
  },
  {
    title: "Custom Solutions",
    description: "Tailored designs to maximize your kitchen's efficiency",
    icon: PenTool,
    image: "/features/custom.jpg"
  },
  {
    title: "Fast Installation",
    description: "Professional installation with minimal disruption",
    icon: Clock,
    image: "/features/installation.jpg"
  },
  {
    title: "Lifetime Support",
    description: "Comprehensive warranty and maintenance services",
    icon: Shield,
    image: "/features/support.jpg"
  }
];

export default function FeaturesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.feature-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Why Choose Kitchen Commercial Limited
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of craftsmanship, technology, and service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-item opacity-0 transition-all duration-700 delay-[var(--delay)]"
              style={{ '--delay': `${index * 200}ms` } as any}
            >
              <div className="group relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/75 via-red-900/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <feature.icon className="h-6 w-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-100">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 