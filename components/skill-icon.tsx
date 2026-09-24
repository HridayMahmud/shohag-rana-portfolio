import { brandIcons } from "@/lib/brand-icons";

type SkillIconProps = { name: string; className?: string };

/** Stroke glyphs for concepts that have no brand mark. */
const conceptGlyphs: Record<string, React.ReactNode> = {
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.75" />
      <path d="M4.5 5.5v13c0 1.52 3.36 2.75 7.5 2.75s7.5-1.23 7.5-2.75v-13" />
      <path d="M4.5 12c0 1.52 3.36 2.75 7.5 2.75s7.5-1.23 7.5-2.75" />
    </>
  ),
  api: (
    <>
      <path d="M8 4.5c-2 0-2.5 1-2.5 2.5v2.5c0 1.25-.75 2.5-2 2.5 1.25 0 2 1.25 2 2.5V17c0 1.5.5 2.5 2.5 2.5" />
      <path d="M16 4.5c2 0 2.5 1 2.5 2.5v2.5c0 1.25.75 2.5 2 2.5-1.25 0-2 1.25-2 2.5V17c0 1.5-.5 2.5-2.5 2.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

const conceptFor: Record<string, keyof typeof conceptGlyphs> = {
  SQL: "database",
  "SQL Server": "database",
  "RESTful API design": "api",
  "Role-Based Access Control (RBAC)": "shield",
  "PostgreSQL Row-Level Security": "shield",
};

/**
 * Brand mark for a skill when one exists; otherwise a neutral concept glyph,
 * or a monogram so an unknown skill still renders cleanly.
 */
export function SkillIcon({ name, className }: SkillIconProps) {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
        <path d={brand} />
      </svg>
    );
  }

  const concept = conceptFor[name];
  if (concept) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        className={className}
      >
        {conceptGlyphs[concept]}
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <rect x="1.5" y="1.5" width="21" height="21" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {name.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
}
