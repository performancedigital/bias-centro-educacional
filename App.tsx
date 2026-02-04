
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
      
      {/* Navbar com Selos MEC/SISTEC */}
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

          <div className="hidden lg:flex items-center gap-4">
             <div className="flex flex-col items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded-md">
                <span className="text-[9px] font-black text-slate-400 leading-none mb-1">RECONHECIDO</span>
                <span className="text-xs font-black text-bias-blue leading-none">MEC</span>
             </div>
             <div className="flex flex-col items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded-md">
                <span className="text-[9px] font-black text-slate-400 leading-none mb-1">REGISTRADO</span>
                <span className="text-xs font-black text-bias-yellow leading-none">SISTEC</span>
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

      {/* Hero Section com Headline Atualizada */}
      <header className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 relative bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-bias-yellow text-bias-blue px-6 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest shadow-sm">
            🚀 Matrículas Abertas • Início Imediato
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] text-bias-blue leading-[1.1] mb-10">
            Formação 100% Online reconhecida pelo MEC<br/>
            e registrada no SISTEC.<br/>
            <span className="text-5xl md:text-6xl lg:text-7xl block mt-6 text-bias-yellow">Conquiste seu espaço por apenas {PRICE_INSTALLMENT}</span>
          </h1>
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

      {/* Cursos com Duração e Botão Ajustados */}
      <section id="cursos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-bias-blue mb-4 uppercase tracking-tighter">Principais Formações</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Cursos 100% Online e Autorizados</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map(course => (
              <div key={course.id} className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 hover:border-bias-yellow transition-all group relative">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{course.icon}</div>
                <h3 className="text-2xl font-black text-bias-blue mb-4 leading-tight">{course.title}</h3>
                <p className="text-gray-500 mb-8 font-medium leading-relaxed">{course.description}</p>
                <div className="pt-6 border-t border-slate-200">
                  <span className="block text-xs font-black text-bias-blue mb-4 uppercase tracking-wider">{course.duration}</span>
                  <button 
                    onClick={() => handleWhatsAppClick(`Olá, quero saber mais sobre o curso de ${course.title}`, `Card Curso: ${course.title}`)} 
                    className="w-full text-center bg-white border border-bias-blue text-bias-blue py-3 rounded-xl font-black hover:bg-bias-blue hover:text-white transition-all uppercase text-sm"
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

      {/* Técnico por Competência - Mantido conforme solicitado */}
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

      {/* Google Reviews - Mantido conforme solicitado */}
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

      {/* Rodapé Ampliado com CNPJ, Endereço e Mapa do Site */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="space-y-6 md:col-span-1">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <img src={LOGO_URL} alt="BIAS Logo" className="w-10 h-10 brightness-0 invert" />
                <span className="text-2xl font-black tracking-tighter">BIAS</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">Educação técnica autorizada pelo MEC com foco em empregabilidade real.</p>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest space-y-1">
                <p>BIAS CENTRO EDUCACIONAL LTDA</p>
                <p>CNPJ: 47.948.018/0001-83</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-black text-lg mb-6 uppercase tracking-tighter text-bias-yellow">Mapa do Site</h4>
              <ul className="space-y-2 text-slate-400 font-bold text-sm">
                <li><a href="#cursos" className="hover:text-white transition-colors">Cursos Técnicos</a></li>
                <li><a href="#competencia" className="hover:text-white transition-colors">Diploma por Competência</a></li>
                <li><a href="#filtro" className="hover:text-white transition-colors">Avaliação de Perfil</a></li>
                <li><a href={INSTAGRAM_URL} target="_blank" className="hover:text-white transition-colors">Nosso Instagram</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-black text-lg mb-6 uppercase tracking-tighter text-bias-yellow">Localização</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Coronel Silvino Pereira, 295 - Centro<br/>
                Coronel Fabriciano - MG
              </p>
            </div>

            <div className="space-y-6">
               <h4 className="font-black text-lg mb-4 uppercase tracking-tighter text-bias-yellow">Atendimento</h4>
               <p className="text-slate-400 font-bold text-sm">Segunda a Sexta: 08h às 18h</p>
               <button 
                onClick={() => handleWhatsAppClick(undefined, "Footer")}
                className="w-full bg-bias-blue text-white py-4 rounded-2xl font-black hover:bg-bias-yellow hover:text-bias-blue transition-all"
              >
                WHATSAPP: (31) 9769-0284
              </button>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-800 text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">
            <p>© 2026 BIAS CENTRO EDUCACIONAL • TODOS OS DIREITOS RESERVADOS</p>
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
