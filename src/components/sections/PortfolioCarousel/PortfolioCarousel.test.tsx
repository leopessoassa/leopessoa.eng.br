import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fc from 'fast-check';
import PortfolioCarousel from './PortfolioCarousel';
import type { PortfolioItem } from '@/types/portfolio';

// Mock Swiper — jsdom doesn't support Swiper's DOM APIs
vi.mock('swiper/react', () => ({
  Swiper: ({
    children,
    autoplay,
    pagination,
  }: {
    children: React.ReactNode;
    autoplay?: { delay: number };
    pagination?: { clickable: boolean };
    [key: string]: unknown;
  }) => (
    <div
      data-testid="swiper"
      data-autoplay-delay={autoplay?.delay}
      data-pagination={pagination?.clickable ? 'true' : undefined}
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
  Pagination: {},
}));

vi.mock('swiper/css', () => ({}));
vi.mock('swiper/css/pagination', () => ({}));

const portfolioItemArbitrary = fc.record({
  id: fc.integer(),
  image: fc.string({ minLength: 1 }),
  title: fc.string({ minLength: 1 }),
  category: fc.string({ minLength: 1 }),
  description: fc.string(),
});

const sampleItems: PortfolioItem[] = [
  {
    id: 1,
    image: '/images/gallery/1.webp',
    title: 'Outdoor CCTV',
    category: 'Alarm',
    description: 'Description for outdoor CCTV',
  },
  {
    id: 2,
    image: '/images/gallery/2.webp',
    title: 'Temperature Controller',
    category: 'Heating',
    description: 'Description for temperature controller',
  },
  {
    id: 3,
    image: '/images/gallery/3.webp',
    title: 'Motion Sensor',
    category: 'Security',
    description: 'Description for motion sensor',
  },
];

describe('PortfolioCarousel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Feature: react-site-conversion, Property 6: PortfolioCarousel renderiza todos os campos de cada item
  it('Property 6: renders title and category for every item in the array', () => {
    const nonEmptyVisibleString = fc
      .string({ minLength: 1 })
      .filter((s) => s.trim().length > 0);

    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.integer(),
            image: fc.string(),
            title: nonEmptyVisibleString,
            category: nonEmptyVisibleString,
            description: fc.string(),
          }),
          { minLength: 1, maxLength: 10 }
        ),
        (items) => {
          const { container, unmount } = render(<PortfolioCarousel items={items} />);
          // Verify each item's title and category appear in the rendered output
          items.forEach((item) => {
            const titleEls = container.querySelectorAll('h3');
            const categoryEls = container.querySelectorAll('span');
            const titleTexts = Array.from(titleEls).map((el) => el.textContent?.trim());
            const categoryTexts = Array.from(categoryEls).map((el) => el.textContent?.trim());
            expect(titleTexts).toContain(item.title.trim());
            expect(categoryTexts).toContain(item.category.trim());
          });
          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  // Feature: react-site-conversion, Property 9: Imagens têm atributo alt não-vazio
  it('Property 9: all images have a non-empty alt attribute', () => {
    fc.assert(
      fc.property(
        fc.array(portfolioItemArbitrary, { minLength: 1 }),
        (items) => {
          const { container, unmount } = render(<PortfolioCarousel items={items} />);
          const images = container.querySelectorAll('img');
          images.forEach((img) => {
            expect(img).toHaveAttribute('alt');
            expect(img.getAttribute('alt')).not.toBe('');
          });
          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  describe('Unit tests', () => {
    it('configures autoplay', () => {
      const { getByTestId } = render(<PortfolioCarousel items={sampleItems} />);
      const swiper = getByTestId('swiper');
      expect(swiper).toHaveAttribute('data-autoplay-delay');
    });

    it('configures pagination (dots)', () => {
      const { getByTestId } = render(<PortfolioCarousel items={sampleItems} />);
      const swiper = getByTestId('swiper');
      expect(swiper).toHaveAttribute('data-pagination', 'true');
    });

    it('renders all portfolio items as slides', () => {
      const { container } = render(<PortfolioCarousel items={sampleItems} />);
      expect(container.querySelectorAll('.swiper-slide').length).toBe(sampleItems.length);
    });

    it('renders item titles', () => {
      render(<PortfolioCarousel items={sampleItems} />);
      expect(screen.getByText('Outdoor CCTV')).toBeInTheDocument();
      expect(screen.getByText('Temperature Controller')).toBeInTheDocument();
      expect(screen.getByText('Motion Sensor')).toBeInTheDocument();
    });

    it('renders item categories', () => {
      render(<PortfolioCarousel items={sampleItems} />);
      expect(screen.getByText('Alarm')).toBeInTheDocument();
      expect(screen.getByText('Heating')).toBeInTheDocument();
      expect(screen.getByText('Security')).toBeInTheDocument();
    });

    it('renders item descriptions', () => {
      render(<PortfolioCarousel items={sampleItems} />);
      expect(screen.getByText('Description for outdoor CCTV')).toBeInTheDocument();
    });

    it('renders images with lazy loading', () => {
      const { container } = render(<PortfolioCarousel items={sampleItems} />);
      const images = container.querySelectorAll('img');
      images.forEach((img) => {
        expect(img).toHaveAttribute('loading', 'lazy');
      });
    });

    it('renders images with correct src', () => {
      const { container } = render(<PortfolioCarousel items={sampleItems} />);
      const images = container.querySelectorAll('img');
      expect(images[0]).toHaveAttribute('src', '/images/gallery/1.webp');
    });
  });
});
