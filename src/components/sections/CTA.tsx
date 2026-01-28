'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

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
            <WhatsAppCTA buttonClassName="uppercase blink-soft" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
