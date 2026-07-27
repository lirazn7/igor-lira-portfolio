"use client";

import { useRef, useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/lib/i18n/context";
import { getProjectCover } from "@/config/project-covers";
import { GitHubIcon } from "@/components/ui/icons";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header > *", {
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        rotateX: 15,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="projects-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.projects.items.map((project, index) => {
            const cover = getProjectCover(project.github);

            return (
            <div
              key={index}
              className="project-card group"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                {/* Cover image / gradient */}
                <div
                  className={cn(
                    "h-48 relative overflow-hidden",
                    !cover && "bg-gradient-to-br flex items-center justify-center",
                    !cover && project.gradient
                  )}
                >
                  {cover ? (
                    <>
                      <img
                        src={cover}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <span className="text-6xl font-black text-white/20 select-none relative z-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons — always visible and clickable */}
                  <div className="flex gap-2 pt-2 border-t border-border/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onMouseMove={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-colors"
                      aria-label="Ver no GitHub"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        onMouseMove={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                        aria-label="Ver demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
