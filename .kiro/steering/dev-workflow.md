# Dev Workflow — Como trabalhar neste projeto

## Rodar o projeto

```bash
npm run dev      # servidor de desenvolvimento (Vite)
npm run build    # build de produção
npm run test     # rodar testes uma vez (Vitest --run)
```

> Nunca usar `npm run test:watch` em automação — usar sempre `npm run test` para execução única.

## Verificar erros

Usar `getDiagnostics` do Kiro em vez de `tsc` no terminal — mais rápido e integrado.

## Adicionar imagens do cliente

1. Criar pasta `public/images/` se não existir
2. Colocar as imagens lá
3. Referenciar como `/images/nome-arquivo.jpg` nos componentes

## Editar conteúdo de texto

- Textos inline nos componentes: editar diretamente no JSX
- Dados estruturados (slides, portfólio, navegação): editar em `src/data/`
- Nunca criar novos arquivos de dados — usar os existentes

## Editar estilos

- **Cores globais**: `src/assets/styles/variables.css`
- **Estilos de seção**: CSS Module do componente (ex: `HeroSlider.module.css`)
- **Estilos globais do template**: `src/assets/styles/global.css` e arquivos importados
- **Nunca editar** `public/referencia/css/` — são apenas referência

## Convenções de código

- Componentes: PascalCase (`HeroSlider.tsx`)
- CSS Modules: camelCase (`.heroSlider`, `.navBtn`)
- Classes globais do template: kebab-case (`.main-header`, `.btn-style-one`)
- Dados estáticos: arrays tipados com interface explícita
- Props opcionais: usar `?` no TypeScript

## Estrutura de um componente de seção

```tsx
import styles from './NomeSection.module.css';

export default function NomeSection() {
  return (
    <section className={styles.nomeSection}>
      {/* conteúdo */}
    </section>
  );
}
```

## Quando usar classes globais vs CSS Modules

- **Classes globais** (sem `styles.`): classes do template Ingenious que têm estilos em `global.css`, `header.css`, `footer.css` etc. Ex: `main-header`, `btn-style-one`, `sec-title`, `auto-container`
- **CSS Modules** (`styles.`): estilos específicos do componente que não existem no template global

## Ícones

```tsx
// Font Awesome (carregado via CDN no index.html)
<i className="fa fa-home" aria-hidden="true" />
<i className="fab fa-facebook-f" aria-hidden="true" />
<i className="far fa-envelope" aria-hidden="true" />

// Flaticon (fonte customizada do template)
<span className="icon flaticon-alarm" aria-hidden="true" />
<span className="icon flaticon-home" aria-hidden="true" />
```

## ThemeBtn — botões do template

```tsx
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';

// Laranja preenchido
<ThemeBtn variant="btn-style-one" href="/contato">Fale Conosco</ThemeBtn>

// Verde contorno
<ThemeBtn variant="btn-style-two" href="/servicos">Ver Serviços</ThemeBtn>

// Verde preenchido
<ThemeBtn variant="btn-style-three" href="/portfolio">Ver Portfólio</ThemeBtn>

// Tamanho grande
<ThemeBtn variant="btn-style-one" href="#" size="large">Solicitar Orçamento</ThemeBtn>
```

## SectionTitle — títulos de seção

```tsx
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';

// Padrão (escuro, centralizado)
<SectionTitle title="NOSSOS SERVIÇOS" align="center" />

// Com subtítulo
<SectionTitle
  title="SOBRE NÓS"
  subtitle="Texto descritivo da seção"
  align="left"
/>

// Variante clara (para fundos escuros/coloridos)
<SectionTitle title="PORTFÓLIO" align="center" light />
```
