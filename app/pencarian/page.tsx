import { Navigation } from "@/components/navigation"
import { SearchResults } from "@/components/search-results"
import { Footer } from "@/components/footer"

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <SearchResults />
      </main>
      <Footer />
    </div>
  )
}
