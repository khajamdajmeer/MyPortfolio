import { resumeHref } from "./data";
import type { PortfolioData, Skill } from "./types";

/**
 * Maps the database shape onto the props the presentation components expect.
 * Keeping this in one place means the components stay dumb and the schema can
 * change without a hunt through the UI.
 */

export type SocialVM = {
  label: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type SkillGroupVM = {
  title: string;
  blurb: string;
  items: { name: string; icon: string }[];
};

export type NavLink = { label: string; href: string };

/** Maps a skill name onto an icon slug in `TechIcon`'s brand map. */
const ICON_BY_SKILL: Record<string, string> = {
  "react.js": "react",
  react: "react",
  javascript: "javascript",
  html: "html",
  css: "css",
  "node.js": "node",
  "express.js": "express",
  mongodb: "mongodb",
  redux: "redux",
  git: "git",
  python: "python",
  fastapi: "fastapi",
  postgresql: "postgres",
  redis: "redis",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  "aws bedrock": "aws",
  "aws eks": "aws",
  langchain: "langchain",
  langgraph: "langchain",
  llamaindex: "langchain",
  "hugging face": "huggingface",
  pytorch: "pytorch",
  neo4j: "neo4j",
  "anthropic claude": "anthropic",
  openai: "openai",
};

export function iconFor(name: string) {
  return ICON_BY_SKILL[name.trim().toLowerCase()] ?? "api";
}

/** One-line description per skill category, shown under the group title. */
const GROUP_BLURB: Record<string, string> = {
  "AI Engineering":
    "Retrieval, agents and the orchestration that keeps them predictable.",
  LLMs: "The models I build against, and the gateways in front of them.",
  Backend: "Services that stay fast when the traffic isn't polite.",
  Frontend: "Interfaces that read clearly and hold up on a phone.",
  Data: "Relational, document, graph and vector — whichever the problem wants.",
  "Cloud & DevOps": "Getting it deployed, observable and hard to knock over.",
};

export function buildSkillGroups(skills: Skill[]): SkillGroupVM[] {
  const groups = new Map<string, SkillGroupVM>();

  for (const skill of skills) {
    const title = skill.category || "General";
    if (!groups.has(title)) {
      groups.set(title, {
        title,
        blurb: GROUP_BLURB[title] ?? "Tools I use regularly.",
        items: [],
      });
    }
    groups.get(title)!.items.push({ name: skill.name, icon: iconFor(skill.name) });
  }

  return [...groups.values()];
}

/** The tech names that scroll past in the hero marquee. */
export function buildMarquee(skills: Skill[]) {
  const preferred = [
    "Python",
    "LangChain",
    "FastAPI",
    "React.js",
    "AWS",
    "Docker",
    "PostgreSQL",
    "Node.js",
    "MongoDB",
    "Redis",
    "Kubernetes",
    "PyTorch",
  ];

  const available = new Set(skills.map((s) => s.name));
  const picked = preferred.filter((name) => available.has(name));
  const list = picked.length >= 6 ? picked : skills.slice(0, 12).map((s) => s.name);

  return list.map((name) => ({ label: name, icon: iconFor(name) }));
}

export function buildSocials(data: PortfolioData): SocialVM[] {
  const { profile } = data;
  const socials: SocialVM[] = [];

  if (profile.github_url) {
    socials.push({
      label: "GitHub",
      handle: `@${profile.github_url.replace(/\/+$/, "").split("/").pop()}`,
      href: profile.github_url,
      icon: "github",
    });
  }
  if (profile.linkedin_url) {
    socials.push({
      label: "LinkedIn",
      handle: `/in/${profile.linkedin_url.replace(/\/+$/, "").split("/").pop()}`,
      href: profile.linkedin_url,
      icon: "linkedin",
    });
  }
  if (profile.email) {
    socials.push({
      label: "Email",
      handle: profile.email,
      href: `mailto:${profile.email}`,
      icon: "mail",
    });
  }

  return socials;
}

export function buildNavLinks(data: PortfolioData): NavLink[] {
  const links: NavLink[] = [{ label: "About", href: "#about" }];
  if (data.skills.length) links.push({ label: "Skills", href: "#skills" });
  if (data.experience.length) links.push({ label: "Experience", href: "#experience" });
  if (data.projects.length) links.push({ label: "Work", href: "#work" });
  links.push({ label: "Contact", href: "#contact" });
  return links;
}

/** Short stats for the hero card — derived, never hand-maintained. */
export function buildFacts(data: PortfolioData) {
  const years = data.experience.length ? "3+ yrs" : "—";
  const degree = data.education[0]?.degree?.includes("Bachelor")
    ? "B.Sc CS"
    : (data.education[0]?.degree ?? "—");

  return [
    { label: "Focus", value: "AI + Full Stack" },
    { label: "Experience", value: years },
    { label: "Projects", value: `${data.projects.length} shipped` },
    { label: "Degree", value: degree },
  ];
}

export function buildSite(data: PortfolioData) {
  return {
    name: data.profile.name,
    role: data.profile.headline,
    tagline: data.profile.bio,
    location: data.profile.location,
    email: data.profile.email,
    phone: data.profile.phone,
    avatar: data.profile.avatar_url || "/images/profile.jpg",
    resume: resumeHref(data.resume),
  };
}

export type SiteVM = ReturnType<typeof buildSite>;
