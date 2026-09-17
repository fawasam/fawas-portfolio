"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectRow, { projectFolderColors } from "@/components/ProjectRow";

const categories = Array.from(new Set(projects.map((project) => project.category)));

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-[12px] font-mono transition-colors duration-200 ${
        active
          ? "bg-blue-50 border-blue-300 text-blue-700"
          : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-700"
      }`}
    >
      {label}
    </button>
  );
}

export default function ProjectsFilterList() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filtered = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : projects;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <FilterChip label="All" active={activeCategory === null} onClick={() => setActiveCategory(null)} />
        {categories.map((category) => (
          <FilterChip
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[13px] text-neutral-400 font-mono">No projects match this filter.</p>
      ) : (
        <div className="tree-branch pl-8 pt-1 text-[13.5px] text-neutral-800 space-y-4 font-mono group/projects">
          {filtered.map((project) => {
            const originalIndex = projects.findIndex((p) => p.slug === project.slug);
            return (
              <ProjectRow
                key={project.slug}
                project={project}
                color={projectFolderColors[originalIndex % projectFolderColors.length]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
