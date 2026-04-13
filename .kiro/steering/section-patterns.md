# Section Patterns — Padrões Aprendidos em Produção

## Efeito triangular de transição entre seções

O efeito de triângulos na borda entre duas seções (ex: Hero → InspirationSection) é puramente geométrico via `clip-path`. Não depende de imagem de fundo.

### Como funciona

A seção seguinte ao Hero usa `margin-top` negativo para sobrepor o Hero, e o `clip-path` no `imageBg` cria a forma triangular. O valor exato que produz triângulos bem proporcionados é:

```css
.section {
  position: relative;
  margin-top: -190px;   /* valor crítico — não alterar */
  padding: 250px 0 150px;
  z-index: 2;
}
```

### Stack de z-index obrigatória

Para o efeito funcionar sem cobrir o conteúdo:

```css
/* 1. Fundo cinza começa ABAIXO dos triângulos */
.section::before {
  content: '';
  position: absolute;
  left: 0;
  top: 120px;           /* onde os triângulos terminam */
  width: 100%;
  height: calc(100% - 120px);
  background-color: #f8f8f8;
  z-index: -1;          /* abaixo de tudo */
}

/* 2. Background layers ficam acima do ::before */
.backgroundLayers {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0;
}

/* 3. Conteúdo fica acima do background */
.contentWrapper {
  position: relative;
  z-index: 1;
}
```

### JSX obrigatório

```tsx
<section className={styles.section}>
  <div className={styles.backgroundLayers}>
    <div className={styles.triangleOverlay}></div>
    <div
      className={styles.imageBg}
      style={{ backgroundImage: 'url(/images/background/1.jpg)' }}
    ></div>
  </div>

  <div className={styles.contentWrapper}>
    <div className="auto-container">
      {/* conteúdo */}
    </div>
  </div>
</section>
```

### clip-path dos triângulos

```css
.imageBg {
  clip-path: polygon(0% 120px, 60% 60px, 100% 120px, 100% 100%, 50% 100%, 0% 100%);
}

.triangleOverlay {
  clip-path: polygon(60% 60px, 100% 0%, 100% 120px);
  background: rgba(255, 255, 255, 0.3);
}
```

### Responsivo

```css
@media (max-width: 991px) {
  .section { margin-top: -100px; padding: 160px 0 0; }
}
@media (max-width: 768px) {
  .section { margin-top: -60px; padding: 110px 0 0; }
}
@media (max-width: 480px) {
  .section { margin-top: -40px; padding: 100px 0 0; }
}
```

---

## Tabs com CSS Modules — texto branco no estado ativo

Quando duas classes são aplicadas no mesmo elemento (`styles.tabBtn styles.tabBtnActive`), usar **seletor composto** para garantir especificidade:

```css
/* ERRADO — especificidade igual, pode ser sobrescrito em breakpoints */
.tabBtnActive {
  color: #fff;
}

/* CORRETO — especificidade maior, vence sempre */
.tabBtn.tabBtnActive {
  background: var(--color-primary, #59ab66);
  border-color: var(--color-primary, #59ab66);
  color: #fff;
}

/* Garantir que filhos também herdem */
.tabBtn.tabBtnActive span,
.tabBtn.tabBtnActive i {
  color: #fff;
}
```

Repetir o seletor composto dentro de cada `@media` onde `.tabBtn` é redefinido:

```css
@media (max-width: 480px) {
  .tabBtn {
    color: #555;
  }
  .tabBtn.tabBtnActive {
    color: #fff;
  }
  .tabBtn.tabBtnActive span,
  .tabBtn.tabBtnActive i {
    color: #fff;
  }
}
```

---

## Pattern: Cards seletores + Detail Panel

Padrão validado em produção para seções com múltiplos cenários/personas:

- Cards com imagem são **seletores visuais** — o card inteiro é clicável, sem botão interno
- Ao clicar, o conteúdo detalhado aparece num **detail panel fixo abaixo dos cards**
- No mobile, usar `scrollIntoView` com delay para rolar até o painel após o React re-renderizar

```tsx
function handlePersonaSelect(persona: Persona) {
  setActivePersona(persona);
  if (window.innerWidth <= 768) {
    setTimeout(() => {
      detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}
```

- O card ativo recebe uma seta indicadora (triângulo CSS) apontando para o painel:

```css
.cardIndicator {
  height: 0;
  width: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  margin: 0 auto;
}
.cardActive .cardIndicator {
  border-top: 14px solid var(--color-primary, #59ab66);
}
```

---

## Hero Slider — mobile

O `.content` precisa de `padding` lateral suficiente para não sobrepor os botões prev/next:

```css
@media (max-width: 768px) {
  .content {
    padding: 0 60px; /* espaço para os botões nav nas laterais */
  }
  .navBtn { width: 36px; height: 36px; }
  .navPrev { left: 8px; }
  .navNext { right: 8px; }
}
```

---

## Pattern: Seção com overlay verde diagonal (HowToUseSection / AboutSection)

Background com `clip-path` diagonal, overlay colorido cobrindo metade da seção, e dois triângulos decorativos.

