'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: {
    mobile: number;
    desktop: number;
  };
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = { mobile: 1, desktop: 3 },
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerView = isMobile ? itemsPerView.mobile : itemsPerView.desktop;
  const totalSlides = Math.ceil(children.length / cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  const visibleItems = children.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  return (
    <div className="relative">
      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 z-10 transition-all ${
          isMobile 
            ? '-left-4 text-bn-gold-dark p-2' 
            : '-left-4 md:-left-16 bg-bn-gold-dark hover:bg-bn-gold-hover text-bn-black p-3 rounded-full shadow-lg'
        }`}
        aria-label="Item anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Conteúdo do Carrossel */}
      <div className="overflow-hidden">
        <div className={`grid gap-4 md:gap-8 ${isMobile ? 'grid-cols-1 px-8' : 'md:grid-cols-3'}`}>
          {visibleItems.map((child, index) => (
            <div key={currentIndex * cardsPerView + index} className="flex flex-col h-full min-h-[400px] md:min-h-[350px]">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 z-10 transition-all ${
          isMobile 
            ? '-right-4 text-bn-gold-dark p-2' 
            : '-right-4 md:-right-16 bg-bn-gold-dark hover:bg-bn-gold-hover text-bn-black p-3 rounded-full shadow-lg'
        }`}
        aria-label="Próximo item"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores de páginas */}
      {showIndicators && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-bn-gold-dark w-8' : 'bg-gray-400 w-3'
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
