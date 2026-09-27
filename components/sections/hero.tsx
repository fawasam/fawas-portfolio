import { hero, site } from "@/lib/content";
import { Polaroid } from "@/components/ui/photo";
import { ArrowCurve, CircleScribble, Sparkle } from "@/components/ui/doodles";
import {
  ButtonLink,
  Container,
  HandNote,
  Mark,
  StatusDot,
} from "@/components/ui/primitives";
import { DownloadIcon } from "@/components/ui/icons";

/** Small mono tile that stands in for a project favicon. */
function ProjectTag({
  initials,
  children,
}: Readonly<{
  initials: string;
  children: string;
}>) {
  return (
    <a
      href="#work"
      className="inline-flex items-baseline gap-1.5 font-semibold text-ink"
    >
      <span className="relative top-[3px] grid size-5 shrink-0 place-items-center overflow-hidden rounded-[6px] bg-ink font-mono text-[8px] font-bold text-white ring-1 ring-black/10">
        {initials}
      </span>
      <span className="link-underline">{children}</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="paper-dots relative overflow-hidden">
      <Container className="relative grid min-h-[100svh] items-center gap-16 pb-20 pt-32 md:grid-cols-[1.12fr_0.88fr] md:gap-10 md:pt-28">
        <div>
          <p className="relative flex items-end gap-2.5">
            <span className="-rotate-3 font-script text-[2.1rem] font-bold leading-none text-accent-ink">
              {hero.greeting}
            </span>
            <ArrowCurve dir="right" tone="accent" className="mb-1.5 h-4 w-11" />
          </p>

          <h1 className="relative mt-5 text-[clamp(2.4rem,9.4vw,4.1rem)] font-extrabold leading-[1.05] tracking-[-0.035em] md:text-[clamp(2.75rem,5.6vw,4.1rem)]">
            I’m
            <span className="relative ml-3 inline-block whitespace-nowrap px-1">
              <span className="relative z-10">{site.name}</span>
              <CircleScribble className="-left-[0.34em] -top-[0.24em] h-[1.55em] w-[calc(100%+0.7em)]" />
            </span>
            <span className="sr-only"> — {site.role}</span>
          </h1>

          <p className="mt-5 max-w-xl text-[clamp(1.3rem,2.4vw,1.6rem)] font-medium leading-snug tracking-[-0.01em] text-ink/85">
            {hero.lead.before}
            <Mark>{hero.lead.markOne}</Mark>
            {hero.lead.between}
            <Mark>{hero.lead.markTwo}</Mark>
            {hero.lead.after}
          </p>

          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            {hero.bio} Right now I’m building{" "}
            <ProjectTag initials={hero.buildingNow.initials}>
              {hero.buildingNow.name}
            </ProjectTag>
            ; before that I shipped{" "}
            <ProjectTag initials={hero.shippedBefore[0].initials}>
              {hero.shippedBefore[0].name}
            </ProjectTag>{" "}
            and{" "}
            <ProjectTag initials={hero.shippedBefore[1].initials}>
              {hero.shippedBefore[1].name}
            </ProjectTag>
            .
          </p>

          <div className="relative mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#contact" tone="soft">
              Say hello <span aria-hidden="true">✌️</span>
            </ButtonLink>
            <ButtonLink
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <DownloadIcon className="size-[15px]" />
              <span className="sr-only">(opens in a new tab)</span>
            </ButtonLink>
            <span className="hidden items-center gap-1.5 sm:flex">
              <ArrowCurve dir="left" className="h-4 w-13 text-ink" />
              <HandNote className="text-lg text-ink/60">don’t be shy</HandNote>
            </span>
          </div>

          <p className="mt-10 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <StatusDot />
            {site.city} · {hero.status}
          </p>
        </div>

        <div className="relative mx-auto w-[min(74vw,310px)] md:w-full md:max-w-[350px]">
          <HandNote className="absolute -left-4 -top-14 z-30 -rotate-6 text-2xl text-ink/75 md:-left-16">
            {hero.asideTop}
          </HandNote>

          <Polaroid
            caption={hero.photoCaption}
            src={hero.photo.src}
            alt={hero.photo.alt}
            objectPosition={hero.photo.position}
            priority
            rotate="2.5deg"
            tape="both"
          />

          <HandNote className="absolute -bottom-12 right-0 z-30 rotate-3 text-xl text-ink/70 md:-right-10">
            {hero.asideBottom}
          </HandNote>

          <Sparkle className="absolute -right-10 top-24 size-6" />
          <Sparkle className="absolute -left-12 bottom-24 size-4 opacity-60" />
        </div>
      </Container>
    </section>
  );
}
