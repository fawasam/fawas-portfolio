import { profile } from "@/data/profile";

const linkClass =
  "text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors break-all";

export default function Connect() {
  return (
    <section className="pt-4 space-y-3" data-purpose="connect-contact">
      <h2 className="text-[14.5px] font-normal text-neutral-800 flex items-center gap-2">
        <span className="text-neutral-400 select-none">##</span> Connect
      </h2>
      <p className="text-[14px] leading-[1.75] text-neutral-700 font-normal">
        I&apos;m open to new opportunities, especially roles in the UAE/GCC. Get in touch by{" "}
        <a className={linkClass} href={`mailto:${profile.email}`}>
          email
        </a>
        , or find me on{" "}
        <a className={linkClass} href={profile.github} rel="noreferrer" target="_blank">
          GitHub
        </a>
        ,{" "}
        <a className={linkClass} href={profile.linkedin} rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        , or at{" "}
        <a className={linkClass} href={profile.site} rel="noreferrer" target="_blank">
          fawasam.in
        </a>
        .
      </p>
    </section>
  );
}
