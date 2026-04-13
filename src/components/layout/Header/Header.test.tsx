import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

function renderHeader() {
  return render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
}

describe('Header - Unit Tests', () => {
  it('renders logo with link to /', () => {
    const { container } = renderHeader();
    const logoLinks = container.querySelectorAll('a[href="/"]');
    expect(logoLinks.length).toBeGreaterThan(0);
  });

  it('renders main navigation items', () => {
    renderHeader();
    // Nav items come from src/data/navigation.ts — at least one link should render
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  it('hamburger button opens mobile menu', () => {
    const { container } = renderHeader();
    const hamburger = container.querySelector('button[aria-label="Abrir menu"]');
    expect(hamburger).toBeInTheDocument();
    fireEvent.click(hamburger!);
    expect(container.querySelector('.mobile-menu-visible')).toBeInTheDocument();
  });

  it('close button hides mobile menu', () => {
    const { container } = renderHeader();
    // Open first
    fireEvent.click(container.querySelector('button[aria-label="Abrir menu"]')!);
    expect(container.querySelector('.mobile-menu-visible')).toBeInTheDocument();
    // Close
    fireEvent.click(container.querySelector('button[aria-label="Fechar menu"]')!);
    expect(container.querySelector('.mobile-menu-visible')).not.toBeInTheDocument();
  });
});

describe('Header - Accessibility', () => {
  it('hamburger button has aria-label', () => {
    const { container } = renderHeader();
    const hamburger = container.querySelector('button[aria-label="Abrir menu"]');
    expect(hamburger).toBeInTheDocument();
    expect(hamburger?.getAttribute('aria-label')).not.toBe('');
  });

  it('close menu button has aria-label', () => {
    const { container } = renderHeader();
    const closeBtn = container.querySelector('button[aria-label="Fechar menu"]');
    expect(closeBtn).toBeInTheDocument();
    expect(closeBtn?.getAttribute('aria-label')).not.toBe('');
  });

  it('all buttons have aria-label', () => {
    const { container } = renderHeader();
    const buttons = container.querySelectorAll('button');
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-label');
      expect(btn.getAttribute('aria-label')).not.toBe('');
    });
  });
});
