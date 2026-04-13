import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import styles from './InspirationSection.module.css';

const dores = [
  { id: 1, text: 'Projetos bonitos, mas que não geram reação no cliente' },
  { id: 2, text: 'Cliente vê automação como luxo desnecessário' },
  { id: 3, text: 'Dificuldade para justificar o valor agregado da automação' },
  { id: 4, text: 'Concorrência oferece mais do mesmo' },
  { id: 5, text: 'Cliente não entende o retorno do investimento' },
];

const solucoes = [
  {
    id: 1,
    title: 'Projetos Memoráveis',
    desc: 'Clientes que viram fãs da sua marca',
  },
  {
    id: 2,
    title: 'Valor Tangível',
    desc: 'ROI que convence na primeira reunião',
  },
  {
    id: 3,
    title: 'Diferencial Competitivo',
    desc: 'Automação que ninguém mais oferece',
  },
  {
    id: 4,
    title: 'Vendas Facilitadas',
    desc: 'Apresentações que vendem sozinhas',
  },
  {
    id: 5,
    title: 'Clientes Encantados',
    desc: 'Referências que multiplicam seus negócios',
  },
];

const diferenciais = [
  {
    id: '01',
    title: 'BIM & AutoCAD',
    desc: 'Seus arquivos, nossa expertise. Integração total com o seu workflow desde o primeiro esboço.',
  },
  {
    id: '02',
    title: 'ROI Comprovado',
    desc: 'Valorização patrimonial mensurável. Argumentos que convencem o cliente antes da aprovação.',
  },
  {
    id: '03',
    title: 'Automação Smart',
    desc: 'Tecnologia invisível que cria experiências memoráveis. Discreta no espaço, marcante na vivência.',
  },
];

export default function InspirationSection() {
  return (
    <section className={styles.section} id="para-arquitetos">
      {/* Background Layers — efeito triangular de transição com o Hero */}
      <div className={styles.backgroundLayers}>
        <div className={styles.triangleOverlay}></div>
        <div
          className={styles.imageBg}
          style={{ backgroundImage: 'url(/images/background/1.webp)' }}
        ></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className="auto-container">

          <SectionTitle
            title="TRANSFORME PROJETOS COMUNS EM EXPERIÊNCIAS EXTRAORDINÁRIAS"
            subtitle="Seus clientes querem mais que um projeto bonito — eles querem se sentir especiais. Vamos criar essa experiência juntos."
            align="center"
          />

          {/* ── Painel principal: dores + soluções ── */}
          <div className={styles.mainPanel}>

            {/* Coluna esquerda — dores como citações tipográficas */}
            <div className={styles.doresCol}>
              <p className={styles.colLabel}>Situações que você já viveu</p>
              <ul className={styles.doresList}>
                {dores.map((d) => (
                  <li key={d.id} className={styles.doreItem}>
                    <span className={styles.doreNum}>{String(d.id).padStart(2, '0')}</span>
                    <span className={styles.doreText}>{d.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divisor vertical */}
            <div className={styles.divider} aria-hidden="true" />

            {/* Coluna direita — soluções com hierarquia tipográfica */}
            <div className={styles.solucoesCol}>
              <p className={styles.colLabel}>Como eu resolvo para você</p>
              <ul className={styles.solucoesList}>
                {solucoes.map((s) => (
                  <li key={s.id} className={styles.solucaoItem}>
                    <div className={styles.solucaoBar} aria-hidden="true" />
                    <div>
                      <h4 className={styles.solucaoTitle}>{s.title}</h4>
                      <p className={styles.solucaoDesc}>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Bloco diferencial técnico ── */}
          <div className={styles.diferencialBlock}>
            <div className={styles.diferencialIntro}>
              <span className={styles.diferencialEyebrow}>Diferencial Técnico</span>
              <h3 className={styles.diferencialTitle}>
                Não é só mais um engenheiro.<br />
                É integração total com seu workflow.
              </h3>
            </div>

            <div className={styles.diferencialGrid}>
              {diferenciais.map((d) => (
                <div key={d.id} className={styles.diferencialItem}>
                  <span className={styles.diferencialNum}>{d.id}</span>
                  <div className={styles.diferencialLine} aria-hidden="true" />
                  <h4 className={styles.diferencialItemTitle}>{d.title}</h4>
                  <p className={styles.diferencialItemDesc}>{d.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.diferencialCta}>
              <ThemeBtn variant="btn-style-one" href="/#contato">
                Vamos criar algo extraordinário juntos
              </ThemeBtn>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
