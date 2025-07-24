"use client"

import { useState } from "react"
import {
  Download,
  FileText,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  BookOpen,
  Video,
  FileDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

const patches = [
  {
    version: "2025.c",
    date: "15 Juli 2024",
    description: "Perbaikan validasi dan perhitungan wakil kepala sekolah",
    links: [
      { label: "Link 1 Patch 2025.c (Semua Jenjang)", url: "#" },
      { label: "Link 2 Patch 2025.c (Semua Jenjang)", url: "#" },
    ],
  },
  {
    version: "2025.b",
    date: "1 Juli 2024",
    description: "Penambahan validasi MBG dan perbaikan bugs",
    links: [{ label: "Link 1 Patch 2025.b (Semua Jenjang)", url: "#" }],
  },
  {
    version: "2025.a",
    date: "15 Juni 2024",
    description: "Perbaikan kurikulum merdeka dan validasi usia",
    links: [
      { label: "Link 1 Patch 2025.a (PAUD, SD, SMP, SMA, SLB, PKBM/SKB)", url: "#" },
      { label: "Link 1 Patch 2025.a (SMK)", url: "#" },
    ],
  },
]

const changelogs = [
  {
    version: "Dapodik 2025.c",
    changes: [
      { type: "Perbaikan", description: "Perbaikan validasi terkait perhitungan wakil kepala sekolah." },
      { type: "Perbaikan", description: "Perbaikan validasi PKL untuk kelas 13 bagi SMK." },
      { type: "Perbaikan", description: "Perbaikan NPWP PTK menjadi 16 digit." },
    ],
  },
  {
    version: "Dapodik 2025.b",
    changes: [
      {
        type: "Pembaruan",
        description:
          "Penambahan pemicu wajib melengkapi data tahun lahir, pekerjaan, penghasilan dan pendidikan ayah atau wali jika kolom nama terisi.",
      },
      {
        type: "Pembaruan",
        description:
          "Penonaktifan tombol hapus, edit, dan simpan pada isian tugas tambahan kepala sekolah/PLT kepala sekolah.",
      },
      { type: "Pembaruan", description: "Penambahan validasi terkait program MBG (Makan Bergizi Gratis)." },
      {
        type: "Perbaikan",
        description:
          "Perbaikan bugs pada fitur kenaikan kelas/lanjutkan semester untuk rombongan belajar mata pelajaran pilihan.",
      },
    ],
  },
  {
    version: "Dapodik 2025.a",
    changes: [
      {
        type: "Perbaikan",
        description:
          "Satuan pendidikan pelaksana kurikulum merdeka T.A 2023/2024 dalam pengimplementasian kurikulum merdeka secara serentak.",
      },
      { type: "Perbaikan", description: "Validasi perhitungan usia peserta didik." },
      {
        type: "Perbaikan",
        description: "Pemetaan anggota rombel untuk peserta didik baru di kelompok B jenjang PAUD (TK).",
      },
    ],
  },
  {
    version: "Dapodik 2025",
    changes: [
      {
        type: "Pembaruan",
        description:
          "Penambahan proses bisnis dalam pelaksanaan implementasi kurikulum merdeka (dapat dilakukan secara bertahap atau serentak).",
      },
      { type: "Pembaruan", description: "Penambahan atribut jabatan GTK di Penugasan GTK." },
      {
        type: "Pembaruan",
        description:
          "Penambahan fitur penginputan nomor ijazah dan nomor Surat Keterangan Melek Aksara (SUKMA) bagi peserta didik yang telah lulus.",
      },
      {
        type: "Perbaikan",
        description: "Penonaktifan fitur salin penugasan di menu GTK (dilakukan otomatis oleh sistem).",
      },
    ],
  },
]

const prefillServers = [
  { name: "Prefill Server 1", url: "https://prefill1.dikdasmen.go.id/" },
  { name: "Prefill Server 2", url: "https://prefill2.dikdasmen.go.id/" },
  { name: "Prefill Server 3", url: "https://prefill3.dikdasmen.go.id/" },
  { name: "Prefill Server 4", url: "https://prefill4.dikdasmen.go.id/" },
  { name: "Prefill Server 5", url: "https://prefill5.dikdasmen.go.id/" },
]

const raporServers = [
  { name: "Prefill Rapor Server 1", url: "https://prefill-rapor1.dikdasmen.go.id/" },
  { name: "Prefill Rapor Server 2", url: "https://prefill-rapor2.dikdasmen.go.id/" },
  { name: "Prefill Rapor Server 3", url: "https://prefill-rapor3.dikdasmen.go.id/" },
  { name: "Prefill Rapor Server 4", url: "https://prefill-rapor4.dikdasmen.go.id/" },
  { name: "Prefill Rapor Server 5", url: "https://prefill-rapor5.dikdasmen.go.id/" },
]

const guides = [
  { title: "Panduan Aplikasi Dapodik versi 2025", icon: BookOpen, url: "#" },
  { title: "Panduan Pemutakhiran Data Tugas Tambahan Kepala Sekolah", icon: FileText, url: "#" },
  { title: "Panduan Pemutakhiran Dapodik untuk PPG Daljab Tahun 2022", icon: FileText, url: "#" },
  { title: "Panduan Pengisian Nilai UPK (Kesetaraan)", icon: FileText, url: "#" },
  { title: "Panduan Implementasi Kurikulum Merdeka di Dapodik", icon: FileText, url: "#" },
  { title: "Panduan Pengisian Sanitasi Sekolah", icon: FileText, url: "#" },
]

const archiveVersions = {
  "2024": [
    { version: "Dapodik 2024.c", date: "15 Desember 2023", installer: "#", patches: ["2024.c"] },
    { version: "Dapodik 2024.b", date: "15 Oktober 2023", installer: "#", patches: ["2024.b"] },
    { version: "Dapodik 2024.a", date: "15 Agustus 2023", installer: "#", patches: ["2024.a"] },
    { version: "Dapodik 2024", date: "15 Juli 2023", installer: "#", patches: [] },
  ],
  "2023": [
    { version: "Dapodik 2023.d", date: "15 Desember 2022", installer: "#", patches: ["2023.d"] },
    { version: "Dapodik 2023.c", date: "15 Oktober 2022", installer: "#", patches: ["2023.c"] },
    { version: "Dapodik 2023.b", date: "15 Agustus 2022", installer: "#", patches: ["2023.b"] },
    { version: "Dapodik 2023.a", date: "15 Juni 2022", installer: "#", patches: ["2023.a"] },
    { version: "Dapodik 2023", date: "15 Juli 2022", installer: "#", patches: [] },
  ],
}

export function ResourceCenter() {
  const [openChangelog, setOpenChangelog] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState<string>("")

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
            <span className="text-gray-900">Aplikasi & Panduan</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Pusat Sumber Daya Dapodik</h1>
          <p className="text-xl text-gray-600">Unduh aplikasi, patch, dan akses panduan lengkap untuk Dapodik</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="aplikasi" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="aplikasi" className="text-sm">
              Aplikasi & Patch
            </TabsTrigger>
            <TabsTrigger value="prefill" className="text-sm">
              Data Prefill
            </TabsTrigger>
            <TabsTrigger value="panduan" className="text-sm">
              Panduan & Dokumentasi
            </TabsTrigger>
            <TabsTrigger value="arsip" className="text-sm">
              Arsip Versi
            </TabsTrigger>
          </TabsList>

          {/* Aplikasi & Patch Tab */}
          <TabsContent value="aplikasi" className="space-y-8">
            {/* Main Installer */}
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/dapodik-2025c-logo.png"
                      alt="Dapodik 2025"
                      width={120}
                      height={120}
                      className="rounded-lg bg-white p-4"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-2">Aplikasi Dapodik 2025</h2>
                    <p className="text-blue-100 mb-2">Versi Terbaru • Dirilis 15 Juli 2024</p>
                    <Badge variant="secondary" className="mb-6">
                      Stabil
                    </Badge>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button size="lg" variant="secondary" className="text-blue-700">
                        <Download className="mr-2 h-5 w-5" />
                        Dapodik (PAUD, SD, SMP, SMA, SLB, PKBM/SKB)
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Dapodik (SMK)
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Patches */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Patch Terbaru</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patches.map((patch, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Patch {patch.version}</CardTitle>
                        <Badge variant="outline">{patch.date}</Badge>
                      </div>
                      <CardDescription>{patch.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {patch.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            className="w-full justify-start bg-transparent"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Changelog */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Daftar Perubahan</h3>
              <div className="space-y-4">
                {changelogs.map((changelog, index) => (
                  <Collapsible
                    key={index}
                    open={openChangelog === index}
                    onOpenChange={() => setOpenChangelog(openChangelog === index ? null : index)}
                  >
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between py-4">
                          <h4 className="text-lg font-semibold">{changelog.version}</h4>
                          {openChangelog === index ? (
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
                          <ul className="space-y-3">
                            {changelog.changes.map((change, changeIndex) => (
                              <li key={changeIndex} className="flex items-start gap-3">
                                <Badge
                                  variant={change.type === "Pembaruan" ? "default" : "secondary"}
                                  className="mt-0.5 flex-shrink-0"
                                >
                                  {change.type}
                                </Badge>
                                <span className="text-gray-700">{change.description}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Data Prefill Tab */}
          <TabsContent value="prefill" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Server Data Prefill</h2>
              <p className="text-gray-600">Pilih server yang tersedia untuk mengunduh data prefill</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Regular Prefill */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileDown className="h-5 w-5" />
                    Data Prefill Reguler
                  </CardTitle>
                  <CardDescription>Server untuk data prefill aplikasi Dapodik</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {prefillServers.map((server, index) => (
                      <Button key={index} variant="outline" className="w-full justify-between bg-transparent" asChild>
                        <a href={server.url} target="_blank" rel="noopener noreferrer">
                          {server.name}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Rapor Prefill */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Data Prefill Rapor
                  </CardTitle>
                  <CardDescription>Server khusus untuk data prefill rapor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {raporServers.map((server, index) => (
                      <Button key={index} variant="outline" className="w-full justify-between bg-transparent" asChild>
                        <a href={server.url} target="_blank" rel="noopener noreferrer">
                          {server.name}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Panduan & Dokumentasi Tab */}
          <TabsContent value="panduan" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Panduan & Dokumentasi</h2>
              <p className="text-gray-600">Akses panduan lengkap dan dokumentasi untuk menggunakan Dapodik</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, index) => {
                const IconComponent = guide.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-base leading-tight">{guide.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                        <a href={guide.url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Unduh Panduan
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Video Tutorial */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Video Tutorial
                </CardTitle>
                <CardDescription>Video pengenalan dan tutorial penggunaan Dapodik</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Video Tutorial Dapodik</p>
                    <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                      <a href="https://youtu.be/phKuFc2FHtQ" target="_blank" rel="noopener noreferrer">
                        Tonton di YouTube
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Arsip Versi Tab */}
          <TabsContent value="arsip" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Arsip Versi Lama</h2>
              <p className="text-gray-600">Akses installer dan patch dari versi-versi sebelumnya</p>
            </div>

            {/* Year Selector */}
            <div className="flex justify-center mb-8">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Pilih Tahun" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Archive Content */}
            {selectedYear && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {archiveVersions[selectedYear as keyof typeof archiveVersions]?.map((version, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{version.version}</CardTitle>
                        <Badge variant="outline">{version.date}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                          <a href={version.installer}>
                            <Download className="mr-2 h-4 w-4" />
                            Installer
                          </a>
                        </Button>
                        {version.patches.map((patch, patchIndex) => (
                          <Button
                            key={patchIndex}
                            variant="outline"
                            size="sm"
                            className="w-full bg-transparent"
                            asChild
                          >
                            <a href="#">
                              <Download className="mr-2 h-4 w-4" />
                              Patch {patch}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {!selectedYear && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Pilih tahun untuk melihat arsip versi</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
