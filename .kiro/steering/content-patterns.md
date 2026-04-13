# Content Patterns — Padrões para Adequação de Conteúdo

## Regras gerais

1. **Nunca alterar CSS** durante adequação de conteúdo — apenas textos, imagens e dados
2. **Manter a estrutura JSX** dos componentes — só trocar os valores dentro das props e strings
3. **Imagens próprias** vão em `public/images/` e são referenciadas como `/images/arquivo.jpg`
4. **Não remover** atributos de acessibilidade (`aria-label`, `alt`, `role`)
5. **Manter os tipos TypeScript** — ao editar arrays de dados, respeitar as interfaces definidas em `src/types/`

---

## Como editar cada seção

### Hero Slider — `src/data/slides.ts`

```typescript
// Interface obrigatória:
interface SlideData {
  id: number;
  image: string;   // caminho da imagem: '/images/slide-1.jpg'
  title: string;   // título em UPPERCASE, fonte Catamaran 72px
  subtitle: string; // subtítulo, fonte Catamaran 24px
  ctaText: string; // texto do botão CTA
  ctaHref: string; // link do botão CTA
}
```

**Boas práticas:**
- Imagens de slide: proporção 16:9, mínimo 1920×1080px
- Título: máximo ~6 palavras (cabe em 623px de largura)
- Subtítulo: máximo ~2 linhas

---

### Portfólio — `src/data/portfolio.ts`

```typescript
// Interface obrigatória:
interface PortfolioItem {
  id: number;
  image: string;      // '/images/portfolio/item-1.jpg'
  title: string;      // nome do projeto/produto
  category: string;   // categoria (ex: 'Estrutural', 'Fundações')
  description: string; // texto curto, ~2 linhas
}
```

**Boas práticas:**
- Imagens: proporção 4:3 recomendada
- Mínimo 6 itens para o carrossel funcionar bem com loop

---

### Serviços — `src/components/sections/ServicesSection/ServicesSection.tsx`

O array `services` está inline no componente:

```typescript
const services = [
  {
    id: 1,
    title: 'Nome do Serviço',
    description: 'Texto curto para o overlay (aparece no hover)',
    text: 'Texto descritivo abaixo do card',
    image: '/images/services/servico-1.jpg',
    iconClass: 'flaticon-home',  // ver lista em flaticon.css
  },
  // ...
];
```

**Ícones disponíveis relevantes para engenharia civil:**
- `flaticon-home` — casa
- `flaticon-house` — casa alternativa
- `flaticon-construction` — construção
- `flaticon-settings` — configurações/projetos
- `flaticon-target` — precisão/metas
- `flaticon-insurance` — segurança/garantia
- `flaticon-stack` — estrutura/camadas

---

### Feature Blocks (About) — `src/components/sections/AboutSection/AboutSection.tsx`

O array `featureBlocks` usa SVG inline. Para trocar ícones, substituir o `<svg>` por outro ou usar um ícone Font Awesome:

```tsx
// Opção 1: manter SVG inline (melhor performance)
{
  id: 1,
  title: 'Nome da Feature',
  icon: (
    <svg className={styles.icon} viewBox="0 0 30 30" aria-hidden="true">
      <path d="..." />
    </svg>
  ),
}

// Opção 2: usar ícone Font Awesome no lugar do SVG
{
  id: 1,
  title: 'Nome da Feature',
  icon: <i className={`fa fa-building ${styles.icon}`} aria-hidden="true" />,
}
```

---

### Navegação — `src/data/navigation.ts`

Para um site institucional simples, simplificar o menu:

```typescript
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/about' },
  { label: 'Serviços', href: '/services' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Contato', href: '/contact' },
];
```

**Nota:** Remover dropdowns desnecessários. O componente Header suporta itens sem `children`.

---

### Footer — `src/components/layout/Footer/Footer.tsx`

Editar diretamente o JSX:
- Coluna 1 (About): trocar nome da empresa e texto descritivo
- Coluna 2 (Latest Posts): pode ser substituída por links úteis ou serviços
- Coluna 3 (Contacts): trocar email, telefone e links de redes sociais

```tsx
// Exemplo de contato:
<li>
  <i className="far fa-envelope" aria-hidden="true" />
  <a href="mailto:leo@leopessoa.com.br">leo@leopessoa.com.br</a>
</li>
<li>
  <i className="fa fa-phone" aria-hidden="true" />
  <a href="tel:+5511999999999">(11) 99999-9999</a>
</li>
```

---

### Logos dos Clientes — `src/components/sections/ClientsCarousel/ClientsCarousel.tsx`

```typescript
const clientLogos = [
  { id: 1, src: '/images/clients/cliente-1.png', alt: 'Nome do Cliente 1' },
  { id: 2, src: '/images/clients/cliente-2.png', alt: 'Nome do Cliente 2' },
  // ...
  // Duplicar os itens para garantir loop suave (mínimo 8 entradas)
];
```

**Boas práticas:**
- Logos em PNG com fundo transparente
- Altura recomendada: 60-80px
- Mínimo 4 logos únicos (duplicar para ter 8 entradas no array)

---

## Checklist de adequação de conteúdo

- [ ] Substituir slides do hero (imagens + textos)
- [ ] Atualizar título e subtítulo da seção About
- [ ] Atualizar feature blocks (títulos e ícones)
- [ ] Atualizar itens do portfólio (imagens + textos)
- [ ] Atualizar serviços (títulos, descrições, ícones, imagens)
- [ ] Atualizar seção "Simple to Use" (título + texto)
- [ ] Atualizar seção de contato (título + texto)
- [ ] Atualizar footer (nome, sobre, contatos, redes sociais)
- [ ] Atualizar logos dos clientes
- [ ] Simplificar menu de navegação
- [ ] Adicionar imagens próprias em `public/images/`
- [ ] Atualizar `<title>` no `index.html`
- [ ] Revisar cores em `variables.css` se necessário
