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
    <section className="bg-primary-950 text-secondary-50 py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-950/60"></div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: getBGImage() }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/images/logo-leo-pessoa-sem-subtitulo.webp"
              alt="Leo Pessoa - Engenheiro Eletricista"
              className="h-20 md:h-24 mx-auto"
            />
          </div>

          <div className="inline-flex items-center bg-secondary-50/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <svg
              className="w-4 h-4 mr-2 text-accent-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-secondary-50">
              Engenheiro Eletricista CREA-PB
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-secondary-50">
            Seus projetos merecem ser{" "}
            <span className="text-accent-500">inesquecíveis</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-secondary-100 max-w-3xl mx-auto leading-relaxed">
            Automação residencial que{" "}
            <strong className="text-secondary-50">encanta clientes</strong> e{" "}
            <strong className="text-secondary-50">diferencia sua marca</strong>.
            O parceiro técnico que transforma sua visão criativa em experiências
            extraordinárias.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm text-secondary-100">BIM & AutoCAD</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm text-secondary-100">MBA FGV</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-sm text-secondary-100">
                João Pessoa - PB
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contato"
              className="bg-accent-500 hover:bg-accent-600 text-secondary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Vamos criar algo extraordinário juntos?
            </a>
            <a
              href="#processo"
              className="border-2 border-secondary-100/30 hover:border-accent-500 hover:bg-accent-500/10 text-secondary-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              Como funciona
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            <svg
              className="w-4 h-4 text-accent-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-sm text-secondary-100">
              Sem compromisso, só uma conversa entre profissionais
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-accent-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-secondary-100">
              Parceria estratégica para arquitetos que querem se destacar
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-accent-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm text-secondary-100">
              Projetos que vendem
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
