
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
  const INDUSTRIAL_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden font-sans text-slate-900 relative">
      
      {/* Background Decorative Elements (The "Life") */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-bias-blue/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-bias-yellow/5 rounded-full blur-[120px] animate-float-delayed"></div>
        <div className="absolute bottom-[20%] left-[10%] w-80 h-80 bg-bias-blue/5 rounded-full blur-[80px] animate-float"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <img alt="BIAS Logo" className="w-12 h-12 object-contain transition-transform group-hover:rotate-12" src={LOGO_URL} />
              <div className="leading-none">
                <span className="text-2xl font-black text-bias-blue tracking-tighter uppercase">BIAS</span>
                <p className="text-[8px] uppercase tracking-[0.2em] text-bias-blue font-bold">Centro Educacional</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <div className="flex flex-col items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded text-center hover:bg-white transition-colors">
                <span className="text-[8px] font-bold text-slate-400 leading-none">RECONHECIDO</span>
                <span className="text-[10px] font-black text-bias-blue leading-none">MEC</span>
              </div>
              <div className="flex flex-col items-center px-3 py-1 bg-slate-50 border border-slate-200 rounded text-center hover:bg-white transition-colors">
                <span className="text-[8px] font-bold text-slate-400 leading-none">REGISTRADO</span>
                <span className="text-[10px] font-black text-bias-yellow leading-none">SISTEC</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-10">
            <a href="#cursos" className="hidden lg:block text-bias-navy hover:text-bias-blue font-bold text-sm uppercase tracking-wider relative group">
              Cursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bias-yellow transition-all group-hover:w-full"></span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" className="text-sm font-bold text-bias-navy flex items-center gap-1.5 hover:text-pink-600 transition-colors uppercase tracking-wider">
              <span className="text-xl animate-bounce-short">📸</span> Instagram
            </a>
            <button onClick={() => handleWhatsApp()} className="bg-bias-blue text-white px-6 py-3 rounded-xl font-black text-xs md:text-sm hover:bg-bias-navy hover:shadow-lg transition-all uppercase tracking-wider active:scale-95">
              FALAR COM CONSULTOR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 z-10">
        <div className="max-w-5xl mx-auto text-center reveal active">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-bias-blue border border-bias-blue/10 px-5 py-2 rounded-full text-[11px] font-black mb-10 uppercase tracking-widest shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            🚀 MATRÍCULAS ABERTAS • INÍCIO IMEDIATO
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-bias-blue leading-[1.1] mb-12 tracking-tighter uppercase">
            Formação 100% Online reconhecida pelo MEC<br />e registrada no SISTEC.
          </h1>

          <div className="inline-block mb-12 p-1 bg-slate-50/50 backdrop-blur rounded-[2rem] shadow-inner transition-transform hover:scale-[1.02]">
            <div className="px-10 py-6 bg-white border border-slate-200/60 rounded-[1.8rem] shadow-sm">
              <p className="text-lg md:text-2xl font-bold text-slate-600 uppercase tracking-tight">
                Conquiste seu espaço por apenas <span className="text-bias-blue font-black underline decoration-bias-yellow decoration-4 underline-offset-8">{PRICE_INSTALLMENT}</span>
              </p>
            </div>
          </div>

          <div className="block">
            <button onClick={() => handleWhatsApp()} className="bg-bias-blue text-white px-16 py-5 rounded-2xl font-black text-xl md:text-2xl shadow-2xl hover:bg-bias-navy hover:scale-105 active:scale-95 transition-all uppercase tracking-tight relative overflow-hidden group">
              <span className="relative z-10">COMEÇAR AGORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Authority Ticker (New Movement Element) */}
      <div className="w-full bg-slate-50 border-y border-slate-100 py-6 overflow-hidden z-10 relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-20 mx-10">
              <span className="text-bias-blue/30 font-black text-xl uppercase tracking-tighter">RECONHECIDO MEC</span>
              <span className="text-bias-yellow/40 font-black text-xl uppercase tracking-tighter">REGISTRO SISTEC</span>
              <span className="text-bias-blue/30 font-black text-xl uppercase tracking-tighter">DIPLOMA VÁLIDO</span>
              <span className="text-bias-yellow/40 font-black text-xl uppercase tracking-tighter">100% ONLINE</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formações Section */}
      <section id="cursos" className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl font-black text-bias-blue mb-4 uppercase tracking-tighter">PRINCIPAIS FORMAÇÕES</h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">CURSOS 100% ONLINE E AUTORIZADOS</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {COURSES.map(course => (
              <div key={course.id} className="reveal glass-card rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all text-center md:text-left flex flex-col group">
                <div className="text-6xl mb-10 flex justify-center md:justify-start group-hover:scale-110 transition-transform duration-500">{course.icon}</div>
                <h3 className="text-2xl font-black text-bias-blue mb-5 leading-tight uppercase tracking-tighter">{course.title}</h3>
                <p className="text-slate-500 text-base mb-10 font-medium leading-relaxed">{course.description}</p>
                
                <div className="mt-auto pt-8 border-t border-slate-50">
                  <span className="block text-xs font-black text-bias-blue mb-6 tracking-widest uppercase">{course.duration}</span>
                  <button onClick={() => handleWhatsApp(`Olá! Gostaria de detalhes sobre o curso ${course.title}`)} className="w-full bg-white border border-slate-200 text-bias-blue py-4 rounded-2xl font-black hover:bg-bias-blue hover:text-white hover:border-bias-blue transition-all uppercase text-[11px] tracking-widest active:scale-95">
                    VER CURSO →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Filter Section */}
      <div className="reveal">
        <LeadFilter />
      </div>

      {/* Diploma por Experiência Section */}
      <section id="competencia" className="py-32 relative text-white overflow-hidden reveal">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={INDUSTRIAL_IMG} 
            alt="Profissional com EPI em ambiente industrial" 
            className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-bias-blue/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-bias-blue via-bias-blue/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                Você já trabalha na área?<br />
                <span className="text-bias-yellow">O Diploma é seu por direito.</span>
              </h2>
              <button onClick={() => handleWhatsApp("Olá! Quero saber sobre o diploma por experiência.")} className="bg-bias-yellow text-bias-blue px-14 py-6 rounded-2xl font-black text-xl hover:bg-white transition-all shadow-2xl uppercase tracking-tight hover:scale-105 active:scale-95 animate-pulse-soft">
                OBTER MEU DIPLOMA POR EXPERIÊNCIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="reveal bg-slate-50/50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                <p className="text-xl font-medium italic text-slate-600 mb-10 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img alt={t.name} className="w-12 h-12 rounded-full border-2 border-bias-yellow grayscale hover:grayscale-0 transition-all duration-500" src={t.avatar} />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                  </div>
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
      <footer className="bg-slate-900 text-white py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
            <div className="space-y-8 reveal">
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
            
            <div className="reveal">
              <h4 className="font-black text-base mb-8 uppercase tracking-widest text-bias-yellow">MAPA DO SITE</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-[12px] uppercase">
                <li><a href="#cursos" className="hover:text-white transition-colors block">Cursos Técnicos</a></li>
                <li><a href="#competencia" className="hover:text-white transition-colors block">Diploma por Competência</a></li>
                <li><a href="#filtro" className="hover:text-white transition-colors block">Avaliação de Perfil</a></li>
                <li><a href={INSTAGRAM_URL} target="_blank" className="hover:text-white transition-colors block">Nosso Instagram</a></li>
              </ul>
            </div>
            
            <div className="reveal">
              <h4 className="font-black text-base mb-8 uppercase tracking-widest text-bias-yellow">LOCALIZAÇÃO</h4>
              <p className="text-slate-400 text-[12px] font-bold leading-relaxed uppercase">
                Coronel Silvino Pereira, 295 - Centro<br />
                Coronel Fabriciano - MG
              </p>
            </div>
            
            <div className="space-y-8 reveal">
              <h4 className="font-black text-base mb-8 uppercase tracking-widest text-bias-yellow">ATENDIMENTO</h4>
              <p className="text-slate-400 font-bold text-[12px] uppercase mb-6">Segunda a Sexta: 08h às 18h</p>
              <button onClick={() => handleWhatsApp()} className="w-full bg-bias-blue text-white py-5 rounded-2xl font-black hover:bg-bias-navy transition-all text-sm uppercase shadow-2xl hover:scale-105 active:scale-95">
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
      <button onClick={() => handleWhatsApp()} className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-float">
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"></path>
        </svg>
      </button>
    </div>
  );
};

export default App;
