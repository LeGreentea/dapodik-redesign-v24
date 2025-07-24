import type { Config } from "tailwindcss"

const config = {
	// 1. Mode Gelap (Dark Mode) diaktifkan dengan strategi 'class'
	// Ini memungkinkan kontrol manual (misalnya dengan next-themes)
	darkMode: ["class"],

	// 2. Path Konten yang Spesifik
	// Hanya memindai file yang relevan untuk performa build yang lebih cepat
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}', // Tambahkan jika Anda menggunakan folder `src`
	],

	// 3. Prefix (Opsional tapi berguna untuk menghindari konflik)
	// Jika Anda mengintegrasikan Tailwind ke proyek yang sudah ada,
	// prefix bisa sangat membantu. Contoh: 'tw-'
	prefix: "",

	// 4. Konfigurasi Tema
	theme: {
		// Menyesuaikan breakpoint untuk layout container
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		// Menggunakan `extend` untuk MENAMBAH, bukan MENGGANTI tema default Tailwind
		extend: {
			// 5. Menggunakan Variabel CSS untuk Theming
			// Pola ini (digunakan oleh shadcn/ui) membuat theming (light/dark, dll.) sangat mudah
			// Semua nilai warna, radius, dll. didefinisikan di globals.css
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			// 6. Konfigurasi Font yang Benar
			// Menghubungkan variabel font dari `next/font` ke kelas utilitas Tailwind
			fontFamily: {
				sans: ["var(--font-sans)"], // Variabel untuk font utama (mis. Inter)
				serif: ["var(--font-serif)"], // Variabel untuk font sekunder (mis. Playfair Display)
			},
			// Keyframes untuk animasi kustom
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	// 7. Plugin
	// Menambahkan fungsionalitas tambahan seperti animasi
	plugins: [require("tailwindcss-animate")],

} satisfies Config

export default config