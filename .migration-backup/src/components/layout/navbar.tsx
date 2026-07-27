"use client";

import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/lib/i18n/context";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        opacity: 0,
        y: -20,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const navLabels: Record<(typeof siteConfig.mainNav)[number]["key"], string> = {
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    skills: t.nav.skills,
    contact: t.nav.contact,
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between gap-4">
        <div className="flex gap-4 md:gap-10 min-w-0">
          <Link href="/" className="nav-item flex items-center space-x-2 shrink-0">
            <span className="inline-block font-bold text-xl">
              {t.developer.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </span>
          </Link>
          <nav className="hidden lg:flex gap-6">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {navLabels[item.key]}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <LanguageToggle className="nav-item" />
          <ThemeToggle className="nav-item" />
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="nav-item hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "nav-item hidden md:inline-flex"
            )}
          >
            {t.nav.contactCta}
          </a>
        </div>
      </div>
    </header>
  );
}
