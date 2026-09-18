import { skillCategories } from "@/lib/skills";

export default function SkillsList() {
  return (
    <div className="space-y-4">
      {skillCategories.map((group) => (
        <div key={group.category}>
          <h3 className="text-[11px] font-medium text-neutral-400 tracking-wide uppercase mb-2">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-lg border border-neutral-200/90 bg-white text-[13px] text-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 hover:shadow-[0_4px_10px_rgba(37,99,235,0.12)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
