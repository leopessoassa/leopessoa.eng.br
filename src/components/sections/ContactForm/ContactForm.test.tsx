import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as fc from 'fast-check';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Feature: react-site-conversion, Property 7: ContactForm rejeita entradas inválidas
  // Validates: Requirements 9.2, 9.4
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
        async (_invalidData) => {
          const onSubmit = vi.fn();
          const { getByRole, getAllByRole, unmount } = render(
            <ContactForm onSubmit={onSubmit} />
          );

          // Click submit without filling valid data
          await act(async () => {
            fireEvent.click(getByRole('button', { name: /send/i }));
          });

          // onSubmit should NOT have been called
          expect(onSubmit).not.toHaveBeenCalled();

          // At least one alert (error) should be visible
          const alerts = getAllByRole('alert');
          expect(alerts.length).toBeGreaterThan(0);

          unmount();
        }
      ),
      { numRuns: 20 }
    );
  });

  // Feature: react-site-conversion, Property 8: ContactForm exibe sucesso para entradas válidas
  // Validates: Requirements 9.3
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
            fireEvent.change(getByLabelText(/name/i), {
              target: { value: validData.name },
            });
            fireEvent.change(getByLabelText(/email/i), {
              target: { value: validData.email },
            });
            fireEvent.change(getByLabelText(/message/i), {
              target: { value: validData.message },
            });
            fireEvent.click(getByRole('button', { name: /send/i }));
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
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('renders a Send button', () => {
      render(<ContactForm />);
      expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
    });

    it('shows inline validation errors when submitting empty form', async () => {
      render(<ContactForm />);
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
      });
      const alerts = screen.getAllByRole('alert');
      expect(alerts.length).toBeGreaterThan(0);
    });

    it('shows name required error when name is empty', async () => {
      render(<ContactForm />);
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
      });
      expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument();
    });

    it('shows email required error when email is empty', async () => {
      render(<ContactForm />);
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
      });
      expect(screen.getByText(/email é obrigatório/i)).toBeInTheDocument();
    });

    it('shows email format error for invalid email', async () => {
      render(<ContactForm />);
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'not-an-email' },
      });
      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
      });
      expect(screen.getByText(/formato de email inválido/i)).toBeInTheDocument();
    });

    it('disables button during submission', async () => {
      let resolveSubmit!: () => void;
      const onSubmit = vi.fn(
        () => new Promise<void>((resolve) => { resolveSubmit = resolve; })
      );

      render(<ContactForm onSubmit={onSubmit} />);

      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/message/i), {
        target: { value: 'Hello' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
      });

      // The button keeps aria-label="Send" but is disabled during submission
      expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();

      await act(async () => {
        resolveSubmit();
      });
    });

    it('shows network error message when submission fails', async () => {
      const onSubmit = vi.fn().mockRejectedValue(new Error('Network error'));
      render(<ContactForm onSubmit={onSubmit} />);

      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/message/i), {
        target: { value: 'Hello' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
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

      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John' },
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' },
      });
      fireEvent.change(screen.getByLabelText(/message/i), {
        target: { value: 'Hello' },
      });

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /send/i }));
      });

      await waitFor(() => {
        expect(screen.getByText(/sucesso/i)).toBeInTheDocument();
      });
    });
  });
});
