// Feature: react-site-conversion, Property 10: Elementos interativos têm labels acessíveis
// Validates: Requirements 13.3
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop - Property 10: button has aria-label', () => {
  it('scroll-to-top button has aria-label', () => {
    const { container } = render(<ScrollToTop />);
    const btn = container.querySelector('button');
    expect(btn).toHaveAttribute('aria-label');
    expect(btn?.getAttribute('aria-label')).not.toBe('');
  });

  it('scroll-to-top button aria-label is "Scroll to top"', () => {
    const { container } = render(<ScrollToTop />);
    const btn = container.querySelector('button');
    expect(btn).toHaveAttribute('aria-label', 'Scroll to top');
  });
});
