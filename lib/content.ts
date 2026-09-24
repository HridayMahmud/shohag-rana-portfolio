/**
 * Typed access to `content.json` — the single source of truth for every piece
 * of content on this site. Everything there is taken from the CV; nothing is
 * invented. Edit the JSON, not this file.
 */

import content from "@/content.json";

export type Profile = {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  cv: string;
  portrait: string;
  focus: string;
  summary: string;
  tagline: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  stack: string[];
};

export type SkillGroup = { title: string; items: string[]; secondary?: boolean };

export type Project = {
  slug: string;
  /** Shown as the wide flagship card. */
  featured?: boolean;
  title: string;
  /** Short name for the flagship card's panel. */
  shortTitle?: string;
  category: string;
  role?: string;
  period?: string;
  /** CV-stated facts for the flagship card's panel. */
  facts?: string[];
  summary: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  live?: string;
  liveLabel?: string;
};

export type Education = {
  institution: string;
  qualification: string;
  group?: string;
  year: string;
  resultLabel: string;
  result: string;
};

export type Language = { name: string; level: string };

export type Reference = { name: string; title: string };

export type Stat = { value: string; label: string };

export const meta: { description: string; keywords: string[] } = content.meta;
export const profile: Profile = content.profile;
export const sections: { skillsIntro: string; experienceIntro: string; projectsIntro: string } =
  content.sections;
export const experience: Experience[] = content.experience;
export const skillGroups: SkillGroup[] = content.skillGroups;
/** Skills the CV shows in professional (production) use — drives the dot in the skills grid. */
export const productionSkills: ReadonlySet<string> = new Set(content.productionSkills);
/** Flat list used by the hero marquee. */
export const marqueeStack: string[] = content.marqueeStack;
export const projects: Project[] = content.projects;
export const education: Education[] = content.education;
export const languages: Language[] = content.languages;
export const references: Reference[] = content.references;
export const referencesNote: string = content.referencesNote;
/** CV-backed figures only — never add a number the CV does not state. */
export const stats: Stat[] = content.stats;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
