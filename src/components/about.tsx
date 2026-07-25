import type { Education } from "@/lib/types";
import type { SiteVM } from "@/lib/view";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

export function About({
  site,
  paragraphs,
  education,
}: {
  site: SiteVM;
  paragraphs: string[];
  education: Education[];
}) {
  return (
    <Section id="about" className="ambient">
      <SectionHeading
        eyebrow="About me"
        title="Two disciplines, one job"
        lead={`AI engineer and full stack developer based in ${site.location}.`}
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="text-[1.0625rem] leading-[1.75] text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4">
          <Reveal delay={0.1}>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              Education
            </p>
          </Reveal>

          {education.map((school, index) => (
            <Reveal key={school.id} delay={0.14 + index * 0.06}>
              <article className="rounded-2xl border p-5 surface">
                <p className="font-mono text-[11px] text-accent">{school.period}</p>
                <h3 className="mt-2 font-display text-lg leading-snug font-semibold">
                  {school.institution}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {school.degree}
                  {school.location ? ` · ${school.location}` : ""}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border p-5 surface transition-colors hover:border-accent/40"
            >
              <div>
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                  Currently
                </p>
                <p className="mt-1.5 font-medium">Open to new opportunities</p>
              </div>
              <span className="relative flex size-2.5" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
