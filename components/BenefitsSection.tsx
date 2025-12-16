import React from 'react';
import { GraduationCap, Code, Users, RotateCw, Briefcase, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: <GraduationCap />,
    title: "Certificación Oficial",
    desc: "Obtén un diploma reconocido en la industria que valida tus habilidades en IA generativa y LLMs."
  },
  {
    icon: <Code />,
    title: "Proyectos Prácticos",
    desc: "No solo teoría. Construye chatbots, asistentes RAG y agentes autónomos durante el curso."
  },
  {
    icon: <Users />,
    title: "Mentoria Experta",
    desc: "Acceso directo a ingenieros de IA senior que trabajan activamente en el campo."
  },
  {
    icon: <RotateCw />,
    title: "Contenido Actualizado",
    desc: "La IA cambia cada semana. Nuestro currículo se actualiza mensualmente con los nuevos papers."
  },
  {
    icon: <Briefcase />,
    title: "Bolsa de Trabajo",
    desc: "Conectamos a nuestros mejores graduados con empresas tecnológicas que buscan talento en IA."
  },
  {
    icon: <Rocket />,
    title: "Hackathons Exclusivos",
    desc: "Participa en eventos de fin de semana para prototipar soluciones innovadoras con la comunidad."
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <div id="nosotros" className="py-24 bg-[#050b07] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Motivos para capacitarte</h2>
          <p className="text-gray-400 text-lg">Diseñamos nuestros programas pensando en el mercado laboral del futuro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl hover:bg-white/[0.06] transition-all duration-300 group border border-white/5 hover:border-green-500/30">
              <div className="w-12 h-12 rounded-xl bg-green-900/30 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};