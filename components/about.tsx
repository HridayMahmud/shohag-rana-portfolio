import { achievement, competencies, education, languages, profile } from "@/lib/content";
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
      intro={<p>{profile.objective}</p>}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <dl {...reveal(0, "divide-y divide-line border-y border-line")}>
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                <dt className="eyebrow pt-0.5">{fact.label}</dt>
                <dd className="text-sm leading-relaxed text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div
            {...reveal(
              80,
              "mt-8 rounded-xl border border-line bg-accent-soft/60 p-6",
            )}
          >
            <p className="eyebrow">Achievements</p>
            <p className="mt-3 text-sm leading-relaxed text-ink">{achievement}</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p {...reveal(0, "eyebrow")}>Core strengths</p>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {competencies.map((competency, index) => (
              <li key={competency.title}>
                <article
                  {...reveal(index * 70, "card card-hover h-full p-6")}
                >
                  <span className="eyebrow text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[0.9375rem] font-semibold tracking-tight">
                    {competency.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {competency.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
