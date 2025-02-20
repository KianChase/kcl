import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/projects">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="primary">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 