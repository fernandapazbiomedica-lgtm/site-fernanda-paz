# Mapa de Conteúdo — o que falta preencher

Todo conteúdo pendente está marcado no site com a tag roxa **PENDENTE** e no
código com o texto `PENDENTE`. Nada foi inventado.

Para localizar tudo de uma vez:
```bash
grep -rn "PENDENTE\|Pendente\|pendente:" lib/ app/ components/
```

---

## Prioridade 1 — destrava o design

| O que | Onde aparece | Especificação |
|---|---|---|
| Retrato da Dra. — hero | Home bloco 01 | Vertical 3:4, fundo neutro, luz suave |
| Retrato P&B | Home bloco 06, /sobre | Vertical 4:5, dessaturado |
| 4 fotos de categoria | Home bloco 03 | Macro de pele, 4:5 e 3:4 alternados |
| Faixa macro | Home bloco 05 | Horizontal 21:6, sangra ponta a ponta |
| Fotos da clínica | Home bloco 10, /contato | Recepção, sala, fachada — 4:5 e 1:1 |

## Prioridade 2 — destrava o SEO local

| O que | Onde |
|---|---|
| Endereço completo | `lib/site.ts` → `SITE.endereco` |
| Horários de atendimento | `lib/site.ts` → `SITE.horarios` |
| Confirmar nº do CRBM | `lib/site.ts` → `SITE.crbm` |
| Domínio definitivo | `lib/site.ts` → `SITE.url` |

## Prioridade 3 — destrava a autoridade (E-E-A-T)

| O que | Onde |
|---|---|
| Bio profissional completa | `app/sobre/page.tsx` |
| Graduação, pós, especializações | `app/sobre/page.tsx` — tabela de trajetória |
| Certificações verificáveis | idem |

## Prioridade 4 — conteúdo clínico

Em `lib/procedimentos.ts`, cada procedimento tem os campos:

```ts
descricao: string[]   // 2–4 parágrafos — REVISAR
indicacoes: string[]  // quando é indicado
duracao?: string      // duração da sessão
sessoes?: string      // nº médio de sessões
resultado?: string    // quando aparece / quanto dura
faq: { p, r }[]       // 3–5 perguntas reais
```

Os 8 procedimentos com `destaque: true` vêm primeiro:
harmonização facial · toxina botulínica · preenchimento labial · rinomodelação ·
melasma · definição abdominal · modelação abdominal · intradermoterapia capilar · PEIM

**Regra:** nenhum texto clínico vai ao ar sem revisão e aprovação da Dra. Fernanda.
Prazos, resultados e números de sessão são afirmações de saúde.

## Prioridade 5 — resultados

Cada antes/depois exige **termo de autorização de uso de imagem assinado**,
arquivado, conforme normas do conselho profissional. Enquanto não houver termo,
o placeholder permanece.

Formato: 4:5, antes e depois lado a lado, mesmo enquadramento, mesma luz.
Legenda: procedimento + nº de sessões.

## Prioridade 6 — blog

3 artigos estruturados em `lib/blog.ts`, com FAQ e schema prontos, aguardando
revisão clínica. A pauta dos próximos 12 meses está em `SEO_STRATEGY.md`.

---

## Como preencher

Todo o conteúdo vive em dois arquivos tipados. Editar um campo não quebra layout —
a estrutura já está desenhada em volta dele.

- `lib/procedimentos.ts` — categorias e os 45 procedimentos
- `lib/blog.ts` — artigos
- `lib/site.ts` — dados de contato, endereço, redes

Para remover um placeholder, troque o `<Pendente>` pelo `<Image>` correspondente.
