"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { SiteVM, SocialVM } from "@/lib/view";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
} from "./icons";
import { StaggerGroup, staggerChild } from "./reveal";
import { Section, SectionHeading } from "./section";

const socialIcons = { github: GitHub, linkedin: LinkedIn, mail: Mail } as const;

export function Contact({ site, socials }: { site: SiteVM; socials: SocialVM[] }) {
  return (
    <Section id="contact" className="ambient bg-[var(--bg-soft)]">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        lead="Hiring, collaborating or just want to talk shop? My inbox is open — I reply to everything."
        align="center"
      />

      <StaggerGroup className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
        <motion.div variants={staggerChild} className="sm:col-span-2">
          <EmailCard email={site.email} />
        </motion.div>

        <motion.a
          variants={staggerChild}
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-4 rounded-2xl border p-5 surface transition-colors hover:border-accent/40"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">Résumé</p>
            <p className="mt-1.5 font-medium">Open the PDF</p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border text-muted transition-all group-hover:border-accent/40 group-hover:text-accent">
            <Download className="size-[18px]" />
          </span>
        </motion.a>

        <motion.div
          variants={staggerChild}
          className="flex items-center justify-between gap-4 rounded-2xl border p-5 surface"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              Location
            </p>
            <p className="mt-1.5 font-medium">{site.location}</p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border text-accent">
            <MapPin className="size-[18px]" />
          </span>
        </motion.div>

        <motion.div variants={staggerChild} className="sm:col-span-2">
          <ul className="grid gap-4 sm:grid-cols-2">
            {socials
              .filter((social) => social.icon !== "mail")
              .map(({ label, handle, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-2xl border p-5 surface transition-colors hover:border-accent/40"
                    >
                      <span className="flex min-w-0 items-center gap-3.5">
                        <Icon className="size-5 shrink-0 text-muted transition-colors group-hover:text-[var(--fg)]" />
                        <span className="min-w-0">
                          <span className="block font-medium">{label}</span>
                          <span className="block truncate text-sm text-muted">{handle}</span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                );
              })}
          </ul>
        </motion.div>
      </StaggerGroup>
    </Section>
  );
}

function EmailCard({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (insecure context or denied permission) — the mailto link still works.
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border p-7 surface sm:p-9">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-64 -translate-x-1/2 rounded-full bg-accent/12 blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-5 text-center">
        <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white">
          <Mail className="size-5" />
        </span>
        <div>
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">Email</p>
          <p className="mt-2 font-display text-xl font-medium break-all sm:text-2xl">{email}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
          >
            Send an email
            <ArrowUpRight className="size-3.5" />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy address"}
          </button>
        </div>
      </div>
    </div>
  );
}
