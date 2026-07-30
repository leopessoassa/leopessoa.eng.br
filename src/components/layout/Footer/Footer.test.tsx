import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from './Footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe('Footer', () => {
  it('renders brand name', () => {
    renderFooter();
    expect(screen.getByText('Leo Pessoa')).toBeInTheDocument();
  });

  it('renders eyebrow credential line', () => {
    renderFooter();
    expect(screen.getByText(/Engenheiro · Parceiro Técnico/i)).toBeInTheDocument();
  });

  it('renders brand description', () => {
    renderFooter();
    expect(screen.getByText(/Automação residencial que encanta clientes/i)).toBeInTheDocument();
  });

  it('renders CREA-PB credential', () => {
    renderFooter();
    expect(screen.getByText(/CREA-PB · MBA FGV/i)).toBeInTheDocument();
  });

  it('renders navigation column label', () => {
    renderFooter();
    expect(screen.getByText('Navegação')).toBeInTheDocument();
  });

  it('renders all nav links', () => {
    renderFooter();
    expect(screen.getByText('O Especialista')).toBeInTheDocument();
    expect(screen.getByText('A Parceria')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Para Clientes')).toBeInTheDocument();
    expect(screen.getByText('Conversar')).toBeInTheDocument();
  });

  it('renders contact column label', () => {
    renderFooter();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('renders WhatsApp contact entry', () => {
    renderFooter();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });

  it('renders email contact with correct address', () => {
    renderFooter();
    expect(screen.getByText('leo@leopessoa.eng.br')).toBeInTheDocument();
  });

  it('renders location entry', () => {
    renderFooter();
    expect(screen.getByText('João Pessoa — PB')).toBeInTheDocument();
  });

  it('renders Instagram social link with aria-label', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
  });

  it('renders WhatsApp social link with aria-label', () => {
    renderFooter();
    // há dois links WhatsApp (contato + social) — pelo menos um deve existir
    const waLinks = screen.getAllByRole('link', { name: /whatsapp/i });
    expect(waLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('renders copyright with current year', () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    renderFooter();
    expect(screen.getByText(/Leo Pessoa · Todos os direitos reservados/i)).toBeInTheDocument();
  });

  it('renders bottom brand link', () => {
    renderFooter();
    expect(screen.getByText('leopessoa.eng.br')).toBeInTheDocument();
  });

  it('all external links have target="_blank" and rel noopener', () => {
    const { container } = renderFooter();
    const externalLinks = Array.from(container.querySelectorAll('a[target="_blank"]'));
    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toContain('noopener');
    });
  });

  it('email link points to correct mailto address', () => {
    renderFooter();
    const emailLink = screen.getByRole('link', { name: /leo@leopessoa\.eng\.br/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:leo@leopessoa.eng.br');
  });
});
