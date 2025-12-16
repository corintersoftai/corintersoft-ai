import React from 'react';
import { Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <div id="contacto" className="py-24 bg-[#050b07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left info */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-white leading-tight">
              ¿Listo para <br />
              empezar tu viaje <br />
              en IA?
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Déjanos tus datos y un asesor académico se pondrá en contacto contigo para resolver tus dudas y ayudarte a elegir el mejor camino.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <Mail className="w-5 h-5 text-green-400 group-hover:text-black" />
                </div>
                <span className="text-white text-lg">admissions@corintersoft.ai</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MapPin className="w-5 h-5 text-green-400 group-hover:text-black" />
                </div>
                <span className="text-white text-lg">Madrid, España (Online Global)</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card p-8 sm:p-10 rounded-[2rem] border border-white/5 shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Nombre Completo</label>
                <input 
                  type="text" 
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-[#0a150f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="nombre@correo.com"
                  className="w-full bg-[#0a150f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Interés Principal</label>
                <div className="relative">
                    <select className="w-full bg-[#0a150f] border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:border-green-500 transition-all cursor-pointer">
                        <option>Fundamentos de IA Generativa</option>
                        <option>Ingeniería de Prompts Avanzada</option>
                        <option>Despliegue de LLMs (MLOps)</option>
                        <option>Consultoría Empresarial</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wide">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos sobre tus objetivos..."
                  className="w-full bg-[#0a150f] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(34,197,94,0.3)] mt-2"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};