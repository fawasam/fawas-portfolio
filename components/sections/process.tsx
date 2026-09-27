"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/lib/content";
import { WordCircle } from "@/components/ui/doodles";
import { Eyebrow, Mark } from "@/components/ui/primitives";
import { processArt } from "./process-art";

/** How much of the pinned scroll the white-to-night wash takes. */
const ENTRY = 0.1;

/**
 * A tall section with a pinned panel inside it. Every step gets one full
 * viewport of scroll while the panel is pinned; the extra viewport at the end
 * is the panel leaving.
 *
 * The panel starts white, so its top edge is invisible against the section
 * above it, then washes to night as you scroll in — no hard seam between the
 * memory printer and Discover. The last step turns the lights back on, which
 * is the only ground the highlighter is legible against, and it lands on the
 * same paper the Work section starts with.
 */
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    let last = -1;

    const update = () => {
      frame = 0;
      const { top, height } = section.getBoundingClientRect();
      // how far the panel stays put before it starts leaving
      const pinned = height - window.innerHeight;
      if (pinned <= 0) return;

      const next = Math.min(Math.max(-top / pinned, 0), 0.9999);
      // quantise, so a scroll frame only re-renders when it would be visible
      if (Math.abs(next - last) < 0.004) return;
      last = next;
      setProgress(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const index = Math.min(Math.floor(progress * process.length), process.length - 1);
  // 0 at the seam, 1 once the panel is fully night
  const entered = Math.min(progress / ENTRY, 1);
  const light = process[index].tone === "paper";

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="How I work"
      className="relative"
      // one viewport per step, plus one for the panel to leave on
      style={{ height: `${(process.length + 1) * 100}vh` }}
    >
      <div
        className={`sticky top-0 h-screen overflow-hidden bg-white transition-colors duration-700 ease-out-soft ${
          light ? "text-ink" : "text-white"
        }`}
      >
        {/* the night wash, driven by scroll — this is the seam-less entry */}
        <div
          className="dots-on-dark pointer-events-none absolute inset-0 bg-night"
          style={{ opacity: entered }}
        />
        {/* paper takes over for the last step; time-based, since it is a step change */}
        <div
          className={`dots-on-light pointer-events-none absolute inset-0 bg-paper transition-opacity duration-700 ease-out-soft ${
            light ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative mx-auto grid h-full w-full max-w-6xl grid-cols-1 grid-rows-1 place-items-center px-6">
          {process.map((step, i) => {
            const Art = processArt[step.art];
            const isActive = i === index;
            return (
              <article
                key={step.eyebrow}
                aria-hidden={!isActive}
                // every step shares one grid cell, so nothing reflows on change
                className={`col-start-1 row-start-1 w-full transition-[opacity,translate] duration-700 ease-out-soft ${
                  isActive ? "translate-y-0" : "pointer-events-none translate-y-6"
                }`}
                // the first step rises with the wash, so its white type never
                // sits on a light panel
                style={{ opacity: isActive ? (i === 0 ? entered : 1) : 0 }}
              >
                <div className="flex flex-col items-center text-center">
                  <Eyebrow dark={step.tone === "night"}>{step.eyebrow}</Eyebrow>

                  <h2 className="mt-7 max-w-4xl text-[clamp(2.2rem,6.4vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-0.035em]">
                    {step.before}
                    {step.emphasis === "marker" && <Mark>{step.marked}</Mark>}
                    {step.emphasis === "circle" && (
                      <span className="relative inline-block whitespace-nowrap">
                        <span className="relative z-10">{step.marked}</span>
                        <WordCircle />
                      </span>
                    )}
                    {step.after}
                  </h2>

                  <p
                    className={`mt-5 font-script text-[clamp(1.5rem,3vw,1.95rem)] font-bold leading-none ${
                      step.tone === "night" ? "text-accent" : "text-accent-ink"
                    }`}
                  >
                    {step.script}
                  </p>

                  <p
                    className={`mt-6 max-w-xl leading-[1.75] ${
                      step.tone === "night" ? "text-night-muted" : "text-muted"
                    }`}
                  >
                    {step.body}
                  </p>
                </div>

                <div className="pointer-events-none mt-10 hidden md:block">
                  <Art />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
