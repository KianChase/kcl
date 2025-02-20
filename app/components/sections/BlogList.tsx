"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogListProps {
  posts: BlogPost[];
  featured?: boolean;
}

export function BlogList({ posts, featured = false }: BlogListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readingTime}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(post.publishedAt, { addSuffix: true })}
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
} 