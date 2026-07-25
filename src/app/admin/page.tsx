import Link from "next/link";
import {
  deleteEducation,
  deleteExperience,
  deleteProject,
  deleteSkill,
  logout,
} from "@/app/actions";
import {
  EducationForm,
  ExperienceForm,
  LoginForm,
  ProfileForm,
  ProjectForm,
  ResumeForm,
  SkillForm,
} from "@/components/admin/forms";
import { Panel } from "@/components/admin/ui";
import { isAdminConfigured, isAuthenticated } from "@/lib/auth";
import { getPortfolio } from "@/lib/data";
import { isDbConfigured } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin — Portfolio",
  robots: { index: false, follow: false },
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">{children}</main>
  );
}

function DeleteButton({
  action,
  id,
  label = "Delete",
}: {
  action: (formData: FormData) => Promise<void>;
  id: number;
  label?: string;
}) {
  return (
    <form action={action}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-xs font-medium text-red-400 transition-opacity hover:opacity-70"
      >
        {label}
      </button>
    </form>
  );
}

export default async function AdminPage() {
  if (!isAdminConfigured()) {
    return (
      <Shell>
        <h1 className="text-2xl font-semibold text-bright">Admin is not set up</h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
          Set an <code className="font-mono text-accent">ADMIN_PASSWORD</code>{" "}
          environment variable on the project, then redeploy. Until it is set the
          admin panel stays locked for everyone.
        </p>
      </Shell>
    );
  }

  if (!(await isAuthenticated())) {
    return (
      <Shell>
        <div className="mx-auto max-w-sm rounded-2xl border border-line bg-surface p-8">
          <h1 className="text-xl font-semibold text-bright">Admin</h1>
          <p className="mb-6 mt-1 text-sm text-muted">
            Sign in to edit your portfolio.
          </p>
          <LoginForm />
        </div>
      </Shell>
    );
  }

  const { profile, projects, experience, education, skills, resume, source } =
    await getPortfolio();

  return (
    <Shell>
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-bright">
            Portfolio admin
          </h1>
          <p className="mt-1 text-sm text-muted">
            Changes go live immediately — no redeploy needed.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-muted transition-colors hover:text-bright">
            View site ↗
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-lg border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:text-bright"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      {!isDbConfigured() || source === "fallback" ? (
        <p className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          The database is not connected yet, so the site is showing bundled
          placeholder content and edits cannot be saved. Add the{" "}
          <code className="font-mono">DATABASE_URL</code> environment variable to
          fix this.
        </p>
      ) : null}

      <div className="space-y-8">
        <ProfileForm profile={profile} />

        <Panel title="Resume" description="Served from the database at /resume.">
          <p className="mb-5 text-sm text-muted">
            {resume?.has_file
              ? `Currently serving ${resume.filename} from the database.`
              : "No PDF uploaded yet — the bundled copy is being served."}
          </p>
          <ResumeForm externalUrl={resume?.external_url ?? ""} />
        </Panel>

        <Panel title="Add a project" description="Appears in the Projects section.">
          <ProjectForm />
        </Panel>

        {projects.length ? (
          <Panel title={`Projects (${projects.length})`}>
            <ul className="space-y-4">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="rounded-xl border border-line bg-ink p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-bright">
                        {project.title}
                        {project.featured ? (
                          <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase text-accent">
                            featured
                          </span>
                        ) : null}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{project.summary}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <ProjectForm project={project} />
                      <DeleteButton action={deleteProject} id={project.id} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        ) : null}

        <Panel title="Add experience">
          <ExperienceForm />
        </Panel>

        {experience.length ? (
          <Panel title={`Experience (${experience.length})`}>
            <ul className="space-y-4">
              {experience.map((job) => (
                <li key={job.id} className="rounded-xl border border-line bg-ink p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-bright">{job.role}</h3>
                      <p className="mt-1 text-sm text-muted">
                        {job.company} · {job.period}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <ExperienceForm item={job} />
                      <DeleteButton action={deleteExperience} id={job.id} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        ) : null}

        <Panel title="Add education">
          <EducationForm />
        </Panel>

        {education.length ? (
          <Panel title={`Education (${education.length})`}>
            <ul className="space-y-4">
              {education.map((school) => (
                <li
                  key={school.id}
                  className="rounded-xl border border-line bg-ink p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-bright">
                        {school.institution}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {school.degree} · {school.period}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <EducationForm item={school} />
                      <DeleteButton action={deleteEducation} id={school.id} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        ) : null}

        <Panel title="Skills">
          <SkillForm />
          {skills.length ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="flex items-center gap-2 rounded-lg border border-line bg-ink px-3 py-1.5 text-sm text-body"
                >
                  {skill.name}
                  <span className="font-mono text-[10px] text-muted">
                    {skill.category}
                  </span>
                  <DeleteButton action={deleteSkill} id={skill.id} label="×" />
                </li>
              ))}
            </ul>
          ) : null}
        </Panel>
      </div>
    </Shell>
  );
}
