"use client";

import { Moon, Sun } from "./icons";

/**
 * Theme state lives on <html class="dark"> rather than in React, so the button
 * matches whatever the pre-paint script in the layout decided — no flash, no
 * hydration mismatch. The icons and label swap purely via the `dark:` variant.
 */
export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-10 place-items-center rounded-full border transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>

      <Moon
        aria-hidden
        className="col-start-1 row-start-1 size-[18px] transition-all duration-300 dark:scale-0 dark:opacity-0"
      />
      <Sun
        aria-hidden
        className="col-start-1 row-start-1 size-[18px] scale-0 opacity-0 transition-all duration-300 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
