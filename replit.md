# Portfólio Igor Lira

Portfólio pessoal de Igor Lira — desenvolvedor backend (Java/Spring) — com seções hero, sobre, experiência, projetos, skills e contato. Portado da Vercel (Next.js) para Vite + React.

## Run & Operate

- Workflows: `artifacts/portfolio: web` (frontend, path `/`), `artifacts/api-server: API Server` (path `/api`)
- `pnpm run typecheck` — full typecheck across all packages
- Env: `RESEND_API_KEY` (envio de email do formulário de contato), opcionais `CONTACT_EMAIL`, `RESEND_FROM_EMAIL`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: Vite + React 19, Tailwind v4, GSAP, framer-motion, next-themes (dark mode), i18n próprio (PT/EN/ES)
- API: Express 5 (`artifacts/api-server`), Resend para email

## Where things live

- `artifacts/portfolio/src/components/sections/` — seções da página (hero, about, experience, projects, skills, contact)
- `artifacts/portfolio/src/lib/i18n/` — traduções PT/EN/ES
- `artifacts/portfolio/src/config/site.ts` — dados do site (nav, links)
- `artifacts/api-server/src/routes/contact.ts` — endpoint POST /api/contact (Resend)
- `.migration-backup/` — código original importado da Vercel (Next.js)

## Architecture decisions

- App single-page (sem router) — a página original Next.js era uma única rota com âncoras
- Rota de contato inlined no Express (sem OpenAPI spec) por ser endpoint único e simples, espelhando o route.ts original
- `next/image`/`next/link` substituídos por `<img>`/`<a>`; tema e estilos originais preservados em `src/index.css`

## Product

Página única com animações GSAP, alternância de tema claro/escuro, seletor de idioma (PT/EN/ES) e formulário de contato que envia email via Resend.

## User preferences

_(vazio)_

## Gotchas

- Sem RESEND_API_KEY o formulário de contato responde 503 ("Serviço de email não configurado") — comportamento igual ao original
