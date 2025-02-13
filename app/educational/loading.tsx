import { Skeleton } from "@/components/ui/skeleton";

export default function EducationalLoading() {
  return (
    <div className="pt-20">
      {/* Hero Section Skeleton */}
      <div className="h-[60vh] bg-gray-900 flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-12 w-2/3 mb-4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </div>

      {/* Content Skeleton */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-20 w-full" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <Skeleton className="h-6 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((j) => (
                        <Skeleton key={j} className="h-4 w-full" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Skeleton className="h-[600px] rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
} 