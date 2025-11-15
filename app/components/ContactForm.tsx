import { useState } from "react";
import { InputMask } from "@react-input/mask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { trackEvent } from "./Analytics";

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

export default function ContactForm() {
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
    <form
      id="contact-form"
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit, (data) => console.error(data))}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-secondary-50">
            Seu nome
          </label>
          <input
            type="text"
            {...register("name", { disabled: isSubmitting })}
            placeholder="Como posso te chamar?"
            className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-secondary-100/20 focus:border-accent-500 focus:outline-none transition-colors ${
              isSubmitting ? "bg-secondary-50" : "bg-white"
            } ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-secondary-50">
            WhatsApp
          </label>
          <InputMask
            type="tel"
            mask="(__) _____-____"
            replacement={{ _: /\d/ }}
            {...register("cel", { disabled: isSubmitting })}
            id="cel"
            className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-secondary-100/20 focus:border-accent-500 focus:outline-none transition-colors ${
              isSubmitting ? "bg-secondary-50" : "bg-white"
            } ${errors.cel ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="(83) 99999-9999"
            onChange={(e: any) => setValue("cel", e.target.value)}
          />
          {errors.cel && (
            <p className="mt-1 text-sm text-red-600">{errors.cel.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-secondary-50">
          Email
        </label>
        <input
          type="email"
          {...register("email", { disabled: isSubmitting })}
          className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-secondary-100/20 focus:border-accent-500 focus:outline-none transition-colors ${
            isSubmitting ? "bg-secondary-50" : "bg-white"
          } ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-secondary-50">
          Tipo do projeto
        </label>
        <select
          {...register("projectType", { disabled: isSubmitting })}
          className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-secondary-100/20 focus:border-accent-500 focus:outline-none transition-colors ${
            isSubmitting ? "bg-secondary-50" : "bg-white"
          } ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
        >
          <option value="">Selecione o tipo</option>
          <option value="apartamento">Apartamento</option>
          <option value="casa">Casa</option>
          <option value="comercial">Comercial</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.projectType.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-secondary-50">
          Conte sobre o projeto
        </label>
        <textarea
          {...register("message", { disabled: isSubmitting })}
          placeholder="Descreva o projeto, necessidades do cliente, orçamento estimado..."
          rows={4}
          className={`w-full px-4 py-3 rounded-lg text-secondary-900 border-2 border-secondary-100/20 focus:border-accent-500 focus:outline-none transition-colors bg-secondary-50 ${
            isSubmitting ? "bg-secondary-50" : "bg-white"
          } ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
          required
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg ${
          isSubmitting
            ? "bg-secondary-400 cursor-not-allowed"
            : submitStatus === "success"
            ? "bg-success-600 hover:bg-success-700"
            : submitStatus === "error"
            ? "bg-red-600 hover:bg-red-700"
            : "bg-accent-500 hover:bg-accent-600 hover:shadow-xl transform hover:-translate-y-1"
        } text-secondary-50 flex items-center justify-center gap-2`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
        Enviar projeto
      </button>
    </form>
  );
}

/*
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
              )}*/
