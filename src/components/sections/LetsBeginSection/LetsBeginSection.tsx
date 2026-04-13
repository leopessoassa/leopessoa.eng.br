import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData, FormStatus } from '@/types/form';
import styles from './LetsBeginSection.module.css';
import { whatsappUrl, whatsappBaseUrl } from '@/utils/whatsapp';

const esperaItems = [
  'Resposta rápida (até 2h no horário comercial)',
  'Análise inicial gratuita do projeto',
  'Conversa descontraída sobre possibilidades',
  'Orçamento realista e transparente',
];

const contatos = [
  {
    id: 1,
    label: 'WhatsApp',
    value: 'Conversa direta e rápida',
    href: null, // gerado dinamicamente
    isWhatsapp: true,
  },
  {
    id: 2,
    label: 'Email',
    value: 'leo@leopessoa.eng.br',
    href: 'mailto:leo@leopessoa.eng.br',
    isWhatsapp: false,
  },
  {
    id: 3,
    label: 'Localização',
    value: 'João Pessoa — PB',
    href: null,
    isWhatsapp: false,
  },
];

export default function LetsBeginSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  async function handleFormSubmit(data: ContactFormData) {
    setStatus('submitting');
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('Form data:', data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.section} id="contato" aria-label="Vamos Conversar">

      {/* Grafismo triangular de entrada — transição do claro para o escuro */}
      <div className={styles.triangleTop} aria-hidden="true" />

      {/* Fundo com foto sutil */}
      <div
        className={styles.bgImage}
        style={{ backgroundImage: 'url(/images/xicara-cafe-na-areia-da-praia-v2.webp)' }}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* ── Coluna esquerda — manifesto + contatos ── */}
          <div className={styles.infoCol}>
            <p className={styles.eyebrow}>Próximo passo</p>
            <h2 className={styles.headline}>
              Café na praia para falar do{' '}
              <span className={styles.headlineAccent}>próximo projeto</span>?
            </h2>
            <div className={styles.headlineLine} aria-hidden="true" />
            <p className={styles.subheadline}>
              Vamos conversar sobre como podemos trabalhar juntos.
              Sem compromisso, só uma conversa entre profissionais.
            </p>

            {/* O que esperar */}
            <div className={styles.esperaBlock}>
              <p className={styles.blockEyebrow}>O que esperar</p>
              <ul className={styles.esperaList}>
                {esperaItems.map((item) => (
                  <li key={item} className={styles.esperaItem}>
                    <span className={styles.esperaBar} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contatos como linhas simples */}
            <div className={styles.contatosList}>
              {contatos.map((c) => {
                const href = c.isWhatsapp
                  ? whatsappBaseUrl()
                  : c.href ?? undefined;
                const Tag = href ? 'a' : 'div';
                return (
                  <Tag
                    key={c.id}
                    {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={styles.contatoItem}
                  >
                    <span className={styles.contatoLabel}>{c.label}</span>
                    <span className={styles.contatoSep} aria-hidden="true" />
                    <span className={styles.contatoValue}>{c.value}</span>
                  </Tag>
                );
              })}
            </div>

            {/* WhatsApp CTA direto */}
            <a
              href={whatsappUrl('Oi Leo! Sou arquiteto(a) e gostaria de conversar sobre uma parceria em automação residencial.')}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
              aria-label="Iniciar conversa no WhatsApp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true" />
              Prefiro falar pelo WhatsApp agora
            </a>
          </div>

          {/* ── Coluna direita — formulário ── */}
          <div className={styles.formCol}>
            <div className={styles.formWrap}>
              <p className={styles.formEyebrow}>Conte sobre seu projeto</p>
              <p className={styles.formSubtitle}>
                Respondo em até 2 horas no horário comercial.
              </p>

              {status === 'success' ? (
                <div className={styles.successMsg} role="status">
                  <span className={styles.successIcon} aria-hidden="true">✓</span>
                  <div>
                    <p className={styles.successTitle}>Mensagem enviada.</p>
                    <p className={styles.successDesc}>Entrarei em contato em breve.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className={styles.form}>
                  {status === 'error' && (
                    <p className={styles.errorMsg} role="alert">
                      Erro ao enviar. Tente novamente.
                    </p>
                  )}

                  <div className={styles.fieldGroup}>
                    <label htmlFor="lets-name" className={styles.fieldLabel}>
                      Nome
                    </label>
                    <input
                      id="lets-name"
                      type="text"
                      className={`${styles.fieldInput} ${errors.name ? styles.fieldInputError : ''}`}
                      placeholder="Seu nome completo"
                      aria-invalid={!!errors.name}
                      {...register('name', {
                        required: 'Nome é obrigatório',
                        validate: (v) => v.trim().length > 0 || 'Nome é obrigatório',
                      })}
                    />
                    {errors.name && (
                      <span className={styles.fieldError} role="alert">{errors.name.message}</span>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="lets-email" className={styles.fieldLabel}>
                      Email
                    </label>
                    <input
                      id="lets-email"
                      type="email"
                      className={`${styles.fieldInput} ${errors.email ? styles.fieldInputError : ''}`}
                      placeholder="seu@email.com.br"
                      aria-invalid={!!errors.email}
                      {...register('email', {
                        required: 'Email é obrigatório',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Formato de email inválido',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className={styles.fieldError} role="alert">{errors.email.message}</span>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="lets-message" className={styles.fieldLabel}>
                      Sobre o projeto
                    </label>
                    <textarea
                      id="lets-message"
                      className={styles.fieldTextarea}
                      placeholder="Conte brevemente sobre o projeto — tipo, localização, o que o cliente busca..."
                      {...register('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
