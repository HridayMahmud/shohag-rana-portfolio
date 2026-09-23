"use client";

import { Moon, Sun } from "./icons";

/**
 * Stateless by design: the icons are swapped with CSS from the `dark` class on
 * <html>, so there is nothing to hydrate and no theme flash.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    root.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage can be unavailable — the toggle still works for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle between light and dark theme"
      title="Toggle theme"
      className={`group grid size-10 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-line-strong hover:text-ink ${className}`}
    >
      <span className="relative block size-[18px]">
        <Moon className="absolute inset-0 size-[18px] rotate-0 opacity-100 transition-all duration-500 dark:-rotate-90 dark:opacity-0" />
        <Sun className="absolute inset-0 size-[18px] rotate-90 opacity-0 transition-all duration-500 dark:rotate-0 dark:opacity-100" />
      </span>
    </button>
  );
}
