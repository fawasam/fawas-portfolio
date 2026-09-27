import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { EyebrowRule } from "./doodles";

/* ------------------------------------------------------------------ *
 * Buttons — one pill, four tones. 44px minimum height on every size.
 * ------------------------------------------------------------------ */

const buttonBase =
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium " +
  "transition-[translate,scale,box-shadow,background-color,color,border-color] duration-200 ease-out-soft " +
  "hover:-translate-y-0.5 active:scale-[0.98]";

const buttonTones = {
  primary: "bg-ink text-white shadow-float hover:shadow-[0_1px_2px_rgb(0_0_0/0.04),0_14px_30px_-12px_rgb(0_0_0/0.45)]",
  soft: "bg-chip text-ink hover:bg-[#e8e8e8]",
  ghost: "border border-ink/12 text-ink hover:border-ink/25 hover:bg-ink/[0.03]",
  onDark: "bg-white/10 text-white hover:bg-white/16",
  onDarkGhost: "border border-white/16 text-white/85 hover:border-white/30 hover:text-white",
} as const;

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3 text-[15px]",
} as const;

type Tone = keyof typeof buttonTones;
type Size = keyof typeof buttonSizes;

function buttonClass(tone: Tone, size: Size, className?: string) {
  return [buttonBase, buttonTones[tone], buttonSizes[size], className].filter(Boolean).join(" ");
}

export function Button({
  tone = "primary",
  size = "md",
  className,
  ...rest
}: ComponentPropsWithoutRef<"button"> & { tone?: Tone; size?: Size }) {
  return <button className={buttonClass(tone, size, className)} {...rest} />;
}

export function ButtonLink({
  tone = "primary",
  size = "md",
  className,
  ...rest
}: ComponentPropsWithoutRef<"a"> & { tone?: Tone; size?: Size }) {
  return <a className={buttonClass(tone, size, className)} {...rest} />;
}

/* ------------------------------------------------------------------ *
 * Section furniture
 * ------------------------------------------------------------------ */

/** Mono, 11px, uppercase, 0.28em. Opens every section. */
export function Eyebrow({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.28em] ${
        dark ? "text-night-muted" : "text-muted"
      } ${className}`}
    >
      <EyebrowRule />
      {children}
    </p>
  );
}

/** Highlighter pen. Two words a sentence is the budget. */
export function Mark({ children }: { children: ReactNode }) {
  return <span className="highlight">{children}</span>;
}

/** Margin note in Gochi Hand. One per section. */
export function HandNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`pointer-events-none block font-hand leading-tight ${className}`}>
      {children}
    </span>
  );
}

/** The 1152px column every section shares. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>;
}

/* ------------------------------------------------------------------ *
 * Chips & badges
 * ------------------------------------------------------------------ */

/** Mono pill for a technology. */
export function TechChip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li
      className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${
        dark ? "bg-white/[0.07] text-white/75" : "bg-chip text-ink/70"
      }`}
    >
      {children}
    </li>
  );
}

/** Dashed, hand-cut sticker for the toolbox. */
export function SkillChip({ children }: { children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-dashed border-ink/25 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/85 shadow-[2px_2px_0_rgb(17_17_17/0.08)] transition-transform duration-200 ease-out-soft hover:-translate-y-0.5">
      <svg viewBox="0 0 10 10" aria-hidden="true" className="size-2.5">
        <circle cx="5" cy="5" r="4" fill="var(--color-accent)" fillOpacity="0.35" />
      </svg>
      {children}
    </li>
  );
}

/** Blue = status, amber = achievement. Both carry an icon, never colour alone. */
export function Badge({
  tone,
  icon,
  children,
}: {
  tone: "featured" | "achieve";
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <li
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        tone === "featured" ? "bg-featured text-featured-ink" : "bg-achieve text-achieve-ink"
      }`}
    >
      {icon}
      {children}
    </li>
  );
}

/** Pulsing availability dot. */
export function StatusDot() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#00d294] opacity-55" />
      <span className="relative inline-flex size-2 rounded-full bg-[#00bb7f]" />
    </span>
  );
}
