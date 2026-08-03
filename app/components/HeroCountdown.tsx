"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-06T00:00:00+07:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Hari" },
  { key: "hours", label: "Jam" },
  { key: "minutes", label: "Menit" },
  { key: "seconds", label: "Detik" },
];

export default function HeroCountdown() {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative flex min-h-dvh w-full flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="AI Toolkit visualization"
          className="object-cover object-center"
          src="/hero.png"
          fill
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
      </div>

      <section className="relative z-10 max-w-2xl space-y-8 p-6 md:p-12">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent" />
            </span>
            <p className="font-mono text-xs tracking-widest uppercase opacity-80">
              PC IAI GUNUNGKIDUL
            </p>
          </div>
          <h1 className="text-6xl leading-none font-extrabold tracking-tighter uppercase md:text-8xl">
            SRAWUNG
          </h1>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
            Seminar &amp; Konferensi Cabang IAI Gunungkidul 2026 — menghadirkan
            tema{" "}
            <span className="font-medium text-brand-accent italic">
              &ldquo;AI Toolkit for Pharmacists.&rdquo;
            </span>
          </p>
          <div className="flex items-center gap-2 font-mono text-sm tracking-tight text-brand-accent/90">
            <span>SABTU</span>
            <span className="opacity-40">·</span>
            <span>06 DES 2026</span>
            <span className="opacity-40">·</span>
            <span>GUNUNGKIDUL, DIY</span>
          </div>
        </div>

        <div
          className="grid grid-cols-4 gap-4 pt-4"
          aria-live="polite"
          aria-label="Hitung mundur menuju SRAWUNG"
        >
          {UNITS.map(({ key, label }) => (
            <div key={key} className="flex flex-col">
              <span
                className="font-mono text-3xl leading-none font-bold md:text-4xl"
                suppressHydrationWarning
              >
                {key === "days" ? time[key] : pad(time[key])}
              </span>
              <div className="mt-2 h-1 w-full bg-brand-accent" />
              <span className="mt-1 font-mono text-[10px] tracking-tighter uppercase opacity-60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
