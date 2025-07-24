import { Mail, Phone, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Layanan */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Data Referensi Pusdatin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Akreditasi Sekolah
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Perpustakaan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Rumah Belajar
                </a>
              </li>
            </ul>
          </div>

          {/* Unit Utama */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Unit Utama</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Kemdikbud
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sekretariat Jenderal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Ditjen Vokasi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Ditjen Kebudayaan
                </a>
              </li>
            </ul>
          </div>

          {/* Direktorat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Direktorat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Direktorat SD
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Direktorat SMP
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Direktorat SMA
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Direktorat SMK
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Direktorat PMPK
                </a>
              </li>
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="text-sm text-gray-300 mb-4">
                <p className="font-medium text-white mb-2">
                  Direktorat Jenderal Pendidikan Anak Usia Dini, Pendidikan Dasar dan Pendidikan Menengah
                </p>
                <p className="text-gray-400">Kementerian Pendidikan Dasar dan Menengah</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p className="font-medium">Kompleks Kemendikdasmen Gedung E Lantai 5</p>
                  <p>Jl. Jenderal Sudirman Senayan Jakarta, 10270</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">021-5725610</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">dapo@kemdikbud.go.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-300">dapodik_official</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400 text-sm">
            © Divine & Pendidikan Indonesia 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
