import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import styles from './ClientsCarousel.module.css';

// Duplicated to ensure Swiper loop works with slidesPerView: 4+
const clientLogos = [
  { id: 1, src: '/images/clients/1.webp', alt: 'Client 1' },
  { id: 2, src: '/images/clients/2.webp', alt: 'Client 2' },
  { id: 3, src: '/images/clients/3.webp', alt: 'Client 3' },
  { id: 4, src: '/images/clients/4.webp', alt: 'Client 4' },
  { id: 5, src: '/images/clients/1.webp', alt: 'Client 1' },
  { id: 6, src: '/images/clients/2.webp', alt: 'Client 2' },
  { id: 7, src: '/images/clients/3.webp', alt: 'Client 3' },
  { id: 8, src: '/images/clients/4.webp', alt: 'Client 4' },
];

export default function ClientsCarousel() {
  return (
    <section className={styles.clientsSection} aria-label="Clients Carousel">
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={600}
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          data-testid="clients-swiper"
        >
          {clientLogos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className={styles.slideItem}>
                <figure className={styles.imageBox}>
                  <a href="#">
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </a>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
