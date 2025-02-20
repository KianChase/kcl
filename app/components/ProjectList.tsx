"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

interface ProjectListProps {
  projects: Project[];
  categories: string[];
}

export function ProjectList({ projects, categories }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = projects.filter(p => p.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Filter className="h-5 w-5 text-gray-400" />
          <h2 className="text-lg font-medium">Filter by Category</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === "All"
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All ({projects.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category} ({categoryCounts[category]})
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
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard 
              {...project} 
              href={`/projects/${project.slug}`}
            />
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
  );
} 