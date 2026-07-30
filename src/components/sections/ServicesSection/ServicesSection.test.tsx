import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ServicesSection from './ServicesSection';

/**
 * ServicesSection — componente legado com conteúdo de template.
 * Testamos estrutura e acessibilidade, não strings de placeholder.
 */
describe('ServicesSection', () => {
  it('renders the section title', () => {
    render(<ServicesSection />);
    expect(screen.getByText('INTELLIGENT AUTOMATION')).toBeInTheDocument();
  });

  it('renders 3 service blocks', () => {
    render(<ServicesSection />);
    expect(screen.getByText('Movement')).toBeInTheDocument();
    expect(screen.getByText('Temperature')).toBeInTheDocument();
    expect(screen.getByText('Door Contacts')).toBeInTheDocument();
  });

  it('renders 3 service images with non-empty alt attributes', () => {
    render(<ServicesSection />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders 3 "Explore" CTA links', () => {
    render(<ServicesSection />);
    const exploreLinks = screen.getAllByRole('link', { name: /explore/i });
    expect(exploreLinks.length).toBe(3);
  });

  it('renders an overlay element for each service block', () => {
    const { container } = render(<ServicesSection />);
    const overlays = container.querySelectorAll('[class*="overlay"]');
    expect(overlays.length).toBe(3);
  });

  it('renders the background image layer', () => {
    const { container } = render(<ServicesSection />);
    const bg = container.querySelector('[style*="background-image"]');
    expect(bg).toBeInTheDocument();
  });

  it('all images have loading="lazy"', () => {
    render(<ServicesSection />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('renders flaticon span for each service icon', () => {
    const { container } = render(<ServicesSection />);
    const icons = container.querySelectorAll('span[class*="flaticon"]');
    expect(icons.length).toBe(3);
  });
});
