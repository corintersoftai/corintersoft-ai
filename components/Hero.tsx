import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Domina la <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">IA Generativa</span> hoy mismo
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed">
              Capacítate con expertos y lidera la transformación tecnológica. Cursos prácticos sobre LLMs, Prompt Engineering y despliegue de modelos en producción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Ver Cursos
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold py-4 px-8 rounded-full transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5 text-green-400" />
                Agendar Demo
              </button>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
               {/* Abstract Green Cell/Network Image Representation */}
               <div className="absolute inset-0 bg-[#0a1a0f] rounded-3xl overflow-hidden shadow-2xl border border-green-500/20 neon-glow">
                  <img 
                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" 
                    alt="AI Abstract Network" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-110 transition-transform duration-1000"
                    style={{ filter: 'hue-rotate(90deg) contrast(1.2)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b07] via-transparent to-transparent"></div>
                  
                  {/* Floating particles/overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-500/20 blur-[60px] rounded-full animate-pulse"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};