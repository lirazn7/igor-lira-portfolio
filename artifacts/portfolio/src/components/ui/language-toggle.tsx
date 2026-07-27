"use client";

import { useI18n } from "@/lib/i18n/context";
import { localeLabels, locales, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

function FlagIcon({ locale }: { locale: Locale }) {
  if (locale === "pt") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-3 rounded-[2px] object-cover shrink-0 border border-border/20" aria-hidden="true">
        <rect width="24" height="24" fill="#009C3B" />
        <polygon points="12,3 21,12 12,21 3,12" fill="#FFDF00" />
        <circle cx="12" cy="12" r="5" fill="#002776" />
        <path d="M7.5 13.5c1.2-1.5 2.8-2.2 4.5-2.2 1.7 0 3.3.7 4.5 2.2" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
      </svg>
    );
  }
  if (locale === "en") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-3 rounded-[2px] object-cover shrink-0 border border-border/20" aria-hidden="true">
        <rect width="24" height="24" fill="#B22234" />
        <path d="M0 1.8h24M0 5.4h24M0 9h24M0 12.6h24M0 16.2h24M0 19.8h24" stroke="#FFFFFF" strokeWidth="1.8" />
        <rect width="12" height="11" fill="#3C3B6E" />
        <circle cx="3" cy="3" r="0.5" fill="#FFFFFF" />
        <circle cx="6" cy="3" r="0.5" fill="#FFFFFF" />
        <circle cx="9" cy="3" r="0.5" fill="#FFFFFF" />
        <circle cx="4.5" cy="5.5" r="0.5" fill="#FFFFFF" />
        <circle cx="7.5" cy="5.5" r="0.5" fill="#FFFFFF" />
        <circle cx="3" cy="8" r="0.5" fill="#FFFFFF" />
        <circle cx="6" cy="8" r="0.5" fill="#FFFFFF" />
        <circle cx="9" cy="8" r="0.5" fill="#FFFFFF" />
      </svg>
    );
  }
  if (locale === "es") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-3 rounded-[2px] object-cover shrink-0 border border-border/20" aria-hidden="true">
        <rect width="24" height="24" fill="#C60B1E" />
        <rect y="6" width="24" height="12" fill="#FBE106" />
        <circle cx="8" cy="12" r="2.5" fill="#C60B1E" />
      </svg>
    );
  }
  return null;
}

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
            "px-2 py-1 text-xs font-semibold rounded-md transition-colors min-w-[2rem] flex items-center justify-center gap-1.5",
            locale === loc
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={locale === loc}
        >
          <FlagIcon locale={loc as Locale} />
          {localeLabels[loc as Locale]}
        </button>
      ))}
    </div>
  );
}
