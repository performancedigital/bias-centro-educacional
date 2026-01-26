
import React, { useState } from 'react';
import { WHATSAPP_NUMBER, PRICE_INSTALLMENT } from '../constants';

const LeadFilter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    experience: '',
    time_per_day: '',
    urgency: ''
  });

  const nextStep = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const finishAndRedirect = () => {
    const text = `Olá! Fiz o filtro no site da BIAS. %0A*Experiência:* ${answers.experience} %0A*Estudo diário:* ${answers.time_per_day} %0A*Urgência:* ${answers.urgency} %0AQuero garantir a oferta de ${PRICE_INSTALLMENT}!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="filtro" className="py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-blue-100">
          <div className="bg-bias-blue p-8 text-center text-white">
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Consultor de Carreira IA</h2>
            <p className="opacity-90 font-medium">Encontre o curso ideal e o melhor preço para você em 30 segundos.</p>
          </div>
          
          <div className="p-8 md:p-12 min-h-[420px] flex flex-col justify-center">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-bias-blue font-bold text-center mb-2 uppercase text-xs tracking-widest">Passo 01/03</p>
                <h3 className="text-2xl font-extrabold mb-8 text-gray-800 text-center">Você já trabalha ou tem experiência na área que deseja o diploma?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {['Sim, já trabalho na área', 'Tenho alguma experiência', 'Não, estou começando do zero'].map(opt => (
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

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-bias-blue font-bold text-center mb-2 uppercase text-xs tracking-widest">Passo 02/03</p>
                <h3 className="text-2xl font-extrabold mb-8 text-gray-800 text-center">Quanto tempo você pode dedicar aos estudos online por dia?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {['Até 1 hora (No ônibus/intervalo)', 'De 1 a 2 horas', 'Mais de 2 horas', 'Apenas finais de semana'].map(opt => (
                    <button 
                      key={opt}
                      onClick={() => nextStep('time_per_day', opt)}
                      className="p-5 border-2 border-gray-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-center font-bold text-gray-700"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="text-bias-blue font-bold text-center mb-2 uppercase text-xs tracking-widest">Passo 03/03</p>
                <h3 className="text-2xl font-extrabold mb-8 text-gray-800 text-center">Qual a sua urgência para ter o diploma em mãos?</h3>
                <div className="grid grid-cols-1 gap-3">
                  {['Imediata (Para promoção/vaga)', 'Em até 6 meses', 'Quero apenas me qualificar sem pressa'].map(opt => (
                    <button 
                      key={opt}
                      onClick={() => nextStep('urgency', opt)}
                      className="p-5 border-2 border-gray-100 rounded-2xl hover:border-bias-yellow hover:bg-yellow-50 transition-all text-center font-bold text-gray-700"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center animate-in zoom-in duration-500">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-6 text-green-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-black mb-2 text-bias-blue">TEMOS UMA VAGA PARA VOCÊ!</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Seu perfil é compatível com o nosso sistema de <strong>Início Imediato</strong>.
                </p>
                
                <div className="bg-bias-yellow/10 border-2 border-bias-yellow p-6 rounded-3xl mb-8">
                  <p className="text-bias-blue font-bold text-sm uppercase mb-1">Oferta Exclusiva Liberada:</p>
                  <div className="text-4xl font-black text-bias-blue">{PRICE_INSTALLMENT}</div>
                  <p className="text-xs text-gray-500 font-bold mt-1">*No cartão de crédito via recorrência (não ocupa limite)</p>
                </div>

                <button 
                  onClick={finishAndRedirect}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 px-10 rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 text-xl"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.159.823-.298.045-.684.072-1.103-.063-.264-.085-.599-.198-1.012-.375-1.755-.752-2.891-2.529-2.978-2.644-.087-.115-.708-.941-.708-1.795 0-.855.448-1.274.607-1.448.159-.175.348-.218.463-.218.116 0 .232.001.333.005.109.004.256-.041.401.308.145.35.492 1.201.535 1.288.044.087.072.188.014.303-.058.115-.087.188-.174.289-.087.101-.184.226-.263.303-.089.088-.181.185-.077.363.104.178.465.767.999 1.242.686.611 1.264.801 1.439.888.176.088.277.073.379-.044.103-.117.439-.512.556-.687.117-.175.234-.147.393-.088.16.06.999.471 1.173.558.175.088.291.13.334.203.044.073.044.422-.1.827z"/></svg>
                  RESGATAR VAGA NO WHATSAPP
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
