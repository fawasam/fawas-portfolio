import Link from "next/link";
import type { Metadata } from "next";
import ProjectsFilterList from "@/components/ProjectsFilterList";

export const metadata: Metadata = {
  title: "Projects — Fawas A M",
  description: "All projects by Fawas A M — fintech, logistics, and AI/RAG platforms.",
};

export default function ProjectsIndexPage() {
  return (
    <main className="w-full max-w-[620px] mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-8 font-mono">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-neutral-400 hover:text-neutral-700 transition-colors"
      >
        ← Back to home
      </Link>

      <h1 className="text-[24px] sm:text-[26px] font-semibold tracking-tight text-neutral-900 flex items-baseline gap-2.5">
        <span className="text-neutral-400 font-normal select-none">$</span> ls ~/projects
      </h1>

      <ProjectsFilterList />
    </main>
  );
}
