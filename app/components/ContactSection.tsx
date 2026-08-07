"use client";

import { useState } from "react";
import {
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
  Spinner,
  WarningCircle,
  type Icon,
} from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const contactInfo: {
  key: "email" | "linkedin" | "github";
  value: string;
  href: string;
  Icon: Icon;
}[] = [
  {
    key: "email",
    value: "sosial.aridutomo@gmail.com",
    href: "mailto:sosial.aridutomo@gmail.com",
    Icon: EnvelopeSimple,
  },
  {
    key: "linkedin",
    value: "Ari Dwi Utomo",
    href: "https://www.linkedin.com/in/ari-dwi-utomo-a3358b353",
    Icon: LinkedinLogo,
  },
  {
    key: "github",
    value: "GitHub",
    href: "https://github.com",
    Icon: GithubLogo,
  },
];

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: "Portfolio Contact Form",
          subject: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const inputClass =
    "w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelClass = "mb-2 block text-sm font-medium text-muted";

  return (
    <section
      id="contact"
      className="relative border-t border-line px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.contact.heading}{" "}
              <span className="text-accent">{t.contact.headingHighlight}</span>
            </h2>
            <p className="mt-3 text-muted">{t.contact.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-base font-semibold text-foreground">
                {t.contact.infoTitle}
              </h3>
              <div className="mt-5 space-y-3">
                {contactInfo.map(({ key, value, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 rounded-lg border border-transparent p-3 transition-colors hover:border-line hover:bg-surface-2"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line text-muted">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-faint">
                        {t.contact[key]}
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {t.contact.formTitle}
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.namePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="subject" className={labelClass}>
                  {t.contact.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.subjectPlaceholder}
                  className={inputClass}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className={labelClass}>
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-strong-hover disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Spinner size={16} className="animate-spin" />
                ) : (
                  <PaperPlaneTilt size={16} />
                )}
                {status === "loading" ? t.contact.sending : t.contact.send}
              </button>

              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 rounded-lg border border-success/30 bg-success-soft px-4 py-3 text-sm text-success">
                  <CheckCircle size={18} weight="fill" className="shrink-0" />
                  {t.contact.success}
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 flex items-center gap-2 rounded-lg border border-danger/30 bg-danger-soft px-4 py-3 text-sm text-danger">
                  <WarningCircle size={18} weight="fill" className="shrink-0" />
                  {t.contact.error}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
