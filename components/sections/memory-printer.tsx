"use client";

import { useState } from "react";
import { memoryPrinter, site, type Slip } from "@/lib/content";
import { PhotoPlaceholder } from "@/components/ui/photo";
import { ArrowCurve } from "@/components/ui/doodles";
import { HandNote } from "@/components/ui/primitives";

/** Squiggle under the heading — looser than the section Underline. */
function Squiggle() {
  return (
    <svg
      viewBox="0 0 168 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-2.5"
    >
      <path
        d="M3 7c14-4 26 2 40-1s24-4 38-1 26 4 40 1 24-3 44 0"
        stroke="var(--color-accent)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** One printed slip — a photo or a line, on the same paper stock. */
function PrintedSlip({ slip }: { slip: Slip }) {
  return (
    <figure className="absolute inset-x-0 top-0 animate-print-out rounded-b-[12px] border-t-2 border-dashed border-black/10 bg-white p-3 shadow-lift">
      {slip.kind === "photo" ? (
        <>
          <PhotoPlaceholder
            className="aspect-4/3 overflow-hidden rounded-[4px]"
            label="[ photo ]"
          />
          <figcaption className="pb-1 pt-2 text-center font-script text-xl leading-none text-ink/80">
            {slip.caption}
          </figcaption>
        </>
      ) : (
        <blockquote className="px-2 py-6 text-center">
          <p className="font-script text-[1.65rem] font-bold leading-snug text-ink">{slip.quote}</p>
          <footer className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">
            {slip.attribution}
          </footer>
        </blockquote>
      )}
    </figure>
  );
}

export default function MemoryPrinter() {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);

  const slips = memoryPrinter.slips;
  const slip = slips[index];
  const printed = count > 0;
  const file = slip.kind === "photo" ? "memory.jpg" : "note.txt";

  const print = () => {
    setCount((value) => value + 1);
    setIndex((current) => {
      if (slips.length < 2) return current;
      let next = current;
      while (next === current) next = Math.floor(Math.random() * slips.length);
      return next;
    });
  };

  return (
    <div className="mt-28 grid items-start gap-12 md:grid-cols-[1fr_1.05fr] md:gap-8">
      <div className="md:pt-16">
        <p className="flex items-end gap-2 font-hand text-3xl text-accent-ink">
          {memoryPrinter.aside}
          <ArrowCurve dir="right" tone="accent" className="mb-1 h-4 w-11" />
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight">
          {memoryPrinter.headingBefore}
          <span className="relative inline-block whitespace-nowrap">
            {memoryPrinter.headingSquiggle}
            <Squiggle />
          </span>
        </h3>

        <p className="mt-3 max-w-md leading-relaxed text-muted">{memoryPrinter.body}</p>

        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {printed ? `${count} printed this session` : "nothing printed yet"}
        </p>
      </div>

      <div>
        <div className="relative mx-auto w-full max-w-[400px]">
          {/* CRT */}
          <div className="relative z-10 rounded-[28px] bg-[#e9e4d8] p-4 pb-3 shadow-photo ring-1 ring-black/5">
            <div className="rounded-[20px] bg-[#2a2a2a] p-3 shadow-[inset_0_2px_6px_rgb(0_0_0/0.5)]">
              <div className="scanlines relative aspect-4/3 overflow-hidden rounded-[14px] bg-[#170c05] p-4 font-mono text-[12.5px] leading-relaxed text-[#ffb15c] shadow-[inset_0_0_48px_rgb(255_140_60/0.16)]">
                <p className="text-[#ffb15c]/60">{site.wordmark}@crt:~$ ./print --random</p>
                <p aria-live="polite" className="mt-1">
                  {printed ? `printed #${count} ✓ ${file}` : "ready — press PRINT"}
                </p>
                <p className="mt-1">
                  <span className="text-[#ffb15c]/60">$ </span>
                  <span className="animate-blink">▍</span>
                </p>
                <p className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.3em] text-[#ffb15c]/35">
                  VS-84
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between px-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
                {site.wordmark}·Tron
              </span>
              <div className="flex items-center gap-3">
                <span
                  className={`size-2 rounded-full transition-colors duration-300 ${
                    printed ? "bg-[#00bb7f]" : "bg-[#00bb7f]/45"
                  }`}
                />
                <button
                  type="button"
                  onClick={print}
                  aria-label="Print a random photo or quote"
                  className="inline-flex select-none items-center justify-center rounded-full bg-ink px-4 py-1.5 font-mono text-xs font-semibold tracking-[0.2em] text-white transition-[translate,scale] duration-200 ease-out-soft hover:-translate-y-0.5 active:scale-95"
                >
                  PRINT
                </button>
              </div>
            </div>
          </div>

          {/* neck */}
          <div className="mx-auto h-4 w-24 bg-[#d9d3c4]" />

          {/* printer + paper slot */}
          <div className="relative z-10 mx-auto w-[88%] rounded-[16px] bg-[#e9e4d8] px-5 pb-3 pt-3 shadow-float ring-1 ring-black/5">
            <div className="h-2 rounded-full bg-[#1f1f1f] shadow-[inset_0_1px_2px_rgb(0_0_0/0.6)]" />
          </div>

          {/* the slip feeds out of the slot and is clipped by this box */}
          <div className="relative mx-auto -mt-2 h-[300px] w-[72%] overflow-hidden">
            {printed ? (
              <PrintedSlip key={count} slip={slip} />
            ) : (
              <p className="pt-5 text-center font-script text-2xl font-bold text-muted">
                ↑ press print
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
