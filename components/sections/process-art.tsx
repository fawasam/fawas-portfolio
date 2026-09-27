/** Line drawings for the three process steps. All stroke, no fill. */

/* Neutral strokes ride on currentColor so the art works on night AND paper. */
const INK = 0.5;
const FAINT = 0.28;
const DASHED = 0.18;

function Cloud({ d }: { d: string }) {
  return <path d={d} stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.5" strokeLinejoin="round" />;
}

export function DiscoverArt() {
  return (
    <svg viewBox="0 0 1104 230" fill="none" aria-hidden="true" className="w-full">
      <path d="M0 196h1104" stroke="currentColor" strokeOpacity={DASHED} strokeWidth="1.4" strokeDasharray="7 9" />
      <path
        d="M120 168c60-8 86-72 148-72 58 0 74 64 132 64 54 0 76-72 136-72 52 0 74 56 128 56 50 0 74-44 120-44"
        stroke="var(--color-accent)"
        strokeOpacity="0.8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="10 10"
      />
      <circle cx="552" cy="86" r="36" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.8" />
      <path d="M578 112l30 30" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M538 80a14 14 0 1 1 14 14v8" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="552" cy="110" r="1.6" fill="currentColor" fillOpacity={INK} />
      <path d="M318 86v18M309 95h18M1014 62v16M1006 70h16M246 24v14M239 31h14" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DesignArt() {
  return (
    <svg viewBox="0 0 1104 230" fill="none" aria-hidden="true" className="w-full">
      <path d="M0 210h1104" stroke="currentColor" strokeOpacity={DASHED} strokeWidth="1.4" strokeDasharray="7 9" />
      <rect x="332" y="16" width="440" height="176" rx="10" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.6" />
      <path d="M332 46h440" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.4" />
      <circle cx="350" cy="31" r="3.5" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.2" />
      <circle cx="364" cy="31" r="3.5" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.2" />
      <circle cx="378" cy="31" r="3.5" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.2" />
      <rect x="356" y="70" width="180" height="74" rx="6" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.4" />
      <path d="M356 70l180 74M536 70l-180 74" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.2" />
      <path d="M566 78h182M566 96h182M566 114h122" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.4" strokeLinecap="round" />
      <rect x="566" y="132" width="86" height="22" rx="11" stroke="var(--color-accent)" strokeOpacity="0.8" strokeWidth="1.6" />
      <rect x="356" y="160" width="124" height="18" rx="5" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.3" />
      <rect x="490" y="160" width="124" height="18" rx="5" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.3" />
      <rect x="624" y="160" width="124" height="18" rx="5" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.3" />
      <path d="M180 120c46-34 74-16 92 6M902 96c-40 30-60 16-78-4" stroke="var(--color-accent)" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="8 8" />
      <path d="M262 112l12 16-19 3" stroke="var(--color-accent)" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M318 40v16M310 48h16M1004 150v14M997 157h14" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ShipArt() {
  return (
    <svg viewBox="0 0 1104 230" fill="none" aria-hidden="true" className="w-full">
      <path d="M0 196h1104" stroke="currentColor" strokeOpacity={DASHED} strokeWidth="1.4" strokeDasharray="7 9" />
      <path d="M552 42c18 18 24 56 20 90h-40c-4-34 2-72 20-90Z" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="552" cy="86" r="10" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.6" />
      <path d="M534 110l-16 22 16-2M570 110l16 22-16-2" stroke="currentColor" strokeOpacity={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M543 136l9 26 9-26" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M552 174v18M540 182l-4 10M564 182l4 10" stroke="var(--color-accent)" strokeOpacity="0.55" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M612 120c112 4 214-20 286-84" stroke="var(--color-accent)" strokeOpacity="0.8" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="10 10" />
      <path d="M880 32l18 5-5 18" stroke="var(--color-accent)" strokeOpacity="0.8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <Cloud d="M152 186c-14 0-22-9-22-19 0-11 9-19 20-18 3-13 15-22 29-22 16 0 29 11 31 26 12 1 21 10 21 21 0 7-4 12-9 12H152Z" />
      <Cloud d="M868 186c-11 0-18-7-18-15 0-9 7-15 16-15 3-10 12-17 23-17 13 0 24 9 25 21 10 1 17 8 17 17 0 6-3 9-7 9H868Z" />
      <path d="M318 86v18M309 95h18M1014 62v16M1006 70h16M246 24v14M239 31h14" stroke="currentColor" strokeOpacity={FAINT} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const processArt = {
  discover: DiscoverArt,
  design: DesignArt,
  ship: ShipArt,
};
