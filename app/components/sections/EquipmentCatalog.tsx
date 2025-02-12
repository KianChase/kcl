"use client";

import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Professional Equipment",
    items: [
      {
        name: "Commercial Kitchen Setups",
        description: "Complete kitchen installations for institutions and hotels",
        image: "/equipment/commercial-kitchen.jpg",
        features: [
          "Industrial-grade equipment",
          "Custom configurations",
          "Space optimization",
          "Professional standards"
        ]
      },
      {
        name: "Demonstration Kitchens",
        description: "Professional demonstration facilities for institutions",
        image: "/equipment/demo-kitchen.jpg",
        features: [
          "Professional setup",
          "Efficient workflow",
          "Quality equipment",
          "Durable installation"
        ]
      }
    ]
  },
  {
    name: "Specialized Solutions",
    items: [
      {
        name: "Custom Fabrications",
        description: "Bespoke stainless steel solutions for specific requirements",
        image: "/equipment/custom.jpg",
        features: [
          "Custom dimensions",
          "Specific requirements",
          "Quality materials",
          "Professional finish"
        ]
      },
      {
        name: "Storage Systems",
        description: "Professional storage solutions for commercial kitchens",
        image: "/equipment/storage.jpg",
        features: [
          "Modular design",
          "Temperature control",
          "Easy access",
          "Hygiene standards"
        ]
      }
    ]
  }
];

export default function EquipmentCatalog() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Professional Equipment Catalog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our range of professional-grade kitchen equipment designed for educational and commercial use.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">{category.name}</h3>
              <Link 
                href={`/equipment/${category.name.toLowerCase().replace(" ", "-")}`}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div key={item.name} className="group">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <Link
            href="/consultation"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Request Equipment Specifications
          </Link>
        </div>
      </div>
    </section>
  );
} 