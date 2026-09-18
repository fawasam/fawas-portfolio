import Link from "next/link";
import { topSkills, TOP_SKILLS_COUNT } from "@/lib/skills";

export default function SkillsScroller() {
  return (
    <section className="pt-4 space-y-3" data-purpose="skills">
      <h2 className="text-[14.5px] font-normal text-neutral-800 flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className="text-neutral-400 select-none">$</span> ls ~/stack --top {TOP_SKILLS_COUNT}
        </span>
        <Link
          href="/skills"
          className="text-[12px] font-normal text-neutral-400 hover:text-blue-600 transition-colors"
        >
          View all →
        </Link>
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {topSkills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md border border-neutral-200/90 bg-white text-[12px] text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
