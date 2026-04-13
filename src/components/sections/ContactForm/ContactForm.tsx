import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData, FormStatus } from '@/types/form';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const handleFormSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.callbackSection} aria-label="Contact Section">
      <div
        className={styles.bgImage}
        style={{ backgroundImage: 'url(/images/background/5.webp)' }}
      />
      <div className={styles.container}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className={`${styles.secTitle} sec-title`}>
              <h3>Conte sobre seu projeto</h3>
              <div className="text">
                Vamos conversar sobre como podemos trabalhar juntos. Sem compromisso, só uma conversa entre profissionais.
              </div>
            </div>

            <div className={styles.callbackForm}>
              {status === 'error' && (
                <div className={styles.networkError} role="alert">
                  Erro ao enviar. Tente novamente.
                </div>
              )}

              {status === 'success' ? (
                <div className={styles.successMessage} role="status">
                  Mensagem enviada com sucesso!
                </div>
              ) : (
                <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name">Seu nome (obrigatório)</label>
                    <input
                      id="contact-name"
                      type="text"
                      aria-label="Name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name', {
                        required: 'Nome é obrigatório',
                        validate: (v) => v.trim().length > 0 || 'Nome é obrigatório',
                      })}
                    />
                    {errors.name && (
                      <span id="name-error" className={styles.fieldError} role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email">Email (obrigatório)</label>
                    <input
                      id="contact-email"
                      type="email"
                      aria-label="Email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Formato de email inválido',
                        },
                      })}
                    />
                    {errors.email && (
                      <span id="email-error" className={styles.fieldError} role="alert">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message">Mensagem</label>
                    <textarea
                      id="contact-message"
                      aria-label="Message"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      {...register('message')}
                    />
                    {errors.message && (
                      <span id="message-error" className={styles.fieldError} role="alert">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <button
                      type="submit"
                      className={`theme-btn btn-style-three ${styles.submitBtn}`}
                      disabled={status === 'submitting'}
                      aria-label="Enviar mensagem"
                    >
                      {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
