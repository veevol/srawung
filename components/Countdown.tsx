"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-12-06T08:00:00+07:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
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

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const display = time ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div
      className="mt-8 grid grid-cols-4 gap-3 sm:gap-4"
      aria-live="polite"
      aria-label="Hitung mundur menuju SRAWUNG"
    >
      {UNITS.map(({ key, label }) => (
        <div key={key} className="flex flex-col items-center gap-2">
          <div className="relative w-full text-center">
            <span className="font-mono text-[clamp(1.75rem,5vw,2.75rem)] font-semibold leading-none tracking-tight text-ink tabular-nums">
              {key === "days" ? display[key] : pad(display[key])}
            </span>
            <span
              aria-hidden
              className="absolute inset-x-1 -bottom-1.5 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
            />
          </div>
          <span className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-soft sm:text-xs">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
