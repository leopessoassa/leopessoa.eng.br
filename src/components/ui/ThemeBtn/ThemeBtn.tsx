import styles from './ThemeBtn.module.css';

interface ThemeBtnProps {
  variant: 'btn-style-one' | 'btn-style-two' | 'btn-style-two-light' | 'btn-style-three';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'default' | 'large';
  external?: boolean;
}

export default function ThemeBtn({ variant, href, onClick, children, size = 'default', external = false }: ThemeBtnProps) {
  const classNames = [
    styles.themeBtn,
    size === 'large' ? styles.large : '',
    variant,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    const isAppScheme = href.startsWith('whatsapp://') || href.startsWith('tel:') || href.startsWith('mailto:');
    return (
      <a
        href={href}
        className={classNames}
        onClick={onClick}
        data-variant={variant}
        {...(external && !isAppScheme && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} onClick={onClick} data-variant={variant}>
      {children}
    </button>
  );
}
