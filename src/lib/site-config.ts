/**
 * Static identity used by metadata routes (sitemap, robots, OG image) that
 * must not depend on a database round-trip at build time.
 */
export const siteConfig = {
  name: "MD Ajmeer Khaja",
  role: "AI Engineer & Full Stack Developer",
  location: "Hyderabad, India",
  stack: "LangChain · FastAPI · React · AWS",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

/** "MD Ajmeer Khaja" → "AK" for the logo mark. */
export function initialsOf(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "AK";
  const letters = parts.length >= 2 ? [parts[parts.length - 2], parts[parts.length - 1]] : parts;
  return letters.map((part) => part[0]).join("").toUpperCase();
}
