export default function CasesReaisSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Cases reais:{" "}
            <span className="text-primary-600">projetos que venderam sozinhos</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            Veja como a automação transformou projetos simples em 
            <strong className="text-secondary-800"> experiências que impressionam</strong> e valorizam o imóvel.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Case 1 - Apartamento Manaíra */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-elegant">
            <div className="bg-primary-100 h-48 flex items-center justify-center">
              <span className="text-primary-600 text-lg font-medium">Apartamento 3Q - Manaíra</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                  Classe Média Emergente
                </span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  3 Quartos
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                "Agora minha casa pensa por mim"
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-success-600 text-lg">✓</span>
                  <p className="text-secondary-600">Iluminação automatizada que se adapta ao horário</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success-600 text-lg">✓</span>
                  <p className="text-secondary-600">Controle de ar-condicionado pelo celular</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success-600 text-lg">✓</span>
                  <p className="text-secondary-600">Sistema de segurança integrado</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-secondary-500">Valorização</p>
                    <p className="text-2xl font-bold text-success-600">+18%</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Economia energia</p>
                    <p className="text-2xl font-bold text-primary-600">-25%</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Satisfação</p>
                    <p className="text-2xl font-bold text-accent-600">10/10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case 2 - Casa Alphaville */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-elegant">
            <div className="bg-accent-100 h-48 flex items-center justify-center">
              <span className="text-accent-600 text-lg font-medium">Casa - Alphaville Paraíba</span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                  Classe Alta
                </span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  4 Suítes
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                "Tecnologia que impressiona visitas"
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-success-600 text-lg">✓</span>
                  <p className="text-secondary-600">Automação completa de ambientes</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success-600 text-lg">✓</span>
                  <p className="text-secondary-600">Sistema de som ambiente integrado</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-success-600 text-lg">✓</span>
                  <p className="text-secondary-600">Controle de piscina e jardim automatizado</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-secondary-500">Valorização</p>
                    <p className="text-2xl font-bold text-success-600">+32%</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Economia energia</p>
                    <p className="text-2xl font-bold text-primary-600">-35%</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Satisfação</p>
                    <p className="text-2xl font-bold text-accent-600">10/10</p>
                  </div>
                </div>
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
                  <h4 className="font-bold text-secondary-900">Arq. Rafael Silva</h4>
                  <p className="text-sm text-secondary-600">Parceiro há 2 anos</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "Leo transformou meus projetos. Agora meus clientes pedem automação antes mesmo de eu sugerir. 
                É o diferencial que eu precisava para me destacar no mercado."
              </p>
            </div>
            
            <div className="bg-success-50 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-success-200 rounded-full flex items-center justify-center">
                  <span className="text-success-700 font-bold">CM</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary-900">Arq. Carla Mendes</h4>
                  <p className="text-sm text-secondary-600">Parceira há 1 ano</p>
                </div>
              </div>
              <p className="text-secondary-700 italic">
                "A parceria com Leo me deu confiança para aceitar projetos maiores. 
                Ele explica tudo de forma que até eu entendo, imagina o cliente!"
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
              Vamos conversar sobre como transformar seu projeto em uma experiência que vende sozinha.
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