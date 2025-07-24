export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Skeleton */}
      <div className="bg-blue-600 h-20 animate-pulse" />

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-lg w-96 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-64 mx-auto mb-8 animate-pulse" />
          <div className="h-14 bg-gray-200 rounded-lg max-w-2xl mx-auto animate-pulse" />
        </div>

        {/* Category Cards Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4" />
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          ))}
        </div>

        {/* FAQ Section Skeleton */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="h-8 bg-gray-200 rounded w-64 mb-8 animate-pulse" />
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section Skeleton */}
        <div className="bg-white rounded-xl p-8 shadow-sm animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8" />
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" />
                <div className="h-6 bg-gray-200 rounded w-24 mx-auto mb-2" />
                <div className="h-4 bg-gray-200 rounded w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
