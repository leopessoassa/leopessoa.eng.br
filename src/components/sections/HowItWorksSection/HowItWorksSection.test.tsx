import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorksSection from './HowItWorksSection';

describe('HowItWorksSection', () => {
  it('renders the section title', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('COMO FUNCIONA NOSSA PARCERIA')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText(/transforma sua visão criativa/i)).toBeInTheDocument();
  });

  it('renders all 4 etapa titles', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('Inspiração')).toBeInTheDocument();
    expect(screen.getByText('Criação')).toBeInTheDocument();
    expect(screen.getByText('Realização')).toBeInTheDocument();
    expect(screen.getByText('Encantamento')).toBeInTheDocument();
  });

  it('renders ordinal numbers for all 4 etapas', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders description for each etapa', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText(/Entendemos sua visão criativa/i)).toBeInTheDocument();
    expect(screen.getByText(/Desenvolvemos a solução técnica/i)).toBeInTheDocument();
    expect(screen.getByText(/Acompanhamos cada detalhe/i)).toBeInTheDocument();
    expect(screen.getByText(/Cliente apaixonado pelo projeto/i)).toBeInTheDocument();
  });

  it('renders bullets for each etapa', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('Conversa estratégica')).toBeInTheDocument();
    expect(screen.getByText('Integração BIM/AutoCAD')).toBeInTheDocument();
    expect(screen.getByText('Suporte especializado')).toBeInTheDocument();
    expect(screen.getByText('Experiência completa')).toBeInTheDocument();
  });

  it('renders the CTA banner eyebrow', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('Da conversa à entrega')).toBeInTheDocument();
  });

  it('renders the CTA banner title', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText(/Projetos extraordinários em 15 dias/i)).toBeInTheDocument();
  });

  it('renders the CTA link pointing to the contact section', () => {
    render(<HowItWorksSection />);
    const ctaLink = screen.getByRole('link', { name: /Vamos criar juntos/i });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute('href', '/#contato');
  });

  it('renders connectors between etapas (3 connectors for 4 steps)', () => {
    const { container } = render(<HowItWorksSection />);
    // connector class is applied on 3 of the 4 etapas
    const connectors = container.querySelectorAll('[class*="connector"]');
    expect(connectors.length).toBe(3);
  });
});
