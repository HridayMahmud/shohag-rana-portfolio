/** Absolute origin for metadata, sitemap and social images. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * Search-engine indexing switch. Kept off while the site still shows
 * placeholder content; flip to `true` once the content is final.
 */
export const indexable = false;
