
import React, { useEffect } from 'react';
import { COURSES, TESTIMONIALS, WHATSAPP_NUMBER, INSTAGRAM_URL, PRICE_INSTALLMENT } from './constants';
import LeadFilter from './components/LeadFilter';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "BIAS | Diploma Técnico Rápido e 100% Online";
  }, []);

  const handleWhatsAppClick = (msg: string = "Olá! Gostaria de aproveitar a oferta de R$ 61,66 e começar meu curso técnico agora.") => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-bias-yellow selection:text-bias-blue overflow-x-hidden">
      
      {/* Navbar com Link do Instagram */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.imgur.com/vHq0L5K.png" alt="BIAS Logo" className="w-10 h-10 object-contain" />
            <div className="leading-tight">
              <span className="text-2xl font-black text-bias-blue tracking-tighter">BIAS</span>
              <p className="text-[9px] uppercase tracking-widest text-bias-blue/70 font-bold italic">Centro Educacional</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#competencia" className="text-gray-700 hover:text-bias-blue font-bold text-sm uppercase">Diploma por Experiência</a>
            <a href="#cursos" className="text-gray-700 hover:text-bias-blue font-bold text-sm uppercase">Cursos 100% Online</a>
            <a href={INSTAGRAM_URL} target="_blank" className="flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-xs font-black hover:bg-pink-100 transition-all border border-pink-200">
               📸 @biascentroeducacional
            </a>
          </div>
          <button 
            onClick={() => handleWhatsAppClick()}
            className="bg-bias-blue text-white px-6 py-3 rounded-xl font-black text-sm hover:bg-blue-800 transition-all shadow-lg shadow-blue-200"
          >
            INÍCIO IMEDIATO
          </button>
        </div>
      </nav>

      {/* Hero Section: Copy agressiva e foco em facilidade */}
      <header className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-bias-yellow text-bias-blue px-4 py-1.5 rounded-lg text-xs font-black mb-6 uppercase tracking-widest">
              ⚡ Sem Vestibular • Matrícula Grátis
            </span>
            <h1 className="text-4xl md:text-6xl font-[900] text-bias-blue leading-[1.05] mb-6">
              Chega de Adiar. Conquiste seu <span className="text-bias-yellow">Diploma Técnico</span> Online.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl font-medium">
              Transforme sua carreira estudando de onde quiser. Formação rápida, reconhecida e por apenas <span className="text-bias-blue font-black">{PRICE_INSTALLMENT}</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#filtro" className="w-full sm:w-auto bg-bias-blue text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
                QUERO MEU CURSO
              </a>
              <p className="text-sm font-bold text-gray-400 max-w-[180px] leading-tight text-center lg:text-left">
                Vagas limitadas para o lote atual com desconto.
              </p>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-bias-yellow to-bias-blue rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Plataforma de Ensino" className="w-full h-[450px] object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-bias-blue border border-blue-100">
                    Disponível 24h por dia
                  </div>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Seção Técnico por Competência - A SOLUÇÃO RÁPIDA */}
      <section id="competencia" className="py-24 bg-bias-blue text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "45", t: "Dias para o Diploma" },
                  { n: "100%", t: "Legalizado pelo MEC" },
                  { n: "+50", t: "Áreas Disponíveis" },
                  { n: "Zero", t: "Aulas Presenciais" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 p-6 rounded-3xl border border-white/10 hover:bg-white/20 transition-all text-center">
                    <p className="text-4xl font-black text-bias-yellow mb-1">{stat.n}</p>
                    <p className="text-xs font-bold uppercase tracking-tighter opacity-80">{stat.t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Você já trabalha na área? <br/>
                <span className="text-bias-yellow">O Diploma é seu por direito.</span>
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed font-medium">
                Se você tem 2 anos ou mais de experiência comprovada em carteira ou contrato, não precisa fazer o curso todo do zero. 
                Nós certificamos sua competência profissional legalmente.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                {['Use seu tempo de serviço como prova', 'Válido para CREA, CFT, COREN e outros', 'Reconhecido em concursos públicos'].map(txt => (
                  <div key={txt} className="flex items-center gap-3 font-bold text-sm">
                    <div className="w-5 h-5 bg-bias-yellow text-bias-blue rounded-full flex items-center justify-center text-[10px]">✓</div>
                    {txt}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleWhatsAppClick("Tenho experiência na área e quero saber mais sobre o Técnico por Competência!")}
                className="mt-6 w-full lg:w-auto bg-bias-yellow text-bias-blue px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-yellow-500/30"
              >
                QUERO CERTIFICAR MINHA EXPERIÊNCIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos 100% Online */}
      <section id="cursos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-bias-blue mb-6">Formações 100% Online</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg italic">
              "A flexibilidade que você precisa para trabalhar e estudar ao mesmo tempo."
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {COURSES.map(course => (
              <div key={course.id} className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl hover:shadow-2xl transition-all relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl group-hover:scale-125 transition-transform">{course.icon}</div>
                <div className="relative">
                  <h3 className="text-2xl font-black text-bias-blue mb-4 leading-tight">{course.title}</h3>
                  <p className="text-gray-500 mb-8 font-medium">{course.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-bias-blue font-black text-sm">INÍCIO AGORA</span>
                    <button onClick={() => handleWhatsAppClick(`Quero saber mais sobre o técnico em ${course.title}`)} className="bg-bias-blue text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-bias-yellow hover:text-bias-blue transition-colors">
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtro Inteligente - Conversão Final */}
      <LeadFilter />

      {/* Footer com CTA Social */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-black text-bias-blue">Acompanhe a BIAS no Instagram</h2>
              <p className="text-gray-500 font-medium">Veja o dia a dia da nossa escola, novos alunos formados e promoções relâmpago.</p>
              <a href={INSTAGRAM_URL} target="_blank" className="inline-block bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl hover:scale-105 transition-all">
                SEGUIR NO INSTAGRAM
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
               <img src="https://i.pravatar.cc/100?u=1" className="w-16 h-16 rounded-2xl grayscale hover:grayscale-0 transition-all" alt="Aluno" />
               <img src="https://i.pravatar.cc/100?u=2" className="w-16 h-16 rounded-2xl grayscale hover:grayscale-0 transition-all" alt="Aluno" />
               <img src="https://i.pravatar.cc/100?u=3" className="w-16 h-16 rounded-2xl grayscale hover:grayscale-0 transition-all" alt="Aluno" />
               <img src="https://i.pravatar.cc/100?u=4" className="w-16 h-16 rounded-2xl grayscale hover:grayscale-0 transition-all" alt="Aluno" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-xs font-bold text-gray-400 tracking-widest uppercase">
            <p>© 2024 BIAS Centro Educacional - Todos os direitos reservados</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="text-bias-blue">DIPLOMA 100% VÁLIDO</span>
               <span className="text-bias-blue">PORTARIA MEC</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <button 
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute -top-12 right-0 bg-white text-gray-800 text-xs font-black py-1 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
           Tire suas dúvidas agora! 💬
        </div>
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"/></svg>
      </button>

    </div>
  );
};

export default App;
