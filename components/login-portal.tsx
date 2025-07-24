"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, Shield, HelpCircle, FileText, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export function LoginPortal() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [activeTab, setActiveTab] = useState("dinas")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password, role: activeTab, rememberMe })
  }

  const roleInfo = {
    dinas: {
      title: "Manajemen Dinas",
      description: "Portal untuk pengelola dinas pendidikan tingkat provinsi dan kabupaten/kota",
      features: ["Dashboard analitik wilayah", "Monitoring sekolah", "Laporan agregat"],
    },
    sekolah: {
      title: "Manajemen Sekolah",
      description: "Portal untuk kepala sekolah dan operator sekolah",
      features: ["Data sekolah", "Manajemen siswa", "Laporan sekolah"],
    },
    gtk: {
      title: "Individual GTK",
      description: "Portal untuk guru, tenaga kependidikan, dan individu",
      features: ["Profil personal", "Riwayat karir", "Sertifikasi"],
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo-dikdasmen.png"
                alt="Logo Kemendikdasmen"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Portal Login Dapodik</h1>
                <p className="text-sm text-gray-600">Sistem Terpadu Data Pokok Pendidikan</p>
              </div>
            </div>
            <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Panel - Branding & Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <Image
                  src="/images/logo-dikdasmen.png"
                  alt="Logo Kemendikdasmen"
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Data Pokok Pendidikan</h2>
                  <p className="text-gray-600">Kementerian Pendidikan Dasar dan Menengah</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sistem Login Terpadu</h3>
                <p className="text-gray-600 mb-4">
                  Akses aman ke seluruh layanan Dapodik dengan satu akun untuk semua kebutuhan pengelolaan data
                  pendidikan.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-blue-900">Keamanan Tinggi</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-green-900">Data Terlindungi</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <HelpCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-purple-900">Dukungan 24/7</p>
                  </div>
                </div>
              </div>

              {/* Current Role Info */}
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{roleInfo[activeTab as keyof typeof roleInfo].title}</h4>
                  <p className="text-blue-100 mb-4">{roleInfo[activeTab as keyof typeof roleInfo].description}</p>
                  <ul className="space-y-1">
                    {roleInfo[activeTab as keyof typeof roleInfo].features.map((feature, index) => (
                      <li key={index} className="text-sm text-blue-100 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-200 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="flex flex-col justify-center">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Masuk ke Akun Anda</h3>
                  <p className="text-gray-600">Pilih jenis akun dan masukkan kredensial Anda</p>
                </div>

                {/* Role Selection Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="dinas" className="text-xs sm:text-sm">
                      Manajemen Dinas
                    </TabsTrigger>
                    <TabsTrigger value="sekolah" className="text-xs sm:text-sm">
                      Manajemen Sekolah
                    </TabsTrigger>
                    <TabsTrigger value="gtk" className="text-xs sm:text-sm">
                      Individual GTK
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="dinas">
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-blue-800">
                        <strong>Untuk:</strong> Pengelola dinas pendidikan provinsi dan kabupaten/kota
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="sekolah">
                    <div className="bg-green-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-green-800">
                        <strong>Untuk:</strong> Kepala sekolah dan operator sekolah
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="gtk">
                    <div className="bg-purple-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-purple-800">
                        <strong>Untuk:</strong> Guru, tenaga kependidikan, dan individu
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@email.com"
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Masukkan password"
                        className="pl-10 pr-10 h-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      />
                      <label htmlFor="remember" className="text-sm text-gray-600">
                        Ingat saya
                      </label>
                    </div>
                    <Link href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Lupa password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Shield className="h-5 w-5 mr-2" />
                    Masuk ke Sistem
                  </Button>
                </form>

                {/* Trust Elements */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-500">
                    <Link href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <HelpCircle className="h-4 w-4" />
                      Pusat Bantuan
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <FileText className="h-4 w-4" />
                      Kebijakan Privasi
                    </Link>
                    <Link href="#" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                      <Shield className="h-4 w-4" />
                      Keamanan
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 Divine & Pendidikan Indonesia
          </p>
        </div>
      </footer>
    </div>
  )
}
