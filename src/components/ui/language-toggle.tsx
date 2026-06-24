"use client";

import { useI18n } from "@/lib/i18n/context";
import { localeLabels, locales, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-border p-0.5 bg-muted/30",
        className
      )}
      role="group"
      aria-label="Selecionar idioma"
    >
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLocale(loc)}
          className={cn(
            "px-2 py-1 text-xs font-semibold rounded-md transition-colors min-w-[2rem]",
            locale === loc
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={locale === loc}
        >
          {localeLabels[loc as Locale]}
        </button>
      ))}
    </div>
  );
}
