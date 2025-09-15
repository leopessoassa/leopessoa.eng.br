export default function ProcessoSection() {
  return (
    <section id="processo" className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{backgroundImage: 'url(/images/equipamentos-eletricos-sobre-projeto-v1.webp)'}}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/85"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Como funciona nossa{" "}
            <span className="text-accent-300">parceria</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Processo simples e transparente para <strong className="text-white">resultados garantidos</strong>
          </p>
        </div>

        {/* Steps do Processo */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Step 1 - Análise */}
            <div className="text-center">
              <div className="bg-accent-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <span className="text-white text-3xl">🔍</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">1. Análise</h3>
                <p className="text-white/80 mb-4">
                  Entendemos seu projeto, necessidades do cliente e orçamento disponível
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Reunião inicial</li>
                  <li>• Análise do projeto</li>
                  <li>• Definição de escopo</li>
                </ul>
              </div>
            </div>

            {/* Step 2 - Projeto */}
            <div className="text-center">
              <div className="bg-primary-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <span className="text-white text-3xl">📐</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">2. Projeto</h3>
                <p className="text-white/80 mb-4">
                  Desenvolvimento técnico integrado ao seu workflow BIM/AutoCAD
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Projeto elétrico</li>
                  <li>• Automação residencial</li>
                  <li>• Compatibilização</li>
                </ul>
              </div>
            </div>

            {/* Step 3 - Execução */}
            <div className="text-center">
              <div className="bg-success-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">3. Execução</h3>
                <p className="text-white/80 mb-4">
                  Acompanhamento técnico e suporte durante toda a obra
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Suporte técnico</li>
                  <li>• Acompanhamento</li>
                  <li>• Resolução de dúvidas</li>
                </ul>
              </div>
            </div>

            {/* Step 4 - Entrega */}
            <div className="text-center">
              <div className="bg-secondary-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <span className="text-white text-3xl">🎯</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">4. Entrega</h3>
                <p className="text-white/80 mb-4">
                  Cliente satisfeito e você com mais um projeto de sucesso
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Testes finais</li>
                  <li>• Treinamento</li>
                  <li>• Garantia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ⏱️ Prazo médio: 15 dias
              </h3>
              <p className="text-white/80 mb-6">
                Da análise inicial até a entrega do projeto completo
              </p>
              <a 
                href="#contato" 
                className="gradient-cta hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1 inline-block"
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