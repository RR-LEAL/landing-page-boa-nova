'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/whatsapp';

type WhatsAppCTAProps = {
  label?: string;
  linkClassName?: string;
  buttonClassName?: string;
  ariaLabel?: string;
  variant?: React.ComponentProps<typeof Button>['variant'];
  size?: React.ComponentProps<typeof Button>['size'];
};

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
  label = 'Falar com o advogado agora',
  linkClassName,
  buttonClassName,
  ariaLabel = 'Falar com o advogado no WhatsApp',
  variant = 'premium',
  size = 'lg',
}) => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
      aria-label={ariaLabel}
    >
      <Button variant={variant} size={size} className={buttonClassName}>
        {label}
      </Button>
    </a>
  );
};
