import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from './ProjectsSection';

describe('ProjectsSection', () => {
  it('renders the section title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/TRANSFORMAÇÕES REAIS/i)).toBeInTheDocument();
  });

  it('renders the featured card', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Apartamento Inteligente')).toBeInTheDocument();
  });

  it('renders all 3 side cards', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Crianças Dormem Melhor')).toBeInTheDocument();
    expect(screen.getByText('Envelhecer com Segurança')).toBeInTheDocument();
    expect(screen.getByText('Ambiente Previsível')).toBeInTheDocument();
  });

  it('renders all images with non-empty alt attributes', () => {
    const { container } = render(<ProjectsSection />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders the CTA button', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/Agendar Consulta Gratuita/i)).toBeInTheDocument();
  });

  it('renders all quotes', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/fácil para minha mãe usar/i)).toBeInTheDocument();
    expect(screen.getByText(/dorme 8h direto/i)).toBeInTheDocument();
    expect(screen.getByText(/controlar tudo da cama/i)).toBeInTheDocument();
    expect(screen.getByText(/Transformou nossa rotina/i)).toBeInTheDocument();
  });
});
