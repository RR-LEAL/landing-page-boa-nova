import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '',
  size = 'lg' 
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    full: 'max-w-7xl'
  };

  const classes = ['container mx-auto px-4', sizes[size], className].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
};