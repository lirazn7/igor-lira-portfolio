"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/lib/i18n/context";
import type { TimelineEntry } from "@/lib/i18n/translations";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function TimelineIcon({ type }: { type: TimelineEntry["type"] }) {
  const Icon = type === "work" ? Briefcase : GraduationCap;
  return (
    <div
      className={cn(
        "timeline-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-background",
        type === "work"
          ? "border-primary text-primary"
          : "border-muted-foreground/40 text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
    </div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-header > *", {
        scrollTrigger: {
          trigger: ".experience-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 80%",
        },
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 80%",
        },
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const workEntries = t.experience.timeline.filter((e) => e.type === "work");
  const educationEntries = t.experience.timeline.filter((e) => e.type === "education");

  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="experience-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.experience.title}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="experience-header text-xl font-bold mb-8">{t.experience.work}</h3>

          <div className="timeline-list relative mb-12">
            <div className="timeline-line absolute left-5 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {workEntries.map((entry, index) => (
                <div key={index} className="timeline-item relative flex gap-6 pl-0">
                  <TimelineIcon type={entry.type} />
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold">{entry.title}</h3>
                      {entry.current && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm mb-1">{entry.organization}</p>
                    <p className="text-xs text-muted-foreground mb-0.5">{entry.period}</p>
                    {entry.location && (
                      <p className="text-xs text-muted-foreground mb-2">{entry.location}</p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="experience-header text-xl font-bold mb-8">{t.experience.education}</h3>

          <div className="timeline-list relative">
            <div className="timeline-line absolute left-5 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {educationEntries.map((entry, index) => (
                <div key={index} className="timeline-item relative flex gap-6 pl-0">
                  <TimelineIcon type={entry.type} />
                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold">{entry.title}</h3>
                      {entry.current && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {t.experience.inProgress}
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-medium text-sm mb-1">{entry.organization}</p>
                    <p className="text-xs text-muted-foreground mb-2">{entry.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border bg-background hover:bg-muted transition-colors text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              {t.experience.linkedinFull}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
