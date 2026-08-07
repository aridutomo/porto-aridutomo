"use client";

import { useEffect, useState } from "react";
import { ArrowRight, List, X } from "@phosphor-icons/react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 12);
  });

  // Track the active section via IntersectionObserver (no window scroll listener).
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const getLabel = (key: string) =>
    t.nav[key as keyof typeof t.nav] || key;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-strong text-sm font-bold text-accent-contrast">
              A
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Ari
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {getLabel(link.key)}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle />
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent-strong px-3.5 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong-hover"
            >
              {t.nav.letsTalk}
              <ArrowRight size={15} weight="bold" />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-line text-foreground"
            >
              {isMobileMenuOpen ? <X size={18} /> : <List size={18} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-line bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm ${
                    isActive
                      ? "bg-surface-2 text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {getLabel(link.key)}
                </a>
              );
            })}
            <div className="mt-1 flex items-center justify-between px-1 pt-1">
              <LanguageToggle />
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-accent-strong px-3.5 py-2 text-sm font-medium text-accent-contrast"
              >
                {t.nav.letsTalk}
                <ArrowRight size={15} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
