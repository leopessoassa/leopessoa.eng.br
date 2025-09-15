import { handlerCallWhatsapp } from "~/utils/handlersUtils";

export default function SobreLeoSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-900">
            Sobre{" "}
            <span className="text-primary-600">Leo Pessoa</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
            O engenheiro que <strong className="text-secondary-800">entende de negócios</strong> e sabe que 
            tecnologia só vale quando agrega valor real ao projeto.
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            
            {/* Foto e Info Básica */}
            <div className="text-center lg:text-left">
              <div className="w-80 h-96 rounded-2xl overflow-hidden mx-auto lg:mx-0 mb-8 shadow-elegant">
                <img 
                  src="/images/leonardo-pessoa.webp" 
                  alt="Leonardo Pessoa - Engenheiro Eletricista" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  🎯 Missão Pessoal
                </h3>
                <p className="text-secondary-700 italic">
                  "Ajudar arquitetos a impressionar seus clientes com automação que funciona, 
                  vende e valoriza o imóvel. Sem complicação, só resultados."
                </p>
              </div>
            </div>

            {/* Credenciais e Experiência */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Credibilidade Técnica + Visão Comercial
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 text-2xl">🎓</span>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Dupla Formação</h4>
                      <p className="text-secondary-600">Engenheiro Eletricista + Analista de Sistemas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg">
                    <span className="text-accent-600 text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold text-secondary-800">MBA Gestão Empresarial</h4>
                      <p className="text-secondary-600">FGV - Foco em resultados e ROI</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg">
                    <span className="text-primary-600 text-2xl">⚡</span>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Pós-graduação Instalações Elétricas</h4>
                      <p className="text-secondary-600">Residenciais e Comerciais</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-success-50 rounded-lg">
                    <span className="text-success-600 text-2xl">🏠</span>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Especialista Automação Residencial</h4>
                      <p className="text-secondary-600">Soluções inteligentes e integradas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-success-50 rounded-lg">
                    <span className="text-success-600 text-2xl">💻</span>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Especialista BIM & AutoCAD</h4>
                      <p className="text-secondary-600">Integração total com seu workflow</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-secondary-50 rounded-lg">
                    <span className="text-secondary-600 text-2xl">🏢</span>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Desenvolvedor Full Stack</h4>
                      <p className="text-secondary-600">Visão de processos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Diferencial Pessoal */}
          <div className="bg-cover bg-center bg-no-repeat rounded-2xl p-8 lg:p-12 relative overflow-hidden" style={{backgroundImage: 'url(/images/equipamentos-eletricos-sobre-projeto-v2.webp)'}}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/90 rounded-2xl"></div>
            
            <div className="text-center mb-8 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-secondary-900 mb-4">
                🤝 Por que arquitetos escolhem trabalhar comigo
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <div className="bg-primary-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💡</span>
                </div>
                <h4 className="font-bold text-secondary-800 mb-2">Falo sua língua</h4>
                <p className="text-secondary-600">Entendo design e sei explicar técnica de forma simples</p>
              </div>
              
              <div className="text-center">
                <div className="bg-success-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h4 className="font-bold text-secondary-800 mb-2">Penso em negócios</h4>
                <p className="text-secondary-600">MBA me ensinou que tecnologia precisa gerar ROI</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h4 className="font-bold text-secondary-800 mb-2">Pai de família</h4>
                <p className="text-secondary-600">Entendo o que realmente importa para os clientes</p>
              </div>
            </div>
          </div>

          {/* Localização e Contato */}
          <div className="mt-16 text-center">
            <div className="bg-primary-900 text-white rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">📍 João Pessoa - PB</h3>
                  <p className="text-blue-200 mb-4">
                    Atendimento presencial na Grande João Pessoa<br/>
                    Projetos remotos para toda a Paraíba
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="bg-white/10 px-3 py-1 rounded-full">CREA-PB Ativo</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <a 
                    href="#contato" 
                    className="gradient-cta hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Vamos conversar
                  </a>
                  <a 
                    onClick={() => handlerCallWhatsapp()}
                    className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                  >
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