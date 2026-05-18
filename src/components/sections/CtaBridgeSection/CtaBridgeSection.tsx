import styles from './CtaBridgeSection.module.css';
import { whatsappUrl } from '@/utils/whatsapp';

export default function CtaBridgeSection() {
  function handleClick() {
    const url = whatsappUrl(
      'Olá Leo! Quero entender como incluir automação nos meus projetos. Podemos conversar?'
    );
    window.open(url, '_blank', 'noopener');
  }

  return (
    <section className={styles.section} aria-label="Chamada para ação">
      <div className={styles.container}>
        <p className={styles.headline}>
          Seu próximo projeto merece automação de verdade.
        </p>
        <button
          type="button"
          onClick={handleClick}
          className={styles.cta}
        >
          Vamos conversar →
        </button>
      </div>
    </section>
  );
}
