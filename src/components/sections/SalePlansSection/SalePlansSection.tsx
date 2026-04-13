import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import { whatsappUrl } from '@/utils/whatsapp';
import styles from './SalePlansSection.module.css';

interface PlanFeature {
  text: string;
}

interface Plan {
  id: number;
  name: string;
  tagline: string;
  icon: string;
  features: PlanFeature[];
  idealFor: string[];
  priceRange: string;
  installments: string;
  bonus?: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: 1,
    name: 'ESSENCIAL',
    tagline: 'Para Começar',
    icon: 'flaticon-lamp-1',
    features: [
      { text: 'Iluminação inteligente (principais cômodos)' },
      { text: 'App de controle centralizado' },
      { text: 'WiFi ou Zigbee (conforme projeto)' },
      { text: 'Instalação + testes' },
      { text: 'Suporte 1º ano incluso' },
    ],
    idealFor: ['Apartamentos', 'Primeira automação', 'Orçamento enxuto'],
    priceRange: 'R$ 2.500 – R$ 3.500',
    installments: 'Parcelado em até 10x',
  },
  {
    id: 2,
    name: 'CONFORTO',
    tagline: 'O Melhor Custo-Benefício',
    icon: 'flaticon-home-1',
    features: [
      { text: 'Iluminação inteligente (todos os cômodos)' },
      { text: 'Controle de temperatura' },
      { text: 'Segurança básica (câmera HD + sensores)' },
      { text: 'Automação de rotinas' },
      { text: 'App avançado (controla tudo)' },
      { text: 'Instalação + testes' },
      { text: 'Suporte 1º ano incluso' },
    ],
    idealFor: ['Casas pequenas e médias', 'Famílias com crianças', 'Máxima eficiência'],
    priceRange: 'R$ 5.000 – R$ 7.500',
    installments: 'Parcelado em até 10x',
    bonus: 'Economia de energia ~25%',
    featured: true,
  },
  {
    id: 3,
    name: 'PREMIUM',
    tagline: 'Solução Completa',
    icon: 'flaticon-big-trophy',
    features: [
      { text: 'Iluminação circadiana (saúde do corpo)' },
      { text: 'Controle de temperatura (precisão máxima)' },
      { text: 'Segurança profissional (4+ câmeras)' },
      { text: 'Sonorização integrada' },
      { text: 'Automação inteligente (aprende sua rotina)' },
      { text: 'Controle por voz' },
      { text: 'Instalação + testes' },
      { text: 'Suporte 1º ano incluso' },
    ],
    idealFor: ['Casas maiores', 'Automação máxima', 'Segurança crítica'],
    priceRange: 'Conforme seu projeto',
    installments: 'Parcelado em até 10x',
    bonus: 'Assessoria de design inclusa',
  },
];

const comparisonRows = [
  { feature: 'Iluminação',    essencial: 'Básica',   conforto: 'Completa', premium: 'Circadiana' },
  { feature: 'Temperatura',   essencial: '—',        conforto: 'Sim',      premium: 'Sim' },
  { feature: 'Segurança',     essencial: '—',        conforto: 'Básica',   premium: 'Profissional' },
  { feature: 'Sonorização',   essencial: '—',        conforto: '—',        premium: 'Sim' },
  { feature: 'Automação IA',  essencial: '—',        conforto: '—',        premium: 'Sim' },
  { feature: 'Controle voz',  essencial: '—',        conforto: '—',        premium: 'Sim' },
  { feature: 'Suporte 1º ano',essencial: 'Incluso',  conforto: 'Incluso',  premium: 'Incluso' },
  { feature: 'Parcelamento',  essencial: 'Até 10x',  conforto: 'Até 10x',  premium: 'Até 10x' },
];

