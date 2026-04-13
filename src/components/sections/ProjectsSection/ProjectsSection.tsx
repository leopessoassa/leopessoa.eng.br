import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import styles from './ProjectsSection.module.css';

interface Spec {
  label: string;
  value: string;
}

interface Project {
  id: number;
  type: string;
  title: string;
  location: string;
  desc: string;
  image: string;
  imageAlt: string;
  specs: Spec[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    type: 'Casa em condomínio',
    title: 'Condomínio Ville Cristal',
    location: 'Gravatá — PE',
    desc: 'Uma residência que impressiona desde a chegada. Automação inteligente que se adapta ao estilo de vida da família, criando momentos únicos em cada ambiente.',
    image: '/images/projeto-residencial-cond.-ville-cristal-gravata-pe.webp',
    imageAlt: 'Residência Alto Padrão no Condomínio Ville Cristal — Gravatá, PE',
    specs: [
      { label: 'Área', value: '400m²' },
      { label: 'Circuitos', value: '70' },
      { label: 'Tecnologia', value: 'Cabeada' },
    ],
    tags: ['Projeto Elétrico', 'Automação', 'Iluminação', 'Persianas', 'Som Ambiente', 'Climatização', 'Rede Wifi'],
  },
  {
    id: 2,
    type: 'Casa em condomínio',
    title: 'Condomínio Alphaville Paraíba',
    location: 'Bayeux — PB',
    desc: 'Um projeto que redefine o conceito de casa inteligente. Tecnologia e design em perfeita harmonia.',
    image: '/images/projeto-residencial-cond.-alphaville-paraiba.webp',
    imageAlt: 'Residência Alto Padrão no Condomínio Alphaville Paraíba — Bayeux, PB',
    specs: [
      { label: 'Área', value: '220m²' },
      { label: 'Circuitos', value: '35' },
      { label: 'Tecnologia', value: 'Cabeada' },
    ],
    tags: ['Projeto Elétrico', 'Automação', 'Iluminação', 'Persianas', 'Som Ambiente', 'Climatização', 'Segurança'],
  },
  {
    id: 3,
    type: 'Apartamento',
    title: 'Apartamento 3 quartos',
    location: 'João Pessoa — PB',
    desc: 'Prova de que espaços menores podem ter grandes experiências. Automação discreta que transforma o cotidiano.',
    image: '/images/projeto-residencial-apartamento-3quartos-manaira-pb.webp',
    imageAlt: 'Apartamento 3 quartos com automação Zigbee em Manaíra — João Pessoa, PB',
    specs: [
      { label: 'Área', value: '84m²' },
      { label: 'Circuitos', value: '11' },
      { label: 'Tecnologia', value: 'Zigbee' },
    ],
    tags: ['Automação', 'Iluminação', 'Climatização'],
  },
];

const resultados = [
  {
    id: 1,
    stat: 'Referência',
    desc: 'Projetos que viraram referência no mercado local',
  },
  {
    id: 2,
    stat: 'Indicações',
    desc: 'Clientes que se tornaram embaixadores da marca',
  },
  {
    id: 3,
    stat: '+30%',
    desc: 'Projetos com valores acima da média de mercado',
  },
];

export default function ProjectsSection() {
  const [featured, ...secondary] = projects;

  return (
    <section className={styles.section} id="cases" aria-label="Cases Reais">
      {/* Background layers */}
      <div className={styles.backgroundLayers}>
        <div className={`${styles.triangleOverlay} ${styles.topLeft}`} />
        <div className={`${styles.triangleOverlay} ${styles.topRight}`} />
        <div
          className={styles.imageBg}
          style={{ backgroundImage: 'url(/images/background/2.webp)' }}
        >
          <div className={styles.overlayBg} />
        </div>
        <div className={`${styles.triangleOverlay} ${styles.bottomLeft}`} />
      </div>

      <div className={styles.container}>
        <SectionTitle
          title="CASES REAIS: PROJETOS QUE SE TORNARAM REFERÊNCIA"
          subtitle="Veja como a automação transformou projetos simples em experiências que impressionam e valorizam o imóvel."
          align="center"
          light
        />

        {/* ── Projeto destaque — layout horizontal ── */}
        <article className={styles.featured} aria-label={featured.title}>
          <div className={styles.featuredImage}>
            <img
              src={featured.image}
              alt={featured.imageAlt}
              loading="lazy"
              className={styles.featuredImg}
            />
          </div>
          <div className={styles.featuredContent}>
            <p className={styles.projectType}>{featured.type}</p>
            <h3 className={styles.projectTitle}>{featured.title}</h3>
            <p className={styles.projectLocation}>{featured.location}</p>
            <div className={styles.dividerLine} aria-hidden="true" />
            <p className={styles.projectDesc}>{featured.desc}</p>
            <div className={styles.specsRow}>
              {featured.specs.map((s, i) => (
                <span key={s.label} className={styles.specGroup}>
                  <span className={styles.specValue}>{s.value}</span>
                  <span className={styles.specLabel}>{s.label}</span>
                  {i < featured.specs.length - 1 && (
                    <span className={styles.specSep} aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
            <p className={styles.tagsLine}>
              {featured.tags.join(' / ')}
            </p>
          </div>
        </article>

        {/* ── Projetos secundários — grid 2 colunas ── */}
        <div className={styles.secondaryGrid}>
          {secondary.map((project) => (
            <article key={project.id} className={styles.secondaryCard} aria-label={project.title}>
              <div className={styles.secondaryImage}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className={styles.secondaryImg}
                />
              </div>
              <div className={styles.secondaryContent}>
                <p className={styles.projectType}>{project.type}</p>
                <h3 className={styles.projectTitleSm}>{project.title}</h3>
                <p className={styles.projectLocation}>{project.location}</p>
                <div className={styles.dividerLine} aria-hidden="true" />
                <p className={styles.projectDescSm}>{project.desc}</p>
                <div className={styles.specsRow}>
                  {project.specs.map((s, i) => (
                    <span key={s.label} className={styles.specGroup}>
                      <span className={styles.specValue}>{s.value}</span>
                      <span className={styles.specLabel}>{s.label}</span>
                      {i < project.specs.length - 1 && (
                        <span className={styles.specSep} aria-hidden="true" />
                      )}
                    </span>
                  ))}
                </div>
                <p className={styles.tagsLine}>
                  {project.tags.join(' / ')}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ── O que esses projetos geraram ── */}
        <div className={styles.resultados}>
          <p className={styles.resultadosEyebrow}>O que esses projetos geraram para os arquitetos</p>
          <div className={styles.resultadosGrid}>
            {resultados.map((r, i) => (
              <div key={r.id} className={styles.resultadoItem}>
                {i > 0 && <div className={styles.resultadoSep} aria-hidden="true" />}
                <span className={styles.resultadoStat}>{r.stat}</span>
                <div className={styles.resultadoLine} aria-hidden="true" />
                <p className={styles.resultadoDesc}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Próximo passo</span>
            <h3 className={styles.ctaTitle}>Seu próximo projeto pode se tornar uma referência</h3>
            <p className={styles.ctaDesc}>
              Vamos conversar sobre como transformar sua visão criativa em um projeto que marca época.
            </p>
          </div>
          <div className={styles.ctaAction}>
            <ThemeBtn variant="btn-style-one" href="/#contato" size="large">
              Quero criar um projeto memorável
            </ThemeBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
