import { Navigation } from "@/components/navigation"
import { NewsCenter } from "@/components/news-center"
import { Footer } from "@/components/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <NewsCenter />
      </main>
      <Footer />
    </div>
  )
}
