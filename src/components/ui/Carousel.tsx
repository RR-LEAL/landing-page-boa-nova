'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showIndicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  showIndicators = true,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportType, setViewportType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewportType('mobile');
      } else if (width < 1024) {
        setViewportType('tablet');
      } else {
        setViewportType('desktop');
      }
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const cardsPerView = itemsPerView[viewportType];
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
    <div className="relative px-2 sm:px-0">
      {/* Botão Anterior */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 z-10 transition-all -left-8 text-bn-gold-dark p-2 xl:-left-4 2xl:-left-16 xl:bg-bn-gold-dark xl:hover:bg-bn-gold-hover xl:text-bn-black xl:rounded-full xl:shadow-lg"
        aria-label="Item anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Conteúdo do Carrossel */}
      <div className="overflow-hidden px-14 sm:px-4 lg:px-4 2xl:px-0">
        <div className={`grid gap-4 lg:gap-8 ${
          viewportType === 'mobile' ? 'grid-cols-1' : 
          viewportType === 'tablet' ? 'grid-cols-2' : 
          'grid-cols-3'
        }`}>
          {visibleItems.map((child, index) => (
            <div key={currentIndex * cardsPerView + index} className={`flex flex-col h-full ${
              viewportType === 'mobile' ? 'min-h-[400px]' :
              viewportType === 'tablet' ? 'min-h-[350px]' :
              'min-h-[400px]'
            }`}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 z-10 transition-all -right-8 text-bn-gold-dark p-2 xl:-right-4 2xl:-right-16 xl:bg-bn-gold-dark xl:hover:bg-bn-gold-hover xl:text-bn-black xl:rounded-full xl:shadow-lg"
        aria-label="Próximo item"
      >
        <ChevronRight className="w-8 h-8" />
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
