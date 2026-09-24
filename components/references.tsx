import { references, referencesNote } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { Section } from "./section";

/** Names and titles only — referees' contact details are never published. */
export function References() {
  return (
    <Section
      id="references"
      index="06"
      eyebrow="References"
      title={
        <>
          People who can
          <br />
          <span className="italic text-accent">vouch for my work.</span>
        </>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {references.map((reference, index) => (
          <li key={reference.name}>
            <article {...reveal(index * 80, "card card-hover h-full p-6 md:p-7")}>
              <h3 className="display text-2xl leading-tight md:text-[1.75rem]">
                {reference.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{reference.title}</p>
            </article>
          </li>
        ))}
      </ul>

      <p {...reveal(120, "mt-6 text-sm text-subtle")}>{referencesNote}</p>
    </Section>
  );
}
