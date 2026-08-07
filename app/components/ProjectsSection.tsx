"use client";

import { useState } from "react";
import { ArrowUpRight, Star } from "@phosphor-icons/react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

const projects = [
  { title: "Unicorn Indorent", descId: "Platform pembelian tiket bus online dengan aplikasi web dan mobile. Dilengkapi dashboard untuk monitoring seluruh operasional dan transaksi.", descEn: "Online bus ticket booking platform with web and mobile applications. Equipped with a dashboard for monitoring all operations and transactions.", url: "http://unicorn.indorent.co.id/", tags: ["ASP.NET", "Mobile App", "Dashboard", "Ticketing"], type: "Web & Mobile App", featured: true },
  { title: "Unicorn Crew", descId: "Aplikasi mobile Android untuk crew bus. Digunakan untuk monitoring perjalanan, melihat manifest penumpang, dan membuat trip report.", descEn: "Android mobile app for bus crew. Used for trip monitoring, viewing passenger manifest, and creating trip reports.", url: "#", tags: ["Flutter", "Android", "Trip Management"], type: "Mobile Application", featured: true },
  { title: "Unicorn Agent", descId: "Aplikasi untuk agent dalam melakukan pemesanan tiket bus secara online. Memudahkan agent mengelola booking dan transaksi pelanggan.", descEn: "Application for agents to book bus tickets online. Makes it easy for agents to manage bookings and customer transactions.", url: "#", tags: ["Flutter", "Android", "Booking"], type: "Mobile Application", featured: true },
  { title: "Indorent Website", descId: "Website korporat untuk PT CSM Corporatama (Indorent), perusahaan rental mobil terkemuka di Indonesia.", descEn: "Corporate website for PT CSM Corporatama (Indorent), a leading car rental company in Indonesia.", url: "https://www.indorent.co.id/", tags: ["Corporate", "Web Development", "SEO"], type: "Website", featured: true },
  { title: "Indopenske", descId: "Website korporat untuk Indo Penske Logistics, menampilkan solusi logistik dan supply chain mereka.", descEn: "Corporate website for Indo Penske Logistics, showcasing their logistics and supply chain solutions.", url: "https://indopenske.co.id/", tags: ["Corporate", "Logistics", "Web Development"], type: "Website", featured: false },
  { title: "SIP Express", descId: "Platform pelacakan pengiriman barang. Customer dapat melacak status dan posisi kiriman secara real-time menggunakan nomor resi.", descEn: "Shipment tracking platform. Customers can track package status and location in real-time using their tracking number.", url: "https://sipexpress.co.id/", tags: ["Tracking", "Logistics", "Web App"], type: "Web Application", featured: true },
  { title: "SIP Express Plus", descId: "Solusi pengiriman barang B2B yang mudah, cepat, dan aman. Memberikan kualitas pelayanan terbaik agar barang kiriman sampai tujuan dengan aman dan tepat waktu.", descEn: "B2B delivery solution that is easy, fast, and secure. Providing the best quality service to ensure packages arrive safely and on time.", url: "#", tags: ["Logistics", "B2B", "Delivery"], type: "Web Application" },
  { title: "MRBS Indorent", descId: "Meeting Room Booking System untuk manajemen ruang kerja dan penjadwalan yang efisien.", descEn: "Meeting Room Booking System for efficient workspace management and scheduling.", url: "#", tags: ["Booking System", "Enterprise", "Maintenance"], type: "Internal Tool", featured: false },
  { title: "VOC Indorent", descId: "Platform Voice of Customer untuk mengumpulkan dan mengelola feedback serta survei kepuasan pelanggan.", descEn: "Voice of Customer platform for collecting and managing customer feedback and satisfaction surveys.", url: "#", tags: ["Customer Feedback", "Analytics", "Maintenance"], type: "Web Application", featured: false },
  { title: "Recruitment Indorent", descId: "Portal rekrutmen HR untuk posting lowongan, aplikasi, dan sistem manajemen kandidat.", descEn: "HR recruitment portal for job postings, applications, and candidate management system.", url: "https://recruitment.indorent.co.id/", tags: ["HR Tech", "Recruitment", "Portal"], type: "Web Application", featured: false },
  { title: "Elite Car Rental", descId: "Aplikasi ride-hailing lengkap mirip Grab/Gojek. User bisa booking ride, cari driver, dan bayar melalui Midtrans.", descEn: "Full-featured ride-hailing application similar to Grab/Gojek. Users can book rides, find drivers, and pay through Midtrans.", url: "#", tags: ["Mobile App", "Ride-hailing", "Midtrans", "Maps"], type: "Web & Mobile Application", featured: false, hasNote: true },
];

const initials = (title: string) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function ProjectsSection() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filters = [
    { key: "all", label: t.projects.filters.all },
    { key: "featured", label: t.projects.filters.featured },
    { key: "web", label: t.projects.filters.web },
    { key: "mobile", label: t.projects.filters.mobile },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "web")
      return (
        project.type.toLowerCase().includes("web") ||
        project.type.toLowerCase().includes("website")
      );
    if (filter === "mobile") return project.type.toLowerCase().includes("mobile");
    return true;
  });

  return (
    <section
      id="projects"
      className="relative border-t border-line px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.projects.heading}{" "}
                <span className="text-accent">
                  {t.projects.headingHighlight}
                </span>
              </h2>
              <p className="mt-3 text-muted">{t.projects.subtitle}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={`cursor-pointer rounded-lg border px-3.5 py-1.5 text-sm transition-colors ${
                  filter === f.key
                    ? "border-line-strong bg-surface text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
              <Reveal key={project.title} delay={Math.min(index * 0.05, 0.3)}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-colors hover:border-line-strong ${
                    project.featured ? "border-accent/30" : "border-line"
                  }`}
                >
                  {/* Branded monogram tile (single accent, locked) */}
                  <div className="relative grid h-32 place-items-center border-b border-line bg-accent-soft">
                    <span className="font-mono text-3xl font-bold text-accent">
                      {initials(project.title)}
                    </span>
                    <span className="absolute left-3 top-3 rounded-md border border-line bg-surface/80 px-2 py-0.5 text-[11px] text-muted backdrop-blur">
                      {project.type}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    {project.featured && (
                      <span className="mb-2 inline-flex items-center gap-1 text-xs font-medium text-accent">
                        <Star size={12} weight="fill" />
                        {t.projects.featured}
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
                      {locale === "id" ? project.descId : project.descEn}
                    </p>
                    {project.hasNote && (
                      <p className="mt-2 text-xs text-faint">
                        * {t.projects.projectNote}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="rounded-md border border-line px-2 py-0.5 text-[11px] text-faint">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 border-t border-line pt-4">
                      {project.url !== "#" ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                        >
                          {t.projects.visit}
                          <ArrowUpRight size={15} weight="bold" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-faint">
                          {t.projects.private}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
