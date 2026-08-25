# Design System — Dra. Fernanda Paz

Linguagem única do site: **Camada B (editorial)**. A estética de post promocional
(preço grande, selo circular, badge, ícone) permanece exclusiva do Instagram e
**não entra no site em nenhuma página**, inclusive nas de procedimento.

---

## 1. Cor

Definida em `tailwind.config.ts`. Todos os neutros carregam viés violeta — é o que
faz o roxo parecer pertencer à página em vez de estar aplicado por cima.

| Token | Hex | Uso |
|---|---|---|
| `papel` | `#FBF8FB` | Base de ~70% das seções |
| `superficie` | `#F3ECF2` | Seções de respiro, fichas laterais |
| `malva-nevoa` | `#EAE0EA` | Faixas de CTA, fundos de placeholder |
| `malva` | `#C9AEC4` | Degradês, texto sobre ameixa |
| `tinta` | `#15101B` | Tipografia principal (preto com viés violeta) |
| `tinta-2` | `#4A3F55` | Corpo de texto |
| `tinta-3` | `#7C6E88` | Legendas, rótulos secundários |
| `linha` | `#DCCFDB` | Bordas e divisores |
| `roxo` | `#8B0FC4` | **Assinatura.** CTA, ✦, links, eyebrow |
| `violeta` | `#A855F7` | Hover e estados ativos |
| `ameixa` | `#0D0911` | Preto com viés violeta. Hero, Harmonização, Resultados, rodapé |

### Regra de proporção — 45 / 45 / 10
O site trabalha em ritmo alternado: ~45% claro, ~45% preto, 10% roxo — este
último medido em **área visível de qualquer rolagem**. Se o roxo passar de ~10%
da tela em qualquer momento, a página virou Camada A.

**Por que `#0D0911` e não `#000000`:** o preto absoluto achata a foto de pele
(perde a informação nas sombras) e faz o roxo parecer colado por cima em vez de
pertencer à página. O viés violeta do `#0D0911` resolve os dois.

Seções pretas na Home: **01 Hero · 05 Harmonização · 07 Resultados · rodapé.**
Nunca duas pretas seguidas — sempre com um bloco claro entre elas.

O header inverte para branco automaticamente nas rotas cujo topo é preto
(`TOPO_ESCURO` em `components/Header.tsx`). Ao adicionar uma nova página com topo
preto, incluir a rota nesse array.

---

## 2. Tipografia

| Papel | Família | Onde |
|---|---|---|
| Display | **Bodoni Moda** | Títulos, palavras de impacto, frases-conceito |
| Texto | **Manrope** | Corpo, navegação, rótulos, botões |
| Acento | **Sacramento** | Máximo 2 usos no site inteiro |

### Escala fixa — nada fora dela
- `text-d1` — H1 de página: `clamp(2.75rem, 5.4vw, 4.75rem)`
- `text-d2` — H2 de seção: `clamp(1.95rem, 3.6vw, 3.15rem)`
- `text-d3` — H3 / frase-conceito: `clamp(1.45rem, 2.3vw, 2.05rem)`
- `.eyebrow` — 11px / 600 / tracking .22em / uppercase / roxo
- `.rotulo` — 12px / 600 / tracking .14em / uppercase
- Corpo: 15–19px conforme contexto, `max-w-medida` (62ch)

### Regras do display
- Nunca em caixa alta.
- Nunca abaixo de 20px.
- O **itálico entra em uma única palavra por frase** — é o gesto que a marca já
  faz em "Lábios *bem* definidos". Duas palavras em itálico na mesma frase quebra o efeito.

### Sacramento — os 2 únicos usos autorizados
1. Home, bloco "A Dra." — a frase `calma que eu vou te ajudar`
2. Página /sobre, bloco de fechamento — a mesma frase, em tamanho maior

Qualquer terceiro uso derruba a sofisticação e transforma o site em convite de casamento.

### Carregamento das fontes
Hoje via `<link>` do Google Fonts em `app/layout.tsx`. Para self-host (elimina a
requisição externa e o CLS), troque por `next/font/google`:

```tsx
import { Bodoni_Moda, Manrope, Sacramento } from 'next/font/google'
const display = Bodoni_Moda({ subsets:['latin'], style:['normal','italic'], variable:'--font-display', display:'swap' })
// ...aplicar as variáveis na tag <html> e remover o <link> + o bloco :root do globals.css
```

---

## 3. Os cinco gestos gráficos

O site tem exatamente cinco elementos decorativos. É a repetição controlada deles
que faz parecer marca, e não coleção de páginas.

1. **`.spark` — o ✦ de quatro pontas.** Marcador de item, separador, ponto final
   de frase-conceito. Sempre roxo, sempre pequeno. Único ícone decorativo do site.
2. **`.rail` — filete vertical.** Roxo, cantos arredondados, ✦ na base. Marca
   blocos-chave (cards de blog, citações de destaque, etapas numeradas).
3. **`.pontilhada` — linha pontilhada fina.** Separa itens em sequência. **Nunca**
   como borda de caixa.
4. **`<TextoArco>` — texto em arco.** SVG puro, custo zero. **Um por página, no máximo.**
5. **Faixa fotográfica sangrando.** Bandas horizontais largas e baixas fora da
   coluna de texto. É o que quebra o grid sem virar card.

### Fora do sistema — não usar
Sombras difusas · cards com borda arredondada grande · ícones de linha genéricos ·
gradiente roxo→azul · botão pill · badge de selo circular · qualquer emoji.

---

## 4. Componentes

`components/ui.tsx`
- `<Media src poster label nota claro>` — **vídeo em loop mudo + botão de som.**
  Sem `src`, cai automaticamente no `<Pendente>`. Toca só quando entra na tela e
  volta a mudo ao sair. **Por que o som não liga no hover:** os navegadores só
  liberam áudio após um gesto real (clique/toque) — hover não conta, o Chrome
  pausa ou ignora, e no celular hover não existe. Por isso o botão explícito.
- `<Reveal delay>` — revelação no scroll via IntersectionObserver. Zero biblioteca.
- `<Pendente label nota claro>` — placeholder de conteúdo que ainda falta.
  `claro` para uso sobre fundo ameixa.
- `<CtaFaixa pergunta botao mensagem escuro>` — faixa de CTA contextual.
- `<TextoArco texto>` — texto em arco SVG.
- `<Trilha itens>` — breadcrumbs.
- `<AvisoResultados claro>` — aviso legal de variação de resultado.
- `<BarraWhatsApp>` — barra fixa mobile, aparece após 85% da primeira tela.

`components/Header.tsx` — nav fixa, painel de 4 colunas no desktop, acordeão no mobile.
`components/Footer.tsx` — ameixa, sitemap completo por categoria (SEO interno).

### Botões
- `.btn` — fundo roxo, texto branco. **Ação primária. Um por bloco.**
- `.btn-linha` — contorno. Ação secundária.
- `.btn-claro` — contorno branco. Só sobre fundo ameixa.

---

## 5. Composição

**Regra estrutural da Home:** dois blocos vizinhos nunca compartilham a mesma
composição. Alterna foto sangrando / texto centrado / grade assimétrica / faixa
escura. É isso que impede a leitura de "template".

Grades de categoria e de resultados usam **deslocamento vertical** entre colunas
(`lg:mt-16`, `lg:mt-10`) — nunca alturas iguais alinhadas.

---

## 6. Acessibilidade
- Foco visível em roxo com offset de 3px.
- `prefers-reduced-motion` desliga todas as animações.
- Link "pular para o conteúdo" antes do header.
- Contraste conferido em ambos os fundos (papel e ameixa).
