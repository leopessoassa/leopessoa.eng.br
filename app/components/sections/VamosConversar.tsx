import { handlerCallWhatsapp } from "~/utils/handlersUtils";
import ContactForm from "../ContactForm";

export default function VamosConversar() {
  return (
    <section
      id="contato"
      className="py-16 lg:py-24 bg-primary-950 text-secondary-50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/images/xicara-cafe-na-areia-da-praia-v2.webp)",
        }}
      ></div>
      <div className="absolute inset-0 bg-primary-950/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-50">
            Café na praia para falar do{" "}
            <span className="text-accent-500">próximo projeto</span>?
          </h2>
          <p className="text-xl md:text-2xl text-secondary-100 max-w-4xl mx-auto leading-relaxed">
            Vamos conversar sobre como podemos trabalhar juntos.{" "}
            <strong className="text-secondary-50">Sem compromisso</strong>, só
            uma conversa entre profissionais.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="bg-secondary-50/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <svg
                  className="w-6 h-6 text-accent-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                <h3 className="text-2xl font-bold text-center text-secondary-50">
                  Conte sobre seu projeto
                </h3>
              </div>

              <ContactForm />

              <div className="flex items-center justify-center gap-2 mt-4">
                <svg
                  className="w-4 h-4 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm text-secondary-500 text-center">
                  Resposta em até 2 horas no horário comercial
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <svg
                    className="w-6 h-6 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-secondary-50">
                    Outras formas de contato
                  </h3>
                </div>

                <div className="space-y-4">
                  <a
                    onClick={() => handlerCallWhatsapp()}
                    className="flex items-center gap-4 p-4 bg-secondary-50/10 backdrop-blur-sm rounded-lg hover:bg-secondary-50/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-success-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-secondary-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-50">
                        WhatsApp
                      </h4>
                      <p className="text-secondary-500 text-sm">
                        Conversa direta e rápida
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:leo@leopessoa.eng.br"
                    className="flex items-center gap-4 p-4 bg-secondary-50/10 backdrop-blur-sm rounded-lg hover:bg-secondary-50/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-secondary-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-50">Email</h4>
                      <p className="text-secondary-100">leo@leopessoa.eng.br</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-secondary-50/10 backdrop-blur-sm rounded-lg">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-secondary-50"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-50">
                        Localização
                      </h4>
                      <p className="text-secondary-100">João Pessoa - PB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-50/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-6 h-6 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h4 className="text-xl font-bold text-secondary-50">
                    O que esperar
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-secondary-100">
                      Resposta rápida (até 2h no horário comercial)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-secondary-100">
                      Análise inicial gratuita do projeto
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-secondary-100">
                      Conversa descontraída sobre possibilidades
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p className="text-secondary-100">
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
