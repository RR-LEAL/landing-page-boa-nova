'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, icon, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-amber-600 text-white hover:bg-amber-700',
      secondary: 'bg-gray-800 text-white hover:bg-gray-900',
      whatsapp: 'bg-green-500 text-white hover:bg-green-600'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const classes = [baseStyles, variants[variant], sizes[size], className].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classes} {...props}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';