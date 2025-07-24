import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HeroSearch() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
      {/* Hero pattern overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Subtle decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Cari Data Pendidikan Indonesia</h2>
        <p className="text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
          Portal data terpadu untuk pendidikan di seluruh Indonesia
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-xl border border-white/20">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Cari data sekolah, NPSN, atau wilayah..."
                className="pl-12 h-14 text-lg border-0 focus-visible:ring-0 text-gray-900 bg-transparent"
              />
            </div>
            <Button
              size="lg"
              className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Cari Data
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-blue-200">Coba cari:</span>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm border border-white/30 backdrop-blur-sm transition-all hover:scale-105">
              SD Jakarta
            </button>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm border border-white/30 backdrop-blur-sm transition-all hover:scale-105">
              SMP Bandung
            </button>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm border border-white/30 backdrop-blur-sm transition-all hover:scale-105">
              Data Guru
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
