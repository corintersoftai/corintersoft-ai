import React from 'react';
import { Menu, X, Bot } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050b07]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="bg-green-600 p-1.5 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">CorinterSoft AI</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#cursos" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Cursos</a>
              <a href="#llms" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">LLMs</a>
              <a href="#nosotros" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Por qué nosotros</a>
              <a href="#faq" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</a>
              <a href="#contacto" className="text-gray-300 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contacto</a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              Inscribirse
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a150f] border-b border-green-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#cursos" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">Cursos</a>
            <a href="#llms" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">LLMs</a>
            <a href="#nosotros" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">Por qué nosotros</a>
            <a href="#contacto" className="text-gray-300 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
            <button className="w-full mt-4 bg-green-500 text-black font-bold py-3 rounded-lg">
              Inscribirse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};