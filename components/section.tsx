import type { ReactNode } from "react";

import { reveal } from "@/lib/reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line py-20 md:py-28 ${className ?? ""}`}
    >
      <div className="shell">
        <header className="max-w-3xl">
          <p {...reveal(0, "eyebrow flex items-center gap-3")}>
            <span className="text-accent">{index}</span>
            <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
            <span>{eyebrow}</span>
          </p>

          <h2
            id={`${id}-title`}
            {...reveal(80, "display mt-5 text-[2.25rem] leading-[1.05] sm:text-5xl md:text-[3.5rem]")}
          >
            {title}
          </h2>

          {intro ? (
            <div {...reveal(140, "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-[1.0625rem]")}>
              {intro}
            </div>
          ) : null}
        </header>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
