import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import InspirationSection from './InspirationSection';

describe('InspirationSection — conteúdo', () => {
  it('renders the section title', () => {
    render(<InspirationSection />);
    // Título pode estar quebrado em múltiplos elementos — buscar por texto parcial
    expect(screen.getByText(/TRANSFORME PROJETOS COMUNS/i)).toBeInTheDocument();
  });

  it('renders the section subtitle', () => {
    render(<InspirationSection />);
    expect(screen.getByText(/Seus clientes querem mais que um projeto bonito/i)).toBeInTheDocument();
  });

  it('renders the "dores" column label', () => {
    render(<InspirationSection />);
    expect(screen.getByText('Situações que você já viveu')).toBeInTheDocument();
  });

  it('renders all 5 dores items', () => {
    render(<InspirationSection />);
    expect(screen.getByText(/Projetos bonitos, mas que não geram reação/i)).toBeInTheDocument();
    expect(screen.getByText(/Cliente vê automação como luxo desnecessário/i)).toBeInTheDocument();
    expect(screen.getByText(/Dificuldade para justificar o valor agregado/i)).toBeInTheDocument();
    expect(screen.getByText(/Concorrência oferece mais do mesmo/i)).toBeInTheDocument();
    expect(screen.getByText(/Cliente não entende o retorno do investimento/i)).toBeInTheDocument();
  });

  it('renders ordinal numbers for dores items', () => {
    render(<InspirationSection />);
    // Ordinais 01–05 para as dores + 01–03 para os diferenciais — getAllByText
    expect(screen.getAllByText('01').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('05').length).toBeGreaterThanOrEqual(1);
  });

  it('renders the "soluções" column label', () => {
    render(<InspirationSection />);
    expect(screen.getByText('Como eu resolvo para você')).toBeInTheDocument();
  });

  it('renders all 5 soluções titles', () => {
    render(<InspirationSection />);
    expect(screen.getByText('Projetos Memoráveis')).toBeInTheDocument();
    expect(screen.getByText('Valor Tangível')).toBeInTheDocument();
    expect(screen.getByText('Diferencial Competitivo')).toBeInTheDocument();
    expect(screen.getByText('Vendas Facilitadas')).toBeInTheDocument();
    expect(screen.getByText('Clientes Encantados')).toBeInTheDocument();
  });

  it('renders soluções descriptions', () => {
    render(<InspirationSection />);
    expect(screen.getByText(/Clientes que viram fãs da sua marca/i)).toBeInTheDocument();
    expect(screen.getByText(/ROI que convence na primeira reunião/i)).toBeInTheDocument();
  });
});

describe('InspirationSection — diferencial técnico', () => {
  it('renders "Diferencial Técnico" eyebrow', () => {
    render(<InspirationSection />);
    expect(screen.getByText('Diferencial Técnico')).toBeInTheDocument();
  });

  it('renders diferencial title', () => {
    render(<InspirationSection />);
    expect(screen.getByText(/Não é só mais um engenheiro/i)).toBeInTheDocument();
    expect(screen.getByText(/integração total com seu workflow/i)).toBeInTheDocument();
  });

  it('renders all 3 diferencial items', () => {
    render(<InspirationSection />);
    expect(screen.getByText('BIM & AutoCAD')).toBeInTheDocument();
    expect(screen.getByText('ROI Comprovado')).toBeInTheDocument();
    expect(screen.getByText('Automação Smart')).toBeInTheDocument();
  });

  it('renders ordinal numbers for diferenciais', () => {
    render(<InspirationSection />);
    // ordinals 01, 02, 03 for diferenciais (01-05 for dores already tested)
    expect(screen.getAllByText('01').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('02').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('03').length).toBeGreaterThanOrEqual(1);
  });

  it('renders diferencial descriptions', () => {
    render(<InspirationSection />);
    expect(screen.getByText(/Seus arquivos, nossa expertise/i)).toBeInTheDocument();
    expect(screen.getByText(/Valorização patrimonial mensurável/i)).toBeInTheDocument();
    expect(screen.getByText(/Tecnologia invisível que cria experiências memoráveis/i)).toBeInTheDocument();
  });

  it('renders the CTA button pointing to contact section', () => {
    render(<InspirationSection />);
    const cta = screen.getByRole('link', { name: /Vamos criar algo extraordinário juntos/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/#contato');
  });
});

describe('InspirationSection — estrutura', () => {
  it('renders background image layer', () => {
    const { container } = render(<InspirationSection />);
    const imageBg = container.querySelector('[style*="background-image"]');
    expect(imageBg).toBeInTheDocument();
  });

  it('renders the section with correct id anchor', () => {
    const { container } = render(<InspirationSection />);
    const section = container.querySelector('section#para-arquitetos');
    expect(section).toBeInTheDocument();
  });
});
