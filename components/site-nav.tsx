"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { ButtonLink } from "@/components/ui/primitives";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Tighten the pill once the hero is behind you.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section owns the middle of the viewport.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the sheet on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-md">
        <nav
          aria-label="Primary"
          className={`flex w-full items-center justify-between gap-1 rounded-full border py-1.5 pl-3 pr-1.5 backdrop-blur-[12px] transition-[background-color,border-color,box-shadow] duration-300 ease-out-soft ${
            scrolled
              ? "border-ink/[0.08] bg-white/85 shadow-float"
              : "border-ink/[0.06] bg-white/75 shadow-float"
          }`}
        >
          <a href="#hero" className="rounded-full px-1 font-script text-[23px] font-bold leading-none">
            {site.wordmark}
            <span className="text-accent">.</span>
            <span className="sr-only"> — back to top</span>
          </a>

          <div className="hidden items-center md:flex">
            <ul className="flex items-center">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`block rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "bg-chip text-ink" : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ButtonLink href="#contact" size="sm" className="ml-1">
              Get in Touch
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-full bg-ink text-white transition-transform duration-200 ease-out-soft active:scale-95 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {open && (
          <div
            id="mobile-menu"
            className="mt-2 overflow-hidden rounded-[22px] border border-ink/[0.06] bg-white/95 p-2 shadow-float backdrop-blur-[12px] md:hidden"
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-[16px] px-4 py-3 text-[15px] font-medium text-ink/80 transition-colors hover:bg-chip hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="#contact"
              size="md"
              className="mt-1 w-full"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </ButtonLink>
          </div>
        )}
      </div>
    </header>
  );
}
