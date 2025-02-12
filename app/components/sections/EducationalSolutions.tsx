"use client";

import Image from "next/image";
import { GraduationCap, Users, Layout, PenTool } from "lucide-react";
import { BRAND } from "@/constants/brand";

const educationalFeatures = [
  {
    title: "Training Stations",
    description: "Individual workstations designed for hands-on culinary education, complete with all necessary equipment.",
    icon: GraduationCap,
    details: [
      "Individual gas and electric points",
      "Personal prep areas",
      "Integrated storage space",
      "Safety features"
    ]
  },
  {
    title: "Group Learning Spaces",
    description: "Specialized areas for group demonstrations and collaborative cooking sessions.",
    icon: Users,
    details: [
      "Demonstration counters",
      "Overhead mirrors",
      "Student viewing areas",
      "Audio-visual integration"
    ]
  },
  {
    title: "Practical Layout",
    description: "Optimized kitchen layouts that facilitate both learning and practical service operations.",
    icon: Layout,
    details: [
      "Efficient workflow design",
      "Clear sight lines",
      "Easy instructor access",
      "Multiple cooking zones"
    ]
  },
  {
    title: "Professional Equipment",
    description: "Industry-standard equipment that prepares students for real-world kitchen environments.",
    icon: PenTool,
    details: [
      "Commercial-grade appliances",
      "Specialized cooking equipment",
      "Industry-standard tools",
      "Safety systems"
    ]
  }
];

const installations = [
  {
    name: "Top Catering College",
    location: "Nairobi",
    capacity: "200 students",
    image: "https://images.unsplash.com/photo-1588544644883-8aa1ff8c0e48?q=80&w=2000",
    features: "24 individual stations, demonstration kitchen, specialized training areas"
  },
  {
    name: "Hospitality Training Institute",
    location: "Mombasa",
    capacity: "150 students",
    image: "https://images.unsplash.com/photo-1567159644489-31c8e01c57de?q=80&w=2000",
    features: "Modern training facility, specialized equipment, practical service areas"
  },
  {
    name: "Culinary Arts Academy",
    location: "Kisumu",
    capacity: "100 students",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000",
    features: "Professional setup, industry-standard equipment, practical training zones"
  }
];

export default function EducationalSolutions() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Educational Kitchen Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {BRAND.name}&apos;s specialized solutions for culinary education institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {educationalFeatures.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm">
              <feature.icon className={`h-12 w-12 text-[${BRAND.theme.colors.primary.DEFAULT}] mb-4`} />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="text-sm text-gray-600 flex items-center">
                    <span className={`w-1.5 h-1.5 bg-[${BRAND.theme.colors.accent.DEFAULT}] rounded-full mr-2`}></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Educational Installations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installations.map((installation) => (
              <div key={installation.name} className="border border-gray-100 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={installation.image}
                    alt={installation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{installation.name}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>📍 {installation.location}</p>
                    <p>👥 {installation.capacity}</p>
                    <p>✨ {installation.features}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/consultation"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Plan Your Educational Kitchen
          </a>
        </div>
      </div>
    </section>
  );
} 