import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import HeroSlider from './HeroSlider';
import type { SlideData } from '@/data/slides';

// Mock Swiper — jsdom não suporta as APIs de DOM internas do Swiper
vi.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="hero-swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div className="swiper-slide">{children}</div>
  ),
}));

vi.mock('swiper/modules', () => ({ Autoplay: {}, Navigation: {}, Pagination: {} }));
vi.mock('swiper/css', () => ({}));
vi.mock('swiper/css/navigation', () => ({}));
vi.mock('swiper/css/pagination', () => ({}));

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

describe('HeroSlider — acessibilidade dos botões de navegação', () => {
  it('prev and next navigation buttons have aria-label', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const buttons = container.querySelectorAll('button');
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-label');
      expect(btn.getAttribute('aria-label')).not.toBe('');
    });
  });

  it('prev button has aria-label "Slide anterior"', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const prevBtn = container.querySelector('button[aria-label="Slide anterior"]');
    expect(prevBtn).toBeInTheDocument();
  });

  it('next button has aria-label "Próximo slide"', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const nextBtn = container.querySelector('button[aria-label="Próximo slide"]');
    expect(nextBtn).toBeInTheDocument();
  });

  it('renders 2 slides', () => {
    const { container } = render(<HeroSlider slides={mockSlides} />);
    const slides = container.querySelectorAll('.swiper-slide');
    expect(slides.length).toBe(mockSlides.length);
  });

  it('renders CTA links for each slide', () => {
    const { getAllByRole } = render(<HeroSlider slides={mockSlides} />);
    const ctaLinks = getAllByRole('link');
    expect(ctaLinks.length).toBeGreaterThanOrEqual(mockSlides.length);
  });
});
