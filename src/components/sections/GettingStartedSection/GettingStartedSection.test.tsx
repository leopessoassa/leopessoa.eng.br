import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GettingStartedSection from './GettingStartedSection';

describe('GettingStartedSection', () => {
  it('renders the section title', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText(/começar é fácil/i)).toBeInTheDocument();
  });

  it('renders all 5 step cards', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Conversa Inicial')).toBeInTheDocument();
    expect(screen.getByText('Análise Técnica')).toBeInTheDocument();
    expect(screen.getByText('Orçamento')).toBeInTheDocument();
    expect(screen.getByText('Instalação')).toBeInTheDocument();
    expect(screen.getByText('Suporte')).toBeInTheDocument();
  });

  it('shows detail panel when a step card is clicked', () => {
    render(<GettingStartedSection />);
    const stepBtn = screen.getByRole('button', { name: /conversa inicial/i });
    fireEvent.click(stepBtn);
    expect(screen.getByText(/passo 1: conversa inicial/i)).toBeInTheDocument();
  });

  it('hides detail panel when the same step is clicked again', () => {
    render(<GettingStartedSection />);
    const stepBtn = screen.getByRole('button', { name: /conversa inicial/i });
    fireEvent.click(stepBtn);
    expect(screen.getByText(/passo 1: conversa inicial/i)).toBeInTheDocument();
    fireEvent.click(stepBtn);
    expect(screen.queryByText(/passo 1: conversa inicial/i)).not.toBeInTheDocument();
  });

  it('switches detail panel when a different step is clicked', () => {
    render(<GettingStartedSection />);
    fireEvent.click(screen.getByRole('button', { name: /conversa inicial/i }));
    expect(screen.getByText(/passo 1: conversa inicial/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /análise técnica/i }));
    expect(screen.queryByText(/passo 1: conversa inicial/i)).not.toBeInTheDocument();
    expect(screen.getByText(/passo 2: análise técnica/i)).toBeInTheDocument();
  });

  it('renders FAQ items', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText(/preciso fazer obra na casa/i)).toBeInTheDocument();
    expect(screen.getByText(/quanto custa/i)).toBeInTheDocument();
  });

  it('expands FAQ answer when question is clicked', () => {
    render(<GettingStartedSection />);
    const faqBtn = screen.getByRole('button', { name: /preciso fazer obra na casa/i });
    expect(faqBtn).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(faqBtn);
    expect(faqBtn).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/wifi e zigbee funcionam/i)).toBeInTheDocument();
  });

  it('collapses FAQ answer when clicked again', () => {
    render(<GettingStartedSection />);
    const faqBtn = screen.getByRole('button', { name: /preciso fazer obra na casa/i });
    fireEvent.click(faqBtn);
    expect(screen.getByText(/wifi e zigbee funcionam/i)).toBeInTheDocument();
    fireEvent.click(faqBtn);
    expect(screen.queryByText(/wifi e zigbee funcionam/i)).not.toBeInTheDocument();
  });
});
