import React from 'react';
import { ArrowUpRight, Cpu, Globe, Zap, ShieldCheck } from 'lucide-react';

export const ModelsSection: React.FC = () => {
  return (
    <div id="llms" className="py-24 bg-[#08120b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                <span className="text-green-500 font-bold tracking-wider text-sm uppercase">Ranking Actualizado</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Top 5 Modelos del Estado del Arte</h2>
            <p className="text-gray-400 max-w-2xl">
                Aprende a integrar y ajustar los modelos de lenguaje más potentes del mercado actual en nuestro módulo avanzado.
            </p>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col gap-6">
            
            {/* Card 1: GPT-4o */}
            <div className="group glass-card rounded-3xl p-8 relative overflow-hidden transition-all hover:border-green-500/30">
                <div className="absolute top-0 right-0 p-6">
                     <span className="bg-green-900/50 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">MULTIMODAL NATIVO</span>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center shadow-lg shadow-green-500/20">
                        <Cpu className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">GPT-4o</h3>
                        <p className="text-gray-400 mb-4 text-sm">OpenAI - El estándar actual de la industria por su velocidad y capacidades de razonamiento.</p>
                        <div className="flex gap-4 text-xs text-gray-500 font-mono">
                            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> 128k Contexto</span>
                            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Latencia Baja</span>
                        </div>
                    </div>
                    <div className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition cursor-pointer">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Card 2: Claude 3.5 Sonnet */}
            <div className="group glass-card rounded-3xl p-8 relative overflow-hidden transition-all hover:border-green-500/30">
                <div className="absolute top-0 right-0 p-6">
                     <span className="bg-green-900/50 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">MEJOR RAZONAMIENTO</span>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-gray-900 flex items-center justify-center border border-white/10 shadow-lg">
                        <div className="w-16 h-16 rounded-full border-2 border-orange-400/50 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-orange-400/80 blur-sm"></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Claude 3.5 Sonnet</h3>
                        <p className="text-gray-400 mb-4 text-sm">Anthropic - Destacado por su seguridad, capacidades de codificación y matices humanos.</p>
                        <div className="flex gap-4 text-xs text-gray-500 font-mono">
                            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> 200k Contexto</span>
                            <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> Code Generation</span>
                        </div>
                    </div>
                    <div className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition cursor-pointer">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Gemini */}
                <div className="glass-card p-6 rounded-3xl hover:bg-white/5 transition duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-white">Gemini 1.5 Pro</h4>
                        <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">GOOGLE</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Ventana de contexto masiva de 1M+ tokens para análisis profundo.
                    </p>
                </div>

                {/* Llama 3 */}
                <div className="glass-card p-6 rounded-3xl hover:bg-white/5 transition duration-300 relative">
                     <Globe className="absolute top-6 right-6 w-5 h-5 text-green-500 opacity-50" />
                    <div className="mb-4">
                        <h4 className="text-lg font-bold text-white">Llama 3</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Meta - El modelo open-source más potente y accesible actualmente.
                    </p>
                </div>

                {/* Mistral Large */}
                <div className="glass-card p-6 rounded-3xl hover:bg-white/5 transition duration-300 relative">
                    <Zap className="absolute top-6 right-6 w-5 h-5 text-yellow-500 opacity-50" />
                    <div className="mb-4">
                        <h4 className="text-lg font-bold text-white">Mistral Large</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Eficiencia europea con rendimiento comparable a GPT-4.
                    </p>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};