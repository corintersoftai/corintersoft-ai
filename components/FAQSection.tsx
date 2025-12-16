import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito saber programar?",
    answer: "Sí, se recomienda conocimientos básicos de Python y JavaScript. Sin embargo, tenemos un módulo introductorio de nivelación incluido."
  },
  {
    question: "¿Cuánto duran los cursos?",
    answer: "El bootcamp completo dura 12 semanas, con clases en vivo dos veces por semana y proyecto final."
  },
  {
    question: "¿Ofrecen facilidades de pago?",
    answer: "Contamos con pagos en cuotas sin interés y becas parciales basadas en mérito y necesidad."
  },
  {
    question: "¿Qué hardware necesito?",
    answer: "Cualquier laptop moderna funciona. Usamos entornos en la nube (Google Colab, AWS) para el entrenamiento de modelos pesados, por lo que no necesitas una GPU local potente."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-24 bg-[#08120b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white/[0.06] border-green-500/30' : 'hover:bg-white/[0.04]'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};