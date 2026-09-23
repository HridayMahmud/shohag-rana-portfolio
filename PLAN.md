# MD Shohag Rana — Portfolio: Build Plan & Handoff

> **Status:** Plan approved, implementation NOT started.
> **Last updated:** 2026-09-23
> This file is the single source of truth for this project. A fresh session should
> read this file completely before doing anything.

---

## 0. Ground rules

1. **All work happens inside `F:\All-projects-works\portfolio` only.**
   Never touch `F:\All-projects-works\clinic` (the Lumiis monorepo). They are two
   completely separate git repositories. Another agent works in `clinic`
   concurrently — do not read from, write to, or commit in that tree.
2. The CV is the only source of facts. **Never invent** a company, project,
   number, skill level, certification, date or client.
3. Nothing ships until `npm run build`, `npm run lint` and `npm run typecheck`
   are all green.
4. **Read §10 "Gotchas" before editing any existing file.** Those bugs were found
   and fixed once already — re-introducing them costs hours.

---

## 1. Project facts

| | |
|---|---|
| Owner | MD Shohag Rana |
| GitHub (profile on CV) | `github.com/HridayMahmud` |
| Repo | `HridayMahmud/shohag-rana-portfolio` — **public, empty, already created** |
| CLI auth on this machine | `hridaymahmud30` — added as **collaborator with push access** (verified) |
| ⚠️ Do NOT run | `gh auth login` — it would switch the active account and break the other agent working as `hridaymahmud30`. Push works as-is via the collaborator grant. |
| Deploy | Vercel — **the owner does this himself** from vercel.com/new (GitHub already synced) |
| Local dev | `npm run dev` · production check: `npm run build && npx next start -p 3100` |

---

## 2. Source of truth — the CV

**File:** `C:\Users\CodeMoly-QA\Downloads\Md_Shohag_Rana_CV_BD.pdf` (the *newer* BD CV).
An older CV (`CV_202608152016577.pdf`) exists — **ignore it**, it is superseded.

### 2.1 Identity
- Name: **MD Shohag Rana**
- Title: **Full Stack Software Engineer** *(was "Developer" — changed)*
- Location: Dhaka, Bangladesh
- Phone: `+880 1760-980498`
- Email: `shohag.rana0114@gmail.com`
- GitHub: `github.com/HridayMahmud`
- LinkedIn: `linkedin.com/in/shohag-rana-580a562a4` *(NEW — was not on the old CV)*

### 2.2 Professional summary (verbatim)
> Full Stack Software Engineer with 1+ year of professional experience building
> production web and mobile applications with TypeScript, React/Next.js and
> Node.js. Currently delivering a multi-tenant healthcare SaaS platform for
> Swedish clinics — regulatory compliance workflows, PostgreSQL Row-Level
> Security, REST APIs and a React Native app shipped to Google Play. Comfortable
> owning a feature end-to-end, from database schema to release.

### 2.3 Technical skills — 6 CV groups (exact wording)
| Group | Items |
|---|---|
| Languages | TypeScript, JavaScript (ES6+), PHP, SQL |
| Frontend | React.js, Next.js, Vue.js, Tailwind CSS, HTML5, CSS3, Bootstrap |
| Backend & API | Node.js, Express.js, Laravel, RESTful API design, Socket.IO |
| Database & ORM | PostgreSQL, MongoDB, MySQL, Drizzle ORM, Prisma |
| Auth & Security | JWT, Better Auth, Role-Based Access Control (RBAC), PostgreSQL Row-Level Security |
| Mobile & DevOps | React Native, Expo, Google Play releases, GitHub Actions, Vitest, Playwright, Git, pnpm monorepo |

**Plus a 7th group (decided, not on the new CV but on the old one — keep as secondary):**
| Also worked with | C++, Python, Java, SQL Server |