### Estrutura JSX obrigatória

```tsx
<div className={styles.backgroundLayers}>
  <div className={`${styles.triangleOverlay} ${styles.topRight}`}></div>
  <div
    className={styles.imageBg}
    style={{ backgroundImage: 'url(/caminho/imagem.jpg)' }}
  >
    <div className={styles.overlayBgGreen}></div>
  </div>
  <div className={`${styles.triangleOverlay} ${styles.bottomRight}`}></div>
</div>
```

### CSS — valores críticos

O percentual `X%` define onde a diagonal corta a seção. O mesmo valor deve ser usado em **três lugares** para manter coerência visual:

1. `clip-path` do `.imageBg` — ponto da diagonal
2. `width` do `.overlayBgGreen` — largura do overlay colorido
3. `clip-path` dos `.topRight` e `.bottomRight` — ponta do triângulo decorativo

```css
/* X = 65% neste projeto (ajustável) */

.imageBg {
  clip-path: polygon(0% 120px, X% 60px, 100% 0%, 100% 100%, X% calc(100% - 60px), 0% calc(100% - 120px));
}

.overlayBgGreen {
  position: absolute;
  left: 0; top: 0;
  width: X%;   /* DEVE ser igual ao ponto da diagonal acima */
  height: 100%;
  background-color: rgba(83, 151, 96, 0.9);
}

.topRight {
  clip-path: polygon(X% 60px, 100% 0%, 100% 120px);  /* DEVE ser igual */
  background: rgba(255, 255, 255, 0.65);
}

.bottomRight {
  clip-path: polygon(X% 60px, 100% 0%, 100% 120px);  /* DEVE ser igual */
  background: rgba(255, 255, 255, 0.65);
  height: 120px;
  top: auto;
  bottom: 0;
}
```

> Se alterar o percentual da diagonal, atualizar os três lugares simultaneamente. Caso contrário o triângulo decorativo fica desalinhado com o overlay.

### Contraste de texto sobre overlay colorido

Sempre usar a prop `light` no `SectionTitle` quando o texto estiver sobre fundo verde:

```tsx
<SectionTitle title="TÍTULO" subtitle="..." align="left" light />
```

CTAs e microcopy também precisam de cor clara:

```css
.ctaMicrocopy { color: rgba(255, 255, 255, 0.85); }
.ctaSecondary { color: #fff; border-bottom: 1px solid rgba(255, 255, 255, 0.5); }
.ctaMicrocopySecondary { color: rgba(255, 255, 255, 0.7); }
```

### Mobile — overlay cobre 100% para garantir legibilidade

No mobile o overlay diagonal some (a seção vira coluna única) e o texto pode ficar sobre a foto de fundo. Solução: expandir o overlay para 100% com opacidade maior.

```css
@media (max-width: 991px) {
  .overlayBgGreen {
    width: 100%;
    background-color: rgba(83, 151, 96, 0.95);
  }
}
```

---

## Pattern: Foto sem fundo (PNG recortado) como elemento de seção

Foto de pessoa/família em PNG com fundo transparente integra visualmente com o background da seção, criando efeito de "presença no ambiente".

**Funciona melhor quando:**
- A foto está em posição retrato (portrait), centralizada
- O sujeito está deslocado para o lado onde o background aparece (fora do overlay colorido)
- O background da seção tem textura/ambiente (não cor sólida)

**Cuidados:**
- Usar `object-fit: cover` e definir altura mínima para não distorcer
- No mobile, a foto aparece acima do conteúdo (`flex-direction: column-reverse`)
- Garantir que o overlay cubra 100% no mobile para o texto não competir com a foto

---

## Layout 55/45 com overlay colorido — alinhamento crítico

Quando o `contentCol` tem `55%` e o overlay cobre `65%`, os cards podem ultrapassar a área colorida. Regra:

- `contentCol` deve ter `max-width` ≤ ao percentual do overlay
- Usar `padding-right` interno no `contentCol` para criar respiro antes da diagonal
- Nunca usar `gap` no `.row` sem descontar do `flex-basis` das colunas

```css
.contentCol {
  flex: 0 0 65%;
  max-width: 65%;
  padding-right: 40px;  /* respiro antes da diagonal */
  box-sizing: border-box;
}
```

---

## Pattern: Card destacado + cards laterais (ProjectsSection)

Layout assimétrico com 1 card principal (58% largura) e N cards menores em coluna (42%). Ideal para seções de "projetos de referência" ou prova social com hierarquia visual.

### Estrutura JSX

