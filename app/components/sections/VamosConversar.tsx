import { useState } from "react";
import { trackEvent } from "../Analytics";

export default function VamosConversar() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      message: formData.get('message')
    };

    try {
      // Simular envio (substituir por EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track successful form submission
      trackEvent('form_submit', {
        form_name: 'contact_form',
        project_type: data.projectType
      });
      
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus('error');
      trackEvent('form_error', { error_type: 'submission_failed' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/xicara-cafe-na-areia-da-praia-v2.webp)'}}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/75"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Café na praia para falar do{" "}
            <span className="text-accent-300">próximo projeto</span>?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Vamos conversar sobre como podemos trabalhar juntos. 
            <strong className="text-white"> Sem compromisso</strong>, só uma conversa entre profissionais.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Formulário */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6 text-center">
                📝 Conte sobre seu projeto
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Seu nome</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Como posso te chamar?"
                      className="w-full px-4 py-3 rounded-lg text-secondary-900 bg-white border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="(83) 9 9999-9999"
                      className="w-full px-4 py-3 rounded-lg text-secondary-900 bg-white border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg text-secondary-900 bg-white border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Tipo do projeto</label>
                  <select name="projectType" className="w-full px-4 py-3 rounded-lg text-secondary-900 bg-white border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors">
                    <option value="">Selecione o tipo</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="comercial">Comercial</option>
                    <option value="reforma">Reforma</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Conte sobre o projeto</label>
                  <textarea 
                    name="message"
                    placeholder="Descreva o projeto, necessidades do cliente, orçamento estimado..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg text-secondary-900 bg-white border-2 border-white/20 focus:border-accent-500 focus:outline-none transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-elegant ${
                    isSubmitting 
                      ? 'bg-secondary-400 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-success-600 hover:bg-success-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'gradient-cta hover:bg-accent-600 hover:shadow-xl transform hover:-translate-y-1'
                  } text-white`}
                >
                  {isSubmitting ? '📤 Enviando...' : 
                   submitStatus === 'success' ? '✅ Enviado com sucesso!' :
                   submitStatus === 'error' ? '❌ Erro no envio' :
                   '🚀 Enviar projeto'}
                </button>
              </form>
              
              {submitStatus === 'success' && (
                <p className="text-sm text-success-300 mt-4 text-center font-medium">
                  ✅ Mensagem enviada! Resposta em até 2 horas no horário comercial
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-300 mt-4 text-center font-medium">
                  ❌ Erro no envio. Tente pelo WhatsApp: (83) 9 8207-8702
                </p>
              )}
              {submitStatus === 'idle' && (
                <p className="text-sm text-white/80 mt-4 text-center">
                  📱 Resposta em até 2 horas no horário comercial
                </p>
              )}
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  💬 Outras formas de contato
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/+5583982078702" 
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-success-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">WhatsApp</h4>
                      <p className="text-white/80">(83) 9 8207-8702</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:leo@leopessoa.eng.br" 
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-white/80">leo@leopessoa.eng.br</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Localização</h4>
                      <p className="text-white/80">João Pessoa - PB</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expectativas */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4 text-white">⏰ O que esperar</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">Resposta rápida (até 2h no horário comercial)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">Análise inicial gratuita do projeto</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">Conversa descontraída sobre possibilidades</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-accent-300 text-lg">✓</span>
                    <p className="text-white/90">Orçamento realista e transparente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
}