### 2.4 Experience
**Codemoly** — The Emporium Tower, Shyamoli, Dhaka · **Software Engineer** · Feb 2026 – Present
- Full-stack developer on Lumiis, a multi-tenant healthcare SaaS platform — shipping features end-to-end across a Next.js web app and a React Native app that share one pnpm monorepo, TypeScript packages and PostgreSQL database.
- Design schema changes and author Drizzle ORM migrations against a 70-table multi-tenant PostgreSQL database secured with Row-Level Security, and build the REST APIs consumed by both the web and mobile clients.
- Own Android release engineering to Google Play, and maintain test coverage with Vitest and Playwright behind a GitHub Actions pipeline that gates every merge on typecheck, lint, tests and translation parity.

**BemanTech Ltd.** — Tongi, Gazipur · **Software Developer** · Jun 2025 – Feb 2026
- Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) alongside Next.js and Vue.js.
- Built secure RESTful APIs with JWT authentication and role-based authorization, and implemented responsive, cross-browser user interfaces from design handoff.
- Collaborated in a cross-functional team to integrate frontend interfaces with backend services and third-party APIs, and reviewed code to keep the codebase maintainable.

### 2.5 Key projects — 3 (down from 4)
**1. Lumiis — Clinic Compliance & Treatment Management SaaS** · `lumiis.se`
Full Stack Developer (Web & Mobile) · Jun 2026 – Present
- Developed a multi-tenant SaaS platform for Swedish aesthetic clinics, covering clinical workflows, device management, treatments, patient communication and regulatory compliance.
- Built role-based access control across 4 user roles, with granular practitioner permissions enforced across web, REST APIs, mobile and PostgreSQL Row-Level Security.
- Implemented SSMFS 2026:1 compliance workflows including device registration, delivery inspections, functional checks, digital signatures, consent management, audit logging and Swedish PDF/A report generation.
- Developed and maintained features across Next.js web and React Native mobile applications, backed by a 70-table PostgreSQL database and Drizzle ORM.
- Contributed to automated testing and CI/CD using Vitest, Playwright and GitHub Actions, and handled Android release engineering through Google Play.

Tech: Next.js · React · TypeScript · React Native · Expo · PostgreSQL · Drizzle ORM · Better Auth · REST API · Socket.IO · Tailwind CSS · Vitest · Playwright · GitHub Actions

**2. Courier Management System — Role-Based REST API**
Repo: `https://github.com/HridayMahmud/courier-management-backend` ✅ verified 200
- Developed a role-based RESTful API for courier and parcel management using Node.js, Express.js and MongoDB.
- Implemented JWT authentication, Role-Based Access Control (RBAC), full CRUD operations and admin-level authorization for parcel management.

Tech: Node.js · Express.js · MongoDB · JWT · RBAC

**3. Mini Cloud Storage System — File Storage REST API**
Repo: `https://github.com/HridayMahmud/mini_cloud_storage_system` ✅ verified 200 (**underscores**)
- Built a RESTful cloud storage service with file upload, file deletion and per-user storage management enforcing a 500 MB quota.
- Added request validation and concurrency handling to keep file and storage operations reliable under parallel writes.

Tech: Node.js · Express.js · MongoDB · REST API

> ⚠️ **The CV prints this link with hyphens (`mini-cloud-storage-system`) — that URL is a 404.**
> The portfolio must use the underscore version. The CV itself should be corrected by the owner.

### 2.6 Education
| Institution | Qualification | Year | Result |
|---|---|---|---|
| Bangladesh University of Business & Technology (BUBT) | B.Sc. in Computer Science & Engineering (CSE) | 2024 | CGPA 3.22 |
| Vashantek Govt. College | Higher Secondary Certificate (HSC) — Science | 2016 | GPA 4.50 |
| Rupshi High School | Secondary School Certificate (SSC) — Science | 2014 | GPA 5.00 |

### 2.7 Languages
Bangla — Native · English — Fluent (professional working proficiency)

### 2.8 References — **names + titles only on the website, no contact details**
- Md Sajeeb Hossain — Chief Technology Officer, Codemoly
- Mr. M M Fazle Rabbi — Assistant Professor, Bangladesh University of Business & Technology

Show "Contact details available on request." Do **not** publish their email or phone.

### 2.9 Dropped from the site (were on the old CV, not on the new one)
- Book Review App, Chef's Table (projects)
- Core competencies section
- "Participated in coding contests" achievement
- NID, date of birth, parents' names, blood group, home addresses — **never publish**

---

