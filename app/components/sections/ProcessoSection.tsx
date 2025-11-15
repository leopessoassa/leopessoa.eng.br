export default function ProcessoSection() {
  return (
    <section
      id="processo"
      className="py-16 lg:py-24 bg-primary-950 text-secondary-50 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url(/images/equipamentos-eletricos-sobre-projeto-v1.webp)",
        }}
      ></div>
      <div className="absolute inset-0 bg-primary-950/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-50">
            Como funciona nossa{" "}
            <span className="text-accent-500">parceria</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-100 max-w-4xl mx-auto leading-relaxed">
            Processo simples e transparente para{" "}
            <strong className="text-secondary-50">resultados garantidos</strong>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-secondary-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-8 0 2 2 0 104 0 4 4 0 014 0 2 2 0 104 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="bg-secondary-50/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary-50 mb-4">
                  1. Análise
                </h3>
                <p className="text-secondary-100 mb-4">
                  Entendemos seu projeto, necessidades do cliente e orçamento
                  disponível
                </p>
                <ul className="text-sm text-secondary-500 space-y-1">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Reunião inicial
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Análise do projeto
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Definição de escopo
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-primary-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-secondary-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="bg-secondary-50/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary-50 mb-4">
                  2. Projeto
                </h3>
                <p className="text-secondary-100 mb-4">
                  Desenvolvimento técnico integrado ao seu workflow BIM/AutoCAD
                </p>
                <ul className="text-sm text-secondary-500 space-y-1">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Projeto elétrico
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Automação residencial
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Compatibilização
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-success-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-secondary-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="bg-secondary-50/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary-50 mb-4">
                  3. Execução
                </h3>
                <p className="text-secondary-100 mb-4">
                  Acompanhamento técnico e suporte durante toda a obra
                </p>
                <ul className="text-sm text-secondary-500 space-y-1">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Suporte técnico
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Acompanhamento
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Resolução de dúvidas
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-secondary-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-secondary-50"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              </div>
              <div className="bg-secondary-50/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary-50 mb-4">
                  4. Entrega
                </h3>
                <p className="text-secondary-100 mb-4">
                  Cliente satisfeito e você com mais um projeto de sucesso
                </p>
                <ul className="text-sm text-secondary-500 space-y-1">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-secondary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Testes finais
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-secondary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Treinamento
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-3 h-3 text-secondary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Garantia
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-secondary-50/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
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
                <h3 className="text-2xl font-bold text-secondary-50">
                  Prazo médio: 15 dias
                </h3>
              </div>
              <p className="text-secondary-100 mb-6">
                Da análise inicial até a entrega do projeto completo
              </p>
              <a
                href="#contato"
                className="bg-accent-500 hover:bg-accent-600 text-secondary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
              >
                Começar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
