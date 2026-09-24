import type { CSSProperties } from "react";

import { productionSkills, sections, skillGroups } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { Section } from "./section";
import { SkillIcon } from "./skill-icon";

/**
 * Keeps the 7-card grid flush on both the 2-column and 3-column layouts.
 * On 3 columns the two longest groups (Frontend, Mobile & DevOps) get the
 * wide slots: [1 · 2] [1 · 1 · 1] [2 · 1].
 */
function spanFor(index: number, total: number) {
  if (total !== 7) return "";
  if (index === 1 || index === 5) return "lg:col-span-2";
  if (index === 6) return "sm:col-span-2 lg:col-span-1";
  return "";
}

/** Each group gets its own tone (see --tone-* in globals.css). */
function toneFor(index: number) {
  return { "--tone": `var(--tone-${(index % 7) + 1})` } as CSSProperties;
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
      intro={<p>{sections.skillsIntro}</p>}
    >
      <p {...reveal(0, "eyebrow mb-6 flex items-center gap-2.5")}>
        <span aria-hidden="true" className="size-1.5 rounded-full bg-(--live)" />
        Used in production
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <li key={group.title} className={spanFor(index, skillGroups.length)} style={toneFor(index)}>
            <article
              {...reveal(
                index * 60,
                `card h-full overflow-hidden p-6 md:p-7 ${
                  group.secondary ? "border-dashed !bg-transparent" : "card-hover"
                }`,
              )}
            >
              {group.secondary ? null : (
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-(--tone) opacity-80" />
              )}

              <div className="flex items-baseline gap-3">
                <span className="eyebrow !text-(--tone)">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-[0.9375rem] font-semibold tracking-tight">{group.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const inProduction = productionSkills.has(item);
                  return (
                    <li key={item} className="chip gap-2 !py-1.5">
                      <SkillIcon name={item} className="size-3.5 shrink-0 text-(--tone)" />
                      <span>{item}</span>
                      {inProduction ? (
                        <>
                          <span
                            aria-hidden="true"
                            className="size-1.5 shrink-0 rounded-full bg-(--live)"
                          />
                          <span className="sr-only">(used in production)</span>
                        </>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
