import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import styles from './HowToUseSection.module.css';

export default function HowToUseSection() {
  return (
    <section className={styles.howToUse}>
      {/* Background Layers */}
      <div className={styles.backgroundLayers}>
        <div className={`${styles.triangleOverlay} ${styles.topRight}`}></div>
        <div
          className={styles.imageBg}
          style={{ backgroundImage: 'url(/images/background/4.webp)' }}
        >
          <div className={styles.overlayBgGreen}></div>
        </div>
        <div className={`${styles.triangleOverlay} ${styles.bottomRight}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          {/* Content Column */}
          <div className={styles.contentColumn}>
            <div className={styles.innerColumn}>
              <SectionTitle
                title="SIMPLE TO USE"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis accumsan mi nec elementum. Nulla ante metus, varius non condimentum id, molestie nec tellus. Fusce odio nulla, consectetur in sagittis."
                align="right"
                light
              />
            </div>
          </div>
        </div>

        {/* Control Image */}
        <figure className={styles.controlImage}>
          <img
            src="/images/resource/home-control.webp"
            alt="Home control panel"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
