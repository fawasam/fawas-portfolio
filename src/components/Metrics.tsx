import { metrics } from "@/data/profile";

export default function Metrics() {
  return (
    <section className="pt-6 border-t border-neutral-200/80" data-purpose="metrics-stats">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-7 gap-x-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-[21px] font-bold text-neutral-900 tracking-tight">{metric.value}</div>
            <div className="text-[12px] text-neutral-400 mt-1">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
