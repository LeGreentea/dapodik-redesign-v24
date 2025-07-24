import { School, Users, GraduationCap, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Sekolah",
    value: "441.923",
    icon: School,
    color: "bg-blue-500",
    description: "Sekolah terdaftar",
  },
  {
    title: "Peserta Didik",
    value: "52.722.146",
    icon: Users,
    color: "bg-green-500",
    description: "Siswa aktif",
  },
  {
    title: "Guru",
    value: "3.445.396",
    icon: GraduationCap,
    color: "bg-purple-500",
    description: "Guru aktif",
  },
  {
    title: "Rombel",
    value: "2.470.870",
    icon: BookOpen,
    color: "bg-orange-500",
    description: "Rombongan belajar",
  },
]

export function StatsCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Statistik Pendidikan Nasional
          </h2>
          <p className="text-gray-600 text-lg">Data terkini semester 2024/2025 Genap per 19 Juli 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  index < 2 ? "shadow-lg ring-2 ring-blue-100" : "shadow-md"
                }`}
              >
                <CardContent className="p-6 card-gradient">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-600 font-medium mb-1">{stat.title}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
