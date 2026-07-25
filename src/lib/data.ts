import { isDbConfigured, query } from "./db";
import {
  RESUME_FILE,
  fallbackEducation,
  fallbackExperience,
  fallbackProfile,
  fallbackProjects,
  fallbackSkills,
} from "./fallback";
import type {
  Education,
  Experience,
  PortfolioData,
  Profile,
  Project,
  ResumeMeta,
  Skill,
} from "./types";

function withIds<T>(rows: T[]): (T & { id: number })[] {
  return rows.map((row, i) => ({ ...row, id: -(i + 1) }));
}

/** Populates an empty database with the fallback content so the admin has something to edit. */
export async function seedIfEmpty() {
  const [{ count }] = await query<{ count: string }>(
    "select count(*)::text as count from profile",
  );
  if (Number(count) > 0) return false;

  const p = fallbackProfile;
  await query(
    `insert into profile (id, name, headline, location, email, phone, bio, objective, github_url, linkedin_url, avatar_url)
     values (1, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     on conflict (id) do nothing`,
    [
      p.name,
      p.headline,
      p.location,
      p.email,
      p.phone,
      p.bio,
      p.objective,
      p.github_url,
      p.linkedin_url,
      p.avatar_url,
    ],
  );

  for (const project of fallbackProjects) {
    await query(
      `insert into projects (title, subtitle, year, summary, description, highlights, tech, live_url, repo_url, image_url, featured, sort_order)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
      [
        project.title,
        project.subtitle,
        project.year,
        project.summary,
        project.description,
        project.highlights,
        project.tech,
        project.live_url,
        project.repo_url,
        project.image_url,
        project.featured,
        project.sort_order,
      ],
    );
  }

  for (const job of fallbackExperience) {
    await query(
      `insert into experience (role, company, location, period, description, sort_order)
       values ($1, $2, $3, $4, $5, $6)`,
      [
        job.role,
        job.company,
        job.location,
        job.period,
        job.description,
        job.sort_order,
      ],
    );
  }

  for (const school of fallbackEducation) {
    await query(
      `insert into education (institution, degree, location, period, sort_order)
       values ($1, $2, $3, $4, $5)`,
      [
        school.institution,
        school.degree,
        school.location,
        school.period,
        school.sort_order,
      ],
    );
  }

  for (const skill of fallbackSkills) {
    await query(
      `insert into skills (name, category, sort_order) values ($1, $2, $3)`,
      [skill.name, skill.category, skill.sort_order],
    );
  }

  return true;
}

function fallbackPayload(): PortfolioData {
  return {
    profile: fallbackProfile,
    projects: withIds(fallbackProjects),
    experience: withIds(fallbackExperience),
    education: withIds(fallbackEducation),
    skills: withIds(fallbackSkills),
    resume: {
      filename: RESUME_FILE.replace("/", ""),
      external_url: RESUME_FILE,
      has_file: false,
      updated_at: null,
    },
    source: "fallback",
  };
}

/**
 * Reads the whole portfolio. Falls back to the bundled content whenever the
 * database is unreachable or not provisioned yet, so the public site always
 * renders something coherent.
 */
export async function getPortfolio(): Promise<PortfolioData> {
  if (!isDbConfigured()) return fallbackPayload();

  try {
    await seedIfEmpty();

    const [profileRows, projects, experience, education, skills, resumeRows] =
      await Promise.all([
        query<Profile>("select * from profile where id = 1"),
        query<Project>(
          "select * from projects order by sort_order asc, id asc",
        ),
        query<Experience>(
          "select * from experience order by sort_order asc, id asc",
        ),
        query<Education>(
          "select * from education order by sort_order asc, id asc",
        ),
        query<Skill>("select * from skills order by sort_order asc, id asc"),
        query<{
          filename: string;
          external_url: string;
          has_file: boolean;
          updated_at: string;
        }>(
          "select filename, external_url, (data is not null) as has_file, updated_at from resume where id = 1",
        ),
      ]);

    const resume: ResumeMeta | null = resumeRows[0]
      ? {
          filename: resumeRows[0].filename,
          external_url: resumeRows[0].external_url ?? "",
          has_file: Boolean(resumeRows[0].has_file),
          updated_at: String(resumeRows[0].updated_at),
        }
      : {
          filename: RESUME_FILE.replace("/", ""),
          external_url: RESUME_FILE,
          has_file: false,
          updated_at: null,
        };

    return {
      profile: profileRows[0] ?? fallbackProfile,
      projects,
      experience,
      education,
      skills,
      resume,
      source: "database",
    };
  } catch (err) {
    console.error("Falling back to bundled content:", err);
    return fallbackPayload();
  }
}

export function resumeHref(resume: ResumeMeta | null) {
  if (!resume) return "/AjmeerKhajaResume.pdf";
  if (resume.has_file) return "/resume";
  return resume.external_url || "/AjmeerKhajaResume.pdf";
}