## 3. Lumiis publishing policy (owner-approved 2026-09-23)

### ✅ Publish (verbatim as the CV states — no extra permission needed)
Product name, `lumiis.se`, role, timeline, "multi-tenant healthcare SaaS for
Swedish aesthetic clinics", the full tech stack, "70-table PostgreSQL database",
"PostgreSQL Row-Level Security", "SSMFS 2026:1 compliance workflows", "4 user
roles", "shipped to Google Play".

### ❌ Never publish
- The client's / product owner's name
- Any real UI screenshot (GDPR — Swedish clinic + patient data)
- Database schema, migrations, RLS policy code, env/config
- A real internal architecture diagram
- Any link to the private Lumiis repository

---

## 4. Locked design decisions

| Decision | Rationale |
|---|---|
| Keep the existing amber/ink palette, Instrument Serif + Inter + JetBrains Mono | Distinctive; avoids the blue→purple gradient that reads as a template |
| Keep light + dark theme | Reference site is dark-only; light mode matters for daytime reviewers |
| Skills: brand logo + name, **no percentage bars** | Self-assigned percentages are unverifiable and reduce credibility. The CV states no levels — inventing them would be fabrication |
| Skills: optional small "● Used in production" dot | Derivable from the CV's experience/project bullets, so it is evidence-based |
| Skills: colour-coded groups | The current 7 identical grey cards are flat and hard to scan |
| Hero: particle constellation **with guardrails** | Owner liked the reference's look; the reference's implementation is the problem, not the idea |
| Particle guardrails (mandatory) | Hero section only · IntersectionObserver pause when off-screen · pause on `visibilitychange` · fully off under `prefers-reduced-motion` · ~40–45 nodes · DPR capped at 1.5 · behind text with low opacity · reduced/disabled below 768px |
| Projects: real visuals | Abstract gradient bands give no proof. Lumiis gets a neutral product card (no real UI); the two backend repos get an architecture diagram |
| Backend diagrams derived from the actual repos | Owner granted access to both public repos. Read route files only — **never invent endpoints** |
| Stat strip using CV-backed numbers only | e.g. 1+ yr experience · 3 key projects · web + mobile · Google Play. No invented figures |
| Contact: **mailto + copy button only**, no form | Cut for time. A form would need a third-party service and an access key. Note honestly that `mailto:` opens the visitor's mail client and does not deliver mail by itself |
| No Lumiis detail page | Cut for time — everything fits in the project card |
| Content in `content.json`, edited through GitHub's web editor | Simplest CMS: no vendor, no account, no token. Owner edits `content.json` and drops files into `public/` on github.com; Vercel auto-deploys. Saves ~4h vs Sanity |
| Build-time content validation | A malformed `content.json` must fail the build, not ship a broken site |

---

## 5. Current state — what is already built and tested

Stack: **Next.js 16.3.6 · React 19.2.8 · TypeScript (strict) · Tailwind CSS v4**, zero runtime deps beyond Next/React.

```
app/            layout.tsx · page.tsx · globals.css · resume/page.tsx
                not-found.tsx · icon.tsx · opengraph-image.tsx
                sitemap.ts · robots.ts
components/     site-header · hero · tech-marquee · about · experience
                skills · projects · education · contact · site-footer
                section · theme-toggle · copy-button · reveal-observer · icons
lib/            content.ts · site.ts · reveal.ts
public/         md-shohag-rana.jpg (portrait, extracted from the CV PDF, 640×640, 39KB)
                md-shohag-rana-cv.pdf (clean CV generated from /resume)
```

### Verified working (2026-09-23)
- `npm run build` ✅ · `npm run lint` ✅ · `npm run typecheck` ✅ — all green, all routes static
- 10 combinations tested (5 viewports 320→1440 × light/dark): **0 console errors, 0 failed requests, 0 horizontal overflow**
- **30/31 interaction checks pass** — theme toggle + persistence, anchor nav, `aria-current`, scroll progress, clipboard copy, skip link on first Tab, mobile menu open/close/Escape/focus-return/scroll-lock, tap targets ≥32px, one h1, all images have alt, all links and buttons have accessible names, `lang`, title, meta description, JSON-LD, Open Graph
- The one failure is a headless-Chrome clipboard permission limitation, not a site bug

