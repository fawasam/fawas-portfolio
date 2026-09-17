import { skills } from "@/data/profile";

export default function SkillsScroller() {
  return (
    <section className="pt-4 space-y-4" data-purpose="skills">
      <h2 className="text-[14.5px] font-normal text-neutral-800 flex items-center gap-2">
        <span className="text-neutral-400 select-none">##</span> Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 rounded-lg border border-neutral-200/90 bg-white text-[13px] text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-[0_4px_10px_rgba(37,99,235,0.12)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
