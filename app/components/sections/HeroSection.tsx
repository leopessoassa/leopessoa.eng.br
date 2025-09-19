import { trackEvent } from "../Analytics";

export default function HeroSection() {
  const handleCTAClick = (ctaType: string) => {
    trackEvent("cta_click", {
      cta_location: "hero",
      cta_type: ctaType,
    });
  };

  const getBGImage = () => {
    const imagens = [
      "equipamentos-eletricos-sobre-projeto-v5",
      "equipamentos-eletricos-sobre-projeto-v6",
      "visualizacao-conduites-projeto-eletrico-3d",
      "aperto-de-mao-colaboracao",
      "projetos-e-notebooks-versao-1",
      "projetos-e-notebooks-versao-2",
      "homem-sentado-e-mulher-em-pe-conversando-sobre-projeto-arquitetonico-na-mesa",
      "homem-sentado-e-homem-em-pe-conversando-sobre-projeto-arquitetonico-na-mesa",
      "maos-de-duas-pessoas-diferentes-em-pe-conversando-sobre-projeto-na-mesa",
    ];
    return `url(/images/${
      imagens[Math.floor(Math.random() * imagens.length)]
    }.webp)`;
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white py-20 lg:py-32 relative overflow-hidden"
      style={{ backgroundImage: getBGImage() }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-700/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">
              🏆 Engenheiro Eletricista CREA-PB
            </span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            O parceiro que resolve suas{" "}
            <span className="text-accent-300">dores técnicas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Automação residencial que seus clientes <strong>entendem</strong> e{" "}
            <strong>aprovam no orçamento</strong>. Parceria técnica
            descomplicada para arquitetos em João Pessoa.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <span className="text-accent-300">✓</span>
              <span className="text-sm">BIM & AutoCAD</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-300">✓</span>
              <span className="text-sm">MBA FGV</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-300">✓</span>
              <span className="text-sm">João Pessoa - PB</span>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contato"
              onClick={() => handleCTAClick("primary")}
              className="gradient-cta hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Café na praia para falar do próximo projeto?
            </a>
            <a
              href="#processo"
              onClick={() => handleCTAClick("secondary")}
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Como funciona
            </a>
          </div>

          {/* Micro-copy */}
          <p className="text-sm text-white/80 mt-6">
            💬 Sem compromisso, só uma conversa entre profissionais
          </p>
        </div>
      </div>
    </section>
  );
}
