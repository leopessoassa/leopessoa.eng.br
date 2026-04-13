import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import type { PortfolioItem } from '@/types/portfolio';
import styles from './PortfolioCarousel.module.css';

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  return (
    <section className={styles.portfolioSection} aria-label="Portfolio Carousel">
      {/* Background layers */}
      <div className={styles.backgroundLayers}>
        <div className={`${styles.triangleOverlay} ${styles.topLeft}`} />
        <div className={`${styles.triangleOverlay} ${styles.topRight}`} />
        <div
          className={styles.imageBg}
          style={{ backgroundImage: 'url(/images/background/2.webp)' }}
        >
          <div className={styles.overlayBgGreen} />
        </div>
        <div className={`${styles.triangleOverlay} ${styles.bottomLeft}`} />
      </div>

      <div className={styles.containerFluid}>
        <SectionTitle
          title="MANAGE EVERYTHING"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis accumsan mi nec elementum. Nulla ante metus, varius non condimentum id, molestie nec tellus. Fusce odio nulla, consectetur in sagittis eget, vulputate at lacus. Vivamus nulla massa, dictum quis purus"
          align="center"
          light
        />

        <div className={styles.carouselOuter}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            speed={600}
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 0 },
              1024: { slidesPerView: 3, spaceBetween: 0 },
            }}
            data-testid="portfolio-swiper"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.portfolioBlock}>
                  <div className={styles.innerBox}>
                    <div className={styles.imageBox}>
                      <figure className={styles.image}>
                        <img src={item.image} alt={item.title} loading="lazy" />
                      </figure>
                      <div className={styles.overlay} aria-hidden="true">
                        <a href="#">
                          <span className={`${styles.overlayIcon} fa fa-expand-arrows-alt`} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className={styles.lowerContent}>
                      <h4><a href="#">{item.title}</a></h4>
                      <div className={styles.cat}><a href="#">{item.category}</a></div>
                      <div className={styles.text}>{item.description}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
