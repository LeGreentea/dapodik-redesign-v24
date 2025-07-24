import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-dikdasmen.png"
              alt="Logo Kemendikdasmen"
              width={80}
              height={80}
              className="h-20 w-20"
            />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Data Pokok Pendidikan (DAPODIK)</h1>
            <p className="text-gray-600 text-sm lg:text-base">
              <strong>Direktorat Jenderal Pendidikan Anak Usia Dini, Pendidikan Dasar dan Pendidikan Menengah</strong>
            </p>
            <p className="text-gray-500 text-sm">Kementerian Pendidikan Dasar dan Menengah</p>
          </div>
        </div>
      </div>
    </header>
  )
}
