
import React, { useEffect } from 'react';
import { COURSES, TESTIMONIALS, WHATSAPP_NUMBER, INSTAGRAM_URL, PRICE_INSTALLMENT } from './constants';
import LeadFilter from './components/LeadFilter';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "BIAS | Cursos Técnicos Online com Início Imediato";
  }, []);

  const handleWhatsAppClick = (msg: string = "Olá! Gostaria de informações sobre os cursos técnicos.") => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden font-sans">
      
      {/* Navbar Otimizada */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.imgur.com/vHq0L5K.png" alt="BIAS Logo" className="w-10 h-10 object-contain" />
            <div className="leading-tight">
              <span className="text-2xl font-black text-bias-blue tracking-tighter">BIAS</span>
              <p className="text-[9px] uppercase tracking-widest text-bias-blue/70 font-bold">Educação Técnica</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#competencia" className="text-gray-600 hover:text-bias-blue font-bold text-sm uppercase">Diploma por Experiência</a>
            <a href="#cursos" className="text-gray-600 hover:text-bias-blue font-bold text-sm uppercase">Cursos Online</a>
            <a href={INSTAGRAM_URL} target="_blank" className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-xs font-bold hover:bg-pink-50 hover:text-pink-600 transition-all">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.247-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.247-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               Conheça a Escola
            </a>
          </div>
          <button onClick={() => handleWhatsAppClick()} className="bg-bias-blue text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-all md:hidden">Falar Agora</button>
        </div>
      </nav>

      {/* Hero com Foco em Vendas Psicológicas */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-black mb-6 uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
              Início Imediato • 100% Online
            </div>
            <h1 className="text-4xl md:text-6xl font-[900] text-bias-blue leading-[1.1] mb-6">
              O Diploma que o Mercado Exige, <span className="text-bias-yellow">Sem Sair de Casa.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl font-medium leading-relaxed">
              Cursos Técnicos autorizados com mensalidades que cabem no seu bolso. 
              Comece hoje mesmo por apenas <span className="font-black text-bias-blue underline decoration-bias-yellow underline-offset-4">{PRICE_INSTALLMENT}</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#filtro" className="w-full sm:w-auto bg-bias-blue hover:bg-blue-800 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 transition-all hover:-translate-y-1 text-center">
                DESCOBRIR MEU CURSO
              </a>
              <p className="text-sm font-bold text-gray-500 max-w-[200px] leading-snug">
                ⭐ 4.9/5 de satisfação entre nossos alunos
              </p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Estudante Online" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-bias-blue/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white p-5 rounded-2xl shadow-xl">
                  <p className="text-bias-blue font-black text-sm mb-1">DIPLOMA EM MÃOS RÁPIDO</p>
                  <p className="text-gray-500 text-xs">Acelere sua carreira com a BIAS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Nova: Técnico por Competência */}
      <section id="competencia" className="py-24 bg-bias-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-bias-yellow font-black uppercase tracking-widest text-sm">Exclusividade BIAS</span>
              <h2 className="text-3xl md:text-5xl font-black mt-4 mb-8 leading-tight">
                Você já tem a experiência? <br/>Nós te damos o <span className="underline decoration-bias-yellow">Diploma.</span>
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                O <strong>Técnico por Competência</strong> é uma modalidade legalizada pelo MEC que permite profissionais com mais de 2 anos de experiência certificarem seus conhecimentos sem precisar frequentar aulas regulares.
              </p>
              <ul className="space-y-4 mb-10">
                {['Certificação em até 45 dias', 'Válido em todo território nacional', 'Aceito em concursos e conselhos (CRT, CFT, COREN)', 'Sem necessidade de estágio'].map(i => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-6 h-6 bg-bias-yellow text-bias-blue rounded-full flex items-center justify-center text-xs">✓</div>
                    {i}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleWhatsAppClick("Quero saber mais sobre o Técnico por Competência!")}
                className="bg-bias-yellow text-bias-blue px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/20"
              >
                QUERO MEU DIPLOMA POR EXPERIÊNCIA
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 text-center">
                <p className="text-4xl font-black text-bias-yellow mb-2">100%</p>
                <p className="text-sm font-bold uppercase">Legalizado</p>
              </div>
              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 text-center">
                <p className="text-4xl font-black text-bias-yellow mb-2">45</p>
                <p className="text-sm font-bold uppercase">Dias Úteis</p>
              </div>
              <div className="col-span-2 bg-white/10 p-8 rounded-3xl border border-white/20">
                <p className="font-bold text-center">Transforme seu suor em uma carreira de sucesso e melhores salários.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Cursos Online */}
      <section id="cursos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-bias-blue mb-4">Formação Técnica 100% Online</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">Estude de onde quiser, a hora que quiser, com o suporte de uma escola que realmente se importa com seu futuro.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all group">
                <div className="text-5xl mb-6">{course.icon}</div>
                <h3 className="text-2xl font-black text-bias-blue mb-4 group-hover:text-bias-yellow transition-colors">{course.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-medium">{course.description}</p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-black text-bias-blue bg-blue-50 px-3 py-1 rounded-full uppercase">Online</span>
                  <button onClick={() => handleWhatsAppClick(`Olá, quero saber mais sobre o curso de ${course.title}`)} className="text-bias-blue font-black flex items-center gap-2 hover:gap-4 transition-all uppercase text-sm">
                    Ver Detalhes →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtro de Leads Otimizado */}
      <LeadFilter />

      {/* Prova Social & Instagram */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-bias-blue mb-12">Quem já mudou de vida com a BIAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-gray-50 p-10 rounded-[2.5rem] text-left border border-gray-100">
                <p className="text-xl font-medium italic text-gray-700 mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                  <div>
                    <p className="font-black text-bias-blue">{t.name}</p>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href={INSTAGRAM_URL} target="_blank" className="inline-flex flex-col items-center gap-4 group">
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Acompanhe nosso dia a dia</span>
            <div className="bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600 p-1 rounded-3xl group-hover:scale-110 transition-transform shadow-xl">
              <div className="bg-white p-6 rounded-[calc(1.5rem-2px)]">
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center gap-3">
                  @biascentroeducacional
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="bg-bias-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="https://i.imgur.com/vHq0L5K.png" alt="BIAS Logo" className="w-12 h-12 brightness-0 invert" />
              <span className="text-3xl font-black tracking-tighter">BIAS</span>
            </div>
            <p className="text-blue-100 font-medium">A maior referência em ensino técnico 100% online e certificação por competência.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-black text-xl mb-6">Links Rápidos</h4>
            <a href="#cursos" className="block text-blue-100 hover:text-bias-yellow font-bold uppercase text-sm">Nossos Cursos</a>
            <a href="#competencia" className="block text-blue-100 hover:text-bias-yellow font-bold uppercase text-sm">Diploma por Experiência</a>
            <a href="#filtro" className="block text-blue-100 hover:text-bias-yellow font-bold uppercase text-sm">Consultoria Gratuita</a>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
            <h4 className="font-black text-xl mb-4">Atendimento</h4>
            <p className="text-sm font-bold text-blue-100 mb-6 leading-relaxed">
              Segunda a Sexta: 08h às 21h<br/>
              Sábado: 08h às 14h
            </p>
            <button 
              onClick={() => handleWhatsAppClick()}
              className="w-full bg-white text-bias-blue py-4 rounded-2xl font-black hover:bg-bias-yellow transition-all"
            >
              FALAR NO WHATSAPP
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-xs font-bold text-blue-200">
          <p>© 2024 BIAS CENTRO EDUCACIONAL - CURSOS TÉCNICOS ONLINE REGULAMENTADOS</p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <button 
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"/></svg>
      </button>

    </div>
  );
};

export default App;
