"use client";

import { useState } from "react";
import { about } from "@/lib/content";
import { Polaroid } from "@/components/ui/photo";
import Reveal from "@/components/ui/reveal";
import { ArrowCurve, Sparkle, Underline } from "@/components/ui/doodles";
import {
  Container,
  Eyebrow,
  HandNote,
  SkillChip,
} from "@/components/ui/primitives";
import MemoryPrinter from "./memory-printer";

const tabs = [
  { id: "story", label: "My story" },
  { id: "bits", label: "Quick bits" },
  { id: "path", label: "Path so far" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function About() {
  const [tab, setTab] = useState<TabId>("story");

  return (
    <section id="about" className="relative bg-white py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="relative">
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              {about.headingBefore}
              <span className="relative inline-block whitespace-nowrap">
                {about.headingUnderlined}
                <Underline />
              </span>
            </h2>
            <HandNote className="mt-3 text-xl text-muted md:absolute md:-right-44 md:top-2 md:mt-0">
              {about.aside}
            </HandNote>
          </Reveal>

          <div
            role="tablist"
            aria-label="About sections"
            className="inline-flex self-start rounded-full bg-chip p-1 md:self-auto"
          >
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                id={`tab-${id}`}
                aria-selected={tab === id}
                aria-controls={`panel-${id}`}
                onClick={() => setTab(id)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-[color,background-color,box-shadow,scale] duration-200 active:scale-95 ${
                  tab === id
                    ? "bg-white text-ink shadow-[0_1px_2px_rgb(0_0_0/0.06),0_4px_12px_-6px_rgb(0_0_0/0.18)]"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 min-h-[300px]">
          {tab === "story" && (
            <div
              role="tabpanel"
              id="panel-story"
              aria-labelledby="tab-story"
              className="grid gap-8 md:grid-cols-3 md:gap-10"
            >
              {about.story.map((item, i) => (
                <Reveal key={item.step} delay={i * 90}>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                    {item.step}
                  </p>
                  <p className="mt-[18px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          )}

          {tab === "bits" && (
            <div
              role="tabpanel"
              id="panel-bits"
              aria-labelledby="tab-bits"
              className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
            >
              {about.bits.map((bit) => (
                <div
                  key={bit.label}
                  className="rounded-[16px] border border-ink/[0.08] bg-mist p-6"
                >
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                    {bit.label}
                  </p>
                  <p className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                    {bit.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {tab === "path" && (
            <ol
              role="tabpanel"
              id="panel-path"
              aria-labelledby="tab-path"
              className="ml-1.5 border-l-[1.5px] border-dashed border-ink/20 pl-8"
            >
              {about.path.map((step) => (
                <li key={step.title} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[39px] top-1.5 block size-[9px] rounded-full bg-accent" />
                  <p className="font-mono text-xs tracking-[0.14em] text-muted">
                    {step.year}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold tracking-[-0.02em]">
                    {step.title}
                  </p>
                  <p className="mt-1.5 max-w-xl leading-relaxed text-muted">
                    {step.note}
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>

        <Reveal className="mt-14">
          <p className="flex items-center gap-2.5 font-hand text-2xl text-ink/80">
            {about.toolboxAside}
            <ArrowCurve dir="right" tone="accent" className="h-3.5 w-16" />
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {about.tools.map((tool) => (
              <SkillChip key={tool}>{tool}</SkillChip>
            ))}
          </ul>
        </Reveal>

        {/* <Reveal className="relative mt-28">
          <HandNote className="mb-8 text-2xl text-ink/75 md:mb-4">{about.cameraRollAside}</HandNote>
          <Sparkle className="absolute right-10 top-6 size-5" />
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 md:flex md:justify-center md:gap-0">
            {about.cameraRoll.map((shot) => (
              <li
                key={shot.caption}
                className="relative hover:z-20 md:-mx-3 md:w-60"
                style={{ zIndex: shot.z, translate: `0 ${shot.lift}` }}
              >
                <Polaroid
                  caption={shot.caption}
                  rotate={shot.rotate}
                  tape="none"
                  frameClassName="p-2"
                  photoClassName="aspect-4/5"
                />
              </li>
            ))}
          </ul>
        </Reveal> */}

        <Reveal>
          <MemoryPrinter />
        </Reveal>
      </Container>
    </section>
  );
}
