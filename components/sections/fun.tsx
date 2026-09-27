"use client";

import { useState } from "react";
import { fun, site } from "@/lib/content";
import Reveal from "@/components/ui/reveal";
import { CircleScribble } from "@/components/ui/doodles";
import { Button, Container, Eyebrow, HandNote } from "@/components/ui/primitives";
import { RefreshIcon } from "@/components/ui/icons";

export default function Fun() {
  const [runs, setRuns] = useState(0);
  const [index, setIndex] = useState(0);

  const fortune = fun.fortunes[index];

  const roll = () => {
    setRuns((value) => value + 1);
    setIndex((current) => {
      if (fun.fortunes.length < 2) return current;
      let next = current;
      while (next === current) {
        next = Math.floor(Math.random() * fun.fortunes.length);
      }
      return next;
    });
  };

  return (
    <section id="fun" className="paper-dots overflow-hidden py-28 md:py-36">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>{fun.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              {fun.headingBefore}
              <span className="relative inline-block whitespace-nowrap px-1">
                <span className="relative z-10">{fun.headingCircled}</span>
                <CircleScribble className="-left-[0.38em] -top-[0.28em] h-[1.62em] w-[calc(100%+0.76em)]" />
              </span>
              {fun.headingAfter}
              <HandNote className="ml-3 inline-block -rotate-6 align-middle text-[0.46em] font-normal tracking-normal text-accent-ink">
                {fun.aside}
              </HandNote>
            </h2>
            <p className="mt-5 max-w-md leading-[1.75] text-muted">{fun.body}</p>
          </Reveal>

          <Reveal delay={90}>
            <div className="overflow-hidden rounded-[18px] bg-[#0b0b0f] shadow-photo">
              <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-4 py-3">
                <span className="block size-[9px] rounded-full bg-[#ff5f57]" />
                <span className="block size-[9px] rounded-full bg-[#febc2e]" />
                <span className="block size-[9px] rounded-full bg-[#28c840]" />
                <span className="flex-1 text-center font-mono text-[11px] text-white/50">
                  {site.wordmark}@portfolio: ~/fortune
                </span>
                <span className="font-mono text-[11px] text-white/35">zsh</span>
              </div>

              <div className="px-7 pb-5 pt-6 font-mono text-[13px] leading-[2]">
                <p className="text-[#9be39b]">
                  ➜ ~/fortune <span className="text-white/60">./fortune.sh --random</span>
                </p>

                <p aria-live="polite" className="mt-4">
                  <span className="block text-white/40"># {fortune.kind}</span>
                  <span className="mt-1 block text-accent">{fortune.text}</span>
                  <span className="ml-0.5 inline-block animate-blink text-white/70">▍</span>
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-4">
                  <Button tone="onDark" size="sm" onClick={roll}>
                    <RefreshIcon className="size-3.5" />
                    Run again
                  </Button>
                  <span className="font-mono text-[11px] text-white/45">
                    runs: {runs} · {fun.fortunes.length} fortunes loaded
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
