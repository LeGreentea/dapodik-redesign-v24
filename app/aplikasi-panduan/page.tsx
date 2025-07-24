import { Suspense } from "react"
import { ResourceCenter } from "@/components/resource-center"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AplikasiPanduanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ResourceCenter />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
