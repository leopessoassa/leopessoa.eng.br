import styles from './ProofBar.module.css';

const items = [
  { stat: '3', desc: 'projetos entregues' },
  { stat: '400m²', desc: 'maior projeto executado' },
  { stat: '15 dias', desc: 'da conversa à entrega' },
  { stat: 'BIM & AutoCAD', desc: 'integração total com seu workflow' },
  { stat: 'CREA-PB', desc: 'João Pessoa — PB' },
];

export default function ProofBar() {
  return (
    <div className={styles.bar} aria-label="Números da parceria">
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={item.stat} className={styles.item}>
            {index > 0 && <div className={styles.sep} aria-hidden="true" />}
            <span className={styles.stat}>{item.stat}</span>
            <span className={styles.desc}>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
