import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'white' | 'gray' | 'dark' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '',
  id,
  variant = 'white'
}) => {
  const variants = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white'
  };

  const classes = ['py-20 px-4', variants[variant], className].filter(Boolean).join(' ');

  return <section id={id} className={classes}>{children}</section>;
};