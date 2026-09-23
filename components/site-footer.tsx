import Link from "next/link";

import { profile } from "@/lib/content";
import { ArrowUpRight, GitHub, Mail } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
              <span className="display grid size-9 place-items-center rounded-lg border border-line-strong text-[0.9375rem] transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                {profile.initials}
              </span>
              <span className="text-sm font-medium tracking-tight">{profile.name}</span>
            </a>
            <p className="eyebrow mt-4">{profile.role}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted">
            <Link href="/resume" className="link-sweep transition-colors duration-300 hover:text-ink">
              Résumé
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="link-sweep transition-colors duration-300 hover:text-ink"
            >
              <GitHub className="size-4" />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-sweep transition-colors duration-300 hover:text-ink"
            >
              <Mail className="size-4" />
              Email
            </a>
            <a href="#top" className="link-sweep transition-colors duration-300 hover:text-ink">
              Back to top
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">
            © {year} {profile.name}
          </p>
          <p className="eyebrow">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
