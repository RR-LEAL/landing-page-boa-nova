'use client';

import React from 'react';
import { Clock, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const Hero: React.FC = () => {
  return (
    <Section variant="gradient" className="pt-32 pb-20">
      <Container>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advogada Criminalista na Região dos Lagos
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-amber-400" />
            <p className="text-2xl md:text-3xl text-amber-400 font-semibold">
              Atendimento 24 horas
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Atuação em Direito Penal, com atendimento 24 horas na Região dos Lagos, abrangendo acompanhamento em delegacias, inquérito policial, prisão em flagrante, audiência de custódia e acompanhamento processual do início ao trânsito em julgado, além de atuação na fase de execução penal e no Tribunal do Júri.
          </p>
          <a 
            href={getWhatsAppLink(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg" icon={<Phone />}>
              ENVIAR MENSAGEM NO WHATSAPP
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
};