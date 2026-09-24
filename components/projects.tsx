import { projects, sections } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { ArrowUpRight, GitHub } from "./icons";
import { Section } from "./section";

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Selected work"
      title={
        <>
          Projects I have
          <br />
          <span className="italic text-accent">designed and shipped.</span>
        </>
      }
      intro={<p>{sections.projectsIntro}</p>}
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <article
              {...reveal(index * 80, "card card-hover group flex h-full flex-col overflow-hidden")}
            >
              <div className="relative h-32 shrink-0 overflow-hidden border-b border-line bg-surface md:h-36">
                <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-accent-soft via-transparent to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="display absolute -bottom-7 right-4 text-[6.5rem] leading-none text-line-strong transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="chip absolute left-5 top-5 !bg-elevated">{project.category}</span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="display text-2xl leading-tight md:text-[1.75rem]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto" />

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open the live site for ${project.title}`}
                      className="link-sweep text-sm font-medium transition-colors duration-300 hover:text-accent"
                    >
                      Live site
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : null}

                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View the source code for ${project.title} on GitHub`}
                      className="link-sweep text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
                    >
                      <GitHub className="size-3.5" />
                      Source code
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <p {...reveal(120, "mt-10 text-center text-sm text-subtle")}>
        More work lives on{" "}
        <a
          href="https://github.com/HridayMahmud"
          target="_blank"
          rel="noreferrer noopener"
          className="link-sweep font-medium text-ink transition-colors duration-300 hover:text-accent"
        >
          GitHub
          <ArrowUpRight className="size-3.5" />
        </a>
      </p>
    </Section>
  );
}
