import styles from './KeepinSection.module.css';
import { whatsappUrl } from '@/utils/whatsapp';

const beneficios = [
  {
    id: '01',
    title: 'Suporte no canteiro',
    desc: 'Assistência técnica presencial durante a obra. Sem fila de SAC nacional, sem esperar peça de fora.',
  },
  {
    id: '02',
    title: 'Projeto sem restrição',
    desc: 'Compatível com qualquer especificação elétrica — cabeado, híbrido ou retrofit. Você projeta, a gente integra.',
  },
  {
    id: '03',
    title: 'Orçamento previsível',
    desc: 'Peças sempre disponíveis no estado. Sem variação cambial, sem surpresa de prazo para o seu cliente.',
  },
];

export default function KeepinSection() {
  function handleCtaClick() {
    const url = whatsappUrl(
      'Olá Leo! Tenho interesse em incluir automação Keepin no meu próximo projeto. Podemos conversar?'
    );
    window.open(url, '_blank', 'noopener');
  }

  return (
    <section className={styles.section} id="keepin" aria-label="Automação Keepin">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Representante exclusivo na Paraíba</p>
          <h2 className={styles.title}>Automação Keepin no seu projeto</h2>
          <div className={styles.titleLine} aria-hidden="true" />
          <p className={styles.intro}>
            Módulos brasileiros de alta confiabilidade para iluminação, climatização,
            persianas e segurança. Integração certificada com suporte local
            — sem depender de importação.
          </p>
        </div>

        {/* Grid: imagem + benefícios */}
        <div className={styles.grid}>

          {/* Imagem / Logo */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <img
                src="/images/keepin-logo.webp"
                alt="Keepin — Automação Residencial"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <p className={styles.imageCaption}>
              Único integrador certificado Keepin no estado da Paraíba.
            </p>
          </div>

          {/* Benefícios */}
          <div className={styles.beneficiosCol}>
            <ul className={styles.beneficioList}>
              {beneficios.map((b) => (
                <li key={b.id} className={styles.beneficioItem}>
                  <span className={styles.num}>{b.id}</span>
                  <div>
                    <h4 className={styles.beneficioTitle}>{b.title}</h4>
                    <p className={styles.beneficioDesc}>{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer com CTAs */}
        <div className={styles.footer}>
          <button
            type="button"
            onClick={handleCtaClick}
            className={styles.ctaPrimary}
          >
            Incluir Keepin no próximo projeto →
          </button>
          <a
            href="https://keepin.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
            aria-label="Visitar site oficial da Keepin (abre em nova aba)"
          >
            Sobre a tecnologia ↗
          </a>
        </div>

      </div>
    </section>
  );
}
