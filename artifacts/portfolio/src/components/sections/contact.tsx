"use client";

import { useRef, useLayoutEffect, useState, type FormEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type FormStatus = "idle" | "loading" | "success" | "error" | "errorConfig";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left > *", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: -60,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-field", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".contact-social", {
        scrollTrigger: {
          trigger: ".contact-socials",
          start: "top 90%",
        },
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "back.out(2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { icon: GitHubIcon, href: siteConfig.links.github, label: "GitHub" },
    { icon: LinkedInIcon, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: Mail, href: siteConfig.links.email, label: "Email" },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, honeypot }),
      });

      await response.json();

      if (response.status === 503) {
        setStatus("errorConfig");
        return;
      }

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setHoneypot("");
    } catch {
      setStatus("error");
    }
  }

  const statusMessage =
    status === "success"
      ? t.contact.success
      : status === "errorConfig"
        ? t.contact.errorConfig
        : status === "error"
          ? t.contact.error
          : null;

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
          <div className="contact-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg mb-8">{t.contact.description}</p>

            <p className="text-sm text-muted-foreground mb-4">{t.contact.connect}</p>
            <div className="contact-socials flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="contact-social inline-flex items-center justify-center w-12 h-12 rounded-xl border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              {t.contact.emailDirect}{" "}
              <a
                href={siteConfig.links.email}
                className="text-primary font-medium hover:underline"
              >
                {siteConfig.links.contactEmail}
              </a>
            </p>
          </div>

          <form className="contact-form grid gap-4" onSubmit={handleSubmit}>
            <div className="contact-field grid gap-2">
              <Label htmlFor="name">{t.contact.name}</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                required
                minLength={2}
                maxLength={100}
                disabled={status === "loading"}
              />
            </div>
            <div className="contact-field grid gap-2">
              <Label htmlFor="email">{t.contact.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.emailPlaceholder}
                required
                maxLength={254}
                disabled={status === "loading"}
              />
            </div>
            <div className="contact-field grid gap-2">
              <Label htmlFor="message">{t.contact.message}</Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                required
                minLength={10}
                maxLength={5000}
                disabled={status === "loading"}
              />
            </div>

            {/* Honeypot anti-spam — invisível para usuários */}
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {statusMessage && (
              <div
                className={cn(
                  "contact-field flex items-start gap-2 rounded-lg border p-3 text-sm",
                  status === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                    : "border-destructive/30 bg-destructive/10 text-destructive"
                )}
                role="alert"
              >
                {status === "success" ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              className="contact-field w-full h-11 font-semibold gap-2"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {status === "loading" ? t.contact.submitting : t.contact.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
