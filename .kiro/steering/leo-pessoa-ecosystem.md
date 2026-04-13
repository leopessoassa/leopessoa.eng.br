---
inclusion: manual
---

# Ecossistema Leo Pessoa — Guia de Sites

## Visão geral

Leo Pessoa opera três sites com públicos distintos, todos compartilhando a mesma identidade de marca mas com paletas e tons diferentes:

| Site | Público | Paleta | Tom |
|---|---|---|---|
| `leopessoa.eng.br` | Redirecionador — qualquer visitante | Neutro/elegante | Institucional |
| `parceiros.leopessoa.eng.br` | Arquitetos e designers de interiores (B2B) | Azul petróleo + dourado | Sofisticado, técnico |
| `casainteligente.leopessoa.eng.br` | Cliente final residencial (B2C) | Verde + laranja | Acolhedor, acessível |

## Diferenciação por paleta

A diferenciação de público por cor é intencional e estratégica:

- **Verde** (`#59ab66`) = B2C — conforto, casa, natureza, acessibilidade
- **Azul petróleo** (`#0b1f2a` / `#0f2535`) = B2B — precisão técnica, confiança, sofisticação
- **Dourado** (`#d4a843`) = accent B2B — elegância, premium, diferenciação

O verde aparece nos CTAs de WhatsApp e checkmarks em ambos os sites — mantendo a identidade Leo Pessoa como fio condutor.

## Site redirecionador (leopessoa.eng.br)

### Estrutura mínima
```
HeroSection     — identidade + dois CTAs (parceiros / clientes)
ProjectSection  — 2–3 projetos de referência (prova social rápida)
Footer          — contatos + links para os dois sites
```

### Princípios de design
- **Uma decisão, dois caminhos** — o visitante precisa entender em 5 segundos qual site é para ele
- Sem conteúdo de conversão — apenas orientação
- Paleta neutra que não favorece nem B2B nem B2C — pode usar petróleo como base com os dois accents
- Os dois CTAs devem ter peso visual equivalente — nenhum deve parecer "principal"

### Copy dos CTAs
- Para arquitetos: "Sou arquiteto ou designer de interiores →"
- Para clientes: "Quero automatizar minha casa →"

### O que NÃO fazer
- Não replicar o conteúdo completo de nenhum dos dois sites
- Não usar tabs ou menus para alternar entre públicos — confunde
- Não colocar formulário de contato — o usuário deve ir para o site correto

## Compartilhamento de componentes entre sites

Componentes que podem ser reutilizados com ajuste de paleta:
- `HeroSlider` — mesma estrutura, slides diferentes
- `ProjectsSection` — mesma estrutura editorial, projetos diferentes
- `Footer` — mesma estrutura 3 colunas, links diferentes
- `ProofBar` — mesma estrutura, stats diferentes
- `whatsapp.ts` — mesmo utilitário, mesmo número

## Identidade compartilhada

Independente do site, manter:
- Fontes: **Catamaran** (títulos) + **Roboto** (corpo)
- Logo: `/images/logo.webp`
- Número WhatsApp: centralizado em `whatsapp.ts`
- Grafismo triangular entre seções — marca registrada visual do projeto
- `border-radius: 2px` nos elementos principais — cantos quase retos, linguagem premium
