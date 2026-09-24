import { education } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { Section } from "./section";

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Education"
      title={
        <>
          Academic
          <br />
          <span className="italic text-accent">foundation.</span>
        </>
      }
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {education.map((item, index) => {
          const rows = [
            { label: "Institution", value: item.institution },
            ...(item.group ? [{ label: "Group", value: item.group }] : []),
            { label: "Passed", value: item.year },
            { label: "Result", value: `${item.resultLabel} ${item.result}` },
          ];

          return (
            <li key={item.institution}>
              <article {...reveal(index * 80, "card card-hover flex h-full flex-col p-6 md:p-7")}>
                <span aria-hidden="true" className="display text-4xl text-subtle">
                  {item.year}
                </span>

                <h3 className="mt-5 text-[0.9375rem] font-semibold leading-snug tracking-tight">
                  {item.qualification}
                </h3>

                <dl className="mt-5 divide-y divide-line border-t border-line">
                  {rows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-1 py-2.5 md:grid-cols-1 lg:grid-cols-[6.5rem_1fr]">
                      <dt className="eyebrow pt-0.5">{row.label}</dt>
                      <dd className="text-sm leading-relaxed text-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
