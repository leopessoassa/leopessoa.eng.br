import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import styles from './HowItWorksSection.module.css';

const etapas = [
  {
    id: '01',
    title: 'Inspiração',
    desc: 'Entendemos sua visão criativa e descobrimos como a tecnologia pode potencializá-la.',
    bullets: [
      'Conversa estratégica',
      'Análise do conceito',
      'Definição de experiências',
    ],
  },
  {
    id: '02',
    title: 'Criação',
    desc: 'Desenvolvemos a solução técnica que materializa sua visão arquitetônica.',
    bullets: [
      'Integração BIM/AutoCAD',
      'Automação inteligente',
      'Apresentação vendedora',
    ],
  },
  {
    id: '03',
    title: 'Realização',
    desc: 'Acompanhamos cada detalhe para garantir que sua visão se torne realidade.',
    bullets: [
      'Suporte especializado',
      'Qualidade assegurada',
      'Prazos respeitados',
    ],
  },
  {
    id: '04',
    title: 'Encantamento',
    desc: 'Cliente apaixonado pelo projeto e você reconhecido pela excelência.',
    bullets: [
      'Experiência completa',
      'Cliente educado',
      'Referências garantidas',
    ],
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="processo">
      {/* Background Layers — grafismo triangular geométrico */}
      <div className={styles.backgroundLayers}>
        <div className={styles.triangleOverlay}></div>
        <div className={styles.imageBg}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.container}>

          <SectionTitle
            title="COMO FUNCIONA NOSSA PARCERIA"
            subtitle="Uma parceria estratégica que transforma sua visão criativa em experiências inesquecíveis."
            align="center"
          />

          {/* Linha do tempo horizontal */}
          <div className={styles.timeline}>
            {etapas.map((etapa, index) => (
              <div key={etapa.id} className={styles.etapa}>
                {/* Conector entre etapas */}
                {index < etapas.length - 1 && (
                  <div className={styles.connector} aria-hidden="true" />
                )}

                {/* Número ordinal */}
                <div className={styles.etapaHead}>
                  <span className={styles.etapaNum}>{etapa.id}</span>
                  <div className={styles.etapaLine} aria-hidden="true" />
                </div>

                <h3 className={styles.etapaTitle}>{etapa.title}</h3>
                <p className={styles.etapaDesc}>{etapa.desc}</p>

                <ul className={styles.bulletList}>
                  {etapa.bullets.map((b) => (
                    <li key={b} className={styles.bulletItem}>
                      <span className={styles.bulletBar} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA — banner petróleo */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>Da conversa à entrega</span>
              <h3 className={styles.ctaTitle}>Projetos extraordinários em 15 dias</h3>
              <p className={styles.ctaDesc}>
                Da primeira conversa até a apresentação que encanta seu cliente.
              </p>
            </div>
            <div className={styles.ctaAction}>
              <ThemeBtn variant="btn-style-one" href="/#contato">
                Vamos criar juntos
              </ThemeBtn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
