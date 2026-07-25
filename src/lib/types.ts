export type Profile = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  objective: string;
  github_url: string;
  linkedin_url: string;
  avatar_url: string;
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  live_url: string;
  repo_url: string;
  image_url: string;
  featured: boolean;
  sort_order: number;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  sort_order: number;
};

export type Education = {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  sort_order: number;
};

export type Skill = {
  id: number;
  name: string;
  category: string;
  sort_order: number;
};

export type ResumeMeta = {
  filename: string;
  external_url: string;
  has_file: boolean;
  updated_at: string | null;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  resume: ResumeMeta | null;
  source: "database" | "fallback";
};
