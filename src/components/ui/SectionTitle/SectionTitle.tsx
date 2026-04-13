import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, light = false, align = 'center' }: SectionTitleProps) {
  const classNames = [
    styles.sectionTitle,
    light ? styles.light : '',
    styles[align],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} data-light={light ? 'true' : undefined}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
