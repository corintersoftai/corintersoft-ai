import React from 'react';
import { Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020503] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">CorinterSoft AI</span>
        </div>

        <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-green-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
        </div>

        <div className="text-gray-600 text-sm">
            © 2024 CorinterSoft AI. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};