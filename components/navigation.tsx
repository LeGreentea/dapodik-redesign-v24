"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo and Title */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Image
              src="/images/logo-dikdasmen.png"
              alt="Logo Kemendikdasmen"
              width={50}
              height={50}
              className="h-12 w-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white">Data Pokok Pendidikan (DAPODIK)</h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-white">DAPODIK</h1>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="hover:text-blue-200 transition-colors font-medium">
              Beranda
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-200 transition-colors font-medium">
                Data & Statistik <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/pencarian" className="w-full">
                    Pencarian Data
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/pencarian" className="w-full">
                    Data Sekolah
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/pencarian" className="w-full">
                    Data Peserta Didik
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/pencarian" className="w-full">
                    Data Guru
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/pencarian" className="w-full">
                    Data Pegawai
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/progres" className="w-full">
                    Progres Pengiriman
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-200 transition-colors font-medium">
                Aplikasi & Panduan <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="/aplikasi-panduan" className="w-full">
                    Unduhan Aplikasi
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/aplikasi-panduan" className="w-full">
                    Panduan Penggunaan
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/aplikasi-panduan" className="w-full">
                    Troubleshoot
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/berita" className="hover:text-blue-200 transition-colors font-medium">
              Berita
            </a>

            <a href="/bantuan" className="hover:text-blue-200 transition-colors font-medium">
              Bantuan
            </a>
          </div>

          {/* Right: Login Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Login Button - Desktop */}
            <div className="hidden md:block">
              <Button asChild variant="outline" className="text-blue-600 border-white hover:bg-blue-50 bg-white">
                <a href="/login">Login</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:bg-blue-700"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-blue-500">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-blue-200 transition-colors py-2">
                Beranda
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors py-2">
                Data & Statistik
              </a>
              <a href="/aplikasi-panduan" className="hover:text-blue-200 transition-colors py-2">
                Aplikasi & Panduan
              </a>
              <a href="/berita" className="hover:text-blue-200 transition-colors py-2">
                Berita
              </a>
              <a href="/bantuan" className="hover:text-blue-200 transition-colors py-2">
                Bantuan
              </a>
              <Button
                asChild
                variant="outline"
                className="text-blue-600 border-white hover:bg-blue-50 w-fit bg-white mt-4"
              >
                <a href="/login">Login</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
