import Link from "next/link";
import ProjectsList from "@/components/ProjectsList";

export default function ProjectsSection() {
  return (
    <section className="pt-4 space-y-4" data-purpose="projects-tree">
      <h2 className="text-[14.5px] font-normal text-neutral-800 flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className="text-neutral-400 select-none">##</span> Projects
        </span>
        <Link
          href="/projects"
          className="text-[12px] font-normal text-neutral-400 hover:text-blue-600 transition-colors"
        >
          View all →
        </Link>
      </h2>
      <ProjectsList />
    </section>
  );
}
