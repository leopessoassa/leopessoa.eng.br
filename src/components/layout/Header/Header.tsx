import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStickyHeader } from '../../../hooks/useStickyHeader';
import { navItems } from '../../../data/navigation';
import styles from './Header.module.css';

function NavList({ onItemClick }: { onItemClick?: () => void }) {
  return (
    <ul className="navigation clearfix">
      {navItems.map((item) => {
        if (item.isCta) {
          return (
            <li key={item.label} className={styles.ctaItem}>
              <a
                href={item.href}
                className={styles.ctaBtn}
                onClick={onItemClick}
              >
                {item.label}
              </a>
            </li>
          );
        }

        if (item.isExternal) {
          return (
            <li key={item.label} className={styles.partnerItem}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerLink}
                onClick={onItemClick}
              >
                {item.label}
                <i className="fa fa-external-link-alt" aria-hidden="true" />
              </a>
            </li>
          );
        }

        return (
          <li key={item.label}>
            <a href={item.href} onClick={onItemClick}>
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  const isSticky = useStickyHeader();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
    return () => document.body.classList.remove('mobile-menu-visible');
  }, [isMobileMenuOpen]);

  const headerClass = ['main-header', isSticky ? 'fixed-header' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      {/* ── Desktop header ── */}
      <div className="main-box">
        <div className="menu-box">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.webp" alt="Leo Pessoa" loading="lazy" />
            </Link>
          </div>
          <div className="nav-outer">
            <nav className="main-menu navbar-expand-md navbar-light" aria-label="Menu principal">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavList />
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Sticky header ── */}
      <div className="sticky-header">
        <div className="outer-box">
          <div className="logo">
            <Link to="/" title="Leo Pessoa">
              <img src="/images/sticky-logo.webp" alt="Leo Pessoa" loading="lazy" />
            </Link>
          </div>
          <div className="nav-outer">
            <nav className="main-menu" aria-label="Menu principal sticky">
              <NavList />
            </nav>
          </div>
        </div>
      </div>

      {/* ── Mobile header bar ── */}
      <div className="mobile-header">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.webp" alt="Leo Pessoa" loading="lazy" />
          </Link>
        </div>
        <div className="nav-outer clearfix">
          <button
            className={styles.hamburger}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className={styles.hamburgerIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      <div className={`mobile-menu${isMobileMenuOpen ? ' mobile-menu-visible' : ''}`}>
        <nav className="menu-box" aria-label="Menu mobile">
          <div className="nav-logo">
            <Link to="/">
              <img src="/images/logo.webp" alt="Leo Pessoa" loading="lazy" />
            </Link>
          </div>
          <button
            className={styles.closeMenu}
            aria-label="Fechar menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="fa fa-times" aria-hidden="true" />
          </button>
          <NavList onItemClick={() => setIsMobileMenuOpen(false)} />
        </nav>
      </div>
    </header>
  );
}
