"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { offScreenPhotos } from "@/data/offscreen";
import type { CSSProperties } from "react";

export default function OffScreenGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // createPortal needs document.body, which only exists client-side;
    // deferring to an effect avoids an SSR/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectedIndex(null);
      setIsClosing(false);
    }, 200);
  }, [isClosing]);

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      setSelectedIndex((prev) =>
        prev === null
          ? null
          : (prev - 1 + offScreenPhotos.length) % offScreenPhotos.length
      );
    },
    [selectedIndex]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (selectedIndex === null) return;
      setSelectedIndex((prev) =>
        prev === null ? null : (prev + 1) % offScreenPhotos.length
      );
    },
    [selectedIndex]
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const selectedPhoto =
    selectedIndex !== null ? offScreenPhotos[selectedIndex] : null;

  return (
    <section className="pt-4 space-y-6" data-purpose="off-screen-photos">
      <h2 className="text-[14.5px] font-normal text-neutral-800 flex items-center gap-2">
        <span className="text-neutral-400 select-none">##</span> Off screen
      </h2>

      <div
        className="overflow-x-auto no-scrollbar"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div className="flex items-center px-6 pt-16 pb-2 w-max mx-auto">
          {offScreenPhotos.map((photo, index) => (
            <button
              type="button"
              key={photo.caption}
              onClick={() => setSelectedIndex(index)}
              className="polaroid shrink-0 -mr-6 sm:-mr-8 last:mr-0 select-none text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-[2px]"
              style={
                {
                  "--rotate": `${photo.rotate}deg`,
                  "--z": photo.z,
                } as CSSProperties
              }
              aria-label={`View photo: ${photo.caption}`}
            >
              <div className="polaroid-caption pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-600 shadow-sm">
                {photo.caption}
              </div>
              <div className="bg-white p-2 pb-5 rounded-[2px] border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                <Image
                  alt={photo.caption}
                  className="w-24 h-32 object-cover rounded-[1px]"
                  height={128}
                  width={96}
                  src={photo.src}
                  priority={index < 2}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Full-screen Photo Viewer Modal */}
      {mounted &&
        selectedPhoto &&
        selectedIndex !== null &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            aria-label={selectedPhoto.caption}
          >
            {/* Half-blurred backdrop overlay button */}
            <button
              type="button"
              tabIndex={-1}
              aria-label="Close photo preview"
              className="absolute inset-0 w-full h-full bg-neutral-950/40 backdrop-blur-md transition-opacity cursor-pointer border-0"
              onClick={handleClose}
            />

            {/* Navigation & Close Controls */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full text-white/80 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 transition-all cursor-pointer"
              aria-label="Close preview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left arrow */}
            <button
              type="button"
              onClick={handlePrev}
              className="hidden sm:flex absolute left-4 sm:left-8 z-20 p-3 rounded-full text-white/80 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 transition-all cursor-pointer items-center justify-center"
              aria-label="Previous photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              type="button"
              onClick={handleNext}
              className="hidden sm:flex absolute right-4 sm:right-8 z-20 p-3 rounded-full text-white/80 hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 transition-all cursor-pointer items-center justify-center"
              aria-label="Next photo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Polaroid card rotating and presenting to viewer */}
            <div
              key={selectedPhoto.src}
              className={`relative z-10 bg-white p-3.5 sm:p-4.5 pb-6 sm:pb-7 rounded-[4px] shadow-2xl shadow-black/50 border border-neutral-100 max-w-[92vw] sm:max-w-[380px] w-full flex flex-col items-center pointer-events-auto ${
                isClosing ? "polaroid-viewer-card-out" : "polaroid-viewer-card-in"
              }`}
              style={
                {
                  "--initial-rot": `${selectedPhoto.rotate * 2.5 || -8}deg`,
                } as CSSProperties
              }
            >
              <div className="relative w-full aspect-[3/4] max-h-[62vh] overflow-hidden rounded-[2px] bg-neutral-100">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  fill
                  sizes="(max-width: 640px) 92vw, 380px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Caption & Counter */}
              <div className="w-full mt-4 text-center px-2 flex flex-col items-center gap-1">
                <p className="font-mono text-xs sm:text-[13px] text-neutral-800 tracking-tight">
                  {selectedPhoto.caption}
                </p>
                <span className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">
                  {selectedIndex + 1} / {offScreenPhotos.length}
                </span>
              </div>
            </div>

            {/* Keyboard shortcut hint on desktop */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] font-mono text-white/70 pointer-events-none hidden sm:block tracking-wide">
              esc to close · ← / → to browse
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

