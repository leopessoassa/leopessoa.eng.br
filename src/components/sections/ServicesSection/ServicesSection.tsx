import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import ThemeBtn from '@/components/ui/ThemeBtn/ThemeBtn';
import styles from './ServicesSection.module.css';

const services = [
  {
    id: 1,
    title: 'Movement',
    description:
      'Et quam neque ultricies. Ornare donec quis sociis wisi ut nunc, vestibulum diam cras.',
    text: 'Ligula mus mi, vitae pharetra urna. Nunc consectetuer fermentum proin pede metus faucibus magna eget.',
    image: '/images/resource/service-1.webp',
    iconClass: 'flaticon-alarm',
  },
  {
    id: 2,
    title: 'Temperature',
    description:
      'Et quam neque ultricies. Ornare donec quis sociis wisi ut nunc, vestibulum diam cras.',
    text: 'Ligula mus mi, vitae pharetra urna. Nunc consectetuer fermentum proin pede metus faucibus magna eget.',
    image: '/images/resource/service-2.webp',
    iconClass: 'flaticon-plug-2',
  },
  {
    id: 3,
    title: 'Door Contacts',
    description:
      'Et quam neque ultricies. Ornare donec quis sociis wisi ut nunc, vestibulum diam cras.',
    text: 'Ligula mus mi, vitae pharetra urna. Nunc consectetuer fermentum proin pede metus faucibus magna eget.',
    image: '/images/resource/service-3.webp',
    iconClass: 'flaticon-unlocked',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: 'url(/images/background/3.webp)' }}
      ></div>

      <div className={styles.container}>
        <SectionTitle title="INTELLIGENT AUTOMATION" align="center" />

        <div className={styles.row}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceBlock}>
              <div className={styles.innerBox}>
                <div className={styles.imageBox}>
                  <div className={styles.iconBox}>
                    <span className={`icon ${service.iconClass}`} aria-hidden="true"></span>
                  </div>
                  <figure className={styles.image}>
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </figure>
                  <div className={styles.overlay}>
                    <div className={styles.desc}>{service.description}</div>
                  </div>
                </div>
                <div className={styles.lowerContent}>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <div className={styles.text}>{service.text}</div>
                  <div className={styles.btnBox}>
                    <ThemeBtn variant="btn-style-two" href="#">
                      Explore
                    </ThemeBtn>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
