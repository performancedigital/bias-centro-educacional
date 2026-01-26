
import React, { useState } from 'react';
import { WHATSAPP_NUMBER, PRICE_INSTALLMENT } from '../constants';

const LeadFilter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    format: '',
    experience: '',
    motivation: ''
  });

  const nextStep = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const finishAndRedirect = () => {
    const text = `Olá! Fiz o teste no site da BIAS. %0A*Formato:* ${answers.format} %0A*Experiência:* ${answers.experience} %0A*Motivo:* ${answers.motivation} %0AQuero garantir a oferta de ${PRICE_INSTALLMENT}!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="filtro" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500">
          <div className="bg-bias-blue p-12 text-center text-white relative">
            <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">Plano de Carreira 2026</h2>
            <p className="opacity-80 font-bold text-sm tracking-widest uppercase">Consultoria Gratuita via WhatsApp</p>
          </div>
          
          <div className="p-10 md:p-16 min-h-[480px] flex flex-col justify-center">
            {step === 1 && (
              <div className="animate-fadeIn">
                <p className="text-bias-blue font-black text-center mb-4 text-xs tracking-widest uppercase">Passo 01 de 03</p>
                <h3 className="text-3xl font-black mb-10 text-gray-800 text-center leading-tight">Como você quer obter seu diploma?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { val: '100% Online', d: 'Quero cursar as matérias do zero' },
                    { val: 'Por Competência', d: 'Tenho +2 anos de experiência na área' }
                  ].map(opt => (
                    <button 
                      key={opt.val}
                      onClick={() => nextStep('format', opt.val)}
                      className="p-8 border-2 border-slate-100 rounded-[2rem] hover:border-bias-yellow hover:bg-yellow-50 transition-all text-left group"
                    >
                      <p className="font-black text-bias-blue text-xl uppercase tracking-tighter">{opt.val}</p>
                      <p className="text-sm font-bold text-slate-400 uppercase">{opt.d}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fadeIn">
                <p className="text-bias-blue font-black text-center mb-4 text-xs tracking-widest uppercase">Passo 02 de 03</p>
                <h3 className="text-3xl font-black mb-10 text-gray-800 text-center leading-tight">Sua disponibilidade atual:</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Trabalho o dia todo',
                    'Tenho tempo livre para estudar',
                    'Preciso do diploma com urgência máxima'
                  ].map(opt => (
                    <button 
                      key={opt}
                      onClick={() => nextStep('experience', opt)}
                      className="p-6 border-2 border-slate-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-center font-black text-slate-700 uppercase tracking-tighter"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fadeIn">
                <p className="text-bias-blue font-black text-center mb-4 text-xs tracking-widest uppercase">Passo 03 de 03</p>
                <h3 className="text-3xl font-black mb-10 text-gray-800 text-center leading-tight">Principal objetivo:</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Aumento Salarial',
                    'Mudar de Profissão',
                    'Registro em Conselho (CREA/CFT)',
                    'Prestar Concurso Público'
                  ].map(opt => (
                    <button 
                      key={opt}
                      onClick={() => nextStep('motivation', opt)}
                      className="p-6 border-2 border-slate-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-center font-black text-slate-700 uppercase tracking-tighter"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-xl">✓</div>
                <h3 className="text-4xl font-black mb-4 text-bias-blue uppercase tracking-tighter">Perfil Qualificado!</h3>
                <p className="text-slate-500 mb-10 font-bold text-lg leading-relaxed">Sua jornada para o sucesso técnico começa agora com condições exclusivas.</p>
                
                <div className="bg-bias-blue rounded-[3rem] p-10 mb-10 text-white shadow-2xl relative border-4 border-bias-yellow/20">
                   <div className="text-xs font-black opacity-60 mb-2 uppercase tracking-widest">Oferta Personalizada 2026:</div>
                   <div className="text-6xl font-black mb-2 tracking-tighter">{PRICE_INSTALLMENT}</div>
                   <p className="text-[10px] font-black uppercase opacity-50">Matrícula Grátis • Início Imediato</p>
                </div>

                <button 
                  onClick={finishAndRedirect}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-8 px-10 rounded-3xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-4 text-2xl uppercase tracking-tighter"
                >
                  CONCLUIR MATRÍCULA
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFilter;
