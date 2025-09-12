import type { MetaFunction } from "react-router";
import HeroSection from "~/components/sections/HeroSection";
import ParaArquitetosSection from "~/components/sections/ParaArquitetosSection";
import ComoFuncionaSection from "~/components/sections/ComoFuncionaSection";
import CasesReaisSection from "~/components/sections/CasesReaisSection";
import SobreLeoSection from "~/components/sections/SobreLeoSection";
import VamosConversar from "~/components/sections/VamosConversar";

export const meta: MetaFunction = () => {
  return [
    { title: "Leo Pessoa - Engenheiro Eletricista João Pessoa | Projetos Elétricos e Automação Residencial" },
    { name: "description", content: "Engenheiro eletricista em João Pessoa-PB especializado em projetos elétricos e automação residencial. Parceiro técnico para arquitetos com expertise em BIM e AutoCAD." },
    { name: "keywords", content: "engenheiro eletricista João Pessoa, projetos elétricos Paraíba, automação residencial João Pessoa, BIM AutoCAD, arquitetos João Pessoa, CREA-PB" },
    { property: "og:title", content: "Leo Pessoa - Engenheiro Eletricista João Pessoa" },
    { property: "og:description", content: "Parceiro técnico para arquitetos em João Pessoa. Projetos elétricos e automação residencial com BIM e AutoCAD." },
    { name: "geo.region", content: "BR-PB" },
    { name: "geo.placename", content: "João Pessoa" },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ParaArquitetosSection />

      <ComoFuncionaSection />

      <CasesReaisSection />

      <SobreLeoSection />

      <VamosConversar />

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Leo Pessoa - Engenheiro Eletricista. Todos os direitos reservados.</p>
          <p className="mt-2 text-secondary-400">João Pessoa - PB | CREA-PB</p>
        </div>
      </footer>
    </div>
  );
}