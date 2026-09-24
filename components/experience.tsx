import { experience, sections } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { Section } from "./section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title={
        <>
          Where I have been
          <br />
          <span className="italic text-accent">building.</span>
        </>
      }
      intro={<p>{sections.experienceIntro}</p>}
    >
      <ol className="max-w-3xl">
        {experience.map((role, index) => (
          <li
            key={role.company}
            className="relative border-l border-line pb-12 pl-8 last:border-transparent last:pb-0 md:pl-12"
          >
            <span
              aria-hidden="true"
              className={`absolute left-[-5px] top-1.5 size-2.5 rounded-full ring-4 ring-bg ${
                role.current ? "bg-accent" : "bg-line-strong"
              }`}
            />

            <div {...reveal(index * 90)}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="eyebrow">{role.period}</span>
                {role.current ? (
                  <span className="chip !border-accent/40 !bg-accent-soft !text-accent">
                    Current
                  </span>
                ) : null}
              </div>

              <h3 className="display mt-4 text-[1.75rem] leading-tight md:text-[2rem]">
                {role.role}
              </h3>

              <p className="mt-1.5 text-sm font-medium text-accent">{role.company}</p>
              <p className="mt-1 text-sm text-subtle">{role.location}</p>

              <ul className="mt-5 max-w-2xl space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-muted md:text-[0.9375rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {role.stack.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
