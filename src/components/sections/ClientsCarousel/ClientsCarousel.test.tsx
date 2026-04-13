import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ClientsCarousel from './ClientsCarousel';

// Mock Swiper — jsdom doesn't support Swiper's DOM APIs
vi.mock('swiper/react', () => ({
  Swiper: ({
    children,
    autoplay,
    loop,
  }: {
    children: React.ReactNode;
    autoplay?: { delay: number; disableOnInteraction: boolean };
    loop?: boolean;
    [key: string]: unknown;
  }) => (
    <div
      data-testid="clients-swiper"
      data-autoplay-delay={autoplay?.delay}
      data-loop={loop ? 'true' : undefined}
    >
      {children}
    </div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div className="swiper-slide">{children}</div>
  ),
}));

vi.mock('swiper/modules', () => ({
  Autoplay: {},
}));

vi.mock('swiper/css', () => ({}));

describe('ClientsCarousel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<ClientsCarousel />);
    expect(container).toBeTruthy();
  });

  it('renders client logo images', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('renders 4 client logos', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    expect(images.length).toBe(4);
  });

  it('all images have non-empty alt attributes', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('configures Swiper with loop', () => {
    const { getByTestId } = render(<ClientsCarousel />);
    const swiper = getByTestId('clients-swiper');
    expect(swiper).toHaveAttribute('data-loop', 'true');
  });

  it('configures Swiper with autoplay', () => {
    const { getByTestId } = render(<ClientsCarousel />);
    const swiper = getByTestId('clients-swiper');
    expect(swiper).toHaveAttribute('data-autoplay-delay');
  });

  it('renders images with correct client logo paths', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    const srcs = Array.from(images).map((img) => img.getAttribute('src'));
    expect(srcs).toContain('/images/background/1.webp');
    expect(srcs).toContain('/images/background/2.webp');
    expect(srcs).toContain('/images/background/3.webp');
    expect(srcs).toContain('/images/background/4.webp');
  });

  it('renders images with lazy loading', () => {
    const { container } = render(<ClientsCarousel />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  it('renders the section with accessible label', () => {
    render(<ClientsCarousel />);
    expect(screen.getByRole('region', { name: /clients carousel/i })).toBeInTheDocument();
  });
});
