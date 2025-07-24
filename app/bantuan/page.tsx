import { Suspense } from "react"
import { HelpCenter } from "@/components/help-center"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BantuanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <HelpCenter />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