### Known content gap
`lib/content.ts` still holds the **old** CV data. That is what Phase 1 replaces.

### Test harness
A dependency-free Chrome DevTools Protocol driver was used (launch headless Chrome
with `--remote-debugging-port`, drive it over Node's built-in `WebSocket`). It lived in
the session scratchpad and will need recreating (~30 min) — budgeted in Phase 7.

---

## 6. Work plan

| Phase | Work | Est. |
|---|---|---|
| **0** | `git remote add origin` → commit → push to `HridayMahmud/shohag-rana-portfolio`. Owner imports to Vercel. Ship with `robots: noindex` until Phase 2 ends. | 20m |
| **1** | Move content to `content.json`; replace every field with §2 of this file. Drop Book Review App, Chef's Table, competencies, coding contests. | 2h |
| **2** | Experience bullets · Education key→value rows + Science group · LinkedIn (hero, contact, footer, JSON-LD `sameAs`) · References section · stat strip · hero repositioning. **Remove `noindex` here — the site is publishable.** | 1.5h |
| **3** | Skills redesign — brand logos, 6 CV groups + "Also worked with", colour coding, production dots. | 1.5h |
| **4** | Projects redesign — Lumiis flagship card (§3 policy) + architecture diagrams built from the two real repos. | 40m |
| **5** | Hero particle animation with every guardrail in §4. | 1h |
| **6** | `content.json` + build-time validation, so GitHub's web editor is a safe CMS. Document it in the README. | 1h |
| **7** | Recreate the CDP harness, full sweep, production build, final deploy. | 1h |
| | **Total** | **~9h** |

---

## 7. Files that change

```
lib/content.ts → content.json    ~70% rewrite (Phase 1)
components/hero.tsx              positioning · LinkedIn · stat strip · particles
components/experience.tsx        render bullets[]
components/skills.tsx            logos · 6+1 groups · colour coding · production dot
components/projects.tsx          flagship layout · live link · role/period · diagrams
components/about.tsx             competencies removed → professional summary
components/education.tsx         key→value rows · Science group
components/contact.tsx           LinkedIn
components/site-footer.tsx       LinkedIn
app/layout.tsx                   metadata · JSON-LD (jobTitle, sameAs += LinkedIn)
app/resume/page.tsx              mirror everything
NEW components/references.tsx    names + titles only
NEW components/stat-strip.tsx
public/                          regenerated CV PDF
```

---

## 8. Still open

1. **Vercel deployment** — the owner does this himself at vercel.com/new.
2. **Phase 0 timing** — push now with `noindex` (recommended), or push after Phase 2.
3. **Downloadable CV** — regenerate from `/resume` after Phase 2 so it reflects the new CV, and keep referee contact details out of it.
4. The owner should fix the `mini-cloud-storage-system` → `mini_cloud_storage_system` link on his own CV.

---

## 9. Commands

```bash
npm run dev                       # http://localhost:3000
npm run build                     # production build
npm run lint                      # eslint
npm run typecheck                 # tsc --noEmit
npx next start -p 3100            # serve the production build

git remote add origin https://github.com/HridayMahmud/shohag-rana-portfolio.git
```

---

## 10. Gotchas — already solved, do not regress

Every item below was a real bug that was diagnosed and fixed during the first
build. Changing the noted code without understanding why will bring the bug back.

### 10.1 Font CSS variables must live on `<html>`, not `<body>`
`app/layout.tsx` puts `inter.variable`, `instrument.variable` and
`jetbrains.variable` on the `<html>` element. **Do not move them to `<body>`.**

Why: Tailwind's `@theme inline` emits `--font-display: var(--font-instrument), …`
into `:root`. A custom property declared on `:root` resolves its nested `var()`
against `:root` itself. If `--font-instrument` is only defined on `<body>`, the
lookup fails, `--font-display` becomes invalid at computed-value time, and the
whole `font-family` declaration is silently dropped.

**Symptom:** the entire site renders in a fallback sans-serif and the serif
display face never appears — with no error anywhere.

### 10.2 Never combine `scroll-padding-top` with `scroll-mt-*`
`html` already has `scroll-padding-top: 5.5rem` in `globals.css`. `Section` must
**not** also carry `scroll-mt-24`. Browsers apply scroll-padding (scrollport) and
scroll-margin (target) **additively**.

**Symptom:** clicking a nav link leaves the section ~200px below the header
instead of ~88px.

### 10.3 Reveal animations are gated on a `js` class
The inline script in `app/layout.tsx` adds `class="js"` to `<html>`. CSS hides
reveal elements only under `html.js .reveal`. **Do not** change `.reveal` to be
hidden by default.

Why: with JavaScript disabled the observer never runs, so a default-hidden
`.reveal` would leave the whole page blank.

### 10.4 `CopyButton` needs its `execCommand` fallback
`navigator.clipboard.writeText` rejects in insecure contexts and when permission
is denied. `components/copy-button.tsx` falls back to a hidden textarea +
`document.execCommand("copy")`. Keep both paths.

Note: both APIs require a **trusted user gesture**. Automated tests must dispatch
a real mouse event (CDP `Input.dispatchMouseEvent`), not `element.click()`.

### 10.5 `.link-sweep` padding exists for tap targets
`.link-sweep` has `padding-block: 0.375rem` and its `::after` sits at
`bottom: 0.25rem`. That padding brings inline action links from 20px to 32px tall.
Removing it silently breaks mobile tap-target sizing; the `::after` offset is
tuned to keep the underline against the text despite the padding.

### 10.6 `ThemeToggle` is deliberately stateless
Icons swap purely via CSS on the `.dark` class. **Do not** add
`useState`/`useEffect` for `isDark` — that reintroduces a hydration mismatch and
a theme flash.

### 10.7 One page-wide reveal observer, not one per component
`components/reveal-observer.tsx` runs a single `IntersectionObserver` over every
`.reveal`. Server components opt in with the `reveal()` helper from
`lib/reveal.ts`. Do **not** convert sections into client components to animate
them — it ships far more JS for no benefit.

### 10.8 `next start` serves a cached build
After `npm run build`, an already-running `next start` keeps serving the **old**
output. Always stop and restart it before testing, or you will be verifying stale code.

```bash
# find and kill the listener first
netstat -ano | grep -E ":3100 .*LISTENING"
```

### 10.9 ESLint: internal links must use `next/link`
`@next/next/no-html-link-for-pages` fails the lint on `<a href="/">` and
`<a href="/resume">`. Use `next/link` for internal routes. Plain `<a>` is correct
for `#hash` anchors, `mailto:`, `tel:` and external URLs.

### 10.10 The portrait came out of the CV PDF
`public/md-shohag-rana.jpg` was extracted from the old CV PDF: the image is a raw
787×787 RGB bitmap inside a FlateDecode stream (no JPEG/DCTDecode marker, so a
byte-scan for `FFD8FF` finds nothing). It was recovered by inflating each
`stream…endstream` block, picking the one whose inflated length is 1,858,107
bytes (787 × 787 × 3), and wrapping it in a hand-built PNG, then resized with
sharp. Keep the existing JPEG unless a better original is supplied.

### 10.11 Writing source files on this machine
Large `.tsx` heredocs through Bash mangle quotes and apostrophes. Use the
Write/Edit tools for source files; use Bash only for short, quote-free edits.

---

## 11. Reference site analysis

The owner supplied **https://mosiur-portfolio.vercel.app** as *inspiration only*.
It must not be copied. This is what it actually contains, and what was decided.

### 11.1 What it is
Single page, 5988px, sections `home → about → skills → education → projects → contact`.
Dark navy `#1a2332`, blue→purple gradient (`#4f6ef7 → #a855f7`), green CTA.
Font family is `Arial, Helvetica, sans-serif`. Page title is still
`Create Next App`. A tsParticles constellation canvas runs behind the whole page.

Per section: hero has a typewriter cursor, brand-coloured tech chips and a stock
isometric illustration; about has a circular photo with a dashed rotating ring,
three stat tiles and interest chips; skills are three colour-coded panels where
each entry shows a brand logo, a percentage and a progress bar; education is two
cards with a coloured top border, key→value rows and a GPA bar; projects is a
three-column grid where each card leads with a real product screenshot, a number
badge, truncated copy, tech chips with a `+n` overflow and a "View Details →"
button; contact pairs a Send Message form with four gradient icon cards.

### 11.2 Adopted — and why
| Idea | Why |
|---|---|
| Real imagery on project cards | Screenshots make work feel real. Abstract gradient bands prove nothing. **Adapted:** Lumiis gets a neutral product card (no real UI — see §3) and the backend repos get architecture diagrams |
| Brand logos in the skills grid | Logos are recognised instantly; seven identical grey cards are not scannable |
| Colour-coded skill groups | Creates hierarchy across a long list |
| Stat tiles | Communicates scale at a glance. **Adapted:** only CV-backed numbers |
| Structured key→value rows in education | More readable than a bare year + result chip |

### 11.3 Rejected — and why
| Idea | Why not |
|---|---|
| Percentage skill bars | Self-assigned and unverifiable; reduces credibility with senior reviewers. The CV states no levels, so any number would be fabricated |
| Full-page tsParticles canvas | A 60fps canvas across 5988px costs CPU and battery, hurts mobile LCP, ignores `prefers-reduced-motion`, and its lines cross over body text and hurt readability. **Kept the idea, fixed the implementation** — see the particle guardrails in §4 |
| `Arial` + `Create Next App` title | No typographic identity, and the site would be indexed under the default scaffold title |
| Contact form promising a reply "within 24 hours" | Needs a backend; a dead form is the worst possible impression, and the promise may not be kept |
| Blue→purple gradient | The most common palette in dev portfolios — reads as a template |
| Stock isometric illustration in the hero | Generic. A real professional photograph is stronger, and one is available |
| Truncated project copy behind "View Details" | Forces a click to read a single sentence |
| Dark-only theme | No light mode for daytime reviewers |

### 11.4 Bug observed in the reference
The contact card clips the email address mid-character
(`mdmosiurrahman.nachol@gmail.con`). Any contact block here must be tested with
the longest real string at 320px width.

---

## 12. Working agreement with the owner

Condensed from the planning conversation (2026-09-23). Follow this.

### How he wants to be worked with
1. **Never start implementing without an explicit "shuru koro".** Plan first,
   show it, wait. He interrupted the first build precisely because it began
   before he had seen a plan.
2. **Ask before acting on anything ambiguous**, especially confidentiality,
   third-party data and account/auth changes.
3. **Keep replies short.** He asks for "short context" repeatedly. Tables and
   bullets over prose.
4. **Report status factually** — what is done, what is not, what was not verified.
   He asks direct yes/no questions and wants direct yes/no answers.
5. He writes in Banglish (Bengali in Latin script); replying the same way is fine.
   Technical documents stay in English.
6. He handles Vercel himself. He created the GitHub repo and the collaborator
   grant himself.

### How this plan was reached
The first build was completed before a plan was shown, and was stopped on his
instruction; nothing was committed, pushed or deployed, and the Lumiis repo was
never touched. He then supplied a **newer CV** (`Md_Shohag_Rana_CV_BD.pdf`),
which repositions him from "MERN developer" to "Full Stack Software Engineer
shipping a production healthcare SaaS and a Google Play app". He asked for the
reference site to be studied properly (it was, via screenshots) and for a
recommendation rather than a copy. Every decision in §4, §3 and §2.9 was then
confirmed by him item by item.

### Scope changes he added late
- Everything a professional portfolio can do manually **must be editable by him**
  — images, CV, text. Resolved as `content.json` + GitHub's web editor (§4),
  chosen over Sanity because it costs ~1h instead of ~5h and adds no vendor.
- Time-saving cuts he approved: no contact form (mailto + copy only), no Lumiis
  detail page, lightweight architecture diagrams instead of a deep repo study.

### Privacy positions he settled
- Referees: names and titles on the site, **no email or phone**.
- Old CV's NID, date of birth, parents' names, blood group and home addresses:
  **never publish** (he removed them from the new CV himself).
- Lumiis: publish exactly what his CV already states, nothing beyond it (§3).