```tsx
<div className={styles.grid}>
  {/* Card destacado */}
  <article className={styles.featured}>
    <div className={styles.featuredImageWrap}>
      <img ... className={styles.featuredImage} />
      <span className={styles.badge}>🏠 Título do Badge</span>
      <span className={styles.imageCredit}>Foto: Nome do Autor</span>
    </div>
    <div className={styles.featuredContent}>
      <h3 className={styles.featuredTitle}>
        Título
        <span className={styles.featuredSubtitle}>Subtítulo</span>
      </h3>
      <ul className={styles.benefits}>{/* bullets */}</ul>
      <blockquote className={styles.quote}>
        <p>"Depoimento"</p>
        <cite>— Nome, Local</cite>
      </blockquote>
    </div>
  </article>

  {/* Cards menores em coluna */}
  <div className={styles.sideCards}>
    {items.map(card => (
      <article className={styles.sideCard}>
        <div className={styles.sideImageWrap}>
          <img ... className={styles.sideImage} />
          {/* NÃO usar badge aqui — o título ao lado já cumpre esse papel */}
        </div>
        <div className={styles.sideContent}>
          <h4 className={styles.sideTitle}>
            {card.emoji} {card.title}
            <span className={styles.sideSubtitle}>{card.subtitle}</span>
          </h4>
          {/* bullets + quote */}
        </div>
      </article>
    ))}
  </div>
</div>
```

### CSS crítico

```css
.grid {
  display: flex;
  gap: 24px;
  align-items: stretch;
}

.featured {
  flex: 0 0 58%;
  max-width: 58%;
}

.sideCards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sideCard {
  display: flex;        /* imagem à esquerda, conteúdo à direita */
  flex: 1;
}

.sideImageWrap {
  flex: 0 0 140px;     /* largura fixa da imagem lateral */
}

.sideImage {
  width: 140px;
  height: 100%;
  object-fit: cover;
}

/* Mobile: tudo em coluna única */
@media (max-width: 768px) {
  .grid { flex-direction: column; }
  .featured { flex: none; max-width: 100%; }
  .sideCard { flex-direction: column; }
  .sideImage { width: 100%; height: 160px; }
}
```

### Regra sobre badges em cards laterais

**Não usar badge com `position: absolute` sobre imagens de largura fixa e pequena.** O texto longo ultrapassa a imagem e sobrepõe o conteúdo ao lado. Alternativas:

1. Remover o badge e colocar o emoji + título no `sideTitle` (solução adotada)
2. Se quiser badge, usar `right: 8px` + `text-overflow: ellipsis` — mas isso esconde informação

---

## Timeline vertical no mobile — centralização

Quando uma timeline horizontal (desktop) vira coluna no mobile, o padrão correto é:

```css
@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    align-items: stretch;      /* NÃO usar align-items: center */
    width: fit-content;        /* encolhe para o tamanho do conteúdo */
    min-width: 280px;
    max-width: 400px;
    margin-left: auto;         /* centraliza o bloco na página */
    margin-right: auto;
  }

  .timelineItem {
    flex-direction: row;       /* círculo à esquerda, texto à direita */
    align-items: flex-start;
    width: 100%;
    gap: 16px;
  }

  .timelineStep {
    flex-direction: column;
    align-items: center;
    width: 44px;               /* largura fixa = diâmetro do círculo */
    flex-shrink: 0;
  }

  .stepLine {
    position: static;          /* linha vertical entre os itens */
    width: 2px;
    height: 16px;
    margin-top: 4px;
  }

  .stepContent {
    text-align: left;          /* texto alinhado à esquerda do círculo */
  }
}
```

**Também garantir que o container pai da timeline tenha `text-align: center`** para que o título e notas de rodapé fiquem centralizados enquanto o bloco da timeline usa `margin: auto`.

---

## Botões CTA no mobile — evitar overflow horizontal

Botões com `white-space: nowrap` e `min-width` fixo causam scroll horizontal em telas pequenas. Regra:

```css
@media (max-width: 480px) {
  /* Selecionar pelas classes globais do ThemeBtn, não por :global(.theme-btn) */
  .ctaContainer :global(.btn-style-one),
  .ctaContainer :global(.btn-style-two),
  .ctaContainer :global(.btn-style-three) {
    white-space: normal;
    word-break: break-word;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

**Importante:** O `ThemeBtn` aplica a variante como classe global direta (ex: `btn-style-one`), não via CSS Module. O seletor `:global(.theme-btn)` não funciona — usar `:global(.btn-style-one)` etc.

---

## SectionTitle — tamanho de fonte responsivo

O componente `SectionTitle` usa `font-size: 60px` por padrão sem breakpoints. Em mobile isso causa overflow e quebra de linha indesejada. Adicionar em `SectionTitle.module.css`:

```css
@media (max-width: 768px) {
  .sectionTitle h2 { font-size: 40px; }
}

@media (max-width: 480px) {
  .sectionTitle h2 { font-size: 30px; }
}
```

Essa alteração afeta todos os títulos de seção do site — o que é o comportamento correto.

---

## ScrollToTop — não usar overflow-x: hidden no body para corrigir scroll horizontal

Adicionar `overflow-x: hidden` no `html, body` resolve o scroll horizontal mas quebra o botão `ScrollToTop` (que usa `position: fixed`), fazendo-o ficar "preso" dentro do conteúdo em vez de flutuar sobre a viewport.

**Solução correta para scroll horizontal:** identificar e corrigir o elemento que causa o overflow (geralmente botão com `min-width` fixo ou elemento com largura maior que a viewport), não mascarar com `overflow: hidden` no body.
