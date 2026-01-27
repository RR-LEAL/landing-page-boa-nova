import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'gray' | 'dark'  | 'slate' | 'gradient';
  backgroundImage?: string;
  backgroundImageMobile?: string;
  overlay?: boolean;       
  parallax?: boolean; 
  backgroundBlur?: boolean;
  divider?: boolean;
  backgroundPosition?: string;
  overlayIntensity?: 'light' | 'medium' | 'dark' | 'darker';
}


export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  id,
  variant = 'white',
  backgroundImage,
  backgroundImageMobile,
  overlay = true,
  backgroundBlur = false,
  divider = true,
  backgroundPosition = 'center',
  overlayIntensity = 'medium'
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
          ? { 
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: backgroundPosition
            }
          : undefined
      }
    >
      {/* Background mobile diferente */}
      {backgroundImageMobile && (
        <div
          className="absolute inset-0 z-0 md:hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageMobile})`, backgroundPosition }}
        />
      )}

      {/* Overlay profissional */}
      {(backgroundImage || backgroundImageMobile) && (overlay || backgroundBlur) && (
        <div
          className={[
            'absolute inset-0 z-10',
            overlay && overlayIntensity === 'light' ? 'bg-black/20' : '',
            overlay && overlayIntensity === 'medium' ? 'bg-black/40 md:bg-black/10' : '',
            overlay && overlayIntensity === 'dark' ? 'bg-black/70' : '',
            overlay && overlayIntensity === 'darker' ? 'bg-black/80' : '',
            backgroundBlur ? 'backdrop-blur-xs' : ''
          ].filter(Boolean).join(' ')}
        />
      )}

      {/* Conteúdo acima do overlay */}
      <div className="relative z-20">
        {children}
      </div>

      {divider && (
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-bn-gold-dark/80 to-transparent" />
      )}
    </section>
  );
};