import { lab, site } from "@/lib/content";
import Reveal from "@/components/ui/reveal";
import { PhotoPlaceholder } from "@/components/ui/photo";
import { Underline } from "@/components/ui/doodles";
import { Container, Eyebrow, HandNote } from "@/components/ui/primitives";
import { GitHubIcon } from "@/components/ui/icons";

export default function Lab() {
  return (
    <section id="lab" className="relative bg-night py-28 text-white md:py-36">
      <Container>
        <Reveal>
          <Eyebrow dark>{lab.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.03em]">
            {lab.headingBefore}
            <span className="relative inline-block whitespace-nowrap">
              {lab.headingUnderlined}
              <Underline />
            </span>
          </h2>
          <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
            <p className="max-w-2xl text-lg leading-relaxed text-night-muted">
              {lab.body}
            </p>
            <HandNote className="text-xl text-accent">{lab.aside}</HandNote>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lab.experiments.map((item, i) => (
            <Reveal as="li" key={item.repo} delay={i * 60}>
              <div className="flex h-full flex-col rounded-[16px] border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-white/55">
                  <span className="truncate">{item.repo}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-night-muted">
                  {item.note}
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.07] px-2.5 py-1 font-mono text-[11px] text-white/75">
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: item.dot }}
                    />
                    {item.lang}
                  </span>
                  {"liveUrl" in item && item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium transition-colors hover:bg-white/16"
                    >
                      Live <span aria-hidden="true">↗</span>
                      <span className="sr-only">
                        — {item.name} (opens in a new tab)
                      </span>
                    </a>
                  )}
                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/16 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
                  >
                    Code
                    <span className="sr-only">
                      {" "}
                      for {item.name} (opens in a new tab)
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal as="li" delay={lab.experiments.length * 60}>
            <a
              href={`https://github.com/${site.githubHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[200px] flex-col justify-between rounded-[16px] border border-dashed border-white/20 p-5 transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.04]"
            >
              <GitHubIcon className="size-7" />
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  {site.repoCount} public repos and counting
                </p>
                <p className="mt-1.5 font-mono text-xs text-night-muted">
                  github.com/{site.githubHandle}{" "}
                  <span aria-hidden="true">↗</span>
                </p>
              </div>
            </a>
          </Reveal>
        </ul>

        {/* <Reveal className="mt-28">
          <p className="text-3xl font-bold tracking-tight">
            {lab.offKeyboard.headingBefore}
            <span className="relative inline-block whitespace-nowrap">
              {lab.offKeyboard.headingUnderlined}
              <Underline />
            </span>
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-night-muted">{lab.offKeyboard.body}</p>

          <div className="mt-10 columns-2 gap-3 md:columns-3">
            {lab.offKeyboard.gallery.map((height, i) => (
              <figure
                key={i}
                className="group relative mb-3 break-inside-avoid overflow-hidden rounded-[12px] bg-white/5"
              >
                <PhotoPlaceholder
                  dark
                  className="transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
                  style={{ height: `${height}px` }}
                />
              </figure>
            ))}
          </div>
        </Reveal> */}
      </Container>
    </section>
  );
}
