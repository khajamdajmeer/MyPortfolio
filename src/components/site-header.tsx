"use client";

import { useEffect, useState } from "react";
import type { NavLink } from "@/lib/view";
import { ArrowUpRight, Close, Menu } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({
  name,
  initials,
  navLinks,
  resumeHref,
}: {
  name: string;
  initials: string;
  navLinks: NavLink[];
  resumeHref: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section owns the upper third of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navLinks]);

  // Lock scrolling behind the mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b bg-[var(--bg)]/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 sm:h-18">
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-semibold tracking-tight"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-mono text-[13px] font-bold text-white">
              {initials}
            </span>
            <span className="hidden sm:inline">{name}</span>
          </a>

          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border px-1.5 py-1.5 surface">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={active === href ? "true" : undefined}
                    className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors ${
                      active === href
                        ? "bg-accent/12 text-accent"
                        : "text-muted hover:text-[var(--fg)]"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-[var(--fg)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Résumé
              <ArrowUpRight className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border md:hidden"
            >
              {open ? <Close className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>
      </div>

      {/*
        Mobile sheet. Animating grid-template-rows from 0fr to 1fr expands to the
        content's exact height, so adding a nav link can never clip it the way a
        fixed max-height would.
      */}
      <div
        className={`grid border-b bg-[var(--bg)]/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Sections" className="mx-auto max-w-6xl px-6 py-4">
            <ul className="flex flex-col">
              {navLinks.map(({ label, href }) => (
                <li key={href} className="border-b last:border-0">
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-lg"
                  >
                    {label}
                    <ArrowUpRight className="size-4 text-muted" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[var(--fg)] px-4 py-3 font-medium text-[var(--bg)]"
            >
              View résumé
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
