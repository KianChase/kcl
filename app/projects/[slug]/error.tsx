"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ProjectError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We encountered an error while loading this project. Please try again or return to the projects page.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={reset}
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Link href="/projects">
            <Button variant="primary" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 