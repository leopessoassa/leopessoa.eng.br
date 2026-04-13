import { Link } from 'react-router-dom';
import { whatsappBaseUrl, WHATSAPP_DISPLAY } from '@/utils/whatsapp';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'O Especialista', href: '/#sobre' },
  { label: 'A Parceria',     href: '/#processo' },
  { label: 'Projetos',       href: '/#cases' },
  { label: 'Para Clientes',  href: 'https://casainteligente.leopessoa.eng.br' },
  { label: 'Conversar',      href: '/#contato' },
];


export default function Footer() {
  const whatsapp = whatsappBaseUrl();

  return (
    <footer className={styles.footer}>

      {/* ── Corpo principal ── */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Coluna 1 — Identidade */}
            <div className={styles.colIdentidade}>
              <p className={styles.eyebrow}>Engenheiro · Parceiro Técnico</p>
              <h2 className={styles.brand}>Leo Pessoa</h2>
              <div className={styles.brandLine} aria-hidden="true" />
              <p className={styles.brandDesc}>
                Automação residencial que encanta clientes e diferencia sua marca.
                Parceiro técnico para arquitetos e designers de interiores.
              </p>
              <p className={styles.credenciais}>
                CREA-PB · MBA FGV · João Pessoa — PB
              </p>
            </div>

            {/* Coluna 2 — Navegação */}
            <div className={styles.colNav}>
              <p className={styles.colLabel}>Navegação</p>
              <ul className={styles.linkList}>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={styles.navLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna 3 — Contato */}
            <div className={styles.colContato}>
              <p className={styles.colLabel}>Contato</p>
              <ul className={styles.contatoList}>
                <li>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contatoLink}
                  >
                    <span className={styles.contatoLabel}>WhatsApp</span>
                    <span className={styles.contatoValue}>{WHATSAPP_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:leo@leopessoa.eng.br" className={styles.contatoLink}>
                    <span className={styles.contatoLabel}>Email</span>
                    <span className={styles.contatoValue}>leo@leopessoa.eng.br</span>
                  </a>
                </li>
                <li className={styles.contatoStatic}>
                  <span className={styles.contatoLabel}>Localização</span>
                  <span className={styles.contatoValue}>João Pessoa — PB</span>
                </li>
              </ul>

              {/* Redes sociais */}
              <div className={styles.social}>
                <a
                  href="https://instagram.com/leopessoa.eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" aria-hidden="true" />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Rodapé ── */}
      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Leo Pessoa · Todos os direitos reservados
            </p>
            <Link to="/" className={styles.bottomBrand}>
              leopessoa.eng.br
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
