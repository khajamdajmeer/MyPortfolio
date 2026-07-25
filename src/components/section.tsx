import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {!centered && <span className="h-px w-8 bg-accent" aria-hidden />}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="font-display text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
