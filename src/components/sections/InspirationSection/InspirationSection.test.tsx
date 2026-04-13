import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InspirationSection from './InspirationSection';
import { inspirationTabs } from '@/data/inspiration';

describe('InspirationSection', () => {
  it('renders the section title', () => {
    render(<InspirationSection />);
    expect(screen.getByText('O QUE É POSSÍVEL?')).toBeInTheDocument();
  });

  it('renders all 3 tab buttons', () => {
    render(<InspirationSection />);
    inspirationTabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it('renders cards for the first tab by default', () => {
    render(<InspirationSection />);
    inspirationTabs[0].personas.forEach((persona) => {
      expect(screen.getByText(persona.title)).toBeInTheDocument();
    });
  });

  it('first persona detail panel is visible on load', () => {
    render(<InspirationSection />);
    const firstPersona = inspirationTabs[0].personas[0];
    expect(screen.getByText(firstPersona.goal)).toBeInTheDocument();
  });

  it('switches cards when a different tab is clicked', () => {
    render(<InspirationSection />);
    const secondTab = screen.getByText(inspirationTabs[1].label);
    fireEvent.click(secondTab);
    inspirationTabs[1].personas.forEach((persona) => {
      expect(screen.getByText(persona.title)).toBeInTheDocument();
    });
  });

  it('updates detail panel when a card is clicked', () => {
    render(<InspirationSection />);
    const secondPersona = inspirationTabs[0].personas[1];
    fireEvent.click(screen.getByText(secondPersona.title));
    expect(screen.getByText(secondPersona.goal)).toBeInTheDocument();
  });

  it('marks the active tab button with aria-selected', () => {
    render(<InspirationSection />);
    const firstTabBtn = screen.getByRole('tab', { name: new RegExp(inspirationTabs[0].label) });
    expect(firstTabBtn).toHaveAttribute('aria-selected', 'true');
  });

  it('marks the active card with aria-pressed', () => {
    render(<InspirationSection />);
    const firstCard = screen.getByRole('button', {
      name: new RegExp(inspirationTabs[0].personas[0].title),
    });
    expect(firstCard).toHaveAttribute('aria-pressed', 'true');
  });
});
