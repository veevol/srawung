# SRAWUNG

Landing page coming soon untuk **SRAWUNG** — Seminar & Konferensi Cabang IAI Gunungkidul 2026 (bersama PIEYO PD DIY).

Tema: *AI Toolkit for Pharmacists* · Sabtu, 6 Desember 2026 · Gunungkidul, DIY

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Struktur

```
app/
  layout.tsx      # Fonts (Space Grotesk, JetBrains Mono) + metadata
  page.tsx        # Halaman coming soon (split-screen hero)
  globals.css     # CSS variables + Tailwind theme
components/
  Countdown.tsx   # Countdown timer (client component)
public/
  hero.png        # Ganti dengan gambar hero final
```

## Hero image

Letakkan file final di `public/hero.png` (aspect ratio potret ~3:4). Placeholder abu-abu sudah ada untuk development.

## Deploy ke Vercel

Push ke GitHub lalu import repo di [Vercel](https://vercel.com/new). Framework Next.js terdeteksi otomatis.
