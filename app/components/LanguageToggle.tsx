"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1 rounded-lg border border-line px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-surface-2 cursor-pointer"
    >
      <span className={locale === "id" ? "text-foreground" : "text-faint"}>
        ID
      </span>
      <span className="text-faint">/</span>
      <span className={locale === "en" ? "text-foreground" : "text-faint"}>
        EN
      </span>
    </button>
  );
}
