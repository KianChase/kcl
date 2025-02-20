"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/constants/brand";
import { BlogList } from "@/components/sections/BlogList";
import { formatDistanceToNow } from "date-fns";
import type { BlogPost } from "@/types/blog";

// Featured post type
interface FeaturedPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: Date;
  readingTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

// Sample featured post
const featuredPost: FeaturedPost = {
  slug: "commercial-kitchen-trends-2024",
  title: "Commercial Kitchen Trends That Will Define 2024",
  excerpt: "Discover the latest innovations and design trends shaping the future of commercial kitchens. From smart equipment to sustainable solutions, learn what's driving the industry forward.",
  coverImage: "/blog/featured/trends-2024.jpg",
  category: "Industry Trends",
  publishedAt: new Date("2024-03-01"),
  readingTime: "8 min read",
  author: {
    name: "David Kimani",
    avatar: "/team/david.jpg",
    role: "Head of Design"
  }
};

const categories = [
  { name: "All", count: 45 },
  { name: "Industry Trends", count: 12 },
  { name: "Equipment", count: 15 },
  { name: "Design", count: 8 },
  { name: "Maintenance", count: 10 }
];

// Sample blog posts
const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "Essential Equipment for a Commercial Kitchen",
    slug: "essential-equipment-commercial-kitchen",
    excerpt: "A comprehensive guide to the must-have equipment for any commercial kitchen setup.",
    content: "",
    coverImage: "/blog/equipment-guide.jpg",
    category: "Equipment",
    author: {
      name: "John Mwangi",
      avatar: "/team/john.jpg",
      role: "Equipment Specialist"
    },
    publishedAt: new Date("2024-02-15"),
    readingTime: "6 min read",
    tags: ["equipment", "kitchen setup", "commercial kitchen"]
  },
  {
    id: "2",
    title: "Sustainable Kitchen Practices",
    slug: "sustainable-kitchen-practices",
    excerpt: "Learn how to implement eco-friendly practices in your commercial kitchen.",
    content: "",
    coverImage: "/blog/sustainability.jpg",
    category: "Industry Trends",
    author: {
      name: "Sarah Wanjiku",
      avatar: "/team/sarah.jpg",
      role: "Sustainability Consultant"
    },
    publishedAt: new Date("2024-02-20"),
    readingTime: "5 min read",
    tags: ["sustainability", "eco-friendly", "green kitchen"]
  },
  {
    id: "3",
    title: "Kitchen Layout Optimization",
    slug: "kitchen-layout-optimization",
    excerpt: "Tips and strategies for maximizing efficiency in your kitchen layout.",
    content: "",
    coverImage: "/blog/layout-design.jpg",
    category: "Design",
    author: {
      name: "David Kimani",
      avatar: "/team/david.jpg",
      role: "Head of Design"
    },
    publishedAt: new Date("2024-02-25"),
    readingTime: "7 min read",
    tags: ["design", "layout", "efficiency"]
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search and category
  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || 
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section with Featured Post */}
      <section className="relative h-[70vh] bg-gray-900 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={featuredPost.coverImage}
            alt="Featured post cover"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-red-600 text-sm font-medium rounded-full mb-4">
              Featured Article
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {featuredPost.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{featuredPost.author.name}</p>
                  <p className="text-sm text-gray-400">{featuredPost.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDistanceToNow(featuredPost.publishedAt, { addSuffix: true })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readingTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category.name
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <BlogList posts={filteredPosts} />

        {/* Newsletter Section */}
        <section className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for expert tips, industry trends, and exclusive content 
              about commercial kitchen design and equipment.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
} 