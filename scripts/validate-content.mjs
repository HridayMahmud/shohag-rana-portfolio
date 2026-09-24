// Validates content.json before every build, so a typo made in GitHub's web
// editor fails the build (and Vercel keeps serving the last good version)
// instead of shipping a broken page. No dependencies: runs on plain Node.
//
//   npm run validate

import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const file = join(root, "content.json");
const errors = [];

// --- Parse -----------------------------------------------------------------

let raw;
let content;
try {
  raw = readFileSync(file, "utf8");
  content = JSON.parse(raw);
} catch (error) {
  const position = /position (\d+)/.exec(String(error.message));
  let where = "";
  if (position && raw) {
    const before = raw.slice(0, Number(position[1]));
    const line = before.split("\n").length;
    const column = before.length - before.lastIndexOf("\n");
    where = ` (line ${line}, column ${column})`;
  }
  fail([
    `content.json is not valid JSON${where}.`,
    `  ${error.message}`,
    "  Common causes: a missing or extra comma, a missing quote, or a missing } or ].",
  ]);
}

// --- Rule helpers ----------------------------------------------------------

const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);

function text(value, path) {
  if (typeof value !== "string" || value.trim() === "") {
    errors.push(`${path} must be a non-empty text value.`);
    return false;
  }
  return true;
}

function optionalText(value, path) {
  if (value !== undefined) text(value, path);
}

function flag(value, path, { optional = false } = {}) {
  if (optional && value === undefined) return;
  if (typeof value !== "boolean") errors.push(`${path} must be true or false (no quotes).`);
}

function textList(value, path, { min = 1, optional = false } = {}) {
  if (optional && value === undefined) return;
  if (!Array.isArray(value)) {
    errors.push(`${path} must be a list: [ "…", "…" ].`);
    return;
  }
  if (value.length < min) errors.push(`${path} needs at least ${min} item(s).`);
  value.forEach((item, index) => text(item, `${path}[${index}]`));
}

function url(value, path, { optional = false } = {}) {
  if (optional && value === undefined) return;
  if (!text(value, path)) return;
  if (!/^https:\/\/[^\s]+$/.test(value)) errors.push(`${path} must be a full https:// link.`);
}

function publicFile(value, path) {
  if (!text(value, path)) return;
  if (!value.startsWith("/")) {
    errors.push(`${path} must start with "/" (a file inside public/), got "${value}".`);
  } else if (!existsSync(join(root, "public", value))) {
    errors.push(`${path} points to "${value}", but public${value} does not exist.`);
  }
}

/** Catches misspelt keys (e.g. "titel"), which would otherwise be silently ignored. */
function keys(value, path, required, optional = []) {
  if (!isObject(value)) {
    errors.push(`${path} must be an object: { … }.`);
    return false;
  }
  const allowed = new Set([...required, ...optional]);
  for (const key of required) {
    if (!(key in value)) errors.push(`${path} is missing "${key}".`);
  }
  for (const key of Object.keys(value)) {
    if (!allowed.has(key)) {
      errors.push(`${path} has an unknown field "${key}". Allowed: ${[...allowed].join(", ")}.`);
    }
  }
  return true;
}

function list(value, path, check, { min = 1 } = {}) {
  if (!Array.isArray(value)) {
    errors.push(`${path} must be a list: [ … ].`);
    return [];
  }
  if (value.length < min) errors.push(`${path} needs at least ${min} item(s).`);
  value.forEach((item, index) => check(item, `${path}[${index}]`));
  return value;
}

// --- Schema ----------------------------------------------------------------

keys(content, "content.json", [
  "meta",
  "profile",
  "stats",
  "sections",
  "experience",
  "skillGroups",
  "productionSkills",
  "marqueeStack",
  "projects",
  "education",
  "languages",
  "references",
  "referencesNote",
]);

if (keys(content.meta, "meta", ["description", "keywords"])) {
  text(content.meta.description, "meta.description");
  textList(content.meta.keywords, "meta.keywords");
}

const profileFields = [
  "name",
  "shortName",
  "initials",
  "role",
  "location",
  "email",
  "phone",
  "phoneHref",
  "github",
  "githubHandle",
  "linkedin",
  "linkedinHandle",
  "cv",
  "portrait",
  "focus",
  "summary",
  "tagline",
];
const profile = content.profile;
if (keys(profile, "profile", profileFields)) {
  for (const field of profileFields) {
    if (!["github", "linkedin", "cv", "portrait"].includes(field)) text(profile[field], `profile.${field}`);
  }
  if (typeof profile.email === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
    errors.push(`profile.email "${profile.email}" does not look like an email address.`);
  }
  if (typeof profile.phoneHref === "string" && !/^\+\d{6,15}$/.test(profile.phoneHref)) {
    errors.push(`profile.phoneHref must be digits with a leading + and no spaces, e.g. "+8801760980498".`);
  }
  url(profile.github, "profile.github");
  url(profile.linkedin, "profile.linkedin");
  publicFile(profile.cv, "profile.cv");
  publicFile(profile.portrait, "profile.portrait");
}

