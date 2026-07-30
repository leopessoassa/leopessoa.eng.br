import { useState, useEffect } from 'react';

export function useStickyHeader(): boolean {
  // Inicializa com false — seguro para SSR (window não existe no Node).
  // O valor real é sincronizado no primeiro useEffect, que só roda no cliente.
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    // Sincroniza o estado inicial com o scroll atual da página (ex: reload com scroll)
    setIsSticky(window.scrollY > 100);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
}
