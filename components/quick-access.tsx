const quickAccessItems = [
  {
    title: "Manajemen Dapodik",
    color: "bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700",
    href: "#",
    icon: "📊",
    description: "Dashboard & Analytics",
  },
  {
    title: "Info BOS",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700",
    href: "#",
    icon: "💰",
    description: "Bantuan Operasional",
  },
  {
    title: "BOP PAUD/Kesetaraan",
    color: "bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700",
    href: "#",
    icon: "🎓",
    description: "Bantuan Operasional PAUD",
  },
  {
    title: "ARKAS Sekolah",
    color: "bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700",
    href: "#",
    icon: "💼",
    description: "Aplikasi Keuangan",
  },
  {
    title: "PIP Dikdasmen",
    color: "bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700",
    href: "#",
    icon: "🎯",
    description: "Program Indonesia Pintar",
  },
  {
    title: "Situs Pusdatin",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700",
    href: "#",
    icon: "🔐",
    description: "Pusat Data & Teknologi",
  },
]

export function QuickAccess() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">Akses Cepat</h2>
          <p className="text-gray-600 text-lg">Akses langsung ke sistem dan layanan utama Dapodik</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {quickAccessItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`${item.color} text-white p-6 rounded-2xl transition-all duration-300 flex flex-col items-center text-center group hover:scale-105 hover:shadow-2xl shadow-lg relative overflow-hidden`}
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform relative z-10">{item.icon}</div>
              <span className="text-sm font-semibold leading-tight mb-1 relative z-10">{item.title}</span>
              <span className="text-xs opacity-90 relative z-10">{item.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
