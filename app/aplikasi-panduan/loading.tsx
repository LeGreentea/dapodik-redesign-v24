export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Skeleton */}
      <div className="bg-blue-600 h-20 animate-pulse" />

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Skeleton */}
        <div className="bg-white border-b mb-8">
          <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-lg w-96 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse" />
        </div>

        {/* Tabs Skeleton */}
        <div className="flex space-x-1 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded-lg w-32 animate-pulse" />
          ))}
        </div>

        {/* Content Area Skeleton */}
        <div className="space-y-6">
          {/* Main Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm animate-pulse">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-200 rounded-lg" />
              <div className="flex-1">
                <div className="h-8 bg-gray-200 rounded w-64 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-48 mb-4" />
                <div className="flex gap-4">
                  <div className="h-12 bg-gray-200 rounded w-32" />
                  <div className="h-12 bg-gray-200 rounded w-32" />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-10 bg-gray-200 rounded w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
