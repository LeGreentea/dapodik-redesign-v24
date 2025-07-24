"use client"

import { useState } from "react"
import { Filter, TrendingUp, TrendingDown, MapPin, ChevronDown, ChevronRight, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Input } from "@/components/ui/input"

// Mock data based on the HTML table
const mockProvinceData = [
  { id: 1, name: "Kalimantan Selatan", percentage: 99, totalSchools: 8309, submitted: 8232, remaining: 77 },
  { id: 2, name: "Jawa Tengah", percentage: 98, totalSchools: 53194, submitted: 52357, remaining: 837 },
  { id: 3, name: "D.I. Yogyakarta", percentage: 98, totalSchools: 7707, submitted: 7556, remaining: 151 },
  { id: 4, name: "Bali", percentage: 97, totalSchools: 5358, submitted: 5233, remaining: 125 },
  { id: 5, name: "Kepulauan Bangka Belitung", percentage: 97, totalSchools: 2138, submitted: 2075, remaining: 63 },
  { id: 6, name: "Sulawesi Utara", percentage: 96, totalSchools: 6181, submitted: 5986, remaining: 195 },
  { id: 7, name: "Jawa Timur", percentage: 96, totalSchools: 67543, submitted: 65211, remaining: 2332 },
  { id: 8, name: "Gorontalo", percentage: 96, totalSchools: 3000, submitted: 2892, remaining: 108 },
  { id: 9, name: "Sumatera Barat", percentage: 96, totalSchools: 10830, submitted: 10440, remaining: 390 },
  { id: 10, name: "Lampung", percentage: 96, totalSchools: 13475, submitted: 12974, remaining: 501 },
  // ... more provinces
  { id: 35, name: "Maluku", percentage: 88, totalSchools: 5122, submitted: 4513, remaining: 609 },
  { id: 36, name: "Papua Tengah", percentage: 88, totalSchools: 1421, submitted: 1251, remaining: 170 },
  { id: 37, name: "Nusa Tenggara Timur", percentage: 87, totalSchools: 14375, submitted: 12569, remaining: 1806 },
  { id: 38, name: "Papua Pegunungan", percentage: 83, totalSchools: 1556, submitted: 1292, remaining: 264 },
  { id: 39, name: "Papua", percentage: 81, totalSchools: 2151, submitted: 1746, remaining: 405 },
]

const topProvinces = mockProvinceData.slice(0, 10)
const bottomProvinces = mockProvinceData.slice(-10).reverse()

