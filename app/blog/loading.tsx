import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="pt-20">
      {/* Hero Section Skeleton */}
      <section className="relative h-[70vh] bg-gray-900">
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="max-w-3xl">
            <Skeleton className="h-8 w-32 mb-4" />
            <Skeleton className="h-16 w-full mb-4" />
            <Skeleton className="h-24 w-full mb-6" />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <Skeleton className="h-10 flex-1" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="w-full aspect-[16/9] rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <div className="flex items-center gap-4">
                <Skeleton className="w-8 h-8 rounded-full" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 