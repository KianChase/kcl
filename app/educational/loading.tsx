export default function EducationalLoading() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="animate-pulse space-y-8">
          {/* Hero Section Placeholder */}
          <div className="h-[60vh] bg-gray-200 rounded-lg" />
          
          {/* Content Placeholders */}
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
          
          {/* Features Grid Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 