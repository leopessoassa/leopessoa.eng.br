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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
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
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
