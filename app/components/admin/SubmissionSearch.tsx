"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SubmissionSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const status = searchParams.get("status") || "";

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q") as string;
    const status = formData.get("status") as string;

    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (status) params.set("status", status);
    
    router.push(`/admin/submissions?${params.toString()}`);
  };

  const clearSearch = () => {
    router.push("/admin/submissions");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-lg shadow-sm mb-6"
    >
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Input
              name="q"
              placeholder="Search by name, email, or subject..."
              defaultValue={query}
              className="pl-10"
            />
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1 sm:flex-none">
              <select
                name="status"
                defaultValue={status}
                className="w-full sm:w-auto appearance-none pl-10 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="replied">Replied</option>
                <option value="spam">Spam</option>
              </select>
              <Filter className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <Button type="submit" variant="primary" className="w-full sm:w-24">
              Search
            </Button>
            <AnimatePresence>
              {(query || status) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={clearSearch}
                    className="w-full sm:w-auto"
                  >
                    <X className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Clear</span>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </motion.div>
  );
} 