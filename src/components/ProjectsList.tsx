import { projects } from "@/data/projects";
import ProjectRow, { projectFolderColors } from "@/components/ProjectRow";

export default function ProjectsList() {
  return (
    <div className="tree-branch pl-8 pt-1 text-[13.5px] text-neutral-800 space-y-4 font-mono group/projects">
      {projects.slice(0, 5).map((project, index) => (
        <ProjectRow
          key={project.slug}
          project={project}
          color={projectFolderColors[index % projectFolderColors.length]}
        />
      ))}
    </div>
  );
}
