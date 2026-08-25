# Estratégia de SEO — Dra. Fernanda Paz

## 1. Arquitetura de URL

A hierarquia é o principal ativo de SEO deste site. Cada nível comunica ao Google
a relação entre os conteúdos.

```
/                                             Home
/procedimentos                                Hub — todos os 45 procedimentos
/procedimentos/[categoria]                    6 categorias
/procedimentos/[categoria]/[slug]             45 procedimentos individuais
/sobre                                        E-E-A-T: quem assina o conteúdo
/resultados                                   Prova social
/blog                                         Índice editorial
/blog/[slug]                                  Artigos
/contato                                      SEO local
```

Total gerado no build: **58 páginas estáticas**.

### Por que categoria na URL
`/procedimentos/facial/preenchimento-labial` diz ao buscador que a página é filha
de "facial", que é filha de "procedimentos". Isso concentra autoridade nas páginas
de categoria e distribui para as folhas. Uma estrutura plana
(`/preenchimento-labial`) desperdiça esse sinal.

---

## 2. Metadata

Definida por página via `generateMetadata` — nenhum título ou description repetido
no site inteiro.

Padrão de title das folhas: `[Procedimento] no Guarujá | Dra. Fernanda Paz`
— nome do procedimento primeiro (é o que a pessoa digita), cidade em seguida
(intenção local), marca por último.

`metadataBase` e `alternates.canonical` configurados em todas as páginas.

### ⚠ Antes de publicar
Trocar `SITE.url` em `lib/site.ts` pelo domínio definitivo. Sem isso, canonical,
OG e sitemap apontam para o placeholder.

---

## 3. Schema markup (JSON-LD)

| Schema | Onde | Por quê |
|---|---|---|
| `MedicalBusiness` | Root (todas as páginas) | Negócio de saúde, SEO local |
| `Person` | /sobre | E-E-A-T — vincula autoria ao CRBM |
| `MedicalProcedure` | Cada procedimento | Contexto do que a página descreve |
| `FAQPage` | **Só onde existe FAQ real** | Rich snippet de perguntas |
| `Article` | Cada artigo do blog | Autoria, data, publisher |
| `BreadcrumbList` | Todas as internas | Trilha visível no resultado de busca |

**Regra crítica:** `FAQPage` só é injetado quando `faq.length > 0`. Schema de FAQ
em página sem FAQ visível é violação de diretriz e pode gerar penalização manual.

---

## 4. Hierarquia de headings

- Um único `<h1>` por página — sempre o nome real do conteúdo, nunca a marca.
- `<h2>` para seções, `<h3>` para subitens. Sem pulo de nível.
- Nenhum heading usado só para efeito visual (para isso existe `.eyebrow` e `.rotulo`).

---

## 5. Duas páginas que não podem ser fundidas

**Definição abdominal** e **Modelação abdominal (efeito tanquinho)** têm
indicações praticamente opostas e intenções de busca diferentes. São duas páginas
independentes, com H1, corpo e FAQ próprios, mais um artigo de blog que compara as
duas e faz link interno para ambas.

Fundir em uma página só canibalizaria as duas buscas e entregaria a resposta errada
para metade das pessoas.

---

## 6. SEO local

- `MedicalBusiness` com `areaServed` = Guarujá, SP
- "Guarujá" no title de todas as páginas de procedimento e categoria
- Página /contato com endereço, horários e mapa
- **Pendente:** endereço completo, horários reais e Google Business Profile
  vinculado. Sem isso o SEO local fica pela metade.

---

## 7. Conteúdo — a parte que ainda falta

O que está no site hoje é estrutura correta com **texto clínico genérico marcado
como pendente**. Nada foi inventado sobre procedimentos, prazos ou resultados.

Prioridade de preenchimento:
1. Os 8 procedimentos com `destaque: true` (maior volume de busca)
2. FAQ real de cada um — 3 a 5 perguntas do que aparece na consulta
3. Bio completa da Dra. (sustenta E-E-A-T de todo o site)
4. Endereço e horários (destrava o SEO local)
5. Demais procedimentos

### Pauta de blog sugerida (12 meses)
Cada artigo deve responder uma pergunta real da consulta e linkar para 2–3 páginas
de procedimento.

- Quanto tempo dura cada tipo de preenchimento?
- Bioestimulador ou preenchimento: qual a diferença?
- Harmonização facial: o que perguntar antes de fechar
- Skinbooster x hidratação: o que cada um resolve
- Quantas sessões até ver resultado? (por procedimento)
- Pós-procedimento: o que fazer nas primeiras 48h
- Como escolher quem vai aplicar (E-E-A-T puro)
- Rinomodelação: quem pode e quem não pode
- Queda de cabelo: quando procurar tratamento
- Melasma no verão: como não perder o resultado
- Preenchimento labial: contorno x volume
- O que muda na pele depois dos 30

---

## 8. Performance

- Build 100% estático — nenhuma página depende de servidor em runtime.
- Zero biblioteca de animação; scroll reveal via IntersectionObserver nativo.
- Imagens: usar `next/image` com AVIF/WebP quando as fotos reais entrarem.
- Único recurso externo: a folha de estilo do Google Fonts (removível com `next/font`).

## 9. Checklist antes de publicar

- [ ] Domínio definitivo em `lib/site.ts`
- [ ] Fotos reais substituindo os placeholders `<Pendente>`
- [ ] Textos clínicos revisados e aprovados pela Dra.
- [ ] Endereço e horários reais
- [ ] Termos de autorização de imagem arquivados para cada antes/depois
- [ ] Google Search Console + sitemap enviado
- [ ] Google Business Profile vinculado
- [ ] Confere se `FAQPage` só aparece onde há FAQ visível
