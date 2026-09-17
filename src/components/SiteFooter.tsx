"use client";

import { useEffect, useState } from "react";

function formatIstTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toLowerCase();
}

export default function SiteFooter() {
  const [istTime, setIstTime] = useState<string | null>(null);

  useEffect(() => {
    // Deferred to an effect (rather than a useState initializer) so the
    // server-rendered placeholder matches the client's first paint,
    // avoiding a hydration mismatch on this client-only clock.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIstTime(formatIstTime(new Date()));
    const interval = setInterval(() => setIstTime(formatIstTime(new Date())), 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="pt-2 pb-12 flex flex-col items-center justify-center space-y-3 font-mono"
      data-purpose="status-and-clock"
    >
      <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-neutral-200/80 bg-white text-[12px] text-neutral-600 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        open to relocating to the UAE/GCC
      </div>
      <div className="flex items-center gap-2 text-[12.5px] text-neutral-600">
        <span className="font-medium text-neutral-900 tabular-nums">{istTime ?? " "}</span>
        <span className="text-neutral-400">in India (IST)</span>
      </div>
    </footer>
  );
}
