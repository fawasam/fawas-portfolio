import { footer, site, socials } from "@/lib/content";
import { HandNote } from "@/components/ui/primitives";
import { PinIcon, socialIcons } from "@/components/ui/icons";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-white px-6 py-16 text-center">
      <p className="font-script text-[2.75rem] font-bold leading-none">
        {site.wordmark}
        <span className="text-accent">.</span>
      </p>
      <HandNote className="mt-3 text-lg text-ink/60">{footer.aside}</HandNote>

      <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];
          const external = social.href.startsWith("http");
          return (
            <li key={social.label}>
              <a
                href={social.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2.5 text-[13px] font-medium shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-[translate,border-color] duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-black/20"
              >
                <Icon className="size-[15px]" />
                {social.label}
              </a>
            </li>
          );
        })}
      </ul>

      <p className="mt-9 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <PinIcon />
        Based in {site.city} · {site.timezone}
      </p>
      <p className="mt-3 text-[13px] text-muted">
        {footer.madeWith} · © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
