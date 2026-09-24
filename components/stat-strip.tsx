import { stats } from "@/lib/content";
import { reveal } from "@/lib/reveal";

/** At-a-glance figures, all stated on the CV. */
export function StatStrip() {
  return (
    <dl
      {...reveal(
        360,
        "mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-20 md:grid-cols-4",
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse justify-end gap-2 bg-elevated p-5 md:p-6">
          <dt className="eyebrow leading-snug">{stat.label}</dt>
          <dd className="display text-[1.5rem] leading-tight text-ink sm:text-[1.875rem]">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
