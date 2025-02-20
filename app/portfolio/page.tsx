"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { BRAND } from "@/constants/brand";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const categories = [
  { name: "All", count: 6 },
  { name: "Hospitality", count: 3 },
  { name: "Educational", count: 2 },
  { name: "Corporate", count: 1 }
];

const portfolioProjects = [
  {
    title: "Utalii College Training Kitchen",
    description: "Complete kitchen setup for Kenya's premier hospitality training institution",
    image: "/images/projects/utalii.jpg",
    category: "Educational",
    location: "Nairobi, Kenya",
    year: "2023",
    href: "/projects/utalii-college"
  },
  {
    title: "Serena Hotel Commercial Kitchen",
    description: "High-capacity commercial kitchen installation for luxury hotel chain",
    image: "/images/projects/serena.jpg",
    category: "Hospitality",
    location: "Kampala, Uganda",
    year: "2023",
    href: "/projects/serena-hotel"
  },
  {
    title: "Safari Park Hotel Kitchen Upgrade",
    description: "Modernization of existing kitchen facilities with state-of-the-art equipment",
    image: "/images/projects/safari.jpg",
    category: "Hospitality",
    location: "Nairobi, Kenya",
    year: "2022",
    href: "/projects/safari-park"
  },
  {
    title: "Mount Kenya University Culinary Lab",
    description: "State-of-the-art culinary training facility for hospitality students",
    image: "/images/projects/mku.jpg",
    category: "Educational",
    location: "Thika, Kenya",
    year: "2022",
    href: "/projects/mku-culinary"
  },
  {
    title: "Radisson Blu Hotel Kitchen",
    description: "Complete kitchen installation for new luxury hotel property",
    image: "/images/projects/radisson.jpg",
    category: "Hospitality",
    location: "Kigali, Rwanda",
    year: "2022",
    href: "/projects/radisson-kigali"
  },
  {
    title: "KCB Leadership Centre Kitchen",
    description: "Modern kitchen facility for corporate training center",
    image: "/images/projects/kcb.jpg",
    category: "Corporate",
    location: "Karen, Kenya",
    year: "2021",
    href: "/projects/kcb-leadership"
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = portfolioProjects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="pt-20">
      <PageHeader
        title="Our Portfolio"
        description={`Explore ${BRAND.name}'s showcase of exceptional commercial kitchen installations. Each project demonstrates our commitment to quality, innovation, and client satisfaction.`}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-medium">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.name
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
} 