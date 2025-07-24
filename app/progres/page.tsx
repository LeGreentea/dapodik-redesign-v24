import { Navigation } from "@/components/navigation"
import { ProgressDashboard } from "@/components/progress-dashboard"
import { Footer } from "@/components/footer"

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <ProgressDashboard />
      </main>
      <Footer />
    </div>
  )
}
