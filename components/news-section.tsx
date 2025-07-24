import { Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    title: "Penerapan Otentifikasi Ganda pada Single Sign-On (SSO) Dapodik",
    excerpt:
      "Yth. Bapak/Ibu Kepala Dinas Pendidikan Provinsi, Kepala Dinas Pendidikan Kabupaten/Kota, Kepala BBPMP dan BPMP...",
    date: "20 Juni 2025",
    author: "Admin",
    category: "Informasi",
    image: "/images/dapodik-2025c-logo.png",
  },
  {
    title: "Pengelolaan Ijazah Jenjang Pendidikan Dasar dan Pendidikan Menengah",
    excerpt:
      "Yth. Bapak/Ibu Kepala Dinas Pendidikan Provinsi, Kepala Dinas Pendidikan Kabupaten/Kota, Kepala BBPMP dan BPMP...",
    date: "30 April 2025",
    author: "Admin",
    category: "Informasi",
    image: "/images/dapodik-2025c-logo.png",
  },
  {
    title: "Rilis Aplikasi Dapodik Versi 2025.c",
    excerpt:
      "Yth. Bapak/Ibu Kepala Dinas Pendidikan Provinsi, Kepala Dinas Pendidikan Kabupaten/Kota, Kepala BBPMP dan BPMP...",
    date: "11 April 2025",
    author: "Admin",
    category: "Aplikasi Dapodik",
    image: "/images/dapodik-2025c-logo.png",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">Berita Terbaru</h2>
          <p className="text-gray-600 text-lg">Informasi dan pengumuman terkini seputar Dapodik</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 border border-gray-100 hover:-translate-y-1 card-gradient"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={item.image || "/images/dapodik-2025c-logo.png"}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="w-full sm:w-48 h-32 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {item.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800 transition-colors">
                    Baca Selengkapnya →
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg hover:shadow-xl transition-all">
              <Link href="/berita">Lihat Semua Berita & Arsip</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
