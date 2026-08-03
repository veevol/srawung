import Countdown from "@/components/Countdown";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-background text-ink">
      <div className="mx-auto grid min-h-dvh max-w-7xl lg:grid-cols-2">
        {/* Left: content */}
        <section className="relative order-2 flex flex-col justify-center px-6 py-12 sm:px-10 lg:order-1 lg:px-14 lg:py-16 xl:px-20">
          {/* Decorative curved lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
            viewBox="0 0 600 800"
            fill="none"
            aria-hidden
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-40 180 C 120 80, 280 320, 420 220 S 700 60, 780 200"
              stroke="var(--cyan)"
              strokeWidth="1"
            />
            <path
              d="M-20 520 C 160 420, 300 640, 480 540 S 720 380, 820 520"
              stroke="var(--ink)"
              strokeWidth="1"
              opacity="0.45"
            />
          </svg>

          <div className="relative z-10 max-w-xl">
            <p className="mb-5 flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ink-soft sm:text-xs">
              <span
                className="pulse-dot inline-block size-1.5 shrink-0 rounded-full bg-cyan"
                aria-hidden
              />
              IAI GUNUNGKIDUL × PIEYO PD DIY
            </p>

            <h1
              className="font-sans font-bold tracking-[-0.04em] text-ink"
              style={{ fontSize: "clamp(3.5rem, 12vw, 7.5rem)", lineHeight: 0.95 }}
            >
              SRAWUNG
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              Seminar &amp; Konferensi Cabang IAI Gunungkidul 2026 — menghadirkan
              tema{" "}
              <em className="font-medium italic text-cyan">
                &lsquo;AI Toolkit for Pharmacists.&rsquo;
              </em>
            </p>

            <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-silver sm:text-xs">
              SABTU · 06 DES 2026 · GUNUNGKIDUL, DIY
            </p>

            <Countdown />
          </div>
        </section>

        {/* Right: hero image */}
        <section className="relative order-1 flex items-center justify-center bg-gradient-to-br from-background-deep-start to-background-deep-end px-6 py-10 sm:px-10 lg:order-2 lg:px-12 lg:py-16">
          {/* Cyan digital glow behind image */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 45%, color-mix(in srgb, var(--cyan-glow) 28%, transparent), transparent 70%)",
            }}
          />

          <div className="relative z-10 w-full max-w-[min(100%,420px)]">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-[#c8c4bb]">
              {/* Drop /public/hero.png to replace the gray placeholder */}
              <Image
                src="/hero.png"
                alt="SRAWUNG — Seminar & Konferensi Cabang IAI Gunungkidul 2026"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
