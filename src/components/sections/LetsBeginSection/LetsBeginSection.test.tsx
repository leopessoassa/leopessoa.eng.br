import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LetsBeginSection from './LetsBeginSection';

describe('LetsBeginSection', () => {
  it('renders the main headline', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/sua casa inteligente não espera/i)).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/uma conversa de 30 minutos/i)).toBeInTheDocument();
  });

  it('renders the primary CTA link to WhatsApp', () => {
    render(<LetsBeginSection />);
    const primaryCta = screen.getByRole('link', { name: /agendar consulta gratuita/i });
    expect(primaryCta).toBeInTheDocument();
    expect(primaryCta).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('renders the secondary CTA link', () => {
    render(<LetsBeginSection />);
    const secondaryCta = screen.getByRole('link', { name: /ver mais projetos/i });
    expect(secondaryCta).toBeInTheDocument();
    expect(secondaryCta).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('renders the tertiary CTA link', () => {
    render(<LetsBeginSection />);
    const tertiaryCta = screen.getByRole('link', { name: /enviar dúvida via whatsapp/i });
    expect(tertiaryCta).toBeInTheDocument();
    expect(tertiaryCta).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('all WhatsApp links open in a new tab', () => {
    render(<LetsBeginSection />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      if (link.getAttribute('href')?.includes('wa.me')) {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
      }
    });
  });

  it('renders the guarantee text', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/a decisão é sua/i)).toBeInTheDocument();
  });
});
