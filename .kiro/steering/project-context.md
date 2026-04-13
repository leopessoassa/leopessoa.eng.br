# Project Context — eng-leo-pessoa

## O que é este projeto

Site B2B de **Leo Pessoa — Engenheiro Eletricista**, focado em **parceria com arquitetos e designers de interiores**. Construído em React 19 + TypeScript + Vite, com identidade visual sofisticada em azul petróleo e dourado.

## Ecossistema de sites Leo Pessoa

| Domínio | Público | Status |
|---|---|---|
| `leopessoa.eng.br` | Página principal — redirecionador | A construir |
| `parceiros.leopessoa.eng.br` | Arquitetos e designers de interiores (B2B) | Este projeto |
| `casainteligente.leopessoa.eng.br` | Cliente final (B2C) | Concluído |

A página principal (`leopessoa.eng.br`) é um redirecionador simples: HeroSection + ProjectSection + Footer, com dois CTAs — um para parceiros, outro para clientes finais.

## Stack

- React 19 + TypeScript + Vite
- React Router DOM (roteamento client-side)
- Swiper (hero slider)
- React Hook Form (formulário de contato)
- CSS Modules + CSS global migrado do template Ingenious
- Vitest + React Testing Library + fast-check (testes)

## Estrutura de seções (B2B — parceiros)

```
HomePage
├── HeroSlider          — 4 slides, foco em parceria com arquitetos
├── InspirationSection  — Dores vs. Soluções + Diferencial Técnico
├── AboutSection        — Conheça Leo Pessoa (foto + diferenciais + missão)
├── HowItWorksSection   — 4 etapas da parceria (fundo claro)
├── ProjectsSection     — 3 cases reais (fundo escuro/petróleo)
├── GettingStartedSection — Steps alternados + FAQ
├── LetsBeginSection    — Formulário de contato + contatos
└── ProofBar            — Faixa de prova social (separa LetsBegin do Footer)
```

## Paleta de cores

Definida em `src/assets/styles/variables.css`:

### B2B (parceiros — azul petróleo)
- `--b2b-bg-deep: #0b1f2a` — fundos mais profundos
- `--b2b-bg-section: #0f2535` — fundos de seção escura
- `--b2b-overlay-section: rgba(11,31,42,0.92)` — substitui o verde nos overlays
- `--b2b-accent: #d4a843` — dourado elegante (substitui laranja/âmbar)
- `--b2b-accent-dark: #b8902e`
- `--b2b-accent-bg: rgba(212,168,67,0.15)`
- `--b2b-text-secondary: rgba(255,255,255,0.75)`
- `--b2b-text-muted: rgba(255,255,255,0.50)`
- `--b2b-border: rgba(255,255,255,0.12)`

### B2C (casainteligente — verde)
- `--color-primary: #59ab66`
- `--color-primary-dark: #529b6b`
- `--color-accent: #fcb43c`

### Universal
- `--color-whatsapp: #25d366`
- `--color-whatsapp-dark: #1ebe5d`

## Ritmo claro/escuro das seções

A alternância entre seções claras e escuras é intencional e deve ser mantida:

```
HeroSlider          → escuro (petróleo)
InspirationSection  → claro (#f4f4f2)
AboutSection        → escuro (petróleo diagonal)
HowItWorksSection   → claro (#f4f4f2)
ProjectsSection     → escuro (petróleo)
GettingStartedSection → claro (#f4f4f2) + FAQ escuro
LetsBeginSection    → escuro (petróleo)
ProofBar            → claro (#f4f4f2)
Footer              → escuro (petróleo)
```

## Conteúdo editável

| O que mudar | Arquivo |
|---|---|
| Slides do hero | `src/data/slides.ts` |
| Menu de navegação | `src/data/navigation.ts` |
| Número WhatsApp | `src/utils/whatsapp.ts` — constante `WHATSAPP_PHONE` |
| Número formatado para exibição | `src/utils/whatsapp.ts` — constante `WHATSAPP_DISPLAY` |

## Utilitário WhatsApp

`src/utils/whatsapp.ts` centraliza toda a lógica de links WhatsApp:

- `whatsappUrl(message)` — dentro de componentes, com mensagem pré-preenchida
- `whatsappBaseUrl()` — dentro de componentes, sem mensagem
- `whatsappStaticUrl(message?)` — fora de componentes (constantes de módulo)
- `WHATSAPP_DISPLAY` — número formatado para exibição `'(83) 98207-8702'`

**Nunca hardcodar número de telefone ou URL do WhatsApp nos componentes.**

## Fontes

Carregadas no `index.html` via Google Fonts:
- **Catamaran** — títulos, headings, eyebrows, números ordinais
- **Roboto** — corpo do texto
- **Open Sans** — uso secundário

## Ícones

- **Font Awesome 5** — carregado via CDN. Usar apenas onde necessário (ex: WhatsApp, Instagram)
- **Evitar ícones Font Awesome como elemento visual principal** em seções sofisticadas — substituir por numeração ordinal, traços dourados ou tipografia
