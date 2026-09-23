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
        {education.map((item, index) => (
          <li key={item.institution}>
            <article {...reveal(index * 80, "card card-hover flex h-full flex-col p-6 md:p-7")}>
              <div className="flex items-start justify-between gap-4">
                <span className="display text-4xl text-subtle">{item.year}</span>
                <span className="chip whitespace-nowrap">
                  {item.resultLabel} {item.result}
                </span>
              </div>

              <h3 className="mt-6 text-[0.9375rem] font-semibold leading-snug tracking-tight">
                {item.qualification}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">{item.institution}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
