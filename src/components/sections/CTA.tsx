'use client';

import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const CTA: React.FC = () => {
  return (
    <Section variant='dark'>
      <Container size="md">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Precisa de ajuda jurídica?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato agora mesmo e garanta seus direitos com uma defesa técnica e especializada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={getWhatsAppLink(WHATSAPP_NUMBER)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg" icon={<Phone />}>
                WHATSAPP
              </Button>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Atendimento 24h</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
