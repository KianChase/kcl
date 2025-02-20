"use client";

import { RotatingCard } from "@/components/ui/rotating-card";

const products = [
  {
    title: "Commercial Kitchen Design",
    description: "Custom solutions for high-performance commercial kitchens",
    image: "/images/products/kitchen-design.jpg",
    features: [
      "3D visualization",
      "Workflow optimization",
      "Space planning",
      "Equipment selection"
    ],
    link: "/services/kitchen-design"
  },
  {
    title: "Stainless Steel Fabrication",
    description: "Premium quality custom stainless steel equipment",
    image: "/images/products/fabrication.jpg",
    features: [
      "Custom dimensions",
      "Professional grade materials",
      "Expert craftsmanship",
      "Quality assurance"
    ],
    link: "/services/fabrication"
  },
  {
    title: "Equipment Installation",
    description: "Professional installation and setup services",
    image: "/images/products/installation.jpg",
    features: [
      "Expert team",
      "Safety compliance",
      "Efficiency testing",
      "Post-installation support"
    ],
    link: "/services/installation"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of commercial kitchen solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <RotatingCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
} 