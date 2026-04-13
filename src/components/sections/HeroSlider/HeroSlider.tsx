import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import type { SlideData } from '@/data/slides';
import styles from './HeroSlider.module.css';

interface HeroSliderProps {
  slides: SlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.heroSlider} aria-label="Hero Slider">
      <button
        type="button"
        className={`${styles.navBtn} ${styles.navPrev}`}
        aria-label="Slide anterior"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <button
        type="button"
        className={`${styles.navBtn} ${styles.navNext}`}
        aria-label="Próximo slide"
        onClick={() => swiperRef.current?.slideNext()}
      />
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={800}
        style={{ width: '100%' }}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.title}
            >
              <div className={styles.overlay} aria-hidden="true" />
              <div className={styles.content}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                {slide.copy && <p className={styles.copy}>{slide.copy}</p>}
                <div className={styles.ctaGroup}>
                  <ThemeBtn variant="btn-style-one" href={slide.ctaHref}>
                    {slide.ctaText}
                  </ThemeBtn>
                  {slide.ctaSecondaryText && slide.ctaSecondaryHref && (
                    <ThemeBtn variant="btn-style-two-light" href={slide.ctaSecondaryHref}>
                      {slide.ctaSecondaryText}
                    </ThemeBtn>
                  )}
                </div>
                {slide.microcopy && slide.microcopy.length > 0 && (
                  <ul className={styles.microcopy} aria-label="Destaques">
                    {slide.microcopy.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
