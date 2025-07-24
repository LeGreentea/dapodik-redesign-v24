import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

// Konfigurasi font tetap sama
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// Metadata tetap sama
export const metadata: Metadata = {
    metadataBase: new URL("https://nama-domain-anda.com"),
    title: {
        default: "Nama Website Anda",
        template: `%s | Nama Website Anda`,
    },
    description: "Deskripsi singkat dan menarik tentang website Anda.",
};

// Viewport disederhanakan untuk mode terang saja
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "white", // Langsung set warna untuk mode terang
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        // 1. Hapus `suppressHydrationWarning` karena tidak ada lagi pergantian tema
        <html lang="id">
        <body
            className={cn(
                "min-h-screen bg-background font-sans text-foreground antialiased",
                fontSans.variable
            )}
        >
        {/* 2. Hapus wrapper <ThemeProvider> */}
        {/* Anda bisa langsung render children atau bungkus dengan <main>, <header>, dll. */}
        <main>{children}</main>
        </body>
        </html>
    );
}