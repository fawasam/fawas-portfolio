import { headlinePills, profile } from "@/data/profile";

export default function Header() {
  return (
    <section className="space-y-6" data-purpose="header-and-bio">
      <div className="space-y-1.5">
        <h1 className="text-[24px] sm:text-[26px] font-semibold tracking-tight text-neutral-900 flex items-baseline gap-2.5">
          <span className="text-neutral-400 font-normal select-none">#</span> {profile.name}
        </h1>
        <p className="text-[13px] text-neutral-400 pl-[22px]">
          {profile.role} · {profile.location}
        </p>
      </div>
      <p className="text-[14.5px] leading-[1.8] text-neutral-700 font-normal">
        I architect high-concurrency, fault-tolerant systems across fintech, healthcare, logistics, and
        e-commerce — using{" "}
        {headlinePills.map((pill) => (
          <span
            key={pill.label}
            className={`inline-flex items-center px-2 py-[1px] mx-0.5 rounded-[5px] ${pill.bg} ${pill.text} border ${pill.border} text-[13px] font-medium align-baseline`}
          >
            {pill.label}
          </span>
        ))}
        , event-driven architecture, and AI/RAG system design. Currently leading engineering at WebCastle
        Media, mentoring a team of 4 and shipping enterprise platforms end to end. Open to relocating to
        the UAE/GCC.
      </p>
    </section>
  );
}
