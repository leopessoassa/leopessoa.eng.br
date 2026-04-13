import { useEffect, useState } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.preloader} aria-label="Loading">
      <div className={styles.cwsLoader}>
        <span>LOADING...</span>
        <div className={styles.hex}></div>
        <div className={styles.hex}></div>
        <div className={styles.hex}></div>
        <div className={styles.hex}></div>
        <div className={styles.hex}></div>
        <div className={styles.hex}></div>
        <div className={styles.hex}></div>
      </div>
    </div>
  );
}
