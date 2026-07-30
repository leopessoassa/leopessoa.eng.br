import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fc from 'fast-check';
import ContactForm from './ContactForm';

// O botão de submit tem aria-label="Enviar mensagem" no componente
const SUBMIT_LABEL = /Enviar mensagem/i;

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Property 7: ContactForm rejeita entradas inválidas
  it('Property 7: rejects invalid submissions and shows error alerts', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          name: fc.oneof(fc.constant(''), fc.stringMatching(/^\s+$/)),
          email: fc.oneof(
            fc.constant(''),
            fc.string().filter((s) => !s.includes('@'))
          ),
          message: fc.string(),
        }),
        async () => {
          const onSubmit = vi.fn();
          const { getByRole, getAllByRole, unmount } = render(
            <ContactForm onSubmit={onSubmit} />
          );

          await act(async () => {
            fireEvent.click(getByRole('button', { name: SUBMIT_LABEL }));
          });

          expect(onSubmit).not.toHaveBeenCalled();

          const alerts = getAllByRole('alert');
          expect(alerts.length).toBeGreaterThan(0);

          unmount();
        }
      ),
      { numRuns: 20 }
    );
  });

  // Property 8: ContactForm exibe sucesso para entradas válidas
  it('Property 8: shows success message for valid submissions', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          name: fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
          email: fc.emailAddress(),
          message: fc.string({ minLength: 1 }),
        }),
        async (validData) => {
          const onSubmit = vi.fn().mockResolvedValue(undefined);
          const { getByLabelText, getByRole, unmount } = render(
            <ContactForm onSubmit={onSubmit} />
          );

          await act(async () => {
            fireEvent.change(getByLabelText(/Name/i), {
              target: { value: validData.name },
            });
            fireEvent.change(getByLabelText(/Email/i), {
              target: { value: validData.email },
            });
            fireEvent.change(getByLabelText(/Message/i), {
              target: { value: validData.message },
            });
            fireEvent.click(getByRole('button', { name: SUBMIT_LABEL }));
          });

          await waitFor(() => {
            expect(screen.getByText(/sucesso/i)).toBeInTheDocument();
          });

          unmount();
        }
      ),
      { numRuns: 20 }
    );
  });

  describe('Unit tests', () => {
    it('renders Name, Email and Message fields', () => {
      render(<ContactForm />);
      // usar aria-label explícito definido no componente
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });

    it('renders the submit button', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button', { name: SUBMIT_LABEL })).toBeInTheDocument();
    });

    it('shows inline validation errors when submitting empty form', async () => {
      render(<ContactForm />);
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });
      const alerts = screen.getAllByRole('alert');
      expect(alerts.length).toBeGreaterThan(0);
    });

    it('shows name required error when name is empty', async () => {
      render(<ContactForm />);
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });
      expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
    });

    it('shows email required error when email is empty', async () => {
      render(<ContactForm />);
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });
      expect(screen.getByText(/email é obrigatório/i)).toBeInTheDocument();
    });

    it('shows email format error for invalid email', async () => {
      render(<ContactForm />);
      fireEvent.change(screen.getByLabelText('Name'), {
        target: { value: 'João' },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'nao-e-email' },
      });
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });
      expect(screen.getByText(/formato de email inválido/i)).toBeInTheDocument();
    });

    it('disables button during submission', async () => {
      let resolveSubmit!: () => void;
      const onSubmit = vi.fn(
        () => new Promise<void>((resolve) => { resolveSubmit = resolve; })
      );

      render(<ContactForm onSubmit={onSubmit} />);

      fireEvent.change(screen.getByLabelText('Name'), {
        target: { value: 'João' },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'joao@exemplo.com' },
      });
      fireEvent.change(screen.getByLabelText('Message'), {
        target: { value: 'Olá' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });

      // aria-label permanece "Enviar mensagem" mas o botão fica disabled durante o submit
      expect(screen.getByRole('button', { name: SUBMIT_LABEL })).toBeDisabled();

      await act(async () => {
        resolveSubmit();
      });
    });

    it('shows network error message when submission fails', async () => {
      const onSubmit = vi.fn().mockRejectedValue(new Error('Network error'));
      render(<ContactForm onSubmit={onSubmit} />);

      fireEvent.change(screen.getByLabelText('Name'), {
        target: { value: 'João' },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'joao@exemplo.com' },
      });
      fireEvent.change(screen.getByLabelText('Message'), {
        target: { value: 'Olá' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });

      await waitFor(() => {
        expect(
          screen.getByText(/erro ao enviar\. tente novamente\./i)
        ).toBeInTheDocument();
      });
    });

    it('shows success message after successful submission', async () => {
      const onSubmit = vi.fn().mockResolvedValue(undefined);
      render(<ContactForm onSubmit={onSubmit} />);

      fireEvent.change(screen.getByLabelText('Name'), {
        target: { value: 'João' },
      });
      fireEvent.change(screen.getByLabelText('Email'), {
        target: { value: 'joao@exemplo.com' },
      });
      fireEvent.change(screen.getByLabelText('Message'), {
        target: { value: 'Olá' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: SUBMIT_LABEL }));
      });

      await waitFor(() => {
        expect(screen.getByText(/sucesso/i)).toBeInTheDocument();
      });
    });
  });
});
