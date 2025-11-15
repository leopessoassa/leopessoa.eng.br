import { handlerCallWhatsapp } from "~/utils/handlersUtils";

export default function SobreLeoSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Sobre <span className="text-primary-500">Leo Pessoa</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-500 max-w-4xl mx-auto leading-relaxed">
            O engenheiro que{" "}
            <strong className="text-secondary-800">entende de negócios</strong>{" "}
            e sabe que tecnologia só vale quando agrega valor real ao projeto.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="text-center lg:text-left">
              <div className="w-80 h-96 rounded-2xl overflow-hidden mx-auto lg:mx-0 mb-8 shadow-lg">
                <img
                  src="/images/leonardo-pessoa.webp"
                  alt="Leonardo Pessoa - Engenheiro Eletricista"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="bg-secondary-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-6 h-6 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-secondary-900">
                    Missão Pessoal
                  </h3>
                </div>
                <p className="text-secondary-700 italic">
                  {`"Ajudar arquitetos e design de interiores a impressionar seus clientes com automação que funciona, vende e valoriza o imóvel. Sem complicação, só resultados."`}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Credibilidade Técnica + Visão Comercial
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-secondary-200 rounded-lg">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">
                        Dupla Formação
                      </h4>
                      <p className="text-secondary-600">
                        Engenheiro Eletricista + Analista de Sistemas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary-200 rounded-lg">
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">
                        MBA Gestão Empresarial
                      </h4>
                      <p className="text-secondary-600">
                        FGV - Foco em resultados e ROI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary-200 rounded-lg">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">
                        Pós-graduação Instalações Elétricas
                      </h4>
                      <p className="text-secondary-600">
                        Residenciais e Comerciais
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary-200 rounded-lg">
                    <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-success-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L10 4.414l8.293 8.293a1 1 0 001.414-1.414l-9-9z" />
                        <path d="M17 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h12a1 1 0 011 1z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">
                        Especialista Automação Residencial
                      </h4>
                      <p className="text-secondary-600">
                        Soluções inteligentes e integradas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary-200 rounded-lg">
                    <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-success-500"
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
                    <div>
                      <h4 className="font-semibold text-secondary-800">
                        Especialista BIM &amp; AutoCAD
                      </h4>
                      <p className="text-secondary-600">
                        Integração total com seu workflow
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary-200 rounded-lg">
                    <div className="w-10 h-10 bg-secondary-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-secondary-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">
                        Desenvolvedor Full Stack
                      </h4>
                      <p className="text-secondary-600">Visão de processos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-cover bg-center bg-no-repeat rounded-2xl p-8 lg:p-12 relative overflow-hidden"
            style={{
              backgroundImage:
                "url(/images/equipamentos-eletricos-sobre-projeto-v2.webp)",
            }}
          >
            <div className="absolute inset-0 bg-secondary-100/90 rounded-2xl"></div>
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                <svg
                  className="w-8 h-8 inline mr-2 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                {`Por que arquitetos e design de interiores escolhem trabalhar comigo`}
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-secondary-800 mb-2">
                  Falo sua língua
                </h4>
                <p className="text-secondary-600">
                  Entendo design e sei explicar técnica de forma simples
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-secondary-800 mb-2">
                  Penso em negócios
                </h4>
                <p className="text-secondary-600">
                  MBA me ensinou que tecnologia precisa gerar ROI
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary-300 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-secondary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h4 className="font-bold text-secondary-800 mb-2">
                  Pai de família
                </h4>
                <p className="text-secondary-600">
                  Entendo o que realmente importa para os clientes
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary-950 text-secondary-50 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <svg
                      className="w-6 h-6 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold">João Pessoa - PB</h3>
                  </div>
                  <p className="text-secondary-100 mb-4">
                    Atendimento presencial na Grande João Pessoa
                    <br />
                    Projetos remotos para toda a Paraíba
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="bg-secondary-50/10 px-3 py-1 rounded-full flex items-center gap-2">
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
                      CREA-PB Ativo
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <a
                    href="#contato"
                    className="bg-accent-500 hover:bg-accent-600 text-secondary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Vamos conversar
                  </a>
                  <a
                    href="#"
                    className="border-2 border-secondary-100/30 hover:border-accent-500 hover:bg-accent-500/10 text-secondary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5 text-success-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
