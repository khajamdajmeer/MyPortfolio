import Image from "next/image";
import { getPortfolio, resumeHref } from "@/lib/data";
import { SiteNav } from "@/components/site-nav";
import type { Project, Skill } from "@/lib/types";

export const dynamic = "force-dynamic";

function groupSkills(skills: Skill[]) {
  const groups = new Map<string, Skill[]>();
  for (const skill of skills) {
    const key = skill.category || "General";
    groups.set(key, [...(groups.get(key) ?? []), skill]);
  }
  return [...groups.entries()];
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="rise mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-12 flex items-end gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bright sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mb-2 h-px flex-1 bg-gradient-to-r from-line to-transparent" />
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-raised">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(60%_60%_at_50%_0%,rgba(110,231,183,0.14),transparent)]">
            <span className="font-mono text-4xl font-medium text-line">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-bright">{project.title}</h3>
        {project.summary ? (
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        ) : null}

        {project.tech?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-raised px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-4 pt-2 text-sm">
          {project.live_url ? (
            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent transition-opacity hover:opacity-75"
            >
              Live site ↗
            </a>
          ) : null}
          {project.repo_url ? (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-bright"
            >
              Source ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default async function Home() {
  const { profile, projects, experience, education, skills, resume } =
    await getPortfolio();
  const resumeUrl = resumeHref(resume);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <SiteNav name={profile.name} resumeHref={resumeUrl} />

      <main id="top" className="flex-1">
        {/* -------------------------------- hero ------------------------------ */}
        <section className="relative overflow-hidden">
          <div className="aurora pointer-events-none absolute inset-0" />
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 pb-24 pt-36 md:flex-row md:items-center md:pt-44">
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {profile.location || "India"}
              </p>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-bright sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-4 text-xl text-accent sm:text-2xl">
                {profile.headline}
              </p>

              {profile.bio ? (
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                  {profile.bio}
                </p>
              ) : null}

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-deep"
                >
                  View work
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-bright transition-colors hover:border-accent/50 hover:text-accent"
                >
                  Download resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm">
                {profile.github_url ? (
                  <a
                    href={profile.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-bright"
                  >
                    GitHub ↗
                  </a>
                ) : null}
                {profile.linkedin_url ? (
                  <a
                    href={profile.linkedin_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors hover:text-bright"
                  >
                    LinkedIn ↗
                  </a>
                ) : null}
                {profile.email ? (
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted transition-colors hover:text-bright"
                  >
                    {profile.email}
                  </a>
                ) : null}
              </div>
            </div>

            {profile.avatar_url ? (
              <div className="relative mx-auto w-56 shrink-0 sm:w-72 md:mx-0">
                <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-full border border-line">
                  <Image
                    src={profile.avatar_url}
                    alt={profile.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 14rem, 18rem"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {/* -------------------------------- about ----------------------------- */}
        {profile.objective ? (
          <Section id="about" eyebrow="01 — About" title="What I'm after">
            <p className="max-w-3xl text-lg leading-relaxed text-body">
              {profile.objective}
            </p>
          </Section>
        ) : null}

        {/* ------------------------------- skills ----------------------------- */}
        {skills.length ? (
          <Section id="skills" eyebrow="02 — Skills" title="What I work with">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {groupSkills(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill.id}
                        className="rounded-lg border border-line bg-raised px-3 py-1.5 text-sm text-body"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        {/* ----------------------------- background --------------------------- */}
        {experience.length || education.length ? (
          <Section
            id="work"
            eyebrow="03 — Background"
            title="Experience & education"
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
                  Experience
                </h3>
                <ol className="relative space-y-8 border-l border-line pl-6">
                  {experience.map((job) => (
                    <li key={job.id} className="relative">
                      <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-accent" />
                      <p className="font-mono text-xs text-muted">
                        {job.period}
                      </p>
                      <h4 className="mt-1.5 text-lg font-medium text-bright">
                        {job.role}
                      </h4>
                      <p className="text-sm text-accent">
                        {job.company}
                        {job.location ? ` · ${job.location}` : ""}
                      </p>
                      {job.description ? (
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {job.description}
                        </p>
                      ) : null}
                    </li>
                  ))}
                  {experience.length === 0 ? (
                    <li className="text-sm text-muted">Nothing added yet.</li>
                  ) : null}
                </ol>
              </div>

              <div>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
                  Education
                </h3>
                <ol className="relative space-y-8 border-l border-line pl-6">
                  {education.map((school) => (
                    <li key={school.id} className="relative">
                      <span className="absolute -left-[1.9rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-line" />
                      <p className="font-mono text-xs text-muted">
                        {school.period}
                      </p>
                      <h4 className="mt-1.5 text-lg font-medium text-bright">
                        {school.institution}
                      </h4>
                      <p className="text-sm text-body">
                        {school.degree}
                        {school.location ? ` · ${school.location}` : ""}
                      </p>
                    </li>
                  ))}
                  {education.length === 0 ? (
                    <li className="text-sm text-muted">Nothing added yet.</li>
                  ) : null}
                </ol>
              </div>
            </div>
          </Section>
        ) : null}

        {/* ------------------------------ projects ---------------------------- */}
        <Section id="projects" eyebrow="04 — Projects" title="Things I've built">
          {projects.length ? (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                {(featured.length ? featured : projects).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {featured.length && rest.length ? (
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <p className="text-sm text-muted">
              No projects yet — add the first one from the admin panel.
            </p>
          )}
        </Section>

        {/* ------------------------------- contact ---------------------------- */}
        <Section id="contact" eyebrow="05 — Contact" title="Let's talk">
          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <p className="max-w-xl text-lg leading-relaxed text-body">
              I&apos;m open to full-time roles and freelance work. The quickest
              way to reach me is email — I read everything.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.email ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-deep"
                >
                  {profile.email}
                </a>
              ) : null}
              {profile.phone ? (
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="rounded-full border border-line px-5 py-2.5 text-sm text-bright transition-colors hover:border-accent/50"
                >
                  {profile.phone}
                </a>
              ) : null}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-5">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-bright"
            >
              Resume
            </a>
            {profile.github_url ? (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-bright"
              >
                GitHub
              </a>
            ) : null}
            {profile.linkedin_url ? (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-bright"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}
