"use client";

import { motion } from "motion/react";
import type { Experience as ExperienceRow } from "@/lib/types";
import { StaggerGroup, staggerChild } from "./reveal";
import { Section, SectionHeading } from "./section";

export function Experience({ roles }: { roles: ExperienceRow[] }) {
  return (
    <Section id="experience" className="ambient">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've been building"
        lead="Employer names are kept private — what matters is the work and the systems behind it."
      />

      <StaggerGroup className="relative mt-14">
        {/* the spine the markers sit on */}
        <span
          className="absolute top-2 bottom-2 left-[7px] w-px bg-[var(--line)] sm:left-[9px]"
          aria-hidden
        />

        <ol className="space-y-8">
          {roles.map((role) => (
            <motion.li key={role.id} variants={staggerChild} className="relative pl-9 sm:pl-12">
              <span
                className="absolute top-6 left-0 grid size-[15px] place-items-center rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-accent to-accent-2 sm:size-[19px]"
                aria-hidden
              />

              <article className="rounded-2xl border p-6 surface transition-colors hover:border-accent/40 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-[0.14em] text-muted uppercase">
                  <span className="text-accent">{role.period}</span>
                  {role.location && (
                    <>
                      <span aria-hidden>·</span>
                      <span>{role.location}</span>
                    </>
                  )}
                </div>

                <h3 className="mt-3 font-display text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
                  {role.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted">{role.company}</p>

                {role.description && (
                  <p className="mt-4 leading-relaxed text-muted">{role.description}</p>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </StaggerGroup>
    </Section>
  );
}
