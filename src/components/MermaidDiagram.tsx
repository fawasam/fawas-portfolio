"use client";

import { useEffect, useId, useState } from "react";

export default function MermaidDiagram({ chart }: { chart: string }) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState<string | null>(null);
  const [zoomSvg, setZoomSvg] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import("mermaid").then(async ({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
          fontFamily:
            'ui-monospace, "SF Mono", "Fira Code", Menlo, monospace',
          fontSize: "13px",
          primaryColor: "#ffffff",
          primaryBorderColor: "#d4d4d4",
          primaryTextColor: "#262626",
          lineColor: "#a3a3a3",
          secondaryColor: "#fafafa",
          tertiaryColor: "#f5f5f5",
          clusterBkg: "#fafafa",
          clusterBorder: "#e5e5e5",
        },
        flowchart: { curve: "basis", htmlLabels: true },
      });

      try {
        const { svg } = await mermaid.render(`diagram-${rawId}`, chart);
        if (!cancelled) setSvg(svg);
      } catch {
        if (!cancelled) setFailed(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [chart, rawId]);

  // Render a second, independently-ided copy for the zoom modal (mermaid
  // needs a unique id per render; reusing the inline svg's id would collide
  // if both were ever mounted at once).
  useEffect(() => {
    if (!isZoomed || zoomSvg) return;
    let cancelled = false;

    import("mermaid").then(async ({ default: mermaid }) => {
      try {
        const { svg } = await mermaid.render(`diagram-${rawId}-zoom`, chart);
        if (!cancelled) setZoomSvg(svg);
      } catch {
        // fall back to the inline svg below if this fails
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isZoomed, zoomSvg, chart, rawId]);

  useEffect(() => {
    if (!isZoomed) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsZoomed(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  if (failed) return null;

  if (!svg) {
    return (
      <div className="h-32 flex items-center justify-center text-[12px] text-neutral-300 font-mono">
        Rendering diagram…
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsZoomed(true)}
        aria-label="Click to zoom the architecture diagram"
        className="group relative w-full overflow-x-auto rounded-lg border border-transparent hover:border-neutral-200 hover:bg-neutral-50/50 transition-colors cursor-zoom-in text-left"
      >
        <div className="[&_svg]:mx-auto [&_svg]:max-w-none" dangerouslySetInnerHTML={{ __html: svg }} />
        <span className="pointer-events-none absolute top-2 right-2 flex items-center gap-1 rounded border border-neutral-200 bg-white/95 px-2 py-0.5 text-[11px] text-neutral-400 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 8V5a2 2 0 012-2h3M3 16v3a2 2 0 002 2h3M21 8V5a2 2 0 00-2-2h-3M21 16v3a2 2 0 01-2 2h-3" />
          </svg>
          Zoom
        </span>
      </button>

      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] bg-white/98 backdrop-blur-sm flex flex-col p-4 sm:p-10"
          onClick={() => setIsZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            aria-label="Close zoomed diagram"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-neutral-400 hover:text-neutral-900 transition-colors font-mono text-[13px]"
          >
            ✕ Close
          </button>
          <div className="flex-1 min-h-0 w-full flex items-center justify-center">
            <div
              className="w-full h-full max-w-[1400px] [&_svg]:mx-auto [&_svg]:!w-full [&_svg]:!h-full"
              onClick={(e) => e.stopPropagation()}
              dangerouslySetInnerHTML={{ __html: zoomSvg ?? svg }}
            />
          </div>
          <p className="pointer-events-none shrink-0 pt-4 text-center text-[11.5px] text-neutral-400 font-mono">
            Press Esc or click outside to close
          </p>
        </div>
      )}
    </>
  );
}
