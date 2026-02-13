
import React, { useEffect, useState } from 'react';
import { COURSES, TESTIMONIALS, WHATSAPP_NUMBER, INSTAGRAM_URL, PRICE_INSTALLMENT, GOOGLE_REVIEWS_URL } from './constants';
import LeadFilter from './components/LeadFilter';

const App: React.FC = () => {
  const [notification, setNotification] = useState({ visible: false, text: "" });

  useEffect(() => {
    document.title = "BIAS | Cursos Técnicos Reconhecidos MEC e SISTEC";
    
    // Fake Social Proof Notification
    const notifications = [
      "Pedro de SP acabou de se matricular!",
      "Vaga preenchida em Téc. Segurança do Trabalho",
      "Novo aluno certificado em Téc. Mecânica",
      "Mariana de BH iniciou seu curso hoje"
    ];

    const showNotify = () => {
      setNotification({ 
        visible: true, 
        text: notifications[Math.floor(Math.random() * notifications.length)] 
      });
      setTimeout(() => setNotification(prev => ({ ...prev, visible: false })), 4000);
    };

    const timer = setInterval(showNotify, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (msg: string = `Olá! Vi no site e gostaria de saber mais informações sobre os cursos.`) => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToQuiz = () => {
    const quizSection = document.getElementById('filtro');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const LOGO_URL = "https://raw.githubusercontent.com/performancedigital/bias-centro-educacional/5bab85aaa608e7540bdbdc545f2503dffe5e63ea/logo-bias.png";
  const INDUSTRIAL_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000";

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden font-sans text-slate-900 relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-bias-blue/[0.03] rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute top-[30%] right-[-15%] w-[800px] h-[800px] bg-bias-yellow/[0.03] rounded-full blur-[150px] animate-float"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <img alt="BIAS Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" src={LOGO_URL} />
              <div className="leading-none">
                <span className="text-xl md:text-2xl font-black text-bias-blue tracking-tighter uppercase">BIAS</span>
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-bias-blue font-bold opacity-70">Centro Educacional</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-10">
            <a href="#cursos" className="hidden lg:block text-bias-navy hover:text-bias-blue font-black text-xs uppercase tracking-widest relative group">
              CURSOS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bias-yellow transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button onClick={() => handleWhatsApp()} className="bg-bias-blue text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-sm hover:bg-bias-navy hover:shadow-[0_10px_30px_rgba(0,71,171,0.3)] transition-all uppercase tracking-widest active:scale-95">
              FALAR COM UM CONSULTOR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-56 md:pb-48 px-6 md:px-4 z-10">
        <div className="max-w-5xl mx-auto text-center reveal active">
          <div className="inline-flex items-center bg-bias-blue/5 text-bias-blue border border-bias-blue/10 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[11px] font-black mb-8 md:mb-12 uppercase tracking-[0.2em] shadow-sm animate-pulse-soft">
            <span className="flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-500 mr-2 md:mr-3 shadow-[0_0_10px_#22c55e]"></span>
            🚀 MATRÍCULAS ABERTAS 2026
          </div>
          
          <h1 className="text-[2.25rem] md:text-7xl font-black text-gradient leading-[1.05] md:leading-[0.95] mb-4 md:mb-6 tracking-tighter uppercase">
            Sua formação técnica<br className="hidden md:block" /> em apenas 6 meses.
          </h1>
          
          <p className="text-bias-blue font-black text-xs md:text-xl uppercase tracking-[0.3em] mb-10 md:mb-14 opacity-80">
            100% online, estude onde quiser
          </p>

          <div className="max-w-2xl mx-auto mb-10 md:mb-16 p-1 bg-gradient-to-r from-bias-blue/10 via-bias-yellow/10 to-bias-blue/10 rounded-[2rem] md:rounded-[2.5rem] shadow-inner transition-all hover:shadow-lg">
            <div className="px-6 py-6 md:px-10 md:py-8 bg-white/90 backdrop-blur rounded-[1.8rem] md:rounded-[2.3rem] shadow-sm border border-white">
              <p className="text-base md:text-2xl font-bold text-slate-600 uppercase tracking-tight leading-relaxed">
                Invista no seu futuro por apenas<br className="md:hidden" />
                <span className="text-bias-blue font-black text-xl md:text-4xl ml-1 md:ml-2 block md:inline-block mt-3 md:mt-0 drop-shadow-sm">{PRICE_INSTALLMENT}</span>
              </p>
            </div>
          </div>

          <button onClick={scrollToQuiz} className="w-full md:w-auto bg-bias-blue text-white px-8 md:px-16 py-6 md:py-7 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-2xl shadow-[0_20px_50px_rgba(0,71,171,0.3)] hover:bg-bias-navy hover:scale-105 active:scale-95 transition-all uppercase tracking-tight relative overflow-hidden group hover-shine">
            <span className="relative z-10">QUERO GARANTIR MINHA VAGA</span>
          </button>
        </div>

        {/* Floating Trust Pill */}
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 reveal">
          <div className="flex flex-col items-center">
             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-bias-blue">RECONHECIDO</span>
             <span className="text-xl md:text-2xl font-black text-bias-navy">MEC</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-bias-yellow">REGISTRADO</span>
             <span className="text-xl md:text-2xl font-black text-bias-navy">SISTEC</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-bias-blue">SUPORTE</span>
             <span className="text-xl md:text-2xl font-black text-bias-navy">ALUNO</span>
          </div>
        </div>
      </header>

      {/* Wave Transition Top */}
      <div className="w-full overflow-hidden leading-[0] fill-slate-50 relative z-10 -mt-2">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 transform rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Formações Section - Centralizada */}
      <section id="cursos" className="py-20 md:py-32 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          <div className="text-center mb-16 md:mb-24 reveal">
            <h2 className="text-3xl md:text-6xl font-black text-bias-blue mb-4 md:mb-6 uppercase tracking-tighter leading-none">FORMAÇÕES EM DESTAQUE</h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-bias-yellow mx-auto rounded-full mb-6 md:mb-8"></div>
            <p className="text-slate-400 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px]">CONTEÚDO 100% ONLINE E ATUALIZADO</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
            {COURSES.map(course => (
              <div key={course.id} className="reveal glass-card rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 border border-slate-200/50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-4 transition-all duration-500 text-center md:text-left flex flex-col group hover-shine">
                <div className="text-6xl md:text-7xl mb-8 md:mb-12 flex justify-center md:justify-start group-hover:scale-125 transition-transform duration-700 drop-shadow-lg">{course.icon}</div>
                <h3 className="text-xl md:text-3xl font-black text-bias-blue mb-4 md:mb-6 leading-tight uppercase tracking-tighter">{course.title}</h3>
                <p className="text-slate-500 text-sm md:text-lg mb-8 md:mb-12 font-medium leading-relaxed">{course.description}</p>
                
                <div className="mt-auto pt-8 md:pt-10 border-t border-slate-100/80">
                  <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
                    <span className="text-[10px] md:text-[11px] font-black text-bias-blue tracking-[0.2em] uppercase">{course.duration}</span>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="bg-bias-blue/10 text-bias-blue px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[9px] font-black uppercase">RECONHECIDO MEC</span>
                      <span className="bg-bias-yellow/10 text-bias-gold px-2 md:px-3 py-1 rounded-lg text-[8px] md:text-[9px] font-black uppercase">100% ONLINE</span>
                    </div>
                  </div>
                  {/* LINHA 128: Botão com onClick direto para o WhatsApp */}
                  <button 
                    onClick={() => handleWhatsApp()} 
                    className="w-full bg-bias-blue text-white py-4 md:py-5 rounded-[1.2rem] md:rounded-[1.5rem] font-black hover:bg-bias-navy shadow-lg transition-all uppercase text-[10px] md:text-[11px] tracking-[0.2em] active:scale-95 hover-shine"
                  >
                    FALAR COM UM CONSULTOR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Transition Bottom */}
      <div className="w-full overflow-hidden leading-[0] fill-slate-50 relative z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Lead Filter Section */}
      <div className="reveal relative z-10 py-8 md:py-16">
        <LeadFilter />
      </div>

      {/* Diploma por Experiência Section */}
      <section id="competencia" className="py-24 md:py-40 relative text-white overflow-hidden reveal group/industrial">
        <div className="absolute inset-0 z-0">
          <img 
            src={INDUSTRIAL_IMG} 
            alt="Profissional Industrial" 
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover/industrial:scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bias-blue/95 via-bias-blue/90 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-4 relative z-10">
          <div className="max-w-3xl space-y-6 md:space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-bias-yellow text-bias-blue px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[9px] md:text-xs font-black uppercase tracking-widest mb-2 md:mb-4 mx-auto lg:mx-0">
              <span>LEI FEDERAL 9.394/96 ART. 41</span>
              <span className="w-1 h-1 bg-bias-blue rounded-full"></span>
              <span>100% ONLINE</span>
            </div>
            <h2 className="text-3xl md:text-7xl font-black leading-[1.1] md:leading-[1] tracking-tighter">
              Você já trabalha na área?<br />
              <span className="text-bias-yellow uppercase">O Diploma é seu por direito.</span>
            </h2>
            <p className="text-base md:text-xl text-white/80 font-medium max-w-xl mx-auto lg:mx-0">Use sua experiência comprovada para obter o diploma técnico em tempo recorde e com validade nacional, tudo de forma digital e segura.</p>
            <button onClick={() => handleWhatsApp()} className="w-full md:w-auto bg-white text-bias-blue px-10 md:px-14 py-5 md:py-7 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-xl hover:bg-bias-yellow transition-all shadow-[0_20px_60px_rgba(0,0,0,0.3)] uppercase tracking-tight hover:scale-105 active:scale-95 animate-pulse-soft">
              FALAR COM UM CONSULTOR
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section com Link para Google Reviews */}
      <section className="py-20 md:py-40 bg-white relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-4">
          <div className="text-center mb-12 md:mb-16 reveal">
            <div className="inline-flex items-center gap-2 md:gap-4 bg-slate-50 px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl border border-slate-100 mb-6 md:mb-8">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 md:h-6" />
              <div className="h-4 md:h-6 w-px bg-slate-200"></div>
              <div className="flex items-center gap-0.5 md:gap-1 text-bias-yellow">
                <span className="text-sm md:text-lg font-black text-slate-800 mr-1">4.9</span>
                <span className="text-base md:text-xl">★</span>
                <span className="text-base md:text-xl">★</span>
                <span className="text-base md:text-xl">★</span>
                <span className="text-base md:text-xl">★</span>
                <span className="text-base md:text-xl">★</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-bias-blue mb-3 md:mb-4 uppercase tracking-tighter">RESULTADOS REAIS</h2>
            <p className="text-slate-400 font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[8px] md:text-[10px]">HISTÓRIAS EXTRAÍDAS DO NOSSO PERFIL NO GOOGLE</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 md:gap-12 mb-12 md:mb-20">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="reveal bg-slate-50/70 p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border border-slate-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,71,171,0.08)] transition-all duration-700 group">
                <div className="flex gap-1 mb-6 md:mb-8">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-bias-yellow text-lg md:text-xl">★</span>)}
                </div>
                <p className="text-base md:text-xl font-medium italic text-slate-600 mb-8 md:mb-12 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="relative">
                    <img alt={t.name} className="w-12 h-12 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.5rem] border-2 border-bias-yellow grayscale group-hover:grayscale-0 transition-all duration-700 object-cover" src={t.avatar} />
                    <div className="absolute -bottom-1.5 -right-1.5 bg-green-500 w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] md:border-4 border-white shadow-sm"></div>
                  </div>
                  <div>
                    <p className="font-black text-bias-blue text-sm md:text-lg uppercase tracking-tight leading-none mb-1 md:mb-2">{t.name}</p>
                    <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal px-4">
            <a 
              href={GOOGLE_REVIEWS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 md:gap-4 bg-white border-2 border-slate-200 px-8 md:px-12 py-5 md:py-6 rounded-[1.2rem] md:rounded-[2rem] font-black text-slate-700 hover:border-bias-blue hover:text-bias-blue transition-all uppercase tracking-widest text-[10px] md:text-sm shadow-sm group"
            >
              <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google G" className="w-5 h-5 md:w-6 md:h-6" />
              AVALIAÇÕES NO GOOGLE
              <span className="hidden md:inline group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Authority Ticker */}
      <div className="w-full bg-bias-blue py-8 md:py-10 overflow-hidden z-10 relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-16 md:gap-32 mx-8 md:mx-16">
              <span className="text-white/60 font-black text-lg md:text-2xl uppercase tracking-tighter flex items-center gap-3 md:gap-4">
                <span className="text-bias-yellow text-2xl md:text-4xl">✓</span> RECONHECIDO MEC
              </span>
              <span className="text-white/60 font-black text-lg md:text-2xl uppercase tracking-tighter flex items-center gap-3 md:gap-4">
                <span className="text-bias-yellow text-2xl md:text-4xl">✓</span> REGISTRO CFT/CREA
              </span>
              <span className="text-white/60 font-black text-lg md:text-2xl uppercase tracking-tighter flex items-center gap-3 md:gap-4">
                <span className="text-bias-yellow text-2xl md:text-4xl">✓</span> SUPORTE VIP
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20 text-center md:text-left">
            <div className="space-y-6 md:space-y-10 reveal">
              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                <img alt="BIAS Logo" className="w-10 h-10 md:w-12 md:h-12 brightness-0 invert" src={LOGO_URL} />
                <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase">BIAS</span>
              </div>
              <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-xs mx-auto md:mx-0 uppercase tracking-wide">
                Capacitando profissionais com excelência técnica e reconhecimento nacional desde 2022.
              </p>
            </div>
            
            <div className="reveal">
              <h4 className="font-black text-[10px] md:text-xs mb-6 md:mb-10 uppercase tracking-[0.3em] md:tracking-[0.4em] text-bias-yellow">LINKS RÁPIDOS</h4>
              <ul className="space-y-4 md:space-y-6 text-slate-400 font-bold text-[10px] md:text-[12px] uppercase tracking-widest">
                <li><a href="#cursos" className="hover:text-white hover:pl-2 transition-all block">Formações Técnicas</a></li>
                <li><a href="#competencia" className="hover:text-white hover:pl-2 transition-all block">Experiência Profissional</a></li>
                <li><a href={INSTAGRAM_URL} target="_blank" className="hover:text-white hover:pl-2 transition-all block">Instagram Oficial</a></li>
                <li><a href={GOOGLE_REVIEWS_URL} target="_blank" className="hover:text-white hover:pl-2 transition-all block">Google Reviews</a></li>
              </ul>
            </div>
            
            <div className="reveal">
              <h4 className="font-black text-[10px] md:text-xs mb-6 md:mb-10 uppercase tracking-[0.3em] md:tracking-[0.4em] text-bias-yellow">UNIDADE FÍSICA</h4>
              <p className="text-slate-400 text-[10px] md:text-[12px] font-bold leading-relaxed uppercase tracking-widest">
                Rua Coronel Silvino Pereira, 295<br />
                Centro - Coronel Fabriciano, MG<br />
                CEP: 35170-011
              </p>
            </div>
            
            <div className="space-y-8 md:space-y-10 reveal">
              <h4 className="font-black text-[10px] md:text-xs mb-6 md:mb-10 uppercase tracking-[0.3em] md:tracking-[0.4em] text-bias-yellow">FALE CONOSCO</h4>
              <button onClick={() => handleWhatsApp()} className="w-full bg-bias-blue text-white py-5 md:py-6 rounded-[1.2rem] md:rounded-[1.5rem] font-black hover:bg-bias-navy hover:shadow-[0_10px_30px_rgba(0,71,171,0.3)] transition-all text-[10px] md:text-xs uppercase tracking-[0.2em] active:scale-95">
                FALAR COM UM CONSULTOR
              </button>
            </div>
          </div>
          
          <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/5 text-center px-4">
            <p className="text-[8px] md:text-[10px] font-black text-slate-700 uppercase tracking-[0.2em] md:tracking-[0.5em] leading-relaxed">
              © 2026 BIAS CENTRO EDUCACIONAL • CNPJ: 47.948.018/0001-83
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Notification (Live Life) */}
      <div className={`fixed bottom-6 md:bottom-8 left-6 md:left-8 z-[200] transition-all duration-700 ${notification.visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 md:gap-4 max-w-[280px] md:max-w-sm">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-bias-blue/10 rounded-full flex items-center justify-center text-lg md:text-xl">🎓</div>
          <p className="text-[10px] md:text-xs font-black text-bias-blue uppercase tracking-tight leading-tight">{notification.text}</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button onClick={() => handleWhatsApp()} className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[200] bg-[#25D366] text-white w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all animate-float">
        <svg className="w-8 h-8 md:w-12 md:h-12 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"></path>
        </svg>
      </button>
    </div>
  );
};

export default App;