list(content.stats, "stats", (stat, path) => {
  if (keys(stat, path, ["value", "label"])) {
    text(stat.value, `${path}.value`);
    text(stat.label, `${path}.label`);
  }
});

if (keys(content.sections, "sections", ["skillsIntro", "experienceIntro", "projectsIntro"])) {
  for (const field of ["skillsIntro", "experienceIntro", "projectsIntro"]) {
    text(content.sections[field], `sections.${field}`);
  }
}

list(content.experience, "experience", (role, path) => {
  if (keys(role, path, ["company", "role", "location", "period", "current", "bullets", "stack"])) {
    for (const field of ["company", "role", "location", "period"]) text(role[field], `${path}.${field}`);
    flag(role.current, `${path}.current`);
    textList(role.bullets, `${path}.bullets`);
    textList(role.stack, `${path}.stack`, { min: 0 });
  }
});

const skillNames = new Set();
list(content.skillGroups, "skillGroups", (group, path) => {
  if (keys(group, path, ["title", "items"], ["secondary"])) {
    text(group.title, `${path}.title`);
    textList(group.items, `${path}.items`);
    flag(group.secondary, `${path}.secondary`, { optional: true });
    if (Array.isArray(group.items)) group.items.forEach((item) => skillNames.add(item));
  }
});

textList(content.productionSkills, "productionSkills", { min: 0 });
if (Array.isArray(content.productionSkills)) {
  content.productionSkills.forEach((skill, index) => {
    if (typeof skill === "string" && !skillNames.has(skill)) {
      errors.push(
        `productionSkills[${index}] "${skill}" is not in any skillGroups items. ` +
          "It must match a skill's name exactly (same spelling and capitals).",
      );
    }
  });
}

textList(content.marqueeStack, "marqueeStack");

const slugs = new Set();
const projects = list(content.projects, "projects", (project, path) => {
  const required = ["slug", "title", "category", "summary", "highlights", "stack"];
  const optional = ["featured", "shortTitle", "role", "period", "facts", "repo", "live", "liveLabel"];
  if (!keys(project, path, required, optional)) return;
  if (text(project.slug, `${path}.slug`)) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(project.slug)) {
      errors.push(`${path}.slug "${project.slug}" must be lowercase words joined by "-".`);
    }
    if (slugs.has(project.slug)) errors.push(`${path}.slug "${project.slug}" is used twice.`);
    slugs.add(project.slug);
  }
  for (const field of ["title", "category", "summary"]) text(project[field], `${path}.${field}`);
  for (const field of ["shortTitle", "role", "period", "liveLabel"]) optionalText(project[field], `${path}.${field}`);
  flag(project.featured, `${path}.featured`, { optional: true });
  textList(project.highlights, `${path}.highlights`, { min: 0 });
  textList(project.stack, `${path}.stack`);
  textList(project.facts, `${path}.facts`, { optional: true });
  url(project.repo, `${path}.repo`, { optional: true });
  url(project.live, `${path}.live`, { optional: true });
  if (project.live !== undefined && project.liveLabel === undefined) {
    errors.push(`${path} has "live" but no "liveLabel" (the text shown for the link).`);
  }
  if (project.repo === undefined && project.live === undefined) {
    errors.push(`${path} needs at least one link: "repo" or "live".`);
  }
});
if (projects.filter((project) => isObject(project) && project.featured === true).length > 1) {
  errors.push("projects: only one project can have \"featured\": true.");
}

list(content.education, "education", (item, path) => {
  if (keys(item, path, ["institution", "qualification", "year", "resultLabel", "result"], ["group"])) {
    for (const field of ["institution", "qualification", "resultLabel", "result"]) text(item[field], `${path}.${field}`);
    optionalText(item.group, `${path}.group`);
    if (text(item.year, `${path}.year`) && !/^\d{4}$/.test(item.year)) {
      errors.push(`${path}.year must be a 4-digit year in quotes, e.g. "2024".`);
    }
  }
});

list(content.languages, "languages", (language, path) => {
  if (keys(language, path, ["name", "level"])) {
    text(language.name, `${path}.name`);
    text(language.level, `${path}.level`);
  }
});

// Referees' contact details are never published (PLAN.md §2.8).
list(content.references, "references", (reference, path) => {
  if (keys(reference, path, ["name", "title"])) {
    text(reference.name, `${path}.name`);
    text(reference.title, `${path}.title`);
    for (const field of ["name", "title"]) {
      const value = String(reference[field] ?? "");
      if (/@|\+?\d[\d\s-]{6,}/.test(value)) {
        errors.push(`${path}.${field} looks like it contains an email or phone number — referees' contact details must not be published.`);
      }
    }
  }
}, { min: 0 });
text(content.referencesNote, "referencesNote");

// --- Report ----------------------------------------------------------------

if (errors.length) fail([`content.json has ${errors.length} problem(s):`, ...errors.map((error) => `  • ${error}`)]);
console.log("✓ content.json is valid");

function fail(lines) {
  console.error(["", "✗ Content check failed — the site was not built.", ...lines, ""].join("\n"));
  process.exit(1);
}
