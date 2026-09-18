import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import FolderIcon, { type FolderColor } from "@/components/FolderIcon";
import MermaidDiagram from "@/components/MermaidDiagram";
import { highlightText } from "@/lib/highlightText";

const folderColors: FolderColor[] = ["blue", "amber", "violet", "emerald", "rose"];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Fawas A M`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  return (
    <main className="w-full max-w-[620px] mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-8 font-mono">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-neutral-400 hover:text-neutral-700 transition-colors"
      >
        ← Back to home
      </Link>

      <div className="space-y-2">
        <h1 className="text-[24px] sm:text-[26px] font-semibold tracking-tight text-neutral-900 flex items-center gap-2.5">
          <FolderIcon color={folderColors[index % folderColors.length]} />
          {project.title}
        </h1>
        <p className="text-[13px] text-neutral-400 pl-[30px]">
          {project.tagline} · {project.category} · {project.year}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-[5px] bg-neutral-50 border border-neutral-200 text-[12px] text-neutral-500"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-3 pt-4 border-t border-neutral-200/80">
        <h2 className="text-[14.5px] font-normal text-neutral-800 flex items-center gap-2">
          <span className="text-neutral-400 select-none">$</span> cat ARCHITECTURE.md
        </h2>
        <MermaidDiagram chart={project.diagram} />
      </div>

      <ul className="space-y-3 pt-4 border-t border-neutral-200/80">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-[14px] leading-[1.75] text-neutral-700">
            <span className="text-neutral-300 select-none">-</span>
            <span>{highlightText(highlight, project.stack)}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
