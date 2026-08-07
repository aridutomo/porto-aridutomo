"use client";

import Link from "next/link";
import { ArrowRight, CalendarBlank, Clock } from "@phosphor-icons/react";
import { getRecentPosts, type BlogPost } from "../lib/blog-data";
import Reveal from "./Reveal";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-faint">
        <span className="rounded-md border border-line px-2 py-0.5 text-muted">
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarBlank size={13} />
          {new Date(post.publishedAt).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={13} />
          {post.readingTime} min
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
        {post.excerpt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        Baca Selengkapnya
        <ArrowRight size={14} weight="bold" />
      </Link>
    </article>
  );
}

export default function BlogSection() {
  const recentPosts = getRecentPosts(3);

  return (
    <section
      id="blog"
      className="relative border-t border-line px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Sharing Knowledge
              </h2>
              <p className="mt-3 text-muted">
                Tutorial, tips &amp; tricks, dan pengalaman saya dalam dunia
                programming.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Lihat Semua Artikel
              <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.05}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
