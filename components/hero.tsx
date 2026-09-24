import Image from "next/image";

import { experience, profile } from "@/lib/content";
import { reveal } from "@/lib/reveal";
import { ArrowDown, ArrowUpRight, Download, GitHub, LinkedIn, Mail } from "./icons";
import { HeroParticles } from "./hero-particles";
import { StatStrip } from "./stat-strip";

export function Hero() {
  const current = experience.find((item) => item.current);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Decorative background: blueprint grid, a faint constellation and a warm glow. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <HeroParticles />
        <div className="absolute -top-40 right-[-10%] size-[34rem] rounded-full bg-accent-soft blur-[120px]" />
        <div className="absolute bottom-0 left-[-15%] size-[26rem] rounded-full bg-accent-soft opacity-60 blur-[140px]" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p {...reveal(0, "eyebrow inline-flex items-center gap-2.5")}>
              <span className="pulse-dot size-1.5 rounded-full bg-accent" />
              {profile.location}
            </p>

            <h1
              {...reveal(
                60,
                "display mt-6 text-[clamp(3rem,11vw,6.75rem)] tracking-[-0.02em]",
              )}
            >
              MD Shohag
              <br />
              <span className="italic text-accent">Rana</span>
            </h1>

            <p
              {...reveal(
                120,
                "eyebrow mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 !text-[0.75rem] !text-muted",
              )}
            >
              {profile.role}
              <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
              {profile.focus}
            </p>

            <p {...reveal(180, "mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg")}>
              {profile.tagline}
            </p>

            <div {...reveal(240, "mt-10 flex flex-wrap items-center gap-3")}>
              <a href="#projects" className="btn btn-primary">
                View projects
                <ArrowUpRight className="size-4" />
              </a>
              <a href={profile.cv} download className="btn btn-ghost">
                <Download className="size-4" />
                Download CV
              </a>
            </div>

            <ul
              {...reveal(
                300,
                "mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted",
              )}
            >
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-sweep transition-colors duration-300 hover:text-ink"
                >
                  <GitHub className="size-4" />
                  {profile.githubHandle}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-sweep transition-colors duration-300 hover:text-ink"
                >
                  <LinkedIn className="size-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-sweep transition-colors duration-300 hover:text-ink"
                >
                  <Mail className="size-4" />
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div {...reveal(160, "relative mx-auto w-full max-w-[19rem] lg:ml-auto lg:mr-0 lg:max-w-[22rem]")}>
              {/* Offset frame behind the portrait for depth. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] border border-accent/35 sm:translate-x-4 sm:translate-y-4"
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface">
                <Image
                  src={profile.portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={640}
                  height={640}
                  priority
                  sizes="(max-width: 1023px) 304px, 352px"
                  className="h-auto w-full object-cover dark:brightness-[0.94] dark:contrast-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-transparent"
                />
              </div>

              {current ? (
                <div className="absolute -bottom-5 left-0 flex items-center gap-2.5 rounded-full border border-line bg-elevated/95 px-4 py-2.5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:-left-4">
                  <span className="pulse-dot size-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="eyebrow !text-ink">Currently at {current.company}</span>
                </div>
              ) : null}
            </div>

          </div>
        </div>

        <StatStrip />

        <p
          {...reveal(
            420,
            "eyebrow mt-16 hidden items-center gap-3 md:flex",
          )}
        >
          <span className="grid h-9 w-5 place-items-start overflow-hidden rounded-full border border-line pt-1.5">
            <ArrowDown className="scroll-hint size-3 text-accent" />
          </span>
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
