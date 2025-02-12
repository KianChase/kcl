"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";

const products = [
  {
    category: "Cooking Equipment",
    items: [
      {
        name: "Commercial Gas Range",
        description: "Professional-grade stainless steel gas range with multiple burners",
        image: "/products/gas-range.jpg",
        features: ["Heavy-duty construction", "High-efficiency burners", "Adjustable feet", "Safety features"],
        rating: 4.9
      },
      {
        name: "Industrial Oven",
        description: "High-capacity commercial oven for bakeries and restaurants",
        image: "/products/oven.jpg",
        features: ["Digital controls", "Multiple racks", "Energy efficient", "Even heat distribution"],
        rating: 4.8
      }
    ]
  },
  {
    category: "Preparation Stations",
    items: [
      {
        name: "Work Tables",
        description: "Custom stainless steel work tables with storage",
        image: "/products/work-table.jpg",
        features: ["Adjustable shelving", "Heavy gauge steel", "Customizable size", "Built-in storage"],
        rating: 4.9
      },
      {
        name: "Prep Counter",
        description: "Refrigerated preparation counter with cutting surface",
        image: "/products/prep-counter.jpg",
        features: ["Temperature control", "Cutting board top", "Under-counter storage", "Easy cleaning"],
        rating: 4.7
      }
    ]
  },
  {
    category: "Storage Solutions",
    items: [
      {
        name: "Walk-in Cooler",
        description: "Custom-built walk-in refrigeration units",
        image: "/products/cooler.jpg",
        features: ["Digital monitoring", "High efficiency", "Custom sizes", "Easy access"],
        rating: 4.8
      },
      {
        name: "Storage Shelving",
        description: "Heavy-duty adjustable storage systems",
        image: "/products/shelving.jpg",
        features: ["Modular design", "Rust resistant", "Easy assembly", "High capacity"],
        rating: 4.9
      }
    ]
  }
];

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const currentProducts = products[selectedCategory].items;
  const currentProduct = currentProducts[selectedProduct];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium quality commercial kitchen equipment, custom-made in Kenya
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Categories */}
          <div className="lg:col-span-3">
            <div className="space-y-2">
              {products.map((category, index) => (
                <button
                  key={category.category}
                  onClick={() => {
                    setSelectedCategory(index);
                    setSelectedProduct(0);
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedCategory === index
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{category.category}</span>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      selectedCategory === index ? "rotate-90" : ""
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Display */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedCategory}-${selectedProduct}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Product Details */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(currentProduct.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {currentProduct.rating.toFixed(1)}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {currentProduct.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentProduct.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold">Key Features</h4>
                  <ul className="space-y-2">
                    {currentProduct.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="/consultation"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Get Quote
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Product Navigation */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {currentProducts.map((product, index) => (
                <button
                  key={product.name}
                  onClick={() => setSelectedProduct(index)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedProduct === index
                      ? "border-gray-900 bg-gray-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-medium">{product.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 