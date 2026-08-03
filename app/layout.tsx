import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SRAWUNG - IAI Gunungkidul",
  description:
    "Seminar & Konferensi Cabang IAI Gunungkidul 2026 — AI Toolkit for Pharmacists. Sabtu, 6 Desember 2026 — Gunungkidul, DIY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="h-full bg-brand-dark font-sans text-white selection:bg-brand-accent selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
