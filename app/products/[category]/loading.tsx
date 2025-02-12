import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="pt-24">
      {/* Hero section skeleton */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4">
            <Skeleton className="h-6 w-48" />
          </div>
          
          <div className="py-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <Skeleton className="h-12 w-3/4 mb-4" />
              <Skeleton className="h-20 w-full" />
            </div>
            <div className="w-full md:w-1/3">
              <Skeleton className="w-full aspect-[4/3] rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Products grid skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <Skeleton className="w-full h-64" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-16 w-full" />
                    <div className="grid grid-cols-2 gap-4">
                      <Skeleton className="h-6" />
                      <Skeleton className="h-6" />
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <Skeleton key={j} className="h-4 w-full" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry form skeleton */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Skeleton className="h-8 w-1/2 mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-32 w-full" />
                </div>
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 