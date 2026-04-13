import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { whatsappUrl } from '@/utils/whatsapp';
import styles from './AboutSection.module.css';

const diferenciais = [
  {
    id: '01',
    title: 'Visão Técnica + Criativa',
    bullets: [
      'Engenheiro que entende de design e experiência do usuário',
      'Integração total com seu workflow BIM & AutoCAD',
      'Seus arquivos, nossa expertise',
    ],
  },
  {
    id: '02',
    title: 'Mentalidade Estratégica',
    bullets: [
      'MBA FGV — cada projeto é um investimento',
      'ROI que convence na primeira reunião',
      'Valorização patrimonial mensurável',
    ],
  },
  {
    id: '03',
    title: 'Automação que Encanta',
    bullets: [
      'Tecnologia invisível que cria experiências memoráveis',
      'Pós-graduação em sistemas que realmente impressionam',
      'Pai de família que sabe o que emociona clientes',
    ],
  },
];

const porqueArquitetos = [
  {
    id: 1,
    title: 'Falo sua língua',
    desc: 'Entendo sua visão criativa e sei como materializá-la tecnicamente',
  },
  {
    id: 2,
    title: 'Penso como empresário',
    desc: 'Cada solução é pensada para gerar valor e diferenciação real',
  },
  {
    id: 3,
    title: 'Entendo pessoas reais',
    desc: 'Pai de família que sabe o que realmente emociona os clientes',
  },
];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="sobre">
      {/* Background Layers */}
      <div className={styles.backgroundLayers}>
        <div className={`${styles.triangleOverlay} ${styles.topRight}`}></div>
        <div
          className={styles.imageBg}
          style={{ backgroundImage: 'url(/images/equipamentos-eletricos-sobre-projeto-v2.webp)' }}
        >
          <div className={styles.overlayBgGreen}></div>
        </div>
        <div className={`${styles.triangleOverlay} ${styles.bottomRight}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>

          {/* ── Coluna de conteúdo ── */}
          <div className={styles.contentCol}>
            <SectionTitle
              title="CONHEÇA LEO PESSOA"
              subtitle="O parceiro que potencializa sua criatividade e transforma projetos em experiências que marcam carreiras."
              align="left"
              light
            />

            {/* Diferenciais com numeração ordinal */}
            <ul className={styles.diferencialList}>
              {diferenciais.map((d) => (
                <li key={d.id} className={styles.diferencialItem}>
                  <span className={styles.diferencialNum}>{d.id}</span>
                  <div className={styles.diferencialContent}>
                    <div className={styles.diferencialLine} aria-hidden="true" />
                    <h5 className={styles.diferencialTitle}>{d.title}</h5>
                    <ul className={styles.bulletList}>
                      {d.bullets.map((b, i) => (
                        <li key={i} className={styles.bulletItem}>
                          <span className={styles.bulletBar} aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Missão — citação tipográfica */}
            <blockquote className={styles.missao}>
              <p className={styles.missaoText}>
                "Ajudar arquitetos e designers de interiores a impressionar seus clientes com automação que funciona, vende e valoriza o imóvel. Sem complicação, só resultados."
              </p>
            </blockquote>

            {/* CTAs */}
            <div className={styles.ctaBox}>
              <a
                href={whatsappUrl('Oi Leo! Sou arquiteto(a) e gostaria de conversar sobre uma parceria em automação residencial.')}
                className={styles.ctaPrimary}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com Leo via WhatsApp"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" />
                Vamos conversar sobre uma parceria
              </a>
              <p className={styles.ctaMicrocopy}>
                Sem compromisso. Só uma conversa entre profissionais. Respondo em até 2 horas.
              </p>
              <a href="/#contato" className={styles.ctaSecondary}>
                Prefiro preencher um formulário →
              </a>
              <p className={styles.ctaMicrocopySecondary}>João Pessoa — PB · CREA-PB Ativo</p>
            </div>
          </div>

          {/* ── Coluna da foto ── */}
          <div className={styles.imageCol}>
            <div className={styles.photoWrapper}>
              <img
                src="/images/leonardo-pessoa.webp"
                alt="Leonardo Pessoa — Engenheiro Eletricista, especialista em automação residencial"
                className={styles.photo}
              />
            </div>

            {/* Por que arquitetos escolhem Leo */}
            <div className={styles.porqueBox}>
              <p className={styles.porqueEyebrow}>Por que arquitetos escolhem trabalhar comigo</p>
              <ul className={styles.porqueList}>
                {porqueArquitetos.map((item) => (
                  <li key={item.id} className={styles.porqueItem}>
                    <div className={styles.porqueBar} aria-hidden="true" />
                    <div>
                      <h5 className={styles.porqueItemTitle}>{item.title}</h5>
                      <p className={styles.porqueItemDesc}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
