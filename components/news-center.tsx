"use client"

import { useState } from "react"
import { Search, Filter, Calendar, User, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"

// Expanded mock news data with historical entries
const mockNews = [
  // 2025 News
  {
    id: 1,
    title: "Rilis Aplikasi Dapodik Versi 2026",
    excerpt:
      "Yth. Bapak/Ibu Kepala Dinas Pendidikan Provinsi, Kepala Dinas Pendidikan Kabupaten/Kota, Kepala BBPMP dan BPMP, Kepala Satuan Pendidikan PAUD, SD, SMP, SMA, SMK, PKBM, SKB dan SLB di seluruh Indonesia...",
    date: "21 Juli 2025",
    year: "2025",
    month: "Juli",
    author: "Admin",
    category: "Aplikasi Dapodik",
    image: "/images/dapodik-2025c-logo.png",
    slug: "rilis-aplikasi-dapodik-versi-2026",
  },
  {
    id: 2,
    title: "Penerapan Otentifikasi Ganda pada Single Sign-On (SSO) Dapodik",
    excerpt:
      "Dalam rangka meningkatkan keamanan sistem informasi Dapodik, mulai tanggal 1 Agustus 2025 akan diterapkan sistem otentifikasi ganda (Two-Factor Authentication) pada semua akses SSO Dapodik...",
    date: "20 Juni 2025",
    year: "2025",
    month: "Juni",
    author: "Admin",
    category: "Informasi",
    image: "/images/dapodik-2025c-logo.png",
    slug: "penerapan-otentifikasi-ganda-sso-dapodik",
  },
  {
    id: 3,
    title: "Pengelolaan Ijazah Jenjang Pendidikan Dasar dan Pendidikan Menengah",
    excerpt:
      "Sehubungan dengan pengelolaan ijazah untuk jenjang pendidikan dasar dan menengah, dengan ini disampaikan beberapa hal penting yang perlu diperhatikan oleh seluruh satuan pendidikan...",
    date: "30 April 2025",
    year: "2025",
    month: "April",
    author: "Admin",
    category: "Informasi",
    image: "/images/dapodik-2025c-logo.png",
    slug: "pengelolaan-ijazah-pendidikan-dasar-menengah",
  },
  {
    id: 4,
    title: "Rilis Aplikasi Dapodik Versi 2025.c",
    excerpt:
      "Tim pengembang Dapodik dengan bangga mengumumkan peluncuran versi terbaru aplikasi Dapodik 2025.c yang hadir dengan berbagai perbaikan dan fitur baru untuk meningkatkan pengalaman pengguna...",
    date: "11 April 2025",
    year: "2025",
    month: "April",
    author: "Admin",
    category: "Aplikasi Dapodik",
    image: "/images/dapodik-2025c-logo.png",
    slug: "rilis-aplikasi-dapodik-versi-2025-c",
  },
  {
    id: 5,
    title: "Pelaksanaan SPMB Tahun Ajaran 2025/2026",
    excerpt:
      "Dalam rangka pelaksanaan Seleksi Penerimaan Mahasiswa Baru (SPMB) untuk tahun ajaran 2025/2026, berikut ini disampaikan informasi penting mengenai jadwal dan prosedur yang harus diikuti...",
    date: "19 Maret 2025",
    year: "2025",
    month: "Maret",
    author: "Admin",
    category: "Informasi",
    image: "/images/dapodik-2025c-logo.png",
    slug: "pelaksanaan-spmb-tahun-ajaran-2025-2026",
  },

  // 2024 News
  {
    id: 6,
    title: "Evaluasi Kinerja Sistem Dapodik Tahun 2024",
    excerpt:
      "Sebagai bagian dari komitmen untuk terus meningkatkan kualitas layanan, telah dilakukan evaluasi menyeluruh terhadap kinerja sistem Dapodik sepanjang tahun 2024...",
    date: "15 Desember 2024",
    year: "2024",
    month: "Desember",
    author: "Admin",
    category: "Informasi",
    image: "/images/dapodik-2025c-logo.png",
    slug: "evaluasi-kinerja-sistem-dapodik-2024",
  },
  {
    id: 7,
    title: "Rilis Aplikasi Dapodik Versi 2024.d",
    excerpt:
      "Menjelang akhir tahun 2024, tim pengembang merilis pembaruan terakhir aplikasi Dapodik dengan berbagai penyempurnaan dan perbaikan bug yang dilaporkan pengguna...",
    date: "20 November 2024",
    year: "2024",
    month: "November",
    author: "Admin",
    category: "Aplikasi Dapodik",
    image: "/images/dapodik-2025c-logo.png",
    slug: "rilis-aplikasi-dapodik-versi-2024-d",
  },
  {
    id: 8,
    title: "Workshop Nasional Operator Dapodik 2024",
    excerpt:
      "Telah berhasil diselenggarakan Workshop Nasional Operator Dapodik 2024 yang diikuti oleh lebih dari 1000 operator dari seluruh Indonesia. Workshop ini membahas best practices dan troubleshooting...",
    date: "10 Oktober 2024",
    year: "2024",
    month: "Oktober",
    author: "Admin",
    category: "Pelatihan",
    image: "/images/dapodik-2025c-logo.png",
    slug: "workshop-nasional-operator-dapodik-2024",
  },
  {
    id: 9,
    title: "Integrasi Dapodik dengan Platform Digital Kemendikdasmen",
    excerpt:
      "Dalam upaya memperkuat ekosistem digital pendidikan, sistem Dapodik kini terintegrasi dengan berbagai platform digital lainnya di lingkungan Kemendikdasmen...",
    date: "5 September 2024",
    year: "2024",
    month: "September",
    author: "Admin",
    category: "Teknologi",
    image: "/images/dapodik-2025c-logo.png",
    slug: "integrasi-dapodik-platform-digital-kemendikdasmen",
  },
  {
    id: 10,
    title: "Panduan Persiapan Tahun Ajaran Baru 2024/2025",
    excerpt:
      "Menjelang dimulainya tahun ajaran baru 2024/2025, berikut adalah panduan lengkap untuk persiapan data dan sistem yang perlu dilakukan oleh setiap satuan pendidikan...",
    date: "15 Agustus 2024",
    year: "2024",
    month: "Agustus",
    author: "Admin",
    category: "Panduan",
    image: "/images/dapodik-2025c-logo.png",
    slug: "panduan-persiapan-tahun-ajaran-baru-2024-2025",
  },

  // 2023 News
  {
    id: 11,
    title: "Migrasi Server Dapodik ke Infrastruktur Cloud",
    excerpt:
      "Untuk meningkatkan performa dan keandalan sistem, telah dilakukan migrasi infrastruktur server Dapodik ke platform cloud computing yang lebih modern dan scalable...",
    date: "20 Desember 2023",
    year: "2023",
    month: "Desember",
    author: "Admin",
    category: "Teknologi",
    image: "/images/dapodik-2025c-logo.png",
    slug: "migrasi-server-dapodik-infrastruktur-cloud",
  },
  {
    id: 12,
    title: "Peluncuran Fitur Dashboard Analytics untuk Dinas Pendidikan",
    excerpt:
      "Fitur baru dashboard analytics kini tersedia untuk membantu dinas pendidikan dalam menganalisis data dan membuat keputusan berbasis data yang lebih akurat...",
    date: "10 November 2023",
    year: "2023",
    month: "November",
    author: "Admin",
    category: "Fitur Baru",
    image: "/images/dapodik-2025c-logo.png",
    slug: "peluncuran-fitur-dashboard-analytics-dinas-pendidikan",
  },
]

const categories = [
  "Semua",
  "Aplikasi Dapodik",
  "Informasi",
  "Panduan",
  "Pengumuman",
  "Pelatihan",
  "Teknologi",
  "Fitur Baru",
]
const years = ["Semua", "2025", "2024", "2023", "2022", "2021"]
const months = [
  "Semua",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
]

export function NewsCenter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedYear, setSelectedYear] = useState("Semua")
  const [selectedMonth, setSelectedMonth] = useState("Semua")
  const [sortBy, setSortBy] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("")
    setSelectedCategory("Semua")
    setSelectedYear("Semua")
    setSelectedMonth("Semua")
    setSortBy("newest")
    setCurrentPage(1)
  }

  // Filter and search logic
  const filteredNews = mockNews.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory
    const matchesYear = selectedYear === "Semua" || article.year === selectedYear
    const matchesMonth = selectedMonth === "Semua" || article.month === selectedMonth

    return matchesSearch && matchesCategory && matchesYear && matchesMonth
  })

  // Sort logic
  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  // Pagination logic
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedNews = sortedNews.slice(startIndex, startIndex + itemsPerPage)

  const getCategoryColor = (category: string) => {
    const colors = {
      "Aplikasi Dapodik": "bg-blue-100 text-blue-800",
      Informasi: "bg-green-100 text-green-800",
      Panduan: "bg-purple-100 text-purple-800",
      Pengumuman: "bg-orange-100 text-orange-800",
      Pelatihan: "bg-pink-100 text-pink-800",
      Teknologi: "bg-indigo-100 text-indigo-800",
      "Fitur Baru": "bg-cyan-100 text-cyan-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  // Check if any filters are active
  const hasActiveFilters =
    searchTerm !== "" || selectedCategory !== "Semua" || selectedYear !== "Semua" || selectedMonth !== "Semua"

  // Generate results summary
  const getResultsSummary = () => {
    let summary = `Menampilkan ${paginatedNews.length} dari ${filteredNews.length} berita`

    if (selectedYear !== "Semua" && selectedMonth !== "Semua") {
      summary += ` dari arsip ${selectedMonth} ${selectedYear}`
    } else if (selectedYear !== "Semua") {
      summary += ` dari arsip tahun ${selectedYear}`
    } else if (selectedMonth !== "Semua") {
      summary += ` dari bulan ${selectedMonth}`
    }

    if (selectedCategory !== "Semua") {
      summary += ` dalam kategori "${selectedCategory}"`
    }

    return summary
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Beranda
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Pusat Berita & Arsip</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Pusat Berita & Arsip Dapodik</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Informasi terbaru dan arsip lengkap berita, pengumuman, serta update sistem Data Pokok Pendidikan Indonesia
        </p>
      </div>

      {/* Comprehensive Control Panel */}
      <Card className="mb-8 shadow-lg border-2 border-blue-100">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Search Bar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cari Berita</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Cari berdasarkan judul atau konten berita..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tahun Arsip</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Month Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bulan Arsip</label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urutkan</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Terbaru</SelectItem>
                    <SelectItem value="oldest">Terlama</SelectItem>
                    <SelectItem value="title">Judul A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <Button
                onClick={resetFilters}
                variant="outline"
                className="flex items-center gap-2 h-12 px-6 bg-transparent"
                disabled={!hasActiveFilters}
              >
                <RotateCcw className="h-4 w-4" />
                Reset Filter & Tampilkan Berita Terbaru
              </Button>

              {hasActiveFilters && (
                <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                  <Filter className="h-4 w-4" />
                  <span>Filter aktif diterapkan</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Enhanced Results Summary */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <p className="text-gray-600 text-base">{getResultsSummary()}</p>
          {(selectedYear !== "Semua" || selectedMonth !== "Semua") && (
            <p className="text-sm text-blue-600 mt-1">📁 Mode Arsip: Menampilkan berita dari periode yang dipilih</p>
          )}
        </div>

        {filteredNews.length > 0 && (
          <div className="text-sm text-gray-500">
            Halaman {currentPage} dari {totalPages}
          </div>
        )}
      </div>

      {/* News Grid */}
      {paginatedNews.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <div className="text-gray-400 mb-4">
              <Search className="h-20 w-20 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Tidak ada berita ditemukan</h3>
            <p className="text-gray-500 mb-6">
              {hasActiveFilters
                ? "Coba ubah kriteria pencarian, kategori, atau periode arsip yang dipilih"
                : "Belum ada berita yang tersedia untuk periode ini"}
            </p>
            {hasActiveFilters && (
              <Button onClick={resetFilters} className="bg-blue-600 hover:bg-blue-700">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Semua Filter
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedNews.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/images/dapodik-2025c-logo.png"}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                </div>
                {(selectedYear !== "Semua" || selectedMonth !== "Semua") && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-700">
                      📁 Arsip
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link href={`/berita/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                </div>

                <Link href={`/berita/${article.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    Baca Selengkapnya
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="h-4 w-4" />
              Sebelumnya
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }

                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                    className={currentPage === pageNum ? "bg-blue-600" : ""}
                  >
                    {pageNum}
                  </Button>
                )
              })}

              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="px-2 text-gray-500">...</span>
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(totalPages)}>
                    {totalPages}
                  </Button>
                </>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              Selanjutnya
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-sm text-gray-500">Total: {filteredNews.length} berita</div>
        </div>
      )}
    </div>
  )
}
