import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsSection from './ProjectsSection';

describe('ProjectsSection — conteúdo', () => {
  it('renders the section title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('CASES REAIS: PROJETOS QUE SE TORNARAM REFERÊNCIA')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/transformou projetos simples em experiências/i)).toBeInTheDocument();
  });

  it('renders the featured project title', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Condomínio Ville Cristal')).toBeInTheDocument();
  });

  it('renders featured project location', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Gravatá — PE')).toBeInTheDocument();
  });

  it('renders both secondary project titles', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Condomínio Alphaville Paraíba')).toBeInTheDocument();
    expect(screen.getByText('Apartamento 3 quartos')).toBeInTheDocument();
  });

  it('renders secondary project locations', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Bayeux — PB')).toBeInTheDocument();
    expect(screen.getByText('João Pessoa — PB')).toBeInTheDocument();
  });

  it('renders project type eyebrows for all projects', () => {
    render(<ProjectsSection />);
    const casaCards = screen.getAllByText('Casa em condomínio');
    expect(casaCards.length).toBe(2);
    expect(screen.getByText('Apartamento')).toBeInTheDocument();
  });

  it('renders specs for featured project', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('400m²')).toBeInTheDocument();
    expect(screen.getByText('70')).toBeInTheDocument();
    expect(screen.getAllByText('Cabeada').length).toBeGreaterThanOrEqual(1);
  });

  it('renders tags for featured project', () => {
    render(<ProjectsSection />);
    // tags são renderizadas como string concatenada; múltiplos projetos podem conter o mesmo padrão
    const tagEls = screen.getAllByText(/Projeto Elétrico.*Automação.*Iluminação/i);
    expect(tagEls.length).toBeGreaterThanOrEqual(1);
  });
});

describe('ProjectsSection — resultados', () => {
  it('renders the resultados eyebrow', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/O que esses projetos geraram para os arquitetos/i)).toBeInTheDocument();
  });

  it('renders all 3 resultado items', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Referência')).toBeInTheDocument();
    expect(screen.getByText('Indicações')).toBeInTheDocument();
    expect(screen.getByText('+30%')).toBeInTheDocument();
  });

  it('renders resultado descriptions', () => {
    render(<ProjectsSection />);
    expect(screen.getByText(/viraram referência no mercado local/i)).toBeInTheDocument();
    expect(screen.getByText(/tornaram embaixadores da marca/i)).toBeInTheDocument();
    expect(screen.getByText(/valores acima da média de mercado/i)).toBeInTheDocument();
  });
});

describe('ProjectsSection — CTA e acessibilidade', () => {
  it('renders the CTA button', () => {
    render(<ProjectsSection />);
    expect(
      screen.getByRole('link', { name: /Quero criar um projeto memorável/i })
    ).toBeInTheDocument();
  });

  it('CTA link points to the contact section', () => {
    render(<ProjectsSection />);
    const cta = screen.getByRole('link', { name: /Quero criar um projeto memorável/i });
    expect(cta).toHaveAttribute('href', '/#contato');
  });

  it('renders the CTA section eyebrow', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Próximo passo')).toBeInTheDocument();
  });

  it('all images have non-empty alt attributes', () => {
    render(<ProjectsSection />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('all images have loading="lazy"', () => {
    render(<ProjectsSection />);
    screen.getAllByRole('img').forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('project articles have aria-label', () => {
    const { container } = render(<ProjectsSection />);
    const articles = container.querySelectorAll('article');
    articles.forEach((article) => {
      expect(article).toHaveAttribute('aria-label');
      expect(article.getAttribute('aria-label')).not.toBe('');
    });
  });
});