export function ProgressDashboard() {
  const [selectedSemester, setSelectedSemester] = useState("20242")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const toggleRowExpansion = (id: number) => {
    setExpandedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const filteredData = mockProvinceData.filter((province) =>
    province.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const nationalStats = {
    totalPercentage: 94.67,
    totalSchools: 441923,
    totalSubmitted: 418350,
    totalRemaining: 23573,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Beranda
            </a>
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
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Progres Pengiriman</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 font-serif mb-2">Dashboard Progres Data Nasional</h1>
        <p className="text-gray-600">Monitoring progres pengiriman data pendidikan seluruh Indonesia</p>
      </div>

      {/* Global Filters */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-600" />
            <CardTitle>Filter Global</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20242">Semester 2024/2025 Genap</SelectItem>
                  <SelectItem value="20241">Semester 2024/2025 Ganjil</SelectItem>
                  <SelectItem value="20232">Semester 2023/2024 Genap</SelectItem>
                  <SelectItem value="20231">Semester 2023/2024 Ganjil</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenjang Pendidikan</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Jenjang</SelectItem>
                  <SelectItem value="tk">TK</SelectItem>
                  <SelectItem value="sd">SD</SelectItem>
                  <SelectItem value="smp">SMP</SelectItem>
                  <SelectItem value="sma">SMA</SelectItem>
                  <SelectItem value="smk">SMK</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Persentase Nasional</p>
                <p className="text-3xl font-bold text-green-700">{nationalStats.totalPercentage}%</p>
              </div>
              <div className="bg-green-500 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Total Sekolah</p>
                <p className="text-3xl font-bold text-blue-700">{nationalStats.totalSchools.toLocaleString()}</p>
              </div>
              <div className="bg-blue-500 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Sudah Kirim</p>
                <p className="text-3xl font-bold text-purple-700">{nationalStats.totalSubmitted.toLocaleString()}</p>
              </div>
              <div className="bg-purple-500 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Belum Kirim</p>
                <p className="text-3xl font-bold text-orange-700">{nationalStats.totalRemaining.toLocaleString()}</p>
              </div>
              <div className="bg-orange-500 p-3 rounded-lg">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Map Placeholder */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-serif">Peta Progres Indonesia</CardTitle>
          <p className="text-sm text-gray-600">Visualisasi progres pengiriman data per provinsi</p>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-12 text-center border-2 border-dashed border-gray-300">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Peta Interaktif Indonesia</h3>
            <p className="text-gray-500 mb-4">
              Peta choropleth menampilkan tingkat progres pengiriman data dengan gradasi warna dari merah (rendah) ke
              hijau (tinggi)
            </p>
            <Badge variant="outline" className="text-xs">
              🗺️ Hover pada provinsi untuk melihat detail
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Ranking Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Top 10 Provinces */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              10 Provinsi Progres Tertinggi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProvinces} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={11} />
                <YAxis domain={[90, 100]} />
                <Tooltip
                  formatter={(value) => [`${value}%`, "Progres"]}
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar dataKey="percentage" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bottom 10 Provinces */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-600" />
              10 Provinsi Progres Terendah
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bottomProvinces} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={11} />
                <YAxis domain={[80, 95]} />
                <Tooltip
                  formatter={(value) => [`${value}%`, "Progres"]}
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar dataKey="percentage" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Data Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="font-serif">Data Rinci Per Provinsi</CardTitle>
              <p className="text-sm text-gray-600">Tabel lengkap progres pengiriman data</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="mb-4">
            <Input
              placeholder="Cari provinsi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 font-semibold">No</th>
                  <th className="text-left p-3 font-semibold">Provinsi</th>
                  <th className="text-center p-3 font-semibold">Progres</th>
                  <th className="text-right p-3 font-semibold">Total Sekolah</th>
                  <th className="text-right p-3 font-semibold">Sudah Kirim</th>
                  <th className="text-right p-3 font-semibold">Belum Kirim</th>
                  <th className="text-center p-3 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((province, index) => (
                  <>
                    <tr key={province.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3 font-medium">{province.name}</td>
                      <td className="p-3 text-center">
                        <Badge
                          className={`${
                            province.percentage >= 95
                              ? "bg-green-100 text-green-800"
                              : province.percentage >= 90
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {province.percentage}%
                        </Badge>
                      </td>
                      <td className="p-3 text-right">{province.totalSchools.toLocaleString()}</td>
                      <td className="p-3 text-right">{province.submitted.toLocaleString()}</td>
                      <td className="p-3 text-right">{province.remaining.toLocaleString()}</td>
                      <td className="p-3 text-center">
                        <Button variant="ghost" size="sm" onClick={() => toggleRowExpansion(province.id)}>
                          {expandedRows.includes(province.id) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </td>
                    </tr>
                    {expandedRows.includes(province.id) && (
                      <tr className="bg-gray-50">
                        <td colSpan={7} className="p-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {["TK", "SD", "SMP", "SMA", "SMK", "SLB"].map((level) => (
                              <div key={level} className="bg-white p-3 rounded-lg border">
                                <h4 className="font-semibold text-sm text-gray-700 mb-2">{level}</h4>
                                <div className="space-y-1 text-xs">
                                  <div className="flex justify-between">
                                    <span>Total:</span>
                                    <span className="font-medium">1,234</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Kirim:</span>
                                    <span className="font-medium text-green-600">1,200</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Sisa:</span>
                                    <span className="font-medium text-red-600">34</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
