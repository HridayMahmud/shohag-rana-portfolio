import type { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight, Download } from "@/components/icons";
import {
  achievement,
  competencies,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description: `The full résumé of ${profile.name} — ${profile.role} based in ${profile.location}.`,
  alternates: { canonical: "/resume" },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-block">
      <h2 className="eyebrow border-b border-line pb-2 text-accent">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="resume-doc min-h-dvh">
      <div className="no-print border-b border-line">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link
            href="/"
            className="link-sweep text-sm font-medium text-muted transition-colors duration-300 hover:text-ink"
          >
            Back to portfolio
          </Link>
          <a href={profile.cv} download className="btn btn-ghost !py-2.5 !text-[0.8125rem]">
            <Download className="size-4" />
            Download PDF
          </a>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="border-b border-line pb-8">
          <h1 className="display text-[2.75rem] leading-none md:text-5xl">{profile.name}</h1>
          <p className="eyebrow mt-4 !text-accent">{profile.role}</p>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
            <li>{profile.location}</li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-ink">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phoneHref}`} className="hover:text-ink">
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-ink"
              >
                github.com/{profile.githubHandle}
              </a>
            </li>
          </ul>
        </header>

        <div className="mt-10 space-y-10">
          <Block title="Profile">
            <p className="text-sm leading-relaxed text-muted">{profile.objective}</p>
          </Block>

          <Block title="Experience">
            <ol className="space-y-7">
              {experience.map((role) => (
                <li key={role.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[0.9375rem] font-semibold tracking-tight">
                      {role.role} · {role.company}
                    </h3>
                    <span className="eyebrow">{role.period}</span>
                  </div>
                  <p className="mt-1 text-xs text-subtle">{role.location}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{role.summary}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Projects">
            <ol className="space-y-7">
              {projects.map((project) => (
                <li key={project.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[0.9375rem] font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <span className="eyebrow">{project.category}</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

                  <ul className="mt-2.5 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm text-muted">
                        <span aria-hidden="true" className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-subtle">
                    <span>{project.stack.join(" · ")}</span>
                  </p>

                  <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-accent hover:underline"
                      >
                        {project.liveLabel}
                      </a>
                    ) : null}
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent hover:underline"
                    >
                      {project.repo.replace("https://", "")}
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Skills">
            <dl className="space-y-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium">{group.title}</dt>
                  <dd className="text-sm text-muted">{group.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Education">
            <ol className="space-y-4">
              {education.map((item) => (
                <li
                  key={item.institution}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <div>
                    <h3 className="text-[0.9375rem] font-semibold tracking-tight">
                      {item.qualification}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  </div>
                  <span className="eyebrow">
                    {item.year} · {item.resultLabel} {item.result}
                  </span>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Core competencies">
            <dl className="space-y-3">
              {competencies.map((competency) => (
                <div key={competency.title} className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium">{competency.title}</dt>
                  <dd className="text-sm text-muted">{competency.description}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block title="Additional">
            <dl className="space-y-3">
              <div className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-4">
                <dt className="text-sm font-medium">Achievements</dt>
                <dd className="text-sm text-muted">{achievement}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:gap-4">
                <dt className="text-sm font-medium">Languages</dt>
                <dd className="text-sm text-muted">
                  {languages.map((language) => `${language.name} — ${language.level}`).join(", ")}
                </dd>
              </div>
            </dl>
          </Block>
        </div>

        <p className="no-print mt-12 border-t border-line pt-6 text-sm text-subtle">
          <Link
            href="/"
            className="link-sweep font-medium text-ink transition-colors duration-300 hover:text-accent"
          >
            Back to the portfolio
            <ArrowUpRight className="size-3.5" />
          </Link>
        </p>
      </main>
    </div>
  );
}
