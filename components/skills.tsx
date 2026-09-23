import { skillGroups } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { Section } from "./section";

/** Keeps the 7-card grid flush on both the 2-column and 3-column layouts. */
function spanFor(index: number, total: number) {
  if (index === 0) return "lg:col-span-2";
  if (index === total - 1) return "sm:col-span-2 lg:col-span-2";
  return "";
}

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title={
        <>
          The stack I
          <br />
          <span className="italic text-accent">work with.</span>
        </>
      }
      intro={
        <p>
          Languages, frameworks and tooling I use day to day across the frontend, the backend and
          the data layer.
        </p>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <li key={group.title} className={spanFor(index, skillGroups.length)}>
            <article {...reveal(index * 60, "card card-hover h-full p-6 md:p-7")}>
              <div className="flex items-baseline gap-3">
                <span className="eyebrow text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[0.9375rem] font-semibold tracking-tight">{group.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
