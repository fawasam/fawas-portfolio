/**
 * Hand-drawn marks. One per heading, never two.
 * All of them are positioned absolutely over the text they annotate, so the
 * parent needs `relative inline-block`.
 */

type Props = { className?: string };

/** Loose ellipse around a word. Sized by the caller with w-/h- classes. */
export function CircleScribble({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 236 104"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
    >
      <path
        d="M218 47c-4-19-49-31-107-32C55 14 14 29 13 53c-1 23 47 39 106 38 55-1 101-16 103-36 1-13-19-25-50-30"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Double swoosh under a word. */
export function Underline({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 -bottom-1.5 h-3 ${className}`}
    >
      <path d="M3 8c72-5 156-7 294-3" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M12 12c64-4 144-6 276-3"
        stroke="var(--color-accent)"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Little curved arrow. `dir` points the head left or right. */
export function ArrowCurve({
  className = "",
  dir = "right",
  tone = "ink",
}: Props & { dir?: "left" | "right"; tone?: "ink" | "accent" }) {
  const stroke = tone === "accent" ? "var(--color-accent)" : "currentColor";
  return (
    <svg
      viewBox="0 0 52 20"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${dir === "left" ? "" : "-scale-x-100"} ${className}`}
    >
      <path d="M50 10C38 4 18 5 4 11" stroke={stroke} strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M11 5L3 11l8 5"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Four-point sparkle. */
export function Sparkle({ className = "", tone = "accent" }: Props & { tone?: "ink" | "accent" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M12 3c.8 4.8 2.9 6.9 7.7 7.7-4.8.8-6.9 2.9-7.7 7.7-.8-4.8-2.9-6.9-7.7-7.7C9.1 9.9 11.2 7.8 12 3Z"
        stroke={tone === "accent" ? "var(--color-accent)" : "currentColor"}
        strokeOpacity={tone === "accent" ? "1" : "0.35"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The short rule that sits before every eyebrow label. */
export function EyebrowRule({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 26 2" aria-hidden="true" className={`h-px w-[26px] shrink-0 ${className}`}>
      <path d="M0 1h26" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/**
 * Circle scribble that sizes itself to whatever word it wraps — the wrapper
 * just needs `relative inline-block`. Stretches, so it fits one word or five.
 *
 * The arcs are true ellipse quadrants: a path with a long near-horizontal
 * run flattens into a straight line once it is stretched wide, which reads
 * as a crop rather than a pen stroke. The box is offset DOWN, because this
 * font's ascent metric puts a lowercase word's ink below the line-box
 * centre — centring on the box leaves a gap on top and clips the bottom.
 */
export function WordCircle({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none absolute left-[-10%] top-[5%] h-[118%] w-[120%] overflow-visible ${className}`}
    >
      <path
        d="M194 40C194 21 152 5 100 5 48 5 6 21 6 41c0 19 43 34 95 34 51 0 92-15 93-34 1-11-16-22-42-28"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
