"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/lib/types";
import { ArrowUpRight, Check, GitHub, TechIcon } from "./icons";
import { StaggerGroup, staggerChild } from "./reveal";
import { Section, SectionHeading } from "./section";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <Section id="work" className="ambient">
      <SectionHeading
        eyebrow="Selected work"
        title="Systems I've designed and built"
        lead="Agentic and retrieval systems alongside the products and interfaces around them. Client work is described without naming the client."
      />

      <StaggerGroup className="mt-16 flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </StaggerGroup>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Alternate which side the visual lands on so the column doesn't read as a list.
  const visualFirst = index % 2 === 0;

  return (
    <motion.article
      variants={staggerChild}
      className="group relative grid overflow-hidden rounded-3xl border surface lg:grid-cols-2"
    >
      <div
        className={`relative overflow-hidden bg-[var(--bg-soft)] lg:h-full ${
          visualFirst ? "" : "lg:order-2"
        }`}
      >
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={`${project.title} — screenshot`}
            width={1568}
            height={759}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="aspect-16/10 w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.035] lg:aspect-auto lg:h-full"
          />
        ) : (
          <ProjectGlyph project={project} index={index} />
        )}
        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5"
          aria-hidden
        />
      </div>

      <div className="flex flex-col justify-center gap-5 p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted uppercase">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-6 bg-[var(--line)]" aria-hidden />
          {project.subtitle}
          {project.year && (
            <>
              <span aria-hidden>·</span>
              {project.year}
            </>
          )}
        </div>

        <h3 className="font-display text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
          {project.title}
        </h3>

        <p className="leading-relaxed text-muted">
          {project.description || project.summary}
        </p>

        {project.highlights?.length > 0 && (
          <ul className="space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {project.tech?.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-accent/25 bg-accent/8 px-2.5 py-1 font-mono text-[11px] tracking-wide text-accent"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {(project.live_url || project.repo_url) && (
          <div className="mt-1 flex flex-wrap items-center gap-3">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
              >
                Live demo
                <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
            {project.repo_url && (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              >
                <GitHub className="size-4" />
                Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

/**
 * Stand-in for the client work that can't ship a screenshot. Builds a panel
 * from the project's own stack so it still says something, rather than
 * leaving a grey rectangle.
 */
function ProjectGlyph({ project, index }: { project: Project; index: number }) {
  const marks = project.tech.slice(0, 6);

  return (
    <div className="relative flex aspect-16/10 w-full items-center justify-center overflow-hidden lg:aspect-auto lg:h-full">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-10 -right-10 size-64 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-10 size-64 rounded-full bg-accent-2/12 blur-3xl"
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-6 p-10">
        <span className="font-mono text-[11px] tracking-[0.3em] text-muted uppercase">
          {String(index + 1).padStart(2, "0")} / {project.subtitle || "Case study"}
        </span>

        <ul className="flex flex-wrap justify-center gap-3">
          {marks.map((tech) => (
            <li
              key={tech}
              className="grid size-12 place-items-center rounded-xl border bg-[var(--bg)]/70 text-accent backdrop-blur-sm"
              title={tech}
            >
              <TechIcon name={iconSlug(tech)} className="size-5" />
              <span className="sr-only">{tech}</span>
            </li>
          ))}
        </ul>

        <p className="max-w-xs text-center text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
      </div>
    </div>
  );
}

/** Small local map so the glyph panel can show stack icons for tech tags. */
function iconSlug(tech: string) {
  const key = tech.trim().toLowerCase();
  const map: Record<string, string> = {
    react: "react",
    redux: "redux",
    "node.js": "node",
    express: "express",
    mongodb: "mongodb",
    javascript: "javascript",
    python: "python",
    fastapi: "fastapi",
    postgresql: "postgres",
    redis: "redis",
    docker: "docker",
    neo4j: "neo4j",
    milvus: "redis",
    langchain: "langchain",
    langgraph: "langchain",
    mcp: "langchain",
    "aws eks": "kubernetes",
    "aws bedrock": "aws",
    "aws lambda": "aws",
    jwt: "api",
    swagger: "api",
  };
  return map[key] ?? "api";
}
