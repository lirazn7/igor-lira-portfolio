# Portfólio — Igor Lira

Portfólio de desenvolvedor backend construído com Next.js 16, Tailwind CSS, GSAP, shadcn/ui e suporte a PT/EN/ES.

## Funcionalidades

- Seções: Hero, Sobre, Experiência, Projetos, Habilidades e Contato
- Tema claro/escuro
- Internacionalização (português, inglês, espanhol)
- Formulário de contato com envio real por email
- Animações GSAP

## Começando

```bash
npm install
cp .env.example .env.local
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Configuração do formulário de contato

O envio de emails usa [Resend](https://resend.com). Siga os passos:

1. Crie uma conta gratuita em [resend.com](https://resend.com)
2. Gere uma API Key em **API Keys**
3. Copie `.env.example` para `.env.local` e preencha:

```env
RESEND_API_KEY=re_sua_chave_aqui
CONTACT_EMAIL=nathanlira15@gmail.com
RESEND_FROM_EMAIL=Portfolio Igor Lira <onboarding@resend.dev>
```

4. No plano gratuito, o remetente padrão `onboarding@resend.dev` funciona para testes
5. Reinicie o servidor (`npm run dev`) após configurar

**Importante:** nunca commite `.env.local` — ele já está no `.gitignore`.

## Scripts

| Comando        | Descrição              |
|----------------|------------------------|
| `npm run dev`  | Servidor de desenvolvimento |
| `npm run build`| Build de produção      |
| `npm start`    | Servidor de produção   |
| `npm run lint` | ESLint                 |

## Deploy

Recomendado: [Vercel](https://vercel.com). Adicione as variáveis de ambiente (`RESEND_API_KEY`, `CONTACT_EMAIL`, `RESEND_FROM_EMAIL`) no painel do projeto.

## Segurança

- Chaves de API apenas em variáveis de ambiente
- Validação de dados com Zod na API
- Campo honeypot anti-spam
- Escape HTML no corpo do email

## Licença

Projeto pessoal — Igor Lira.
