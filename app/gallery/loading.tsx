import { Skeleton } from "@/components/ui/skeleton";

export default function GalleryLoading() {
  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-12 w-2/3 mb-4" />
          <Skeleton className="h-6 w-1/2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {[1, 2, 3].map((section) => (
          <div key={section} className="mb-16">
            <Skeleton className="h-8 w-48 mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-4">
                  <Skeleton className="w-full aspect-[4/3] rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 