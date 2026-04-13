import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders the section title "SMART HOME"', () => {
    render(<AboutSection />);
    expect(screen.getByText('SMART HOME')).toBeInTheDocument();
  });

  it('renders the descriptive text', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it('renders all 3 feature blocks', () => {
    render(<AboutSection />);
    expect(screen.getByText('Managed Centrally')).toBeInTheDocument();
    expect(screen.getByText('Wirelessly Connects')).toBeInTheDocument();
    expect(screen.getByText('Smart Applications')).toBeInTheDocument();
  });

  it('renders the CTA button "Request A Free Brochure"', () => {
    render(<AboutSection />);
    expect(screen.getByText('Request A Free Brochure')).toBeInTheDocument();
  });

  it('renders the CTA as a link', () => {
    render(<AboutSection />);
    const ctaLink = screen.getByRole('link', { name: /Request A Free Brochure/i });
    expect(ctaLink).toBeInTheDocument();
  });

  it('renders 3 inline SVG icons', () => {
    const { container } = render(<AboutSection />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBe(3);
  });

  it('renders the background image layer', () => {
    const { container } = render(<AboutSection />);
    const imageBg = container.querySelector('[style*="background-image"]');
    expect(imageBg).toBeInTheDocument();
  });
});
