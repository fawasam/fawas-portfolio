const colorClasses = {
  blue: "text-blue-500 fill-blue-500/20",
  amber: "text-amber-500 fill-amber-500/20",
  violet: "text-violet-500 fill-violet-500/20",
  emerald: "text-emerald-500 fill-emerald-500/20",
  rose: "text-rose-500 fill-rose-500/20",
} as const;

export type FolderColor = keyof typeof colorClasses;

export default function FolderIcon({ color }: { color: FolderColor }) {
  return (
    <svg className={`w-4 h-4 ${colorClasses[color]} shrink-0`} stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
