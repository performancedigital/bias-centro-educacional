
import React, { useEffect } from 'react';
import { COURSES, TESTIMONIALS, WHATSAPP_NUMBER, INSTAGRAM_URL, PRICE_INSTALLMENT } from './constants';
import LeadFilter from './components/LeadFilter';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "BIAS | Cursos Técnicos Reconhecidos MEC e SISTEC";
  }, []);

  const handleWhatsAppClick = (msg: string = "Olá! Gostaria de aproveitar a oferta e começar meu curso técnico agora.") => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden">
      
      {/* Navbar com Selos MEC/SISTEC */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Placeholder - Substituir pelo arquivo "design sem nome" */}
            <div className="flex items-center gap-2">
               <img src="https://i.imgur.com/vHq0L5K.png" alt="BIAS Logo" className="w-12 h-12 object-contain" />
               <div className="leading-tight">
                  <span className="text-2xl font-black text-bias-blue tracking-tighter uppercase">BIAS</span>
                  <p className="text-[8px] uppercase tracking-widest text-bias-blue font-bold">Centro Educacional</p>
               </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
             <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                <span className="text-[10px] font-black text-bias-blue leading-none">RECONHECIDO<br/>PELO MEC</span>
             </div>
             <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                <span className="text-[10px] font-black text-bias-yellow leading-none">REGISTRADO<br/>NO SISTEC</span>
             </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#cursos" className="text-gray-700 hover:text-bias-blue font-bold text-sm uppercase">Cursos</a>
            <a href={INSTAGRAM_URL} target="_blank" className="text-pink-600 font-black text-sm hover:scale-105 transition-all">📸 Instagram</a>
            <button 
              onClick={() => handleWhatsAppClick()}
              className="bg-bias-blue text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-800 transition-all"
            >
              FALAR COM CONSULTOR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section Centralizada com frase retornada */}
      <header className="pt-40 pb-20 lg:pt-56 lg:pb-32 px-4 relative bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-bias-yellow text-bias-blue px-6 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest shadow-sm">
            🚀 Matrículas Abertas • Início Imediato
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-[900] text-bias-blue leading-[1.05] mb-8">
            Chega de Adiar. Conquiste seu <span className="text-bias-yellow underline decoration-bias-blue underline-offset-8">Diploma Técnico Hoje</span>.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-medium leading-relaxed">
            Formação 100% Online reconhecida pelo MEC e registrada no SISTEC. 
            Conquiste seu espaço no mercado por apenas <span className="text-bias-blue font-black">{PRICE_INSTALLMENT}</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            <a href="#filtro" className="w-full sm:w-auto bg-bias-blue text-white px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-all">
              COMEÇAR AGORA
            </a>
          </div>
          <div className="mt-12 flex justify-center items-center gap-8 opacity-60 grayscale text-[10px] md:text-sm">
             <span className="font-black uppercase tracking-tighter">✔ MEC Autorizado</span>
             <span className="font-black uppercase tracking-tighter">✔ Registro SISTEC</span>
             <span className="font-black uppercase tracking-tighter">✔ Diploma Válido</span>
          </div>
        </div>
      </header>

      {/* Cursos Atualizados */}
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
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-black text-bias-blue">{course.duration}</span>
                  <button onClick={() => handleWhatsAppClick(`Olá, quero saber mais sobre o curso de ${course.title}`)} className="text-bias-blue font-black hover:text-bias-yellow transition-colors uppercase text-sm">
                    Ver Curso →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtro Inteligente */}
      <LeadFilter />

      {/* Técnico por Competência - APÓS O FILTRO */}
      <section id="competencia" className="py-24 bg-bias-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="bg-bias-yellow text-bias-blue px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest">
                 Modalidade Especial
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Diploma por Competência: <br/>
                <span className="text-bias-yellow">Experiência que vale Ouro.</span>
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed font-medium">
                Se você já trabalha na área há mais de 2 anos, pode obter seu diploma técnico sem precisar frequentar aulas. 
                Processo 100% amparado pela Lei Federal 9.394/96 Art. 41.
              </p>
              <div className="space-y-4">
                {[
                  'Diplomado em 45 dias úteis',
                  'Válido para concursos e registros de classe',
                  'Registrado no SISTEC/MEC automaticamente'
                ].map(txt => (
                  <div key={txt} className="flex items-center gap-3 font-bold text-sm">
                    <div className="w-5 h-5 bg-bias-yellow text-bias-blue rounded-full flex items-center justify-center text-[10px]">✓</div>
                    {txt}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleWhatsAppClick("Olá! Tenho experiência e quero saber mais sobre o Diploma por Competência.")}
                className="w-full lg:w-auto bg-bias-yellow text-bias-blue px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl"
              >
                OBTER MEU DIPLOMA POR EXPERIÊNCIA
              </button>
            </div>
            <div className="bg-white/10 p-12 rounded-[4rem] border border-white/10 text-center">
               <div className="text-6xl mb-6">🏆</div>
               <p className="text-2xl font-black mb-4 tracking-tighter">RECONHECIDO E REGISTRADO</p>
               <p className="text-blue-100 font-medium opacity-80 mb-8">
                  Todos os nossos diplomas são inseridos no SISTEC, permitindo consulta pública e validade nacional imediata.
               </p>
               <div className="h-2 w-20 bg-bias-yellow mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel/Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-16">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-12 h-12 mb-4" alt="Google" />
             <h2 className="text-3xl font-black text-bias-blue uppercase tracking-tighter">O que dizem no Google Meu Negócio</h2>
             <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <span key={i} className="text-bias-yellow text-2xl">★</span>)}
                <span className="ml-2 font-black text-bias-blue">5.0 / 5.0</span>
             </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-10 rounded-[3rem] text-left border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(i => <span key={i} className="text-bias-yellow text-xs">★</span>)}
                </div>
                <p className="text-lg font-medium italic text-gray-700 mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-bias-yellow" />
                  <div>
                    <p className="font-black text-bias-blue text-sm">{t.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-2xl font-black text-bias-blue mb-8 uppercase tracking-widest">Siga nossa rotina no Instagram</h2>
           <a href={INSTAGRAM_URL} target="_blank" className="inline-flex items-center gap-4 bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600 text-white px-10 py-5 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-xl">
             📸 @biascentroeducacional
           </a>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src="https://i.imgur.com/vHq0L5K.png" alt="BIAS Logo" className="w-12 h-12 brightness-0 invert" />
              <span className="text-3xl font-black tracking-tighter">BIAS</span>
            </div>
            <p className="text-slate-400 font-medium">Educação técnica de excelência, com reconhecimento MEC e foco na sua empregabilidade.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-xl mb-6 uppercase tracking-tighter">Reconhecimento</h4>
            <div className="flex flex-col gap-2 opacity-60">
               <p className="text-sm font-bold tracking-widest">PORTARIA MEC Nº 1.234/20</p>
               <p className="text-sm font-bold tracking-widest">REGISTRO SISTEC ATIVO</p>
               <p className="text-sm font-bold tracking-widest">DIPLOMA VÁLIDO EM TODO BRASIL</p>
            </div>
          </div>
          <div className="space-y-6">
             <h4 className="font-black text-xl mb-4 uppercase tracking-tighter">Atendimento</h4>
             <p className="text-slate-400 font-bold">WhatsApp: (31) 9769-0284</p>
             <button 
              onClick={() => handleWhatsAppClick()}
              className="w-full bg-bias-blue text-white py-4 rounded-2xl font-black hover:bg-bias-yellow hover:text-bias-blue transition-all"
            >
              FALAR COM UM CONSULTOR
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-800 text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          <p>© 2026 BIAS CENTRO EDUCACIONAL • CNPJ 00.000.000/0001-00</p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <button 
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"/></svg>
      </button>

    </div>
  );
};

export default App;
