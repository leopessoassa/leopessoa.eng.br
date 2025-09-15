import { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    } else {
      initializeGTM(JSON.parse(consent));
    }
  }, []);

  const initializeGTM = (consent: any) => {
    if (consent.analytics) {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PS4LXP3G');
      `;
      document.head.appendChild(script);
    }
  };

  const handleAcceptAll = () => {
    const consent = { analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowConsent(false);
    initializeGTM(consent);
  };

  const handleRejectAll = () => {
    const consent = { analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowConsent(false);
  };

  const handleCustomize = (analytics: boolean, marketing: boolean) => {
    const consent = { analytics, marketing };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowConsent(false);
    setShowDetails(false);
    initializeGTM(consent);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-secondary-200 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-secondary-700 text-sm">
                Usamos cookies para melhorar sua experiência e analisar o tráfego do site. 
                <button 
                  onClick={() => setShowDetails(true)}
                  className="text-primary-600 hover:text-primary-700 underline ml-1"
                >
                  Ver detalhes
                </button>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-secondary-600 hover:text-secondary-800 text-sm border border-secondary-300 rounded-lg"
              >
                Rejeitar
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-secondary-900">Configurações de Cookies</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-secondary-800">Cookies Essenciais</h4>
                  <p className="text-sm text-secondary-600">Necessários para o funcionamento do site</p>
                </div>
                <span className="text-sm text-secondary-500">Sempre ativo</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-secondary-800">Cookies de Análise</h4>
                  <p className="text-sm text-secondary-600">Google Analytics para melhorar o site</p>
                </div>
                <label className="flex items-center">
                  <input type="checkbox" id="analytics" className="mr-2" />
                  <span className="text-sm">Permitir</span>
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-secondary-800">Cookies de Marketing</h4>
                  <p className="text-sm text-secondary-600">Para personalizar anúncios e conteúdo</p>
                </div>
                <label className="flex items-center">
                  <input type="checkbox" id="marketing" className="mr-2" />
                  <span className="text-sm">Permitir</span>
                </label>
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => handleCustomize(false, false)}
                className="px-4 py-2 text-secondary-600 hover:text-secondary-800 text-sm border border-secondary-300 rounded-lg"
              >
                Salvar configurações
              </button>
              <button
                onClick={() => {
                  const analytics = (document.getElementById('analytics') as HTMLInputElement)?.checked || false;
                  const marketing = (document.getElementById('marketing') as HTMLInputElement)?.checked || false;
                  handleCustomize(analytics, marketing);
                }}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg"
              >
                Confirmar escolhas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}