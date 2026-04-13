import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './GettingStartedSection.module.css';

interface Step {
  id: string;
  title: string;
  cost: string;
  time: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

interface FaqItem {
  id: number;
  question: string;
  shortAnswer: string;
  detail: string;
}

const steps: Step[] = [
  {
    id: '01',
    title: 'Você traz o projeto',
    cost: 'Sem custo',
    time: 'Quando quiser',
    bullets: [
      'Envie seus arquivos BIM/AutoCAD',
      'Conte sobre as necessidades do cliente',
      'Analisamos juntos o que é possível',
      'BIM & AutoCAD compatível',
    ],
    image: '/images/projetos-e-notebooks-versao-1.webp',
    imageAlt: 'Arquiteto trazendo projeto para análise',
  },
  {
    id: '02',
    title: 'Eu traduzo a técnica',
    cost: 'Incluso',
    time: 'Linguagem que vende',
    bullets: [
      'Automação complexa em benefícios claros',
      'Orçamento realista com ROI demonstrável',
      'Apresentação que o cliente entende',
      'Argumentos que convencem na reunião',
    ],
    image: '/images/homem-sentado-e-mulher-em-pe-conversando-sobre-projeto-arquitetonico-na-mesa.webp',
    imageAlt: 'Leo traduzindo a técnica para o cliente',
  },
  {
    id: '03',
    title: 'Vendemos juntos',
    cost: 'Parceria',
    time: 'Você lidera',
    bullets: [
      'Apresentação conjunta com você no comando',
      'Você lidera o design, eu explico a automação',
      'Cliente vê valor e aprova',
      'Diferencial que fecha negócio',
    ],
    image: '/images/aperto-de-mao-colaboracao.webp',
    imageAlt: 'Parceria na apresentação ao cliente',
  },
  {
    id: '04',
    title: 'Executamos',
    cost: 'Conforme escopo',
    time: 'No prazo',
    bullets: [
      'Você cuida do design, eu da automação',
      'Comunicação constante entre nós',
      'Entrega no prazo combinado',
      'Cliente impressionado no resultado',
    ],
    image: '/images/equipamentos-eletricos-sobre-projeto-v3.webp',
    imageAlt: 'Execução integrada do projeto',
  },
];

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Preciso ter experiência com automação?',
    shortAnswer: 'Não. É exatamente para isso que estou aqui.',
    detail:
      'Você foca no que faz de melhor — design e arquitetura. Eu cuido de toda a parte técnica de automação, desde o projeto elétrico até a programação dos sistemas. Você só precisa trazer sua visão criativa.',
  },
  {
    id: 2,
    question: 'Como funciona a remuneração da parceria?',
    shortAnswer: 'Conversamos caso a caso, sem tabela engessada.',
    detail:
      'Cada projeto tem suas particularidades. Podemos trabalhar com comissão sobre o valor da automação, honorários fixos por projeto, ou um modelo híbrido. O importante é que seja justo para os dois lados e que o cliente receba o melhor resultado.',
  },
  {
    id: 3,
    question: 'Você atende fora de João Pessoa?',
    shortAnswer: 'Projetos remotos para toda a Paraíba.',
    detail:
      'Atendimento presencial na Grande João Pessoa. Para projetos em outras cidades da Paraíba, trabalhamos remotamente com visitas pontuais quando necessário. O projeto elétrico e de automação pode ser desenvolvido 100% online.',
  },
  {
    id: 4,
    question: 'Quanto tempo leva para desenvolver o projeto?',
    shortAnswer: 'Projetos extraordinários em 15 dias.',
    detail:
      'Da primeira conversa até a apresentação que encanta seu cliente, em média 15 dias. Projetos mais complexos podem levar um pouco mais, mas sempre com prazo combinado e comunicação constante.',
  },
  {
    id: 5,
    question: 'Você trabalha com qualquer tipo de projeto?',
    shortAnswer: 'Residencial alto padrão é nossa especialidade.',
    detail:
      'Foco em projetos residenciais de médio e alto padrão — casas, apartamentos e condomínios. Iluminação, climatização, som ambiente, persianas, segurança e redes. Se o seu cliente quer uma experiência diferenciada, é exatamente o que entregamos.',
  },
  {
    id: 6,
    question: 'E se o cliente tiver dúvidas técnicas na reunião?',
    shortAnswer: 'Estou lá para responder. Você não fica sozinho.',
    detail:
      'Posso participar da apresentação ao cliente — presencialmente ou por vídeo. Explico a automação em linguagem acessível, mostro cases reais e respondo qualquer dúvida técnica. Você lidera o design, eu cuido da parte técnica.',
  },
];

export default function GettingStartedSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function toggleFaq(id: number) {
    setOpenFaq(openFaq === id ? null : id);
  }

  return (
    <section className={styles.section} aria-label="Como começar">
      <div className={styles.container}>

        <SectionTitle
          title="COMEÇAR É SIMPLES"
          subtitle="Processo colaborativo que você já conhece, só que agora com expertise elétrica integrada."
          align="center"
        />

        {/* ── Steps alternados ── */}
        <div className={styles.stepsList}>
          {steps.map((step, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={step.id}
                className={`${styles.stepRow} ${isReversed ? styles.stepRowReversed : ''}`}
              >
                {/* Imagem */}
                <div className={styles.stepImageWrap}>
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    loading="lazy"
                    className={styles.stepImage}
                  />
                </div>

                {/* Conteúdo */}
                <div className={styles.stepContent}>
                  <div className={styles.stepMeta}>
                    <span className={styles.stepCost}>{step.cost}</span>
                    <span className={styles.stepMetaSep} aria-hidden="true" />
                    <span className={styles.stepTime}>{step.time}</span>
                  </div>
                  <div className={styles.stepHead}>
                    <span className={styles.stepNum}>{step.id}</span>
                    <div className={styles.stepLine} aria-hidden="true" />
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <ul className={styles.bulletList}>
                    {step.bullets.map((b) => (
                      <li key={b} className={styles.bulletItem}>
                        <span className={styles.bulletBar} aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.stepsNote}>
          Simples assim. Você continua sendo o protagonista do projeto.
        </p>

        {/* ── FAQ ── */}
        <div className={styles.faqSection}>
          <p className={styles.faqEyebrow}>Dúvidas frequentes</p>
          <ul className={styles.faqList}>
            {faqItems.map((item) => (
              <li key={item.id} className={styles.faqItem}>
                <button
                  className={`${styles.faqBtn} ${openFaq === item.id ? styles.faqBtnOpen : ''}`}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={openFaq === item.id}
                >
                  <span className={styles.faqQuestion}>{item.question}</span>
                  <span className={styles.faqShort}>{item.shortAnswer}</span>
                  <span className={styles.faqToggle} aria-hidden="true">
                    {openFaq === item.id ? '−' : '+'}
                  </span>
                </button>
                {openFaq === item.id && (
                  <div className={styles.faqAnswer}>
                    <p>{item.detail}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
