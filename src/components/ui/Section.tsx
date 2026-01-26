import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'gray' | 'dark'  | 'slate' | 'gradient';
  backgroundImage?: string;   
  overlay?: boolean;       
  parallax?: boolean; 
  backgroundBlur?: boolean;
}


export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  id,
  variant = 'white',
  backgroundImage,
  overlay = true,
  backgroundBlur = false
}) => {
  const variants = {
    white: 'bg-white',
    gray: 'bg-gray-600',
    dark: 'bg-bn-black',
    slate: 'bg-slate-900',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white'
  };

  const baseClasses = [
    'relative py-20 px-4  bg-scroll md:bg-fixed bg-cover bg-center bg-no-repeat',
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
      {backgroundImage && (overlay || backgroundBlur) && (
        <div
          className={[
            'absolute inset-0',
            overlay ? 'bg-black/60' : 'bg-transparent',
            backgroundBlur ? 'backdrop-blur-xs' : ''
          ].filter(Boolean).join(' ')}
        />
      )}

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};