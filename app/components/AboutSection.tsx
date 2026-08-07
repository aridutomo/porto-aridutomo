"use client";

import {
  Briefcase,
  CalendarBlank,
  DownloadSimple,
  MapPin,
} from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const stats = [
  { value: "5+", key: "experience" },
  { value: "10+", key: "projects" },
];

const meta = [
  { key: "dob", Icon: CalendarBlank },
  { key: "location", Icon: MapPin },
  { key: "position", Icon: Briefcase },
] as const;

export default function AboutSection() {
  const { t } = useLanguage();

  const getStatLabel = (key: string) =>
    t.about.stats[key as keyof typeof t.about.stats] || key;

  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.about.heading}{" "}
              <span className="text-accent">{t.about.headingHighlight}</span>
            </h2>
            <p className="mt-3 text-muted">{t.about.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Identity panel */}
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent-strong text-xl font-bold text-accent-contrast">
                  A
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Ari Dwi Utomo
                  </h3>
                  <p className="text-sm text-accent">
                    {t.about.positionValue}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-line" />

              <div className="space-y-4">
                {meta.map(({ key, Icon }) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-faint">
                        {t.about[key as "dob" | "location" | "position"]}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {t.about[
                          `${key}Value` as "dobValue" | "locationValue"
                        ]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-6 h-px bg-line" />

              {/* Resume not published yet; kept intentionally disabled. */}
              <a
                aria-disabled="true"
                title="Resume coming soon"
                className="pointer-events-none flex cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm font-medium text-faint opacity-70"
              >
                <DownloadSimple size={18} />
                {t.about.downloadResume}
              </a>
            </div>
          </Reveal>

          {/* Narrative + stats */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {t.about.experienceTitle}
                </h3>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>{t.about.desc1}</p>
                  <p>{t.about.desc2}</p>
                  <p>{t.about.desc3}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="rounded-2xl border border-line bg-surface p-6"
                  >
                    <p className="text-3xl font-semibold text-accent sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {getStatLabel(stat.key)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
