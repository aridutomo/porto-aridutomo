"use client";

import Link from "next/link";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

const socials = [
  {
    href: "https://github.com",
    label: "GitHub",
    Icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/ari-dwi-utomo-a3358b353",
    label: "LinkedIn",
    Icon: LinkedinLogo,
  },
  {
    href: "mailto:sosial.aridutomo@gmail.com",
    label: "Email",
    Icon: EnvelopeSimple,
  },
];

const footerNav = [
  { href: "/#home", key: "home" },
  { href: "/#about", key: "about" },
  { href: "/#skills", key: "skills" },
  { href: "/#projects", key: "projects" },
  { href: "/#contact", key: "contact" },
] as const;

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-strong text-xs font-bold text-accent-contrast">
              A
            </span>
            <span className="text-sm font-semibold text-foreground">
              Ari Dwi Utomo
            </span>
          </div>
          <p className="text-xs text-faint">
            © {currentYear} Ari Dwi Utomo.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
          {footerNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-foreground"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
