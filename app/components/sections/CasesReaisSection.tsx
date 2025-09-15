export default function CasesReaisSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Cases reais:{" "}
            <span className="text-primary-600">
              projetos que venderam sozinhos
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Veja como a automação transformou projetos simples em
            <strong className="text-secondary-800">
              {" "}
              experiências que impressionam
            </strong>{" "}
            e valorizam o imóvel.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Case 1 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/projeto-residencial-cond.-ville-cristal-gravata-pe.webp"
                  alt="Residência Alto Padrão - Gravatá-PE"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  <span className="text-secondary-700">Tamanho:</span>
                  <span className="font-bold text-accent-600">400m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Número de circuitos:</span>
                  <span className="font-bold text-primary-600">63</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Tecnologia:</span>
                  <span className="font-bold text-secondary-600">Cabeada</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Projeto Elétrico
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Automação
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Iluminação
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Persianas
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Som Ambiente
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Climatização
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Rede Wifi
                </span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-secondary-600 to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/projeto-residencial-cond.-alphaville-paraiba.webp"
                  alt="Residência Alto Padrão - Alphaville Paraíba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  <span className="text-secondary-700">Tamanho:</span>
                  <span className="font-bold text-accent-600">220m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Número de circuitos:</span>
                  <span className="font-bold text-primary-600">35</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Tecnologia:</span>
                  <span className="font-bold text-secondary-600">Cabeada</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Projeto Elétrico
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Automação
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Iluminação
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Persianas
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Som Ambiente
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Climatização
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Rede Wifi
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Aspiração Central
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Sistema de segurança
                </span>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="h-64 bg-gradient-to-br from-accent-500 to-green-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/projeto-residencial-apartamento-3quartos-manaira-pb.webp"
                  alt="Apartamento 3 quartos em Manaíra - João Pessoa - PB"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                  <span className="text-secondary-700">Tamanho:</span>
                  <span className="font-bold text-accent-600">84m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Número de circuitos:</span>
                  <span className="font-bold text-primary-600">11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-secondary-700">Tecnologia:</span>
                  <span className="font-bold text-secondary-600">
                    Sem fio Zigbee
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Automação
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Iluminação
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm">
                  Climatização
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-elegant">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              💬 O que os arquitetos parceiros falam
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold">AR</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">
                    Arq. Rafael Silva
                  </h4>
                  <p className="text-sm text-secondary-600">
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

            <div className="bg-success-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-success-200 rounded-full flex items-center justify-center">
                  <span className="text-success-700 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">
                    Arq. Carla Mendes
                  </h4>
                  <p className="text-sm text-secondary-600">
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

        {/* CTA Final */}
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
              className="gradient-cta hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Quero criar um case de sucesso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}