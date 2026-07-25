import type { NavLink, SiteVM, SocialVM } from "@/lib/view";
import { GitHub, LinkedIn, Mail } from "./icons";

const socialIcons = { github: GitHub, linkedin: LinkedIn, mail: Mail } as const;

export function SiteFooter({
  site,
  initials,
  navLinks,
  socials,
}: {
  site: SiteVM;
  initials: string;
  navLinks: NavLink[];
  socials: SocialVM[];
}) {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-mono text-[13px] font-bold text-white">
              {initials}
            </span>
            {site.name}
          </a>
          <p className="mt-3 text-sm text-muted">
            {site.role} · {site.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-[var(--fg)]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon }) => {
            const Icon = socialIcons[icon];
            return (
              <li key={label}>
                <a
                  href={href}
                  target={icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border text-muted transition-all hover:-translate-y-0.5 hover:text-[var(--fg)]"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
