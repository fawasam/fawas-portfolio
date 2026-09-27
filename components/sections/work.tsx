import { projects, work, type Project } from "@/lib/content";
import Reveal from "@/components/ui/reveal";
import { BrowserFrame, TerminalFrame } from "@/components/ui/frames";
import { ArrowCurve, CircleScribble } from "@/components/ui/doodles";
import { Badge, Container, Eyebrow, HandNote, TechChip } from "@/components/ui/primitives";
import { CheckCircleIcon, CheckIcon, GitHubIcon, StarIcon } from "@/components/ui/icons";

/** Three cards on a float, rotated off-axis. The hover fans them apart. */
function Collage({ project, flipped }: { project: Project; flipped: boolean }) {
  return (
    <div className="group relative mx-auto aspect-4/3 w-full max-w-[560px] select-none">
      <div className="absolute right-0 top-0 w-[44%] animate-float [animation-delay:-2s]">
        <div className="rotate-[6deg] transition-[rotate,translate] duration-500 ease-out-soft group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-[9deg]">
          <BrowserFrame
            photoLabel="[ shot ]"
            src={project.shots?.secondary?.src}
            alt={project.shots?.secondary?.alt}
            sizes="(max-width: 768px) 40vw, 250px"
            bodyClassName="h-32"
            size="sm"
          />
        </div>
      </div>

      <div className="absolute left-[3%] top-[12%] z-10 w-[86%] animate-float">
        <div className="-rotate-2 transition-[rotate,translate] duration-500 ease-out-soft group-hover:-translate-y-1 group-hover:-rotate-3">
          <BrowserFrame
            domain={project.domain}
            photoLabel="[ product screenshot ]"
            src={project.shots?.main?.src}
            alt={project.shots?.main?.alt}
            bodyClassName="h-52"
          />
        </div>
      </div>

      <div
        className={`absolute bottom-0 z-20 w-[58%] animate-float [animation-delay:-4s] ${
          flipped ? "right-0" : "left-0"
        }`}
      >
        <div className="-rotate-[4deg] transition-[rotate,translate] duration-500 ease-out-soft group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:-rotate-[7deg]">
          <TerminalFrame title={project.terminal.file} lines={project.terminal.lines} />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <Reveal className={`relative ${flipped ? "md:order-2" : ""}`}>
        <Collage project={project} flipped={flipped} />
        <span
          className={`pointer-events-none absolute -top-12 z-30 flex items-end gap-1 ${
            flipped ? "right-0 md:-right-4" : "left-0 md:-left-6"
          }`}
        >
          <HandNote className="text-xl text-accent-ink">{project.aside}</HandNote>
          <ArrowCurve dir={flipped ? "left" : "right"} tone="accent" className="mb-1 h-4 w-10" />
        </span>
      </Reveal>

      <Reveal className={flipped ? "md:order-1" : ""} delay={80}>
        <div className="flex items-center gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-[12px] bg-ink font-mono text-[13px] font-bold text-white shadow-float">
            {project.initials}
          </span>
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
            <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-muted">
              {project.dates}
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg font-medium leading-snug text-ink">{project.tagline}</p>
        <p className="mt-3 leading-relaxed text-muted">{project.body}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <Badge
              key={badge.label}
              tone={badge.tone}
              icon={badge.tone === "featured" ? <StarIcon /> : <CheckIcon />}
            >
              {badge.label}
            </Badge>
          ))}
        </ul>

        {project.wins && (
          <ul className="mt-6 flex flex-col gap-2.5">
            {project.wins.map((win) => (
              <li key={win} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/85">
                <CheckCircleIcon className="mt-0.5 size-4" />
                {win}
              </li>
            ))}
          </ul>
        )}

        {project.explainer && (
          <div className="mt-6 rounded-[16px] border border-ink/[0.08] bg-[#fff6d6] px-5 py-5">
            <p className="font-hand text-xl text-ink/85">{project.explainer.title}</p>
            <p className="mt-2.5 text-[15px] leading-relaxed text-ink/70">{project.explainer.body}</p>
          </div>
        )}

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechChip key={tech}>{tech}</TechChip>
          ))}
        </ul>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px] font-semibold">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1"
              >
                View Live <span aria-hidden="true">→</span>
                <span className="sr-only">— {project.name} (opens in a new tab)</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-ink/80"
              >
                <GitHubIcon className="size-[15px]" />
                View Repo <span aria-hidden="true">→</span>
                <span className="sr-only">— {project.name} source code (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}

        {project.privateNote && !project.liveUrl && !project.repoUrl && (
          <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {project.privateNote}
          </p>
        )}
      </Reveal>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="paper-dots relative py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>{work.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            {work.headingBefore}
            <span className="relative inline-block whitespace-nowrap px-1.5">
              <span className="relative z-10">{work.headingCircled}</span>
              <CircleScribble className="-left-[0.3em] -top-[0.26em] h-[1.6em] w-[calc(100%+0.62em)]" />
            </span>
            {work.headingAfter}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{work.body}</p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-28 md:gap-40">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
