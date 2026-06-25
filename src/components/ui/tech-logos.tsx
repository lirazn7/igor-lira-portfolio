import { cn } from "@/lib/utils";

// 1. Identificadores das tecnologias que estás a usar
export type TechLogoId =
  | "aws"
  | "java"
  | "supabase"
  | "firebase"
  | "spring"
  | "python"
  | "javascript"
  | "react"
  | "html"
  | "css"
  | "git";

// 2. Mapeamento direto para os URLs da CDN do Devicon (Cores originais e oficiais)
const cdnUrls: Record<TechLogoId, string> = {
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
};

// 3. Componente que desenha a imagem
export function TechLogo({ id, className }: { id: TechLogoId; className?: string }) {
  const url = cdnUrls[id];

  // Se o ID não existir no nosso dicionário, não desenha nada para evitar erros no site
  if (!url) return null;

  return (
    <img
      src={url}
      alt={`Logótipo oficial da tecnologia ${id}`}
      className={cn("size-5 object-contain", className)}
      loading="lazy"
    />
  );
}