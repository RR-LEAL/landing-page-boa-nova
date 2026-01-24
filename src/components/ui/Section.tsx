import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'gray' | 'dark' | 'gradient';
  backgroundImage?: string;   // 👈 NOVO
  overlay?: boolean;          // 👈 NOVO
  parallax?: boolean; // 👈 NOVO
}


export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  id,
  variant = 'white',
  backgroundImage,
  overlay = true
}) => {
  const variants = {
    white: 'bg-white',
    gray: 'bg-gray-600',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white'
  };

  const baseClasses = [
    'relative py-20 px-4 bg-fixed bg-cover bg-center bg-no-repeat',
    !backgroundImage && variants[variant], // só aplica cor se NÃO tiver imagem
    className
  ].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={baseClasses}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* Overlay profissional */}
      {backgroundImage && overlay && (
        <div className="absolute inset-0 bg-black/60" />
      )}

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};