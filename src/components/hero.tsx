import Image from "next/image";
import type { CSSProperties } from "react";
import type { SiteVM, SocialVM } from "@/lib/view";
import {
  ArrowDown,
  ArrowUpRight,
  GitHub,
  LinkedIn,
  Mail,
  MapPin,
  TechIcon,
} from "./icons";

const socialIcons = { github: GitHub, linkedin: LinkedIn, mail: Mail } as const;

/** Stagger helper — feeds the `rise-in` utility its delay. */
const delay = (seconds: number) => ({ "--rise-delay": `${seconds}s` }) as CSSProperties;

type Fact = { label: string; value: string };
type MarqueeItem = { label: string; icon: string };

export function Hero({
  site,
  socials,
  facts,
  marquee,
}: {
  site: SiteVM;
  socials: SocialVM[];
  facts: Fact[];
  marquee: MarqueeItem[];
}) {
  // Break the headline at "&" when there is one, so each discipline gets its
  // own line; otherwise split after the first two words. The tail carries the
  // gradient either way.
  const words = site.role.split(" ");
  const ampersand = words.findIndex((word) => word === "&");
  const splitAt = ampersand > 0 ? ampersand : Math.min(2, words.length - 1);
  const lead = words.slice(0, splitAt).join(" ");
  const rest = words.slice(splitAt).join(" ");

  return (
    <section id="top" className="ambient relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p
              style={delay(0.05)}
              className="rise-in inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs surface"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Open to senior AI and full stack roles
            </p>

            <h1
              style={delay(0.12)}
              className="rise-in mt-7 font-display text-[clamp(2.6rem,7.2vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance"
            >
              {lead}
              <br />
              <span className="gradient-text">{rest}</span>
            </h1>

            <p
              style={delay(0.2)}
              className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {site.tagline}
            </p>

            <p
              style={delay(0.26)}
              className="rise-in mt-6 flex items-center gap-2 text-sm text-muted"
            >
              <MapPin className="size-4 text-accent" />
              {site.location}
            </p>

            <div style={delay(0.33)} className="rise-in mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--fg)] px-6 py-3 font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full border px-6 py-3 font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <ul className="ml-1 flex items-center gap-1.5">
                {socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={icon === "mail" ? undefined : "_blank"}
                        rel="noreferrer"
                        aria-label={label}
                        className="grid size-11 place-items-center rounded-full border text-muted transition-all hover:-translate-y-0.5 hover:text-[var(--fg)]"
                      >
                        <Icon className="size-[18px]" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div style={delay(0.18)} className="rise-in relative mx-auto w-full max-w-sm lg:max-w-none">
            <ProfileCard site={site} facts={facts} />
          </div>
        </div>
      </div>

      {marquee.length > 0 && <TechMarquee items={marquee} />}
    </section>
  );
}

function ProfileCard({ site, facts }: { site: SiteVM; facts: Fact[] }) {
  return (
    <div className="relative animate-float">
      <div
        className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-accent/25 to-accent-2/25 blur-2xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border p-7 surface">
        <div
          className="pointer-events-none absolute -top-20 -right-16 size-52 rounded-full bg-accent/15 blur-3xl"
          aria-hidden
        />

        <div className="relative flex items-center gap-4">
          <span className="relative shrink-0 rounded-2xl bg-gradient-to-br from-accent to-accent-2 p-[2px]">
            <Image
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              width={400}
              height={400}
              priority
              className="size-[88px] rounded-[14px] object-cover"
            />
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg leading-tight font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.role}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted">
              <MapPin className="size-3.5 text-accent" />
              Hyderabad, IN
            </p>
          </div>
        </div>

        <dl className="relative mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-[var(--line)]">
          {facts.map(({ label, value }) => (
            <div key={label} className="bg-[var(--bg)] px-4 py-3.5">
              <dt className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
                {label}
              </dt>
              <dd className="mt-1 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-6 rounded-2xl border bg-[var(--bg)] p-4 font-mono text-[12px] leading-relaxed">
          <div className="mb-3 flex gap-1.5" aria-hidden>
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <pre className="overflow-x-auto">
            <code>
              <span className="text-muted">agent</span> = <span className="text-accent">Engineer</span>(
              {"\n"}  builds=<span className="text-emerald-500">&apos;RAG + agents&apos;</span>,
              {"\n"}  ships=<span className="text-emerald-500">&apos;FastAPI + React&apos;</span>,
              {"\n"}  open_to_work=<span className="text-emerald-500">True</span>,
              {"\n"})
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function TechMarquee({ items }: { items: MarqueeItem[] }) {
  // Duplicated once so the -50% keyframe loops seamlessly.
  const doubled = [...items, ...items];

  return (
    <div className="relative mt-20 border-y py-6">
      <p className="mb-5 text-center font-mono text-xs tracking-[0.2em] text-muted uppercase">
        Tech stack
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-14 pr-14">
          {doubled.map(({ icon, label }, index) => (
            <li
              key={`${label}-${index}`}
              className="flex shrink-0 items-center gap-2.5 text-muted"
              aria-hidden={index >= items.length}
            >
              <TechIcon name={icon} className="size-7" />
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
