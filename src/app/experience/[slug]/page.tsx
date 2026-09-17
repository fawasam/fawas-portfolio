import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { experience } from "@/data/experience";
import FolderIcon from "@/components/FolderIcon";

export function generateStaticParams() {
  return experience.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = experience.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name} — Fawas A M`,
    description: `Experience at ${company.name}, ${company.location}.`,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = experience.find((c) => c.slug === slug);
  if (!company) notFound();

  return (
    <main className="w-full max-w-[620px] mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-10 font-mono">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-neutral-400 hover:text-neutral-700 transition-colors"
      >
        ← Back to home
      </Link>

      <div className="space-y-2">
        <h1 className="text-[24px] sm:text-[26px] font-semibold tracking-tight text-neutral-900 flex items-center gap-2.5">
          <FolderIcon color={company.folderColor} />
          {company.name}
        </h1>
        <p className="text-[13px] text-neutral-400 pl-[30px]">{company.location}</p>
      </div>

      <div className="space-y-10">
        {company.roles.map((role) => (
          <section key={role.title} className="space-y-3 pt-6 border-t border-neutral-200/80 first:border-t-0 first:pt-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
              <h2 className="text-[15px] font-medium text-neutral-900">{role.title}</h2>
              <span className="text-[12px] text-neutral-400 whitespace-nowrap">
                {role.period} · {role.tag}
              </span>
            </div>
            <ul className="space-y-2">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-[13.5px] leading-[1.7] text-neutral-600">
                  <span className="text-neutral-300 select-none">-</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
