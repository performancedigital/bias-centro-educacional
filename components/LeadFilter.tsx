
import React, { useState } from 'react';
import { WHATSAPP_NUMBER, PRICE_INSTALLMENT } from '../constants';

const LeadFilter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const nextStep = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const finish = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { content_name: 'Simulador Matrícula Online' });
    }
    const text = `Olá! Finalizei o diagnóstico no site.\n\nPreferência: ${answers.objetivo}\nDisponibilidade: ${answers.disponibilidade}\nObjetivo: ${answers.meta}\n\nQuero garantir minha vaga por apenas 12x de R$ 61,66 NO CARTÃO!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="animate-fadeIn">
            <p className="text-bias-blue font-bold text-center mb-6 text-[10px] tracking-widest uppercase">PASSO 01 DE 03</p>
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-slate-800 text-center leading-tight tracking-tighter">Como você quer obter seu diploma?</h3>
            <div className="grid grid-cols-1 gap-5">
              <button onClick={() => nextStep('objetivo', '100% ONLINE')} className="p-10 border-2 border-slate-100 rounded-[2.5rem] hover:border-bias-blue hover:bg-slate-50 transition-all text-left group">
                <p className="font-black text-bias-blue text-2xl uppercase tracking-tighter mb-1">100% ONLINE</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">QUERO CURSAR AS MATÉRIAS DO ZERO</p>
              </button>
              <button onClick={() => nextStep('objetivo', 'POR COMPETÊNCIA')} className="p-10 border-2 border-slate-100 rounded-[2.5rem] hover:border-bias-blue hover:bg-slate-50 transition-all text-left group">
                <p className="font-black text-bias-blue text-2xl uppercase tracking-tighter mb-1">POR COMPETÊNCIA</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">TENHO +2 ANOS DE EXPERIÊNCIA NA ÁREA</p>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-fadeIn">
            <p className="text-bias-blue font-bold text-center mb-6 text-[10px] tracking-widest uppercase">PASSO 02 DE 03</p>
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-slate-800 text-center leading-tight tracking-tighter">Sua disponibilidade atual:</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                'TRABALHO O DIA TODO',
                'TENHO TEMPO LIVRE PARA ESTUDAR',
                'PRECISO DO DIPLOMA COM URGÊNCIA MÁXIMA'
              ].map(opt => (
                <button 
                  key={opt}
                  onClick={() => nextStep('disponibilidade', opt)} 
                  className="p-8 border-2 border-slate-100 rounded-3xl hover:border-bias-blue transition-all font-black text-slate-700 text-lg uppercase tracking-tight text-center"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-fadeIn">
            <p className="text-bias-blue font-bold text-center mb-6 text-[10px] tracking-widest uppercase">PASSO 03 DE 03</p>
            <h3 className="text-3xl md:text-4xl font-black mb-12 text-slate-800 text-center leading-tight tracking-tighter">Principal objetivo:</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                'AUMENTO SALARIAL',
                'MUDAR DE PROFISSÃO',
                'REGISTRO EM CONSELHO (CREA/CFT)',
                'PRESTAR CONCURSO PÚBLICO'
              ].map(opt => (
                <button 
                  key={opt}
                  onClick={() => nextStep('meta', opt)} 
                  className="p-8 border-2 border-slate-100 rounded-3xl hover:border-bias-blue transition-all font-black text-slate-700 text-lg uppercase tracking-tight text-center"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="animate-fadeIn text-center">
            <div className="w-24 h-24 bg-[#22C55E] text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-4xl font-black mb-3 text-slate-800 tracking-tighter">Perfil Qualificado!</h3>
            <p className="text-bias-blue font-black mb-6 uppercase text-base tracking-tight leading-relaxed max-w-sm mx-auto">
              VOCÊ ESTÁ QUALIFICADO PARA UMA OPORTUNIDADE DE 12X R$61,66 NO CARTÃO
            </p>
            <p className="text-slate-400 font-medium mb-12 text-sm">
              Tudo pronto para iniciarmos seu planejamento de carreira.
            </p>
            <button 
              onClick={finish}
              className="w-full py-7 bg-bias-blue text-white rounded-[1.5rem] font-black text-xl shadow-2xl hover:bg-bias-navy transition-all uppercase tracking-tight"
            >
              FINALIZAR NO WHATSAPP
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="filtro" className="py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-bias-blue p-10 text-center text-white">
            <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">PLANO DE CARREIRA 2026</h2>
            <p className="opacity-80 font-bold text-xs tracking-widest uppercase">CONSULTORIA GRATUITA VIA WHATSAPP</p>
          </div>
          <div className="p-10 md:p-20 min-h-[550px] flex flex-col justify-center">
            {renderStep()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFilter;
