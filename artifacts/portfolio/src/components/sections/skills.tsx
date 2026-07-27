"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/lib/i18n/context";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header > *", {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(1.4)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="skills-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.skills.title}</h2>
          <p className="text-muted-foreground text-lg">{t.skills.subtitle}</p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.skills.items.map((skill, index) => {
            const Icon =
              (Icons as unknown as Record<string, LucideIcon>)[skill.icon] ||
              Icons.HelpCircle;
            return (
              <Card
                key={index}
                className="skill-card border-none shadow-sm hover:shadow-lg transition-shadow h-full group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
