// Feature: react-site-conversion, Property 10: Elementos interativos têm labels acessíveis
// Validates: Requirements 13.3
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HeroSlider from './HeroSlider';
import type { SlideData } from '@/data/slides';

const mockSlides: SlideData[] = [
  {
    id: 1,
    image: '/test-image-1.webp',
    title: 'Slide 1',
    subtitle: 'Subtitle 1',
    ctaText: 'CTA 1',
    ctaHref: '#',
  },
  {
    id: 2,
    image: '/test-image-2.webp',
    title: 'Slide 2',
    subtitle: 'Subtitle 2',
    ctaText: 'CTA 2',
    ctaHref: '#',
  },
];

describe('HeroSlider - Property 10: icon-only nav buttons have aria-label', () => {
  it('prev and next navigation buttons have aria-label', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const buttons = container.querySelectorAll('button');
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-label');
      expect(btn.getAttribute('aria-label')).not.toBe('');
    });
  });

  it('prev button has aria-label', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const prevBtn = container.querySelector('button[aria-label="Slide anterior"]');
    expect(prevBtn).toBeInTheDocument();
    expect(prevBtn).toHaveAttribute('aria-label', 'Slide anterior');
  });

  it('next button has aria-label', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const nextBtn = container.querySelector('button[aria-label="Próximo slide"]');
    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toHaveAttribute('aria-label', 'Próximo slide');
  });
});
