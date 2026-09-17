import Link from "next/link";
import type { Project } from "@/data/projects";
import FolderIcon, { type FolderColor } from "@/components/FolderIcon";

export const projectFolderColors: FolderColor[] = ["blue", "amber", "violet", "emerald", "rose"];

export default function ProjectRow({ project, color }: { project: Project; color: FolderColor }) {
  return (
    <div className="tree-item-branch">
      <Link
        href={`/projects/${project.slug}`}
        className="group/project flex w-full items-start justify-between gap-3 transition-all duration-300 group-hover/projects:opacity-40 hover:!opacity-100"
      >
        <span className="flex items-baseline gap-2 min-w-0">
          <span className="pt-0.5">
            <FolderIcon color={color} />
          </span>
          <span className="min-w-0">
            <span className="text-neutral-700 transition-colors duration-300 group-hover/project:text-blue-600 group-hover/project:font-medium">
              {project.title}
            </span>
            <span className="text-neutral-300 ml-1.5 transition-colors duration-300 group-hover/project:text-blue-400">
              →
            </span>
            <span className="block sm:inline text-[11.5px] text-neutral-400 sm:ml-2 transition-colors duration-300 group-hover/project:text-blue-400">
              {project.tagline}
            </span>
          </span>
        </span>
        <span className="flex items-center gap-2 shrink-0">
          <span className="text-[10.5px] text-neutral-400 whitespace-nowrap px-1.5 py-0.5 rounded border border-neutral-200">
            {project.category}
          </span>
          <span className="text-[11.5px] text-neutral-400 whitespace-nowrap transition-colors duration-300 group-hover/project:text-blue-400">
            {project.year}
          </span>
        </span>
      </Link>
    </div>
  );
}
