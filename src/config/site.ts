import type { TechLogoId } from "@/components/ui/tech-logos";

export type TechItem = {
  name: string;
  logo?: TechLogoId;
};

export const siteLinks = {
  github: "https://github.com/lirazn7",
  linkedin: "https://www.linkedin.com/in/igorrliraa/",
  email: "mailto:nathanlira15@gmail.com",
  contactEmail: "nathanlira15@gmail.com",
};

export const siteConfig = {
  name: "Igor Lira",
  developer: {
    location: "São Paulo - Zona Sul",
    available: true,
  },
  mainNav: [
    { key: "about" as const, href: "#about" },
    { key: "experience" as const, href: "#experience" },
    { key: "projects" as const, href: "#projects" },
    { key: "skills" as const, href: "#skills" },
    { key: "contact" as const, href: "#contact" },
  ],
  links: siteLinks,
  techStack: [
    { name: "Java", logo: "java" },
    { name: "Spring" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "React Native" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "AWS", logo: "aws" },
    { name: "Supabase", logo: "supabase" },
    { name: "Firebase", logo: "firebase" },
    { name: "Git" },
  ] as TechItem[],
};
