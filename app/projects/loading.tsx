import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="pt-20">
      {/* Header Skeleton */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-12 w-2/3 mb-4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filter Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
          </div>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full aspect-[4/3] rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 