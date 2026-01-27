'use client';

import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const CTA: React.FC = () => {
  return (
    <Section variant='dark'>
      <Container size="md">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Está enfrentando um problema jurídico e precisa de orientação imediata?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Fale agora diretamente com um advogado e receba uma orientação jurídica segura, estratégica e personalizada para o seu caso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="premium" size="lg" className="uppercase blink-soft">
                Falar com o advogado agora
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
