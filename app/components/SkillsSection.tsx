"use client";

import {
  Database,
  DeviceMobileCamera,
  GearSix,
  HardDrives,
  Monitor,
  type Icon,
} from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const skillCategories: {
  key: "backend" | "frontend" | "mobile" | "database" | "tools";
  Icon: Icon;
  skills: string[];
}[] = [
  { key: "backend", Icon: HardDrives, skills: ["ASP.NET Core", "Golang", "C#", "REST API"] },
  { key: "frontend", Icon: Monitor, skills: ["Next.js", "Tailwind CSS", "Bootstrap", "JavaScript"] },
  { key: "mobile", Icon: DeviceMobileCamera, skills: ["Flutter", "Dart", "Android / iOS", "Firebase"] },
  { key: "database", Icon: Database, skills: ["SQL Server", "MySQL"] },
  { key: "tools", Icon: GearSix, skills: ["Git & GitHub", "Docker", "CI/CD"] },
];

const techStack = [
  "ASP.NET",
  "Golang",
  "Flutter",
  "Next.js",
  "Bootstrap",
  "Tailwind",
  "SQL Server",
  "MySQL",
  "JavaScript",
];

export default function SkillsSection() {
  const { t } = useLanguage();

  const getCategoryTitle = (key: string) =>
    t.skills.categories[key as keyof typeof t.skills.categories] || key;

  return (
    <section
      id="skills"
      className="relative border-t border-line px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.skills.heading}{" "}
              <span className="text-accent">{t.skills.headingHighlight}</span>
            </h2>
            <p className="mt-3 text-muted">{t.skills.subtitle}</p>
          </div>
        </Reveal>

        {/* Tech stack marquee-free wrap */}
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.key} delay={0.05 + index * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">
                    <category.Icon size={20} />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {getCategoryTitle(category.key)}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
