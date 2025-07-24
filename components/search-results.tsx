"use client"

import { useState } from "react"
import { Search, Filter, SortAsc, MapPin, School, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Mock data for demonstration
const mockSchools = [
  {
    id: 1,
    name: "SD Negeri 01 Jakarta Pusat",
    npsn: "20104001",
    address: "Jl. Kebon Sirih No. 15, Jakarta Pusat",
    status: "Negeri",
    accreditation: "A",
    level: "SD",
    province: "DKI Jakarta",
    city: "Jakarta Pusat",
  },
  {
    id: 2,
    name: "SMP Swasta Al-Azhar",
    npsn: "20104002",
    address: "Jl. Sisingamangaraja No. 2, Jakarta Selatan",
    status: "Swasta",
    accreditation: "A",
    level: "SMP",
    province: "DKI Jakarta",
    city: "Jakarta Selatan",
  },
  {
    id: 3,
    name: "SMA Negeri 3 Bandung",
    npsn: "20229003",
    address: "Jl. Belitung No. 8, Bandung",
    status: "Negeri",
    accreditation: "A",
    level: "SMA",
    province: "Jawa Barat",
    city: "Bandung",
  },
  {
    id: 4,
    name: "SMK Swasta Teknologi Informasi",
    npsn: "20104004",
    address: "Jl. Sudirman No. 45, Jakarta Pusat",
    status: "Swasta",
    accreditation: "B",
    level: "SMK",
    province: "DKI Jakarta",
    city: "Jakarta Pusat",
  },
  {
    id: 5,
    name: "TK Negeri Pembina",
    npsn: "69887001",
    address: "Jl. Merdeka No. 12, Surabaya",
    status: "Negeri",
    accreditation: "A",
    level: "TK",
    province: "Jawa Timur",
    city: "Surabaya",
  },
]

export function SearchResults() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProvince, setSelectedProvince] = useState("all")
  const [selectedCity, setSelectedCity] = useState("all")
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const [selectedAccreditation, setSelectedAccreditation] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("name")
  const [filteredSchools, setFilteredSchools] = useState(mockSchools)

  const handleLevelChange = (level: string, checked: boolean) => {
    if (checked) {
      setSelectedLevels([...selectedLevels, level])
    } else {
      setSelectedLevels(selectedLevels.filter((l) => l !== level))
    }
  }

  const handleStatusChange = (status: string, checked: boolean) => {
    if (checked) {
      setSelectedStatus([...selectedStatus, status])
    } else {
      setSelectedStatus(selectedStatus.filter((s) => s !== status))
    }
  }

  const handleAccreditationChange = (accreditation: string, checked: boolean) => {
    if (checked) {
      setSelectedAccreditation([...selectedAccreditation, accreditation])
    } else {
      setSelectedAccreditation(selectedAccreditation.filter((a) => a !== accreditation))
    }
  }

  const applyFilters = () => {
    const filtered = mockSchools.filter((school) => {
      const matchesSearch =
        searchTerm === "" ||
        school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        school.npsn.includes(searchTerm)

      const matchesProvince = selectedProvince === "all" || school.province === selectedProvince
      const matchesCity = selectedCity === "all" || school.city === selectedCity
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(school.level)
      const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(school.status)
      const matchesAccreditation =
        selectedAccreditation.length === 0 || selectedAccreditation.includes(school.accreditation)

      return matchesSearch && matchesProvince && matchesCity && matchesLevel && matchesStatus && matchesAccreditation
    })

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "npsn":
          return a.npsn.localeCompare(b.npsn)
        case "status":
          return a.status.localeCompare(b.status)
        default:
          return 0
      }
    })

    setFilteredSchools(filtered)
  }

  const getAccreditationColor = (accreditation: string) => {
    switch (accreditation) {
      case "A":
        return "bg-green-100 text-green-800"
      case "B":
        return "bg-blue-100 text-blue-800"
      case "C":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    return status === "Negeri" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
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
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Pencarian Data Sekolah</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Panel - Left Column */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-semibold font-serif">Filter Pencarian</h2>
              </div>

              <div className="space-y-6">
                {/* Search Input */}
                <div>
                  <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                    Kata Kunci
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="search"
                      placeholder="Nama sekolah atau NPSN..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Location Filters */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Lokasi</Label>
                  <div className="space-y-3">
                    <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Provinsi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Provinsi</SelectItem>
                        <SelectItem value="DKI Jakarta">DKI Jakarta</SelectItem>
                        <SelectItem value="Jawa Barat">Jawa Barat</SelectItem>
                        <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Kab/Kota" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Semua Kab/Kota</SelectItem>
                        <SelectItem value="Jakarta Pusat">Jakarta Pusat</SelectItem>
                        <SelectItem value="Jakarta Selatan">Jakarta Selatan</SelectItem>
                        <SelectItem value="Bandung">Bandung</SelectItem>
                        <SelectItem value="Surabaya">Surabaya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Education Level Filter */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Jenjang Pendidikan</Label>
                  <div className="space-y-2">
                    {["TK", "SD", "SMP", "SMA", "SMK"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox
                          id={level}
                          checked={selectedLevels.includes(level)}
                          onCheckedChange={(checked) => handleLevelChange(level, checked as boolean)}
                        />
                        <Label htmlFor={level} className="text-sm">
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Status Sekolah</Label>
                  <div className="space-y-2">
                    {["Negeri", "Swasta"].map((status) => (
                      <div key={status} className="flex items-center space-x-2">
                        <Checkbox
                          id={status}
                          checked={selectedStatus.includes(status)}
                          onCheckedChange={(checked) => handleStatusChange(status, checked as boolean)}
                        />
                        <Label htmlFor={status} className="text-sm">
                          {status}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accreditation Filter */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Akreditasi</Label>
                  <div className="space-y-2">
                    {["A", "B", "C"].map((accreditation) => (
                      <div key={accreditation} className="flex items-center space-x-2">
                        <Checkbox
                          id={accreditation}
                          checked={selectedAccreditation.includes(accreditation)}
                          onCheckedChange={(checked) => handleAccreditationChange(accreditation, checked as boolean)}
                        />
                        <Label htmlFor={accreditation} className="text-sm">
                          Akreditasi {accreditation}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button onClick={applyFilters} className="w-full bg-blue-600 hover:bg-blue-700">
                  Terapkan Filter
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Results Area - Right Column */}
        <div className="lg:col-span-3">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-serif mb-2">Hasil Pencarian</h1>
              <p className="text-gray-600">
                Menampilkan {filteredSchools.length} dari {mockSchools.length} sekolah
              </p>
            </div>

            <div className="flex items-center gap-2">
              <SortAsc className="h-4 w-4 text-gray-500" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nama Sekolah A-Z</SelectItem>
                  <SelectItem value="npsn">NPSN</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Grid */}
          <div className="space-y-4">
            {filteredSchools.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <School className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
                  <p className="text-gray-500">Coba ubah kriteria pencarian atau filter Anda</p>
                </CardContent>
              </Card>
            ) : (
              filteredSchools.map((school) => (
                <Card key={school.id} className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                            <School className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{school.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">NPSN: {school.npsn}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <MapPin className="h-4 w-4" />
                              <span>{school.address}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {school.level}
                          </Badge>
                          <Badge className={`text-xs ${getStatusColor(school.status)}`}>{school.status}</Badge>
                          <Badge className={`text-xs ${getAccreditationColor(school.accreditation)}`}>
                            <Award className="h-3 w-3 mr-1" />
                            Akreditasi {school.accreditation}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <Button variant="outline" className="w-full lg:w-auto bg-transparent">
                          Lihat Detail
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Pagination would go here */}
          {filteredSchools.length > 0 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Sebelumnya
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Selanjutnya
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
