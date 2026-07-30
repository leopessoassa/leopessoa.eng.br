import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ClientsCarousel from './ClientsCarousel';

// Mock Swiper — jsdom não suporta as APIs de DOM internas do Swiper
vi.mock('swiper/react', () => ({
  Swiper: ({
    children,
    autoplay,
    loop,
    'data-testid': testId,
  }: {
    children: React.ReactNode;
    autoplay?: { delay?: number; disableOnInteraction?: boolean };
    loop?: boolean;
    'data-testid'?: string;
  }) => (
    <div
      data-testid={testId ?? 'swiper'}
      data-autoplay-delay={autoplay?.delay !== undefined ? String(autoplay.delay) : undefined}
      data-loop={loop ? 'true' : undefined}
    >
      {children}
    </div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div className="swiper-slide">{children}</div>
  ),
}));

vi.mock('swiper/modules', () => ({ Autoplay: {} }));
vi.mock('swiper/css', () => ({}));

describe('ClientsCarousel', () => {
  it('renders without crashing', () => {
    const { container } = render(<ClientsCarousel />);
    expect(container).toBeTruthy();
  });

  it('renders 8 slides (4 logos duplicados para loop suave)', () => {
    const { container } = render(<ClientsCarousel />);
    const slides = container.querySelectorAll('.swiper-slide');
    expect(slides.length).toBe(8);
  });

  it('renders images with non-empty alt attributes', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders images using /images/clients/ paths', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img.getAttribute('src')).toMatch(/^\/images\/clients\//);
    });
  });

  it('configures Swiper with loop enabled', () => {
    const { getByTestId } = render(<ClientsCarousel />);
    expect(getByTestId('clients-swiper')).toHaveAttribute('data-loop', 'true');
  });

  it('configures Swiper with autoplay delay of 3000ms', () => {
    const { getByTestId } = render(<ClientsCarousel />);
    expect(getByTestId('clients-swiper')).toHaveAttribute('data-autoplay-delay', '3000');
  });

  it('renders images with loading="lazy"', () => {
    const { container } = render(<ClientsCarousel />);
    container.querySelectorAll('img').forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('renders the section with accessible label', () => {
    render(<ClientsCarousel />);
    expect(screen.getByRole('region', { name: /Clients Carousel/i })).toBeInTheDocument();
  });
});
