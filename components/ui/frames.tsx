import Image from "next/image";
import type { ReactNode } from "react";
import { PhotoPlaceholder } from "./photo";

/** Three traffic lights. Used by both frames. */
function TrafficLights({ size = "md" }: { size?: "sm" | "md" }) {
  const dot = size === "sm" ? "size-1.5" : "size-[7px]";
  return (
    <>
      <span className={`block rounded-full bg-[#ff5f57] ${dot}`} />
      <span className={`block rounded-full bg-[#febc2e] ${dot}`} />
      <span className={`block rounded-full bg-[#28c840] ${dot}`} />
    </>
  );
}

/** Light browser chrome around a screenshot. */
export function BrowserFrame({
  domain,
  photoLabel,
  src,
  alt,
  sizes = "(max-width: 768px) 80vw, 480px",
  bodyClassName = "h-52",
  size = "md",
}: {
  domain?: string;
  photoLabel?: string;
  /** Give it a src and the chrome wraps a real screenshot. */
  src?: string;
  alt?: string;
  sizes?: string;
  bodyClassName?: string;
  size?: "sm" | "md";
}) {
  return (
    <div className="overflow-hidden rounded-[12px] bg-white shadow-lift">
      <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-[#f5f5f5] px-2.5 py-2">
        <TrafficLights size={size} />
        {domain && (
          <span className="ml-2.5 truncate rounded-full bg-white px-2.5 py-0.5 font-mono text-[9px] text-ink/45">
            {domain}
          </span>
        )}
      </div>
      {src ? (
        <div className={`relative ${bodyClassName}`}>
          <Image src={src} alt={alt ?? ""} fill sizes={sizes} className="object-cover object-top" />
        </div>
      ) : (
        <PhotoPlaceholder label={photoLabel} className={bodyClassName} />
      )}
    </div>
  );
}

export type TerminalLine = { text: string; tone?: "accent" | "green" | "amber" };

const lineTone = {
  accent: "text-accent",
  green: "text-[#9be39b]",
  amber: "text-[#ffb15c]",
} as const;

/** Dark terminal card — the counterweight to every light screenshot. */
export function TerminalFrame({
  title,
  lines,
  className = "",
  children,
}: {
  title: string;
  lines?: TerminalLine[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`overflow-hidden rounded-[12px] bg-[#0d0d0d] shadow-lift ring-1 ring-white/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.08] px-2.5 py-2">
        <TrafficLights size="sm" />
        <span className="ml-2 truncate font-mono text-[9px] text-white/45">{title}</span>
      </div>
      {lines && (
        <div className="px-3.5 py-3 font-mono text-[9px] leading-[2] text-white/60">
          {lines.map((line, i) => (
            <div key={i} className={line.tone ? lineTone[line.tone] : undefined}>
              {line.text}
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}
