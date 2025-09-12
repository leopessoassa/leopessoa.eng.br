export default function ComoFuncionaSection() {
  return (
    <section id="processo" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Como funciona nossa{" "}
            <span className="text-primary-600">parceria</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Processo colaborativo simples que <strong className="text-secondary-800">você já conhece</strong>, 
            só que agora com expertise elétrica integrada.
          </p>
        </div>

        {/* Processo em 4 Etapas */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Etapa 1 */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-elegant">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Você traz o projeto
                  </h3>
                  <p className="text-lg text-secondary-600 mb-4">
                    Envie seus arquivos BIM/AutoCAD e conte sobre as necessidades do cliente. 
                    Analisamos juntos o que é possível fazer.
                  </p>
                  <div className="flex items-center gap-2 text-primary-600">
                    <span className="text-sm">📐</span>
                    <span className="text-sm font-medium">BIM & AutoCAD compatível</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-elegant">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Eu traduzo a técnica
                  </h3>
                  <p className="text-lg text-secondary-600 mb-4">
                    Transformo automação complexa em benefícios que o cliente entende. 
                    Orçamento realista com ROI demonstrável.
                  </p>
                  <div className="flex items-center gap-2 text-accent-600">
                    <span className="text-sm">💬</span>
                    <span className="text-sm font-medium">Linguagem que vende</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-success-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-elegant">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Vendemos juntos
                  </h3>
                  <p className="text-lg text-secondary-600 mb-4">
                    Apresentação conjunta com você liderando o design e eu explicando 
                    a automação. Cliente vê valor e aprova.
                  </p>
                  <div className="flex items-center gap-2 text-success-600">
                    <span className="text-sm">🤝</span>
                    <span className="text-sm font-medium">Parceria na apresentação</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Etapa 4 */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-secondary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-elegant">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                    Executamos
                  </h3>
                  <p className="text-lg text-secondary-600 mb-4">
                    Você cuida do design, eu da automação. Comunicação constante 
                    para entregar no prazo e impressionar o cliente.
                  </p>
                  <div className="flex items-center gap-2 text-secondary-600">
                    <span className="text-sm">⚡</span>
                    <span className="text-sm font-medium">Execução integrada</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
              Simples assim. Sem complicação.
            </h3>
            <p className="text-lg text-secondary-600 mb-8">
              Você continua sendo o protagonista do projeto. Eu só adiciono a expertise elétrica 
              que faltava para impressionar seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contato" 
                className="gradient-cta hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
              >
                Vamos começar uma parceria
              </a>
              <a 
                href="tel:+5583982078702"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                WhatsApp: (83) 9 8207-8702
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}