import Image from "next/image";
import { offScreenPhotos } from "@/data/offscreen";
import type { CSSProperties } from "react";

export default function OffScreenGallery() {
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
            <div
              key={photo.caption}
              className="polaroid shrink-0 -mr-6 sm:-mr-8 last:mr-0 select-none"
              style={
                {
                  "--rotate": `${photo.rotate}deg`,
                  "--z": photo.z,
                } as CSSProperties
              }
            >
              <div className="polaroid-caption pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] text-neutral-600 shadow-sm">
                {photo.caption}
              </div>
              <div className="bg-white p-2 pb-5 rounded-[2px] border border-neutral-100">
                <Image
                  alt={photo.caption}
                  className="w-24 h-32 object-cover rounded-[1px]"
                  height={128}
                  width={96}
                  src={photo.src}
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
