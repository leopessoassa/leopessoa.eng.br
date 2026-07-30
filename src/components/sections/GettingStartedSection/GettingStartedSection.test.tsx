import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GettingStartedSection from './GettingStartedSection';

describe('GettingStartedSection — steps', () => {
  it('renders the section title', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('COMEÇAR É SIMPLES')).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText(/Processo colaborativo que você já conhece/i)).toBeInTheDocument();
  });

  it('renders all 4 step titles', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Você traz o projeto')).toBeInTheDocument();
    expect(screen.getByText('Eu traduzo a técnica')).toBeInTheDocument();
    expect(screen.getByText('Vendemos juntos')).toBeInTheDocument();
    expect(screen.getByText('Executamos')).toBeInTheDocument();
  });

  it('renders ordinal numbers for all 4 steps', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('renders cost/time metadata for each step', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Sem custo')).toBeInTheDocument();
    expect(screen.getByText('Quando quiser')).toBeInTheDocument();
    expect(screen.getByText('Incluso')).toBeInTheDocument();
    expect(screen.getByText('Linguagem que vende')).toBeInTheDocument();
    expect(screen.getByText('Parceria')).toBeInTheDocument();
    expect(screen.getByText('Você lidera')).toBeInTheDocument();
    expect(screen.getByText('Conforme escopo')).toBeInTheDocument();
    expect(screen.getByText('No prazo')).toBeInTheDocument();
  });

  it('renders bullets inside steps', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Envie seus arquivos BIM/AutoCAD')).toBeInTheDocument();
    expect(screen.getByText('Orçamento realista com ROI demonstrável')).toBeInTheDocument();
    expect(screen.getByText('Você lidera o design, eu explico a automação')).toBeInTheDocument();
    expect(screen.getByText('Entrega no prazo combinado')).toBeInTheDocument();
  });

  it('renders step images with non-empty alt attributes', () => {
    render(<GettingStartedSection />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(4);
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('renders the closing note', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText(/Simples assim\. Você continua sendo o protagonista/i)).toBeInTheDocument();
  });
});

describe('GettingStartedSection — FAQ', () => {
  it('renders FAQ eyebrow', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Dúvidas frequentes')).toBeInTheDocument();
  });

  it('renders all 6 FAQ questions', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Preciso ter experiência com automação?')).toBeInTheDocument();
    expect(screen.getByText('Como funciona a remuneração da parceria?')).toBeInTheDocument();
    expect(screen.getByText('Você atende fora de João Pessoa?')).toBeInTheDocument();
    expect(screen.getByText('Quanto tempo leva para desenvolver o projeto?')).toBeInTheDocument();
    expect(screen.getByText('Você trabalha com qualquer tipo de projeto?')).toBeInTheDocument();
    expect(screen.getByText('E se o cliente tiver dúvidas técnicas na reunião?')).toBeInTheDocument();
  });

  it('renders all short answers visible by default', () => {
    render(<GettingStartedSection />);
    expect(screen.getByText('Não. É exatamente para isso que estou aqui.')).toBeInTheDocument();
    expect(screen.getByText('Conversamos caso a caso, sem tabela engessada.')).toBeInTheDocument();
  });

  it('all FAQ buttons start collapsed (aria-expanded=false)', () => {
    render(<GettingStartedSection />);
    const faqBtns = screen.getAllByRole('button');
    faqBtns.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('expands FAQ detail when question is clicked', () => {
    render(<GettingStartedSection />);
    const btn = screen.getByRole('button', { name: /Preciso ter experiência com automação/i });
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/Você foca no que faz de melhor/i)).toBeInTheDocument();
  });

  it('collapses FAQ detail when clicked again', () => {
    render(<GettingStartedSection />);
    const btn = screen.getByRole('button', { name: /Preciso ter experiência com automação/i });
    fireEvent.click(btn);
    expect(screen.getByText(/Você foca no que faz de melhor/i)).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText(/Você foca no que faz de melhor/i)).not.toBeInTheDocument();
  });

  it('opening one FAQ collapses the previously open one', () => {
    render(<GettingStartedSection />);
    const btn1 = screen.getByRole('button', { name: /Preciso ter experiência com automação/i });
    const btn2 = screen.getByRole('button', { name: /Como funciona a remuneração/i });

    fireEvent.click(btn1);
    expect(screen.getByText(/Você foca no que faz de melhor/i)).toBeInTheDocument();

    fireEvent.click(btn2);
    expect(screen.queryByText(/Você foca no que faz de melhor/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Cada projeto tem suas particularidades/i)).toBeInTheDocument();
  });

  it('toggle icon changes from + to − when expanded', () => {
    render(<GettingStartedSection />);
    const btn = screen.getByRole('button', { name: /Preciso ter experiência com automação/i });
    expect(btn.textContent).toContain('+');
    fireEvent.click(btn);
    expect(btn.textContent).toContain('−');
  });
});
