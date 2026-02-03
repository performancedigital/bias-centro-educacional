
import React, { useState } from 'react';
import { WHATSAPP_NUMBER, PRICE_INSTALLMENT } from '../constants';

const LeadFilter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    format: '',
    experience: '',
    motivation: ''
  });

  const generateEventID = () => {
    return 'evt_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  const nextStep = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const finishAndRedirect = () => {
    // Dispara o evento de Lead ao finalizar o filtro
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const eventID = generateEventID();
      (window as any).fbq('track', 'Lead', {
        content_name: 'Filtro de Qualificação Completo',
        content_category: answers.format,
        value: 0.00,
        currency: 'BRL'
      }, { eventID: eventID });
      console.log('[Pixel] Evento Lead enviado via Filtro');
    }

    // Mensagem limpa sem símbolos de formatação e com quebras de linha reais para o encodeURIComponent
    const text = `Olá! Fiz o teste no site da BIAS.\n\nFormato: ${answers.format}\nExperiência: ${answers.experience}\nMotivo: ${answers.motivation}\n\nQuero garantir a oferta de ${PRICE_INSTALLMENT}!`;
    
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
                <h3 className="text-3xl font-black mb-4 text-gray-800 leading-tight">Perfil Qualificado!</h3>
                <p className="text-gray-500 font-medium mb-10">Tudo pronto para iniciarmos seu planejamento de carreira.</p>
                <button 
                  onClick={finishAndRedirect}
                  className="w-full bg-bias-blue text-white py-6 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all uppercase"
                >
                  Finalizar no WhatsApp
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
