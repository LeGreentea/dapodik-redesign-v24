import { Navigation } from "@/components/navigation"
import { HeroSearch } from "@/components/hero-search"
import { StatsCards } from "@/components/stats-cards"
import { DataVisualization } from "@/components/data-visualization"
import { QuickAccess } from "@/components/quick-access"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSearch />
        <StatsCards />
        <QuickAccess />
        <DataVisualization />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
