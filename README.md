# MD Shohag Rana — Portfolio

Personal portfolio and résumé site. Next.js 16 · React 19 · TypeScript · Tailwind CSS v4.
Deployed on Vercel; every push to `main` deploys automatically.

## Editing content (no coding needed)

All text on the site lives in **one file: [`content.json`](content.json)**. Edit it
straight on GitHub:

1. Open `content.json` on github.com and click the ✏️ **Edit** button.
2. Change the text you want. Keep the quotes, commas and brackets as they are.
3. Click **Commit changes…** → commit to `main`.
4. Vercel rebuilds the site in about a minute.

**If you make a mistake, the live site stays safe.** Every build first checks
`content.json`. If something is wrong, the build stops, Vercel keeps showing the
previous version, and the build log on Vercel lists exactly what to fix. For example:

```
✗ Content check failed — the site was not built.
content.json has 1 problem(s):
  • productionSkills[23] "Nextjs" is not in any skillGroups items. It must match
    a skill's name exactly (same spelling and capitals).
```

### Rules the check enforces

| Rule | Example |
|---|---|
| Valid JSON: commas between items, quotes around text | `"role": "Software Engineer",` |
| No misspelt field names | `"title"`, not `"titel"` |
| Text fields cannot be empty | |
| `true` / `false` without quotes | `"current": true` |
| Links are full `https://` addresses | `"repo": "https://github.com/…"` |
| Years are 4 digits in quotes | `"year": "2024"` |
| Every name in `productionSkills` matches a skill in `skillGroups` exactly | `"Next.js"` |
| Only one project has `"featured": true` | |
| Project `slug`s are unique, lowercase, joined by `-` | `"courier-management-system"` |
| `cv` and `portrait` point to files that exist in `public/` | `"/md-shohag-rana-cv.pdf"` |
| Referees have a name and title only — no email or phone | |

### What lives where in `content.json`

| Section | Controls |
|---|---|
| `meta` | Search-engine description and keywords |
| `profile` | Name, title, contact details, summary, hero tagline, CV and photo paths |
| `stats` | The four figures under the hero |
| `sections` | The intro lines of Skills, Experience and Projects |
| `experience` | Jobs, newest first |
| `skillGroups` | Skill groups; `"secondary": true` shows a group as de-emphasised |
| `productionSkills` | Skills that get the green "used in production" dot |
| `marqueeStack` | The scrolling tech strip under the hero |
| `projects` | Project cards; `featured` makes one card full width |
| `education`, `languages`, `references`, `referencesNote` | The matching sections |

### Replacing the photo or the CV

1. On github.com, open the `public/` folder → **Add file → Upload files**.
2. Upload the new file **with the same name** (`md-shohag-rana.jpg` or
   `md-shohag-rana-cv.pdf`) to replace the old one, and commit.
3. If you use a different file name, update `profile.portrait` or `profile.cv`
   in `content.json` to match. The check fails if the file is missing.

The photo should be square (it is shown at up to 352 × 352 px).

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run validate     # check content.json only
npm run lint
npm run typecheck
npm run build        # validates content.json, then builds
```

Search-engine indexing can be switched off for the whole site with `indexable`
in `lib/site.ts`.
