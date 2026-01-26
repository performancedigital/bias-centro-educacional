
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
    const text = `Olá! Fiz o teste no site da BIAS. %0A*Formato:* ${answers.format} %0A*Experiência:* ${answers.experience} %0A*Motivo:* ${answers.motivation} %0AQuero aproveitar a oferta de ${PRICE_INSTALLMENT} no cartão!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="filtro" className="py-24 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-blue-100 transition-all duration-500">
          <div className="bg-bias-blue p-10 text-center text-white relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-bias-yellow"></div>
            <h2 className="text-3xl font-black mb-2 tracking-tight">Oportunidade Personalizada</h2>
            <p className="opacity-90 font-bold text-sm">Responda e descubra o melhor caminho para o seu diploma.</p>
          </div>
          
          <div className="p-8 md:p-12 min-h-[450px] flex flex-col justify-center">
            {step === 1 && (
              <div className="animate-fadeIn">
                <p className="text-bias-blue font-black text-center mb-2 text-xs tracking-widest uppercase">Questão 01 de 03</p>
                <h3 className="text-2xl font-black mb-8 text-gray-800 text-center leading-tight">Você prefere estudar 100% online ou aproveitar sua experiência para o diploma?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { val: '100% Online', d: 'Quero cursar as matérias de casa' },
                    { val: 'Por Experiência', d: 'Já trabalho na área e quero certificar' }
                  ].map(opt => (
                    <button 
                      key={opt.val}
                      onClick={() => nextStep('format', opt.val)}
                      className="p-6 border-2 border-gray-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-left group"
                    >
                      <p className="font-black text-bias-blue text-lg">{opt.val}</p>
                      <p className="text-sm font-medium text-gray-400">{opt.d}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fadeIn">
                <p className="text-bias-blue font-black text-center mb-2 text-xs tracking-widest uppercase">Questão 02 de 03</p>
                <h3 className="text-2xl font-black mb-8 text-gray-800 text-center leading-tight">Como está sua rotina hoje?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Trabalho e tenho pouco tempo',
                    'Tenho disponibilidade total para o online',
                    'Estou desempregado e preciso do diploma rápido'
                  ].map(opt => (
                    <button 
                      key={opt}
                      onClick={() => nextStep('experience', opt)}
                      className="p-5 border-2 border-gray-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-center font-bold text-gray-700"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fadeIn">
                <p className="text-bias-blue font-black text-center mb-2 text-xs tracking-widest uppercase">Questão 03 de 03</p>
                <h3 className="text-2xl font-black mb-8 text-gray-800 text-center leading-tight">O que você mais busca com esse diploma?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Melhor salário e promoção',
                    'Conseguir o primeiro emprego técnico',
                    'Abrir meu próprio negócio',
                    'Fazer concurso público'
                  ].map(opt => (
                    <button 
                      key={opt}
                      onClick={() => nextStep('motivation', opt)}
                      className="p-5 border-2 border-gray-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-center font-bold text-gray-700"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center animate-fadeIn">
                <div className="inline-block p-4 bg-green-50 rounded-full mb-6">
                   <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl">✓</div>
                </div>
                <h3 className="text-3xl font-black mb-2 text-bias-blue uppercase tracking-tighter">Oferta Gerada com Sucesso!</h3>
                <p className="text-gray-500 mb-8 font-bold">Identificamos que você tem o perfil perfeito para o nosso modelo acelerado.</p>
                
                <div className="bg-bias-blue rounded-3xl p-8 mb-8 text-white shadow-2xl relative">
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bias-yellow text-bias-blue px-4 py-1 rounded-full text-[10px] font-black uppercase">Melhor Preço Garantido</div>
                   <p className="text-blue-200 font-bold text-xs uppercase mb-2">Seu investimento exclusivo:</p>
                   <div className="text-5xl font-black mb-2">{PRICE_INSTALLMENT}</div>
                   <p className="text-[10px] font-bold opacity-60">No cartão de crédito via recorrência (não consome seu limite total)</p>
                </div>

                <button 
                  onClick={finishAndRedirect}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-6 px-10 rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-xl"
                >
                  GARANTIR MINHA MATRÍCULA
                </button>
                <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Início Imediato após a confirmação</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFilter;