export default function SalePlansSection() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className={styles.section} id="planos">
      {/* Background layers — verde com grafismo */}
      <div className={styles.backgroundLayers}>
        <div className={`${styles.triangleOverlay} ${styles.topLeft}`}></div>
        <div className={`${styles.triangleOverlay} ${styles.topRight}`}></div>
        <div
          className={styles.imageBg}
          style={{ backgroundImage: 'url(/images/background/27.webp)' }}
        >
          <div className={styles.overlayBgGreen}></div>
        </div>
        <div className={`${styles.triangleOverlay} ${styles.bottomLeft}`}></div>
        <div className={`${styles.triangleOverlay} ${styles.bottomRight}`}></div>
      </div>

      <div className={`auto-container ${styles.contentWrapper}`}>
        <SectionTitle
          title="PLANOS ACESSÍVEIS"
          subtitle="Cada orçamento. Cada sonho. Uma solução. Sem surpresas, sem valores escondidos."
          align="center"
          light
        />

        {/* 3 Cards */}
        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ''}`}
            >
              {plan.featured && (
                <div className={styles.popularBadge}>
                  <i className="fa fa-star" aria-hidden="true" /> Mais Popular
                </div>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.iconWrap}>
                  <span className={`icon ${plan.icon}`} aria-hidden="true" />
                </div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.listLabel}>O que inclui:</p>
                <ul className={styles.featureList}>
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <i className="fa fa-check" aria-hidden="true" />
                      {f.text}
                    </li>
                  ))}
                </ul>

                <p className={styles.listLabel}>Ideal para:</p>
                <ul className={styles.idealList}>
                  {plan.idealFor.map((item, i) => (
                    <li key={i}>
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.priceRange}>{plan.priceRange}</div>
                <div className={styles.installments}>
                  <i className="far fa-calendar-alt" aria-hidden="true" /> {plan.installments}
                </div>
                {plan.bonus && (
                  <div className={styles.bonus}>
                    <i className="fa fa-bolt" aria-hidden="true" /> {plan.bonus}
                  </div>
                )}
                <div className={styles.ctaWrap}>
                  <ThemeBtn variant="btn-style-one" href={whatsappUrl(`Oi Leo! Gostaria de conversar sobre o plano ${plan.name}.`)} external>
                    Solicitar Orçamento
                  </ThemeBtn>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa Customizado */}
        <div className={styles.customBand}>
          <div className={styles.customLeft}>
            <div className={styles.customIconWrap}>
              <i className="fa fa-sliders-h" aria-hidden="true" />
            </div>
            <div className={styles.customText}>
              <h3 className={styles.customTitle}>CUSTOMIZADO</h3>
              <p className={styles.customSubtitle}>Exatamente o que você quer</p>
              <p className={styles.customDesc}>
                Não encontrou o que precisa nos planos acima? Sem problema. Montamos juntos —
                você lista tudo que gostaria e a gente constrói a solução perfeita para sua casa.
                Sem pacote fechado. Sem decisão apressada.
              </p>
              <ul className={styles.customFeatures}>
                <li><i className="fa fa-check" aria-hidden="true" /> Você escolhe cada detalhe</li>
                <li><i className="fa fa-check" aria-hidden="true" /> Cabeamento estruturado (Keepin)</li>
                <li><i className="fa fa-check" aria-hidden="true" /> Expansão planejada (roadmap)</li>
                <li><i className="fa fa-check" aria-hidden="true" /> Nichos especiais (TEA, idosos, reformas)</li>
              </ul>
            </div>
          </div>
          <div className={styles.customRight}>
            <div className={styles.customPrice}>Investimento conforme seu escopo</div>
            <div className={styles.customInstallments}>
              <i className="far fa-calendar-alt" aria-hidden="true" /> Parcelado em até 10x
            </div>
            <ThemeBtn variant="btn-style-two" href={whatsappUrl('Oi Leo! Gostaria de conversar sobre um plano Customizado.')} size="large" external>
              Agendar Conversa Gratuita
            </ThemeBtn>
            <p className={styles.customMicro}>Conversamos sem pressão. Você escolhe.</p>
          </div>
        </div>

        {/* Toggle Comparativo */}
        <div className={styles.comparisonSection}>
          <button
            className={styles.toggleBtn}
            onClick={() => setShowComparison((v) => !v)}
            aria-expanded={showComparison}
          >
            <i className={`fa fa-${showComparison ? 'minus' : 'plus'}-circle`} aria-hidden="true" />
            {showComparison ? 'Ocultar comparativo' : 'Ver comparativo completo'}
          </button>

          {showComparison && (
            <div className={styles.tableWrap}>
              <table className={styles.compTable}>
                <thead>
                  <tr>
                    <th>Recurso</th>
                    <th>Essencial</th>
                    <th className={styles.thFeatured}>Conforto</th>
                    <th>Premium</th>
                    <th>Customizado</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i}>
                      <td className={styles.tdFeature}>{row.feature}</td>
                      <td>{row.essencial}</td>
                      <td className={styles.tdFeatured}>{row.conforto}</td>
                      <td>{row.premium}</td>
                      <td className={styles.tdCustom}>Você escolhe</td>
                    </tr>
                  ))}
                  <tr className={styles.trPrice}>
                    <td className={styles.tdFeature}>Investimento</td>
                    <td>R$ 2.500 – 3.500</td>
                    <td className={styles.tdFeatured}>R$ 5.000 – 7.500</td>
                    <td>R$ 10.000 – 15.000</td>
                    <td className={styles.tdCustom}>Personalizado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* CTA Final */}
        <div className={styles.finalCta}>
          <p className={styles.finalCtaText}>Dúvida sobre qual plano escolher?</p>
          <ThemeBtn variant="btn-style-one" href={whatsappUrl('Oi Leo! Tenho dúvidas sobre qual plano é adequado para mim.')} size="large" external>
            Agendar Consulta Gratuita
          </ThemeBtn>
          <p className={styles.finalCtaMicro}>Conversamos sem pressão. Você escolhe.</p>
        </div>
      </div>  {/* .contentWrapper / auto-container */}
    </section>
  );
}
