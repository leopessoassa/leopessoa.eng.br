import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders the section title "CONHEÇA LEO PESSOA"', () => {
    render(<AboutSection />);
    expect(screen.getByText('CONHEÇA LEO PESSOA')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<AboutSection />);
    expect(screen.getByText(/potencializa sua criatividade/i)).toBeInTheDocument();
  });

  it('renders all 3 diferencial headings', () => {
    render(<AboutSection />);
    expect(screen.getByText('Visão Técnica + Criativa')).toBeInTheDocument();
    expect(screen.getByText('Mentalidade Estratégica')).toBeInTheDocument();
    expect(screen.getByText('Automação que Encanta')).toBeInTheDocument();
  });

  it('renders ordinal numbers for the diferenciais', () => {
    render(<AboutSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders bullets from first diferencial', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Integração total com seu workflow BIM/i)).toBeInTheDocument();
  });

  it('renders the mission blockquote', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Ajudar arquitetos e designers de interiores/i)).toBeInTheDocument();
  });

  it('renders the primary WhatsApp CTA', () => {
    render(<AboutSection />);
    const ctaLink = screen.getByRole('link', { name: /Conversar com Leo via WhatsApp/i });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('primary CTA opens in new tab with noopener', () => {
    render(<AboutSection />);
    const ctaLink = screen.getByRole('link', { name: /Conversar com Leo via WhatsApp/i });
    expect(ctaLink).toHaveAttribute('target', '_blank');
    expect(ctaLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('renders the secondary form CTA link', () => {
    render(<AboutSection />);
    expect(screen.getByRole('link', { name: /Prefiro preencher um formulário/i })).toBeInTheDocument();
  });

  it('renders "Por que arquitetos escolhem" block', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Por que arquitetos escolhem trabalhar comigo/i)).toBeInTheDocument();
  });

  it('renders all 3 "porque" items', () => {
    render(<AboutSection />);
    expect(screen.getByText('Falo sua língua')).toBeInTheDocument();
    expect(screen.getByText('Penso como empresário')).toBeInTheDocument();
    expect(screen.getByText('Entendo pessoas reais')).toBeInTheDocument();
  });

  it('renders the background image layer', () => {
    const { container } = render(<AboutSection />);
    const imageBg = container.querySelector('[style*="background-image"]');
    expect(imageBg).toBeInTheDocument();
  });

  it('renders Leo Pessoa photo with descriptive alt text', () => {
    render(<AboutSection />);
    const photo = screen.getByAltText(/Leonardo Pessoa.*Engenheiro Eletricista/i);
    expect(photo).toBeInTheDocument();
  });

  it('renders microcopy with response time promise', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Respondo em até 2 horas/i)).toBeInTheDocument();
  });
});
