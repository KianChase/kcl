import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="h-[70vh] relative">
        <div className="absolute inset-0 bg-gray-900">
          <Skeleton className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <div className="pt-24">
            <Skeleton className="w-32 h-6" />
          </div>

          {/* Project Title */}
          <div className="absolute bottom-24 max-w-2xl">
            <Skeleton className="w-24 h-6 mb-4" />
            <Skeleton className="w-full h-12 mb-4" />
            <Skeleton className="w-3/4 h-8" />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 -mt-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {/* Project Info */}
          <div className="grid grid-cols-3 gap-8 mb-12 border-b pb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-6 h-6 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="w-20 h-4 mb-2" />
                  <Skeleton className="w-32 h-5" />
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
            ))}
          </div>

          {/* Project Highlights */}
          <div>
            <Skeleton className="w-48 h-8 mb-6" />
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-14 rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Skeleton className="w-64 h-8 mx-auto mb-4" />
          <Skeleton className="w-96 h-6 mx-auto mb-8" />
          <Skeleton className="w-48 h-12 mx-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
} 