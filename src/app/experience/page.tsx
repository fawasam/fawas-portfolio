import Link from "next/link";
import type { Metadata } from "next";
import ExperienceList from "@/components/ExperienceList";

export const metadata: Metadata = {
  title: "Experience — Fawas A M",
  description: "Work experience of Fawas A M — Software Engineer & Technical Lead.",
};

export default function ExperienceIndexPage() {
  return (
    <main className="w-full max-w-[620px] mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-8 font-mono">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-neutral-400 hover:text-neutral-700 transition-colors"
      >
        ← Back to home
      </Link>

      <h1 className="text-[24px] sm:text-[26px] font-semibold tracking-tight text-neutral-900 flex items-baseline gap-2.5">
        <span className="text-neutral-400 font-normal select-none">#</span> Experience
      </h1>

      <ExperienceList />
    </main>
  );
}
