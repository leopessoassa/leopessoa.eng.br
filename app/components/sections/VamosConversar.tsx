import { useState } from "react";
import { trackEvent } from "../Analytics";
import { handlerCallWhatsapp } from "~/utils/handlersUtils";
import { InputMask } from "@react-input/mask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

// Esquema de validação Zod para os dados do contact
const contactSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, "Nome deve conter apenas letras e espaços"),
  cel: z
    .string()
    .nonempty("Celular é obrigatório")
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      "O Celular deve estar no formato (99) 99999-9999"
    ),
  email: z.email("E-mail inválido").nonempty("E-mail é obrigatório"),
  projectType: z.string().nonempty("Tipo de projeto é obrigatório"),
  message: z.string().nonempty("Breve descrição é obrigatório"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function VamosConversar() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      cel: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    try {
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (!form) throw new Error("Não foi possível recuperar o formulário.");

      await emailjs
        .sendForm(
          "service_1ehb865",
          "template_ldhbw1b",
          form as HTMLFormElement,
          {
            publicKey: "Hm7UaQdaVhNY7XQyc",
          }
        )
        .then(
          () => {
            // Track successful form submission
            trackEvent("form_submit", {
              form_name: "contact-form",
              project_type: data.projectType,
            });

            setSubmitStatus("success");
            reset();
          },
          () => {
            setSubmitStatus("error");
            trackEvent("form_error", { error_type: "submission_failed" });
          }
        );
    } catch (error) {
      setSubmitStatus("error");
      trackEvent("form_error", { error_type: "submission_failed" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contato"
      className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/xicara-cafe-na-areia-da-praia-v2.webp)",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/75"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Café na praia para falar do{" "}
            <span className="text-accent-300">próximo projeto</span>?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Vamos conversar sobre como podemos trabalhar juntos.
            <strong className="text-white"> Sem compromisso</strong>, só uma
            conversa entre profissionais.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Formulário */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6 text-center">
                📝 Conte sobre seu projeto
              </h3>

              <form
                id="contact-form"
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit, (data) => console.error(data))}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      {...register("name", { disabled: isSubmitting })}
                      placeholder="Como posso te chamar?"
                      className={`w-full px-4 py-3 rounded-lg text-secondary-900  border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors ${
                        isSubmitting ? "bg-secondary-300" : "bg-white"
                      } ${
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">
                      WhatsApp
                    </label>
                    <InputMask
                      type="tel"
                      mask="(__) _____-____"
                      replacement={{ _: /\d/ }}
                      {...register("cel", { disabled: isSubmitting })}
                      id="cel"
                      className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors ${
                        isSubmitting ? "bg-secondary-300" : "bg-white"
                      } ${
                        errors.cel ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="(83) 99999-9999"
                      onChange={(e: any) => setValue("cel", e.target.value)}
                    />
                    {errors.cel && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.cel.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { disabled: isSubmitting })}
                    className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors ${
                      isSubmitting ? "bg-secondary-300" : "bg-white"
                    } ${
                      errors.email ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Tipo do projeto
                  </label>
                  <select
                    {...register("projectType", { disabled: isSubmitting })}
                    className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors ${
                      isSubmitting ? "bg-secondary-300" : "bg-white"
                    } ${
                      errors.email ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="comercial">Comercial</option>
                    <option value="reforma">Reforma</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white">
                    Conte sobre o projeto
                  </label>
                  <textarea
                    {...register("message", { disabled: isSubmitting })}
                    placeholder="Descreva o projeto, necessidades do cliente, orçamento estimado..."
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors ${
                      isSubmitting ? "bg-secondary-300" : "bg-white"
                    } ${
                      errors.email ? "border-red-500 focus:ring-red-500" : ""
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant ${
                    isSubmitting
                      ? "bg-secondary-400 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-success-600 hover:bg-success-700"
                      : submitStatus === "error"
                      ? "bg-red-600 hover:bg-red-700"
                      : "gradient-cta hover:bg-accent-600 hover:shadow-xl transform hover:-translate-y-1"
                  } text-white`}
                >
                  {isSubmitting
                    ? "📤 Enviando..."
                    : submitStatus === "success"
                    ? "✅ Enviado com sucesso!"
                    : submitStatus === "error"
                    ? "❌ Erro no envio"
                    : "🚀 Enviar projeto"}
                </button>
              </form>

              {submitStatus === "success" && (
                <p className="text-sm text-success-300 mt-4 text-center font-medium">
                  ✅ Mensagem enviada! Resposta em até 2 horas no horário
                  comercial
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-300 mt-4 text-center font-medium">
                  ❌ Erro no envio. Tente pelo WhatsApp: (83) 9 8207-8702
                </p>
              )}
              {submitStatus === "idle" && (
                <p className="text-sm text-white/80 mt-4 text-center">
                  📱 Resposta em até 2 horas no horário comercial
                </p>
              )}
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  💬 Outras formas de contato
                </h3>

                <div className="space-y-4">
                  <a
                    onClick={() => handlerCallWhatsapp()}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-success-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">WhatsApp</h4>
                    </div>
                  </a>

                  <a
                    href="mailto:leo@leopessoa.eng.br"
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-white/80">leo@leopessoa.eng.br</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Localização</h4>
                      <p className="text-white/80">João Pessoa - PB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expectativas */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-white">
                  ⏰ O que esperar
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">
                      Resposta rápida (até 2h no horário comercial)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">
                      Análise inicial gratuita do projeto
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">
                      Conversa descontraída sobre possibilidades
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">
                      Orçamento realista e transparente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
