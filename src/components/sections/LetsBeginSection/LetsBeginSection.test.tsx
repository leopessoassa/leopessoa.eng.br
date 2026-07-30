import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LetsBeginSection from './LetsBeginSection';

describe('LetsBeginSection — conteúdo', () => {
  it('renders the eyebrow label', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText('Próximo passo')).toBeInTheDocument();
  });

  it('renders the main headline', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/Seu próximo projeto/i)).toBeInTheDocument();
    expect(screen.getByText(/merece uma conversa/i)).toBeInTheDocument();
  });

  it('renders the subheadline', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/conversar sobre como podemos trabalhar juntos/i)).toBeInTheDocument();
  });

  it('renders "O que esperar" block', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText('O que esperar')).toBeInTheDocument();
  });

  it('renders all 4 espera items', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/Resposta rápida.*até 2h/i)).toBeInTheDocument();
    expect(screen.getByText(/Análise inicial gratuita/i)).toBeInTheDocument();
    expect(screen.getByText(/Conversa descontraída/i)).toBeInTheDocument();
    expect(screen.getByText(/Orçamento realista/i)).toBeInTheDocument();
  });

  it('renders the WhatsApp direct CTA link', () => {
    render(<LetsBeginSection />);
    const waLink = screen.getByRole('link', { name: /Iniciar conversa no WhatsApp/i });
    expect(waLink).toBeInTheDocument();
    expect(waLink).toHaveAttribute('href', expect.stringContaining('wa.me'));
  });

  it('WhatsApp CTA opens in new tab with noopener', () => {
    render(<LetsBeginSection />);
    const waLink = screen.getByRole('link', { name: /Iniciar conversa no WhatsApp/i });
    expect(waLink).toHaveAttribute('target', '_blank');
    expect(waLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('renders contact entries: WhatsApp, Email, Localização', () => {
    render(<LetsBeginSection />);
    // WhatsApp e Localização aparecem só na lista de contatos
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Localização')).toBeInTheDocument();
    // "Email" aparece tanto na lista de contatos quanto no label do formulário
    const emailEls = screen.getAllByText('Email');
    expect(emailEls.length).toBeGreaterThanOrEqual(1);
  });

  it('renders correct email contact value', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText('leo@leopessoa.eng.br')).toBeInTheDocument();
  });
});

describe('LetsBeginSection — formulário', () => {
  it('renders form eyebrow', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText('Conte sobre seu projeto')).toBeInTheDocument();
  });

  it('renders response time subtitle', () => {
    render(<LetsBeginSection />);
    expect(screen.getByText(/Respondo em até 2 horas/i)).toBeInTheDocument();
  });

  it('renders all form fields: nome, email, mensagem', () => {
    render(<LetsBeginSection />);
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Sobre o projeto')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<LetsBeginSection />);
    expect(screen.getByRole('button', { name: /Enviar mensagem/i })).toBeInTheDocument();
  });

  it('shows validation error when submitting empty name', async () => {
    render(<LetsBeginSection />);
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      expect(screen.getByText('Nome é obrigatório')).toBeInTheDocument();
    });
  });

  it('shows validation error for invalid email format', async () => {
    render(<LetsBeginSection />);
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Arquiteto Teste' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'email-invalido' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      expect(screen.getByText('Formato de email inválido')).toBeInTheDocument();
    });
  });

  it('submit button is disabled during submission', async () => {
    render(<LetsBeginSection />);
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Arquiteto Teste' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'arq@teste.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      const btn = screen.queryByRole('button', { name: /Enviando.../i });
      expect(btn).toBeDisabled();
    });
  });

  it('shows success message after valid submission', async () => {
    render(<LetsBeginSection />);
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Arquiteto Teste' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'arq@teste.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByText('Mensagem enviada.')).toBeInTheDocument();
    });
  });

  it('success message contains follow-up text', async () => {
    render(<LetsBeginSection />);
    fireEvent.change(screen.getByLabelText('Nome'), { target: { value: 'Arquiteto Teste' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'arq@teste.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      expect(screen.getByText('Entrarei em contato em breve.')).toBeInTheDocument();
    });
  });
});

describe('LetsBeginSection — acessibilidade', () => {
  it('section has aria-label', () => {
    const { container } = render(<LetsBeginSection />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('aria-label', 'Vamos Conversar');
  });

  it('name input has aria-invalid=false when untouched', () => {
    render(<LetsBeginSection />);
    const nameInput = screen.getByLabelText('Nome');
    expect(nameInput).toHaveAttribute('aria-invalid', 'false');
  });

  it('name input has aria-invalid=true after failed submit', async () => {
    render(<LetsBeginSection />);
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      expect(screen.getByLabelText('Nome')).toHaveAttribute('aria-invalid', 'true');
    });
  });

  it('validation errors have role="alert"', async () => {
    render(<LetsBeginSection />);
    fireEvent.click(screen.getByRole('button', { name: /Enviar mensagem/i }));
    await waitFor(() => {
      const alerts = screen.getAllByRole('alert');
      expect(alerts.length).toBeGreaterThan(0);
    });
  });
});
