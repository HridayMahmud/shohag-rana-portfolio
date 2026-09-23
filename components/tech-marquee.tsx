import { marqueeStack } from "@/lib/content";

/**
 * Decorative only — the same technologies are listed accessibly in the
 * Skills section, so this strip is hidden from assistive tech.
 */
export function TechMarquee() {
  const items = [...marqueeStack, ...marqueeStack];

  return (
    <div aria-hidden="true" className="marquee border-y border-line bg-surface/50 py-4">
      <div className="mask-fade-x overflow-hidden">
        <div className="marquee-track">
          {items.map((item, index) => (
            <span key={`${item}-${index}`} className="eyebrow flex items-center whitespace-nowrap">
              <span className="px-5 md:px-7">{item}</span>
              <span className="size-1 rounded-full bg-accent/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
