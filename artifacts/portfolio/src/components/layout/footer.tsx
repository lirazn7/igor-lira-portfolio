"use client";

import { siteConfig } from "@/config/site";
import { useI18n } from "@/lib/i18n/context";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";

const socialLinks = [
  { icon: GitHubIcon, href: siteConfig.links.github, label: "GitHub" },
  { icon: LinkedInIcon, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Mail, href: siteConfig.links.email, label: "Email" },
];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg mb-1">{t.developer.name}</p>
            <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
