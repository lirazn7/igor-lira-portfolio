"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/lib/i18n/context";
import { GitHubIcon } from "@/components/ui/icons";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 30, duration: 0.8 })
        .from(".hero-greeting", { opacity: 0, y: 40, duration: 0.8 }, "-=0.5")
        .from(
          ".hero-name .char",
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.04,
            duration: 0.9,
          },
          "-=0.4"
        )
        .from(".hero-role", { opacity: 0, y: 30, duration: 0.7 }, "-=0.3")
        .from(".hero-tagline", { opacity: 0, y: 30, duration: 0.7 }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 30, stagger: 0.15, duration: 0.6 }, "-=0.3")
        .from(".hero-github", { opacity: 0, scale: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.2")
        .from(".hero-scroll", { opacity: 0, y: 20, duration: 0.6 }, "-=0.1");

      gsap.to(".hero-orb-1", {
        x: 60,
        y: -40,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-2", {
        x: -50,
        y: 50,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-orb-3", {
        scale: 1.3,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nameChars = t.developer.name.split("");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="hero-orb-1 absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="hero-orb-2 absolute bottom-20 right-[10%] w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="hero-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {siteConfig.developer.available && (
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {t.hero.available}
            </div>
          )}

          <p className="hero-greeting text-lg md:text-xl text-muted-foreground mb-2">
            {t.hero.greeting}
          </p>

          <h1
            className="hero-name text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 perspective-[1000px]"
            aria-label={t.developer.name}
          >
            {nameChars.map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="hero-role text-2xl md:text-3xl font-semibold text-primary mb-6">
            {t.developer.role}
          </p>

          <p className="hero-tagline text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t.developer.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }), "hero-cta px-8 font-semibold h-11")}
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "hero-cta px-8 font-semibold h-11"
              )}
            >
              {t.hero.ctaSecondary}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hero-github inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-background hover:bg-muted transition-colors group"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="hero-scroll mt-16">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">{t.hero.scroll}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
