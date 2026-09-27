import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * Photos are labelled boxes until you drop real images in.
 * Swap the inner <div> for next/image at the same aspect ratio and
 * nothing else in the layout moves.
 */
export function PhotoPlaceholder({
  label = "[ photo ]",
  className = "",
  dark = false,
  style,
}: {
  label?: string;
  className?: string;
  dark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`grid place-items-center ${dark ? "hatch-dark bg-white/5" : "hatch"} ${className}`}
      style={style}
    >
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
          dark ? "text-white/50" : "text-ink/40"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/** White border, a strip of tape, a handwritten caption. */
export function Polaroid({
  caption,
  label,
  src,
  alt,
  objectPosition,
  sizes = "(max-width: 768px) 74vw, 350px",
  priority = false,
  rotate = "2.5deg",
  tape = "both",
  className = "",
  frameClassName = "",
  photoClassName = "aspect-4/5",
  style,
}: {
  caption?: string;
  label?: string;
  /** Give it a src and it shows the photo; leave it off for the labelled box. */
  src?: string;
  alt?: string;
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
  rotate?: string;
  tape?: "both" | "left" | "none";
  className?: string;
  frameClassName?: string;
  photoClassName?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={`group relative rounded-[10px] bg-white p-2.5 shadow-photo transition-[rotate,translate] duration-500 ease-out-soft hover:-translate-y-1 hover:rotate-[1deg] ${frameClassName} ${className}`}
      style={{ rotate, ...style }}
    >
      {tape !== "none" && (
        <span className="pointer-events-none absolute -left-5 -top-2 z-10 block h-6 w-24 -rotate-[28deg] bg-highlight/75 shadow-[0_1px_2px_rgb(0_0_0/0.08)]" />
      )}
      {tape === "both" && (
        <span className="pointer-events-none absolute -right-6 -top-1 z-10 block h-6 w-24 rotate-[32deg] bg-[#ff9a6b]/60 shadow-[0_1px_2px_rgb(0_0_0/0.08)]" />
      )}
      {src ? (
        <div className={`relative overflow-hidden rounded-[6px] bg-[#ece8de] ${photoClassName}`}>
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
            style={objectPosition ? { objectPosition } : undefined}
          />
        </div>
      ) : (
        <PhotoPlaceholder label={label} className={`overflow-hidden rounded-[6px] ${photoClassName}`} />
      )}
      {caption && (
        <figcaption className="px-1 pt-2.5 pb-0.5 font-hand text-lg leading-none text-ink/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
