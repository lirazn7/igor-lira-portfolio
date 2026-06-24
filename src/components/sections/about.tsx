"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/lib/i18n/context";
import { TechLogo } from "@/components/ui/tech-logos";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.7)",
      });

      gsap.from(".about-tech", {
        scrollTrigger: {
          trigger: ".about-tech-list",
          start: "top 90%",
        },
        opacity: 0,
        scale: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="about-title text-3xl md:text-5xl font-bold mb-6">
              {t.about.title}
            </h2>
            <p className="about-text text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </div>

          <div>
            <div className="about-stats grid grid-cols-3 gap-4 mb-10">
              {t.about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="about-stat text-center p-4 rounded-xl border bg-card"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-muted-foreground mb-3">
              {t.about.technologies}
            </p>
            <div className="about-tech-list flex flex-wrap gap-2">
              {siteConfig.techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="about-tech inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-xl border bg-muted/50 hover:bg-muted transition-colors"
                >
                  {tech.logo && <TechLogo id={tech.logo} className="size-5 shrink-0" />}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
