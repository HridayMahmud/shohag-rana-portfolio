import { education, languages, profile } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { Section } from "./section";

const facts = [
  { label: "Role", value: profile.role },
  { label: "Based in", value: profile.location },
  {
    label: "Languages",
    value: languages.map((language) => `${language.name} (${language.level})`).join(", "),
  },
  { label: "Degree", value: `${education[0].qualification}, BUBT` },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Building for the web,
          <br />
          <span className="italic text-accent">end to end.</span>
        </>
      }
      intro={<p>{profile.summary}</p>}
    >
      <dl {...reveal(0, "max-w-3xl divide-y divide-line border-y border-line")}>
        {facts.map((fact) => (
          <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
            <dt className="eyebrow pt-0.5">{fact.label}</dt>
            <dd className="text-sm leading-relaxed text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
