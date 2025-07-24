"use client"

import type React from "react"

import { useState } from "react"
import {
  Search,
  MessageCircleQuestion,
  Wrench,
  BookOpen,
  Headphones,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const helpCategories = [
  {
    icon: MessageCircleQuestion,
    title: "FAQ (Tanya Jawab)",
    description: "Temukan jawaban untuk pertanyaan yang paling umum",
    color: "bg-blue-50 text-blue-600",
    href: "#faq",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description: "Solusi untuk kendala teknis dan pesan error",
    color: "bg-red-50 text-red-600",
    href: "#troubleshooting",
  },
  {
    icon: BookOpen,
    title: "Panduan Penggunaan",
    description: "Akses dokumentasi dan panduan lengkap",
    color: "bg-green-50 text-green-600",
    href: "/aplikasi-panduan",
  },
  {
    icon: Headphones,
    title: "Kontak Helpdesk",
    description: "Hubungi tim dukungan kami untuk bantuan lebih lanjut",
    color: "bg-purple-50 text-purple-600",
    href: "#contact",
  },
]

const popularFAQs = [
  {
    question: "Bagaimana cara reset password akun Dapodik?",
    answer:
      "Untuk reset password: 1) Klik 'Lupa Password' di halaman login, 2) Masukkan email yang terdaftar, 3) Cek email untuk link reset, 4) Ikuti instruksi di email untuk membuat password baru. Pastikan password minimal 8 karakter dengan kombinasi huruf dan angka.",
  },
  {
    question: "Mengapa data siswa saya tidak valid saat sinkronisasi?",
    answer:
      "Data siswa tidak valid biasanya karena: 1) NISN tidak sesuai dengan data di server pusat, 2) Tanggal lahir tidak cocok, 3) Nama tidak sesuai format, 4) Data orang tua tidak lengkap. Periksa validasi lokal terlebih dahulu dan perbaiki data yang berwarna merah.",
  },
  {
    question: "Bagaimana cara menambahkan GTK (Guru dan Tenaga Kependidikan) baru?",
    answer:
      "Untuk menambah GTK baru: 1) Pastikan Anda memiliki hak akses sebagai operator sekolah, 2) Masuk ke menu GTK, 3) Klik 'Tambah GTK', 4) Isi semua data yang diperlukan dengan lengkap, 5) Simpan dan lakukan sinkronisasi. Catatan: Beberapa wilayah memiliki pembatasan penambahan GTK.",
  },
  {
    question: "Kenapa aplikasi Dapodik tidak bisa dibuka atau error saat startup?",
    answer:
      "Jika aplikasi tidak bisa dibuka: 1) Pastikan service Dapodik berjalan (cek di Task Manager), 2) Restart service atau komputer, 3) Jalankan aplikasi sebagai Administrator, 4) Periksa antivirus yang mungkin memblokir, 5) Install ulang aplikasi jika masih bermasalah.",
  },
  {
    question: "Bagaimana cara backup dan restore data Dapodik?",
    answer:
      "Untuk backup data: 1) Masuk ke menu Pengaturan, 2) Pilih 'Backup Database', 3) Tentukan lokasi penyimpanan, 4) Tunggu proses selesai. Untuk restore: 1) Install aplikasi Dapodik, 2) Pilih 'Restore Database' saat registrasi, 3) Pilih file backup (.backup), 4) Tunggu proses restore selesai.",
  },
]

const troubleshootingItems = [
  {
    problem: "Error 'Connection Timeout' saat sinkronisasi",
    solution:
      "Periksa koneksi internet, pastikan port 5774 tidak diblokir firewall, dan coba sinkronisasi di jam yang berbeda ketika traffic server lebih rendah.",
  },
  {
    problem: "Aplikasi hang atau freeze saat digunakan",
    solution:
      "Tutup aplikasi, restart service Dapodik, bersihkan cache browser, dan pastikan RAM komputer mencukupi (minimal 4GB).",
  },
  {
    problem: "Data tidak tersimpan setelah input",
    solution:
      "Pastikan semua field wajib terisi, periksa validasi data (tidak ada yang berwarna merah), dan coba simpan ulang setelah memperbaiki error.",
  },
]

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [openTrouble, setOpenTrouble] = useState<number | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = href
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">
              Beranda
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Pusat Bantuan</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Ada yang bisa kami bantu?</h1>
          <p className="text-xl text-gray-600 mb-8">Temukan solusi cepat untuk masalah Dapodik Anda</p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Ketik pertanyaan Anda... (contoh: gagal sinkronisasi, cara menambah GTK)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
              >
                Cari
              </Button>
            </div>
          </form>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {helpCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                onClick={() => scrollToSection(category.href)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Popular FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            {popularFAQs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openFAQ === index}
                onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <CollapsibleTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between py-4">
                      <h3 className="text-lg font-semibold text-left flex-1 pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </CardHeader>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card className="mt-2 border-t-0 rounded-t-none">
                    <CardContent className="pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div id="troubleshooting" className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pemecahan Masalah Umum</h2>
          <div className="space-y-4">
            {troubleshootingItems.map((item, index) => (
              <Collapsible
                key={index}
                open={openTrouble === index}
                onOpenChange={() => setOpenTrouble(openTrouble === index ? null : index)}
              >
                <CollapsibleTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between py-4">
                      <h3 className="text-lg font-semibold text-left flex-1 pr-4 text-red-700">{item.problem}</h3>
                      {openTrouble === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </CardHeader>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card className="mt-2 border-t-0 rounded-t-none">
                    <CardContent className="pt-4">
                      <p className="text-gray-700 leading-relaxed">{item.solution}</p>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div id="contact" className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kontak Dukungan</h2>
          <p className="text-center text-gray-600 mb-8">
            Tidak menemukan jawaban yang Anda cari? Tim dukungan kami siap membantu Anda.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Kirim pertanyaan detail Anda</p>
              <a href="mailto:dapo@kemdikbud.go.id" className="text-blue-600 hover:text-blue-700 font-medium">
                dapo@kemdikbud.go.id
              </a>
            </div>

            {/* Phone Support */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-gray-600 mb-4">Hubungi kami langsung</p>
              <a href="tel:021-5725610" className="text-green-600 hover:text-green-700 font-medium">
                021-5725610
              </a>
            </div>

            {/* Office Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alamat Kantor</h3>
              <p className="text-gray-600 mb-4">Kunjungi kantor kami</p>
              <p className="text-purple-600 font-medium">
                Kompleks Kemendikdasmen
                <br />
                Gedung E Lantai 5<br />
                Jl. Jenderal Sudirman
                <br />
                Senayan Jakarta, 10270
              </p>
            </div>
          </div>

          {/* Additional Help Resources */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Sumber Bantuan Lainnya</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="https://helpdesk.pauddasmen.id/help/en-us/1-dapodik" target="_blank" rel="noreferrer">
                    FAQ Online
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/aplikasi-panduan">Panduan Lengkap</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.instagram.com/dapodik_official/" target="_blank" rel="noreferrer">
                    Instagram @dapodik_official
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
