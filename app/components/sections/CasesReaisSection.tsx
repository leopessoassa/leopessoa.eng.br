export default function CasesReaisSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Cases reais:{" "}
            <span className="text-primary-500">
              projetos que venderam sozinhos
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-500 max-w-4xl mx-auto leading-relaxed">
            Veja como a automação transformou projetos simples em{" "}
            <strong className="text-secondary-800">
              experiências que impressionam
            </strong>
            {" "}valorizam o imóvel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary-900/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/projeto-residencial-cond.-ville-cristal-gravata-pe.webp"
                  alt="Residência Alto Padrão - Gravatá-PE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-accent-500 text-secondary-50 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L10 4.414l8.293 8.293a1 1 0 001.414-1.414l-9-9z" />
                  <path d="M17 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h12a1 1 0 011 1z" />
                </svg>
                Casa em condomínio
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                Condomínio Ville Cristal - Gravatá - PE
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Projeto de automação residencial com controle de iluminação, som
                ambiente e sistema de redes.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tamanho:
                  </span>
                  <span className="font-bold text-accent-500">400m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Número de circuitos:
                  </span>
                  <span className="font-bold text-primary-500">70</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-secondary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tecnologia:
                  </span>
                  <span className="font-bold text-secondary-600">Cabeada</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Projeto Elétrico
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Automação
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Iluminação
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Persianas
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Som Ambiente
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Climatização
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Rede Wifi
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-primary-700 to-accent-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary-900/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/projeto-residencial-cond.-alphaville-paraiba.webp"
                  alt="Residência Alto Padrão - Alphaville Paraíba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-accent-500 text-secondary-50 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L10 4.414l8.293 8.293a1 1 0 001.414-1.414l-9-9z" />
                  <path d="M17 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h12a1 1 0 011 1z" />
                </svg>
                Casa em condomínio
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                Condomínio Alphaville Paraíba - Bayeux - PB
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Projeto elétrico completo com sistema de iluminação
                personalizada e controle de ambientes por aplicativo, sistema de
                segurança integrado com IA.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tamanho:
                  </span>
                  <span className="font-bold text-accent-500">220m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Número de circuitos:
                  </span>
                  <span className="font-bold text-primary-500">35</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-secondary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tecnologia:
                  </span>
                  <span className="font-bold text-secondary-600">Cabeada</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Projeto Elétrico
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Automação
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Iluminação
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Persianas
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Som Ambiente
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Climatização
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Rede Wifi
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Aspiração Central
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Sistema de segurança
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-accent-500 to-primary-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary-900/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/projeto-residencial-apartamento-3quartos-manaira-pb.webp"
                  alt="Apartamento 3 quartos em Manaíra - João Pessoa - PB"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-primary-500 text-secondary-50 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Apartamento
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                Apartamento 3 quartos - João Pessoa - PB
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                Reforma para projeto de iluminação inteligente e climatização
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tamanho:
                  </span>
                  <span className="font-bold text-accent-500">84m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Número de circuitos:
                  </span>
                  <span className="font-bold text-primary-500">11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700 flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-secondary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Tecnologia:
                  </span>
                  <span className="font-bold text-secondary-600">
                    Sem fio Zigbee
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Automação
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Iluminação
                </span>
                <span className="bg-secondary-200 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Climatização
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary-50 rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              <svg
                className="w-8 h-8 inline mr-2 text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
              O que os arquitetos parceiros falam
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">AR</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">
                    Arq. Rafael Silva
                  </h4>
                  <p className="text-sm text-secondary-600 flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Parceiro há 2 anos
                  </p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "Leo transformou meus projetos. Agora meus clientes pedem
                automação antes mesmo de eu sugerir. É o diferencial que eu
                precisava para me destacar no mercado."
              </p>
            </div>

            <div className="bg-secondary-200 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-200 rounded-full flex items-center justify-center">
                  <span className="text-accent-700 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">
                    Arq. Carla Mendes
                  </h4>
                  <p className="text-sm text-secondary-600 flex items-center gap-1">
                    <svg
                      className="w-3 h-3 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Parceira há 1 ano
                  </p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "A parceria com Leo me deu confiança para aceitar projetos
                maiores. Ele explica tudo de forma que até eu entendo, imagina o
                cliente!"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              Seu próximo projeto pode ser o próximo case de sucesso
            </h3>
            <p className="text-lg text-secondary-600 mb-8">
              Vamos conversar sobre como transformar seu projeto em uma
              experiência que vende sozinha.
            </p>
            <a
              href="#contato"
              className="bg-accent-500 hover:bg-accent-600 text-secondary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Quero criar um case de sucesso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
