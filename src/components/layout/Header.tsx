'use client';

import React, { useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-8 h-8 text-amber-600" />
            <span className="text-xl font-bold text-gray-900">Advocacia Criminal</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('servicos')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Serviços
            </button>
            <button onClick={() => handleNavClick('como-funciona')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Como Funciona
            </button>
            <button onClick={() => handleNavClick('quem-somos')} className="text-gray-700 hover:text-amber-600 transition-colors">
              Quem Somos
            </button>
            <button onClick={() => handleNavClick('contato')} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => handleNavClick('servicos')} className="text-gray-700 hover:text-amber-600 transition-colors text-left">
              Serviços
            </button>
            <button onClick={() => handleNavClick('como-funciona')} className="text-gray-700 hover:text-amber-600 transition-colors text-left">
              Como Funciona
            </button>
            <button onClick={() => handleNavClick('quem-somos')} className="text-gray-700 hover:text-amber-600 transition-colors text-left">
              Quem Somos
            </button>
            <button onClick={() => handleNavClick('contato')} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors text-center">
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};