
import React, { useEffect } from 'react';
import { COURSES, TESTIMONIALS, WHATSAPP_NUMBER, INSTAGRAM_URL, PRICE_INSTALLMENT } from './constants';
import LeadFilter from './components/LeadFilter';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "BIAS | Cursos Técnicos Reconhecidos MEC e SISTEC";
  }, []);

  const trackLead = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const eventID = 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      (window as any).fbq('track', 'Lead', {
        content_name: `Interação: ${location}`,
        content_category: 'Conversão WhatsApp',
        value: 0.00,
        currency: 'BRL'
      }, { eventID: eventID });
      console.log(`[Pixel] Evento Lead enviado de: ${location}`);
    } else {
      console.warn('[Pixel] fbq não encontrado. Verifique se o Pixel está carregado.');
    }
  };

  const handleWhatsAppClick = (msg: string = "Olá! Gostaria de aproveitar a oferta e começar meu curso técnico agora.", location: string = "Botão Global") => {
    trackLead(location);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const LOGO_URL = "https://raw.githubusercontent.com/performancedigital/bias-centro-educacional/5bab85aaa608e7540bdbdc545f2503dffe5e63ea/logo-bias.png";

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
               <img src={LOGO_URL} alt="BIAS Logo" className="w-12 h-12 object-contain" />
               <div className="leading-tight">
                  <span className="text-2xl font-black text-bias-blue tracking-tighter uppercase">BIAS</span>
                  <p className="text-[8px] uppercase tracking-widest text-bias-blue font-bold">Centro Educacional</p>
               </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#cursos" className="text-gray-700 hover:text-bias-blue font-bold text-sm uppercase">Cursos</a>
            <a href={INSTAGRAM_URL} target="_blank" className="text-pink-600 font-black text-sm hover:scale-105 transition-all">📸 Instagram</a>
            <button 
              onClick={() => handleWhatsAppClick(undefined, "Navbar")}
              className="bg-bias-blue text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-800 transition-all shadow-lg shadow-blue-200"
            >
              FALAR COM CONSULTOR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 relative bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-bias-yellow text-bias-blue px-6 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest shadow-sm">
            🚀 Matrículas Abertas • Início Imediato
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-[900] text-bias-blue leading-[1.05] mb-8">
            Chega de Adiar. Conquiste seu <span className="text-bias-yellow underline decoration-bias-blue underline-offset-8">Diploma Técnico Hoje</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium leading-relaxed max-w-3xl mx-auto">
            Formação 100% Online reconhecida pelo MEC e registrada no SISTEC. 
            Conquiste seu espaço no mercado por apenas <span className="text-bias-blue font-black">{PRICE_INSTALLMENT}</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            <a 
              href="#filtro" 
              onClick={() => trackLead("Botão Hero")}
              className="w-full sm:w-auto bg-bias-blue text-white px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </header>

      {/* Cursos */}
      <section id="cursos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-bias-blue mb-4 uppercase tracking-tighter">Principais Formações</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map(course => (
              <div key={course.id} className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 hover:border-bias-yellow transition-all group relative">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{course.icon}</div>
                <h3 className="text-2xl font-black text-bias-blue mb-4 leading-tight">{course.title}</h3>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">{course.description}</p>
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-black text-bias-blue">{course.duration}</span>
                  <button 
                    onClick={() => handleWhatsAppClick(`Olá, quero saber mais sobre o curso de ${course.title}`, `Card Curso: ${course.title}`)} 
                    className="text-bias-blue font-black hover:text-bias-yellow transition-colors uppercase text-sm"
                  >
                    Ver Curso →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFilter />

      {/* Técnico por Competência */}
      <section id="competencia" className="py-24 bg-bias-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Você já trabalha na área? <br/>
                <span className="text-bias-yellow">O Diploma é seu por direito.</span>
              </h2>
              <button 
                onClick={() => handleWhatsAppClick("Olá! Tenho experiência e quero saber mais sobre o Diploma por Competência.", "Seção Competência")}
                className="w-full lg:w-auto bg-bias-yellow text-bias-blue px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl"
              >
                OBTER MEU DIPLOMA POR EXPERIÊNCIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-10 rounded-[3rem] text-left border border-slate-100 shadow-sm">
                <p className="text-lg font-medium italic text-gray-700 mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-bias-yellow" />
                  <div>
                    <p className="font-black text-bias-blue text-sm">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <h4 className="font-black text-xl mb-4 uppercase tracking-tighter">Atendimento</h4>
            <p className="text-slate-400 font-bold">WhatsApp: (31) 9769-0284</p>
            <button 
              onClick={() => handleWhatsAppClick(undefined, "Footer")}
              className="w-full bg-bias-blue text-white py-4 rounded-2xl font-black hover:bg-bias-yellow hover:text-bias-blue transition-all"
            >
              FALAR COM UM CONSULTOR
            </button>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <button 
        onClick={() => handleWhatsAppClick(undefined, "FAB Flutuante")}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"/></svg>
      </button>

    </div>
  );
};

export default App;
