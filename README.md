# Site — Dra. Fernanda Paz

Site institucional de biomedicina estética. Next.js (App Router) + TypeScript +
Tailwind, 100% estático.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera 58 páginas estáticas
npm start
```

## Estrutura

```
app/                    rotas (App Router)
  procedimentos/[categoria]/[slug]/   45 páginas geradas
  blog/[slug]/                        artigos
  sitemap.ts robots.ts                gerados no build
components/             Header, Footer, ui.tsx (componentes do sistema)
lib/
  procedimentos.ts      45 procedimentos + 6 categorias  ← conteúdo
  blog.ts               artigos                          ← conteúdo
  site.ts               contato, endereço, WhatsApp      ← conteúdo
```

Todo conteúdo é tipado e vive em `lib/`. Editar um campo não afeta layout.

## Documentação

- `DESIGN_SYSTEM.md` — cor, tipografia, os 5 gestos gráficos, regras de composição
- `SEO_STRATEGY.md` — arquitetura de URL, schema, checklist de publicação
- `CONTENT_MAP.md` — tudo que falta preencher, por prioridade

## Antes de publicar

Ver o checklist no fim de `SEO_STRATEGY.md`. O item que trava tudo:
**trocar `SITE.url` em `lib/site.ts` pelo domínio real.**

## Deploy

Estático — funciona em Vercel (recomendado, zero config), Netlify ou qualquer host.
```bash
npx vercel
```
