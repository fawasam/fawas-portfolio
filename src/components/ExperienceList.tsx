import Link from "next/link";
import { experience } from "@/data/experience";
import FolderIcon from "@/components/FolderIcon";

export default function ExperienceList() {
  return (
    <div className="tree-branch pl-8 pt-1 text-[13.5px] text-neutral-800 space-y-4 font-mono group/companies">
      {experience.map((company) => (
        <div key={company.slug} className="tree-item-branch">
          <Link
            href={`/experience/${company.slug}`}
            className="group/company flex w-full flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-3 transition-all duration-300 group-hover/companies:opacity-40 hover:!opacity-100"
          >
            <span className="flex items-center gap-2 min-w-0">
              <FolderIcon color={company.folderColor} />
              <span className="text-neutral-700 transition-colors duration-300 group-hover/company:text-blue-600">
                {company.name}
              </span>
              <span className="text-neutral-300 transition-colors duration-300 group-hover/company:text-blue-400">
                →
              </span>
            </span>
            <span className="text-[11.5px] text-neutral-400 whitespace-nowrap pl-6 sm:pl-0 transition-colors duration-300 group-hover/company:text-blue-400">
              {company.location} · {company.roles.length} role{company.roles.length > 1 ? "s" : ""}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
