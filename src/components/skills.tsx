"use client";

import { motion } from "motion/react";
import type { SkillGroupVM } from "@/lib/view";
import { TechIcon } from "./icons";
import { StaggerGroup, staggerChild } from "./reveal";
import { Section, SectionHeading } from "./section";

export function Skills({ groups }: { groups: SkillGroupVM[] }) {
  return (
    <Section id="skills" className="bg-[var(--bg-soft)]">
      <SectionHeading
        eyebrow="Skills"
        title="The tools I reach for"
        lead="Grouped by where they sit in the stack, not by how impressive the list looks."
      />

      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <motion.article
            key={group.title}
            variants={staggerChild}
            className="group relative overflow-hidden rounded-2xl border p-6 surface transition-colors hover:border-accent/40"
          >
            <div
              className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{group.blurb}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-2 rounded-lg border bg-[var(--bg)] px-2.5 py-1.5 text-[0.8125rem] font-medium"
                >
                  <TechIcon name={item.icon} className="size-4 text-accent" />
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </StaggerGroup>
    </Section>
  );
}
