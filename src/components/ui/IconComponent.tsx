import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconComponentProps {
  icon: LucideIcon;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export const IconComponent: React.FC<IconComponentProps> = ({
  icon: Icon,
  className = '',
  size = 'md',
  color = 'text-bn-gold-dark',
}) => {
  return (
    <div className={`${color} ${className}`}>
      <Icon className={sizeMap[size]} />
    </div>
  );
};
