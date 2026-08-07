"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Mobile Developer",
  "Frontend Developer",
];

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

export default function HeroSection() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <section
      id="home"
      className="relative flex min-h-[90dvh] items-center overflow-hidden px-4 pb-20 pt-24 sm:px-6"
    >
      {/* Soft accent backdrop, motivated focal layer (not a neon glow) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-accent-soft blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl lg:text-6xl">
              <span className="text-muted">{t.hero.greeting}</span>{" "}
              <span className="text-foreground">Ari Dwi Utomo</span>
            </h1>

            <div className="mt-4 h-7 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={reduce ? false : { y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? undefined : { y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-mono text-base text-accent sm:text-lg"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong-hover"
              >
                {t.hero.viewWork}
                <ArrowRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                <EnvelopeSimple size={16} />
                {t.hero.contactMe}
              </a>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <span className="text-sm text-faint">{t.hero.findMe}</span>
              <div className="flex items-center gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-foreground"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-soft blur-2xl"
            />
            {/* Monogram avatar — restored to the previous design (initial "A"
                inside concentric rings with floating stack badges) instead of
                the random placeholder photo. */}
            <div className="relative mx-auto aspect-square w-72 sm:w-80">
              {/* concentric rings */}
              <div
                aria-hidden
                className="absolute inset-0 animate-pulse rounded-full border border-accent/20"
              />
              <div
                aria-hidden
                className="absolute inset-4 rounded-full border border-line"
              />
              {/* core disc with the initial */}
              <div className="absolute inset-8 flex animate-float items-center justify-center rounded-full bg-accent-soft">
                <div className="flex h-full w-full items-center justify-center rounded-full border border-line bg-surface">
                  <span className="bg-linear-to-br from-accent to-accent-hover bg-clip-text text-7xl font-bold text-transparent sm:text-8xl">
                    A
                  </span>
                </div>
              </div>
              {/* floating stack badges */}
              <span
                className="absolute right-0 top-1 animate-float rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-accent shadow-sm"
                style={{ animationDelay: "0.2s" }}
              >
                .NET
              </span>
              <span
                className="absolute bottom-12 left-0 animate-float rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-accent shadow-sm"
                style={{ animationDelay: "0.9s" }}
              >
                Go
              </span>
              <span
                className="absolute right-0 top-[44%] animate-float rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-accent shadow-sm"
                style={{ animationDelay: "1.5s" }}
              >
                Flutter
              </span>
              <span
                className="absolute bottom-1 right-10 animate-float rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-medium text-accent shadow-sm"
                style={{ animationDelay: "2.1s" }}
              >
                Next.js
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
