import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ServicesSection from './HowItWorksSection';

describe('ServicesSection', () => {
  it('renders the section title "INTELLIGENT AUTOMATION"', () => {
    render(<ServicesSection />);
    expect(screen.getByText('INTELLIGENT AUTOMATION')).toBeInTheDocument();
  });

  it('renders all 3 service blocks', () => {
    render(<ServicesSection />);
    expect(screen.getByText('Movement')).toBeInTheDocument();
    expect(screen.getByText('Temperature')).toBeInTheDocument();
    expect(screen.getByText('Door Contacts')).toBeInTheDocument();
  });

  it('renders 3 service images', () => {
    render(<ServicesSection />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(3);
  });

  it('renders each service image with a non-empty alt attribute', () => {
    render(<ServicesSection />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders 3 "Explore" buttons', () => {
    render(<ServicesSection />);
    const exploreLinks = screen.getAllByRole('link', { name: /explore/i });
    expect(exploreLinks.length).toBe(3);
  });

  it('renders overlay with description for each service block', () => {
    const { container } = render(<ServicesSection />);
    const overlays = container.querySelectorAll('[class*="overlay"]');
    expect(overlays.length).toBe(3);
  });

  it('renders the background image layer', () => {
    const { container } = render(<ServicesSection />);
    const bg = container.querySelector('[style*="background-image"]');
    expect(bg).toBeInTheDocument();
  });

  it('renders service text content for each block', () => {
    render(<ServicesSection />);
    const textElements = screen.getAllByText(/Ligula mus mi/i);
    expect(textElements.length).toBe(3);
  });

  it('renders overlay descriptions for each service block', () => {
    render(<ServicesSection />);
    const descs = screen.getAllByText(/Et quam neque ultricies/i);
    expect(descs.length).toBe(3);
  });
});
