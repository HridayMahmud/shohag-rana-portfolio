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

export type SkillGroup = { title: string; items: string[] };

export type Project = {
  slug: string;
  title: string;
  category: string;
  role?: string;
  period?: string;
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
  year: string;
  resultLabel: string;
  result: string;
};

export type Language = { name: string; level: string };

export type Reference = { name: string; title: string };

export const meta: { description: string; keywords: string[] } = content.meta;
export const profile: Profile = content.profile;
export const sections: { experienceIntro: string; projectsIntro: string } = content.sections;
export const experience: Experience[] = content.experience;
export const skillGroups: SkillGroup[] = content.skillGroups;
/** Flat list used by the hero marquee. */
export const marqueeStack: string[] = content.marqueeStack;
export const projects: Project[] = content.projects;
export const education: Education[] = content.education;
export const languages: Language[] = content.languages;
export const references: Reference[] = content.references;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
