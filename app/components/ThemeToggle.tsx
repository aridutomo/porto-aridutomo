"use client";

import { Moon, Sun } from "@phosphor-icons/react";

/**
 * Toggles the `dark` class on <html> and persists the choice. The icon
 * shown is driven by CSS (.theme-light-only / .theme-dark-only in
 * globals.css) based on that class, so this component holds no state and
 * has no effect: no hydration mismatch, no setState-in-effect.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore storage failures */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
    >
      <Sun className="theme-light-only" size={18} weight="regular" />
      <Moon className="theme-dark-only" size={18} weight="regular" />
    </button>
  );
}
