/** Absolute origin for metadata, sitemap and social images. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * Search-engine indexing switch. Set to `false` to hide the whole site from
 * search engines (e.g. while content is being reworked).
 */
export const indexable = true;
