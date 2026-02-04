
import React, { useEffect } from 'react';
import { COURSES, TESTIMONIALS, WHATSAPP_NUMBER, INSTAGRAM_URL, PRICE_INSTALLMENT } from './constants';
import LeadFilter from './components/LeadFilter';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "BIAS | Cursos Técnicos Reconhecidos MEC e SISTEC";
  }, []);

  const handleWhatsApp = (msg: string = `Olá! Vi no site a oferta de ${PRICE_INSTALLMENT} e gostaria de saber mais.`) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const LOGO_URL = "https://raw.githubusercontent.com/performancedigital/bias-centro-educacional/5bab85aaa608e7540bdbdc545f2503dffe5e63ea/logo-bias.png";

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img alt="BIAS Logo" className="w-12 h-12 object-contain" src={LOGO_URL} />
              <div className="leading-none">
                <span className="text-2xl font-black text-bias-blue tracking-tighter uppercase">BIAS</span>
                <p className="text-[8px] uppercase tracking-[0.2em] text-bias-blue font-bold">Centro Educacional</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <div className="flex flex-col items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded text-center">
                <span className="text-[8px] font-bold text-slate-400 leading-none">RECONHECIDO</span>
                <span className="text-[10px] font-black text-bias-blue leading-none">MEC</span>
              </div>
              <div className="flex flex-col items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded text-center">
                <span className="text-[8px] font-bold text-slate-400 leading-none">REGISTRADO</span>
                <span className="text-[10px] font-black text-bias-yellow leading-none">SISTEC</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-10">
            <a href="#cursos" className="hidden lg:block text-bias-navy hover:text-bias-blue font-bold text-sm uppercase tracking-wider">Cursos</a>
            <a href={INSTAGRAM_URL} target="_blank" className="text-sm font-bold text-bias-navy flex items-center gap-1.5 hover:text-pink-600 transition-colors uppercase tracking-wider">
              <span className="text-xl">📸</span> Instagram
            </a>
            <button onClick={() => handleWhatsApp()} className="bg-bias-blue text-white px-6 py-3 rounded-xl font-black text-xs md:text-sm hover:bg-bias-navy transition-all uppercase tracking-wider">
              FALAR COM CONSULTOR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-bias-yellow text-bias-blue px-5 py-2 rounded-full text-[11px] font-black mb-8 uppercase tracking-widest shadow-sm">
            🚀 MATRÍCULAS ABERTAS • INÍCIO IMEDIATO
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-bias-blue leading-[1.1] mb-8 tracking-tighter uppercase">
            Formação 100% Online reconhecida pelo MEC<br />e registrada no SISTEC.<br />
            <span className="text-4xl md:text-6xl block mt-6 text-bias-yellow">Conquiste seu espaço por apenas {PRICE_INSTALLMENT}</span>
          </h1>
          <button onClick={() => handleWhatsApp()} className="bg-bias-blue text-white px-16 py-5 rounded-2xl font-black text-xl md:text-2xl shadow-2xl hover:bg-bias-navy transition-all uppercase tracking-tight">
            COMEÇAR AGORA
          </button>
        </div>
      </header>

      {/* Formações Section */}
      <section id="cursos" className="py-28 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-bias-blue mb-4 uppercase tracking-tighter">PRINCIPAIS FORMAÇÕES</h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">CURSOS 100% ONLINE E AUTORIZADOS</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all text-center md:text-left flex flex-col group">
                <div className="text-6xl mb-10 flex justify-center md:justify-start group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
                <h3 className="text-2xl font-black text-bias-blue mb-5 leading-tight uppercase tracking-tighter">{course.title}</h3>
                <p className="text-slate-500 text-base mb-10 font-medium leading-relaxed">{course.description}</p>
                
                <div className="mt-auto pt-8 border-t border-slate-50">
                  <span className="block text-xs font-black text-bias-blue mb-6 tracking-widest uppercase">{course.duration}</span>
                  <button onClick={() => handleWhatsApp(`Olá! Gostaria de detalhes sobre o curso ${course.title}`)} className="w-full bg-white border border-slate-200 text-bias-blue py-4 rounded-2xl font-black hover:bg-bias-blue hover:text-white transition-all uppercase text-[11px] tracking-widest">
                    VER CURSO →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Filter Section */}
      <LeadFilter />

      {/* Diploma por Experiência Section */}
      <section id="competencia" className="py-32 bg-bias-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                Você já trabalha na área?<br />
                <span className="text-bias-yellow">O Diploma é seu por direito.</span>
              </h2>
              <button onClick={() => handleWhatsApp("Olá! Quero saber sobre o diploma por experiência.")} className="bg-bias-yellow text-bias-blue px-14 py-6 rounded-2xl font-black text-xl hover:bg-white transition-all shadow-2xl uppercase tracking-tight">
                OBTER MEU DIPLOMA POR EXPERIÊNCIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xl font-medium italic text-slate-600 mb-10 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-5">
                  <img alt={t.name} className="w-12 h-12 rounded-full border-2 border-bias-yellow grayscale" src={t.avatar} />
                  <div>
                    <p className="font-black text-bias-blue text-sm uppercase tracking-tight leading-none mb-1.5">{t.name}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
            <div className="space-y-8">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <img alt="BIAS Logo" className="w-10 h-10 brightness-0 invert" src={LOGO_URL} />
                <span className="text-3xl font-black tracking-tighter uppercase">BIAS</span>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0">
                Educação técnica autorizada pelo MEC com foco em empregabilidade real.
              </p>
              <div className="text-slate-500 text-[9px] font-bold uppercase tracking-widest space-y-2">
                <p>BIAS CENTRO EDUCACIONAL LTDA</p>
                <p>CNPJ: 47.948.018/0001-83</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-base mb-8 uppercase tracking-widest text-bias-yellow">MAPA DO SITE</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-[12px] uppercase">
                <li><a href="#cursos" className="hover:text-white transition-colors">Cursos Técnicos</a></li>
                <li><a href="#competencia" className="hover:text-white transition-colors">Diploma por Competência</a></li>
                <li><a href="#filtro" className="hover:text-white transition-colors">Avaliação de Perfil</a></li>
                <li><a href={INSTAGRAM_URL} target="_blank" className="hover:text-white transition-colors">Nosso Instagram</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black text-base mb-8 uppercase tracking-widest text-bias-yellow">LOCALIZAÇÃO</h4>
              <p className="text-slate-400 text-[12px] font-bold leading-relaxed uppercase">
                Coronel Silvino Pereira, 295 - Centro<br />
                Coronel Fabriciano - MG
              </p>
            </div>
            
            <div className="space-y-8">
              <h4 className="font-black text-base mb-8 uppercase tracking-widest text-bias-yellow">ATENDIMENTO</h4>
              <p className="text-slate-400 font-bold text-[12px] uppercase mb-6">Segunda a Sexta: 08h às 18h</p>
              <button onClick={() => handleWhatsApp()} className="w-full bg-bias-blue text-white py-5 rounded-2xl font-black hover:bg-bias-navy transition-all text-sm uppercase shadow-2xl">
                WHATSAPP: (31) 9769-0284
              </button>
            </div>
          </div>
          
          <div className="mt-24 pt-10 border-t border-slate-800 text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
            <p>© 2026 BIAS CENTRO EDUCACIONAL • TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button onClick={() => handleWhatsApp()} className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all">
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"></path>
        </svg>
      </button>
    </div>
  );
};

export default App;
