# Project Context — eng-leo-pessoa

## O que é este projeto

Site institucional de **Leo Pessoa — Engenheiro Civil**, convertido do template HTML "Ingenious" (automação residencial) para React 19 + TypeScript + Vite. A conversão estrutural e de estilos está concluída. A próxima etapa é **adequação de conteúdo**: substituir os textos, imagens e dados do template original pelo conteúdo real do cliente.

## Stack

- React 19 + TypeScript + Vite
- React Router DOM (roteamento client-side)
- Swiper (carrosséis e hero slider)
- React Hook Form (formulário de contato)
- CSS Modules + CSS global migrado do template Ingenious
- Vitest + React Testing Library + fast-check (testes)

## Estrutura de arquivos relevante

```
src/
├── assets/styles/          # CSS global, variáveis, grid, header, footer, flaticon
├── components/
│   ├── layout/             # Header, Footer, Layout
│   ├── sections/           # HeroSlider, AboutSection, PortfolioCarousel,
│   │                         ServicesSection, HowToUseSection, ContactForm,
│   │                         ClientsCarousel
│   └── ui/                 # SectionTitle, ThemeBtn, Preloader, ScrollToTop
├── data/                   # slides.ts, portfolio.ts, navigation.ts  ← conteúdo editável
├── pages/                  # HomePage, AboutPage, ContactPage
└── types/                  # navigation.ts, portfolio.ts, form.ts
```

## Onde fica o conteúdo editável

| O que mudar | Arquivo |
|---|---|
| Slides do hero (título, subtítulo, CTA, imagem) | `src/data/slides.ts` |
| Itens do portfólio (título, categoria, descrição, imagem) | `src/data/portfolio.ts` |
| Menu de navegação | `src/data/navigation.ts` |
| Serviços (título, descrição, ícone, imagem) | `src/components/sections/ServicesSection/ServicesSection.tsx` (array `services`) |
| Feature blocks da seção About | `src/components/sections/AboutSection/AboutSection.tsx` (array `featureBlocks`) |
| Logos dos clientes | `src/components/sections/ClientsCarousel/ClientsCarousel.tsx` (array `clientLogos`) |
| Textos do footer (sobre, posts, contatos) | `src/components/layout/Footer/Footer.tsx` |
| Título e texto da seção "Simple to Use" | `src/components/sections/HowToUseSection/HowToUseSection.tsx` |
| Título e texto da seção de contato | `src/components/sections/ContactForm/ContactForm.tsx` |

## Imagens

- Imagens do template de referência ficam em `public/referencia/images/`
- Imagens próprias do cliente devem ir para `public/images/` (criar se não existir)
- Referenciar imagens próprias como `/images/nome-do-arquivo.jpg`
- Referenciar imagens do template como `/referencia/images/...`

## Cores e identidade visual

Definidas em `src/assets/styles/variables.css`:
- Verde primário: `#59ab66` (`--color-primary`)
- Verde escuro: `#529b6b` (`--color-primary-dark`)
- Laranja accent: `#ff6c3a` (`--color-accent`)
- Texto: `#363636` (`--color-text`)

Para mudar a identidade visual do cliente, editar apenas `variables.css`.

## Fontes

Carregadas no `index.html` via Google Fonts:
- **Catamaran** — títulos e headings
- **Roboto** — corpo do texto
- **Open Sans** — uso secundário

## Ícones disponíveis

- **Font Awesome 5** — carregado via CDN no `index.html` (classes `fa`, `fab`, `far`, `fas`)
- **Flaticon** — fonte customizada do template, definida em `src/assets/styles/flaticon.css`
  - Uso: `<span className="icon flaticon-alarm" />`
  - Ver lista completa de ícones em `src/assets/styles/flaticon.css`
