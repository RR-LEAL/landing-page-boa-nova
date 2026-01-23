'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { processSteps } from '@/data/landing';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const ProcessSteps: React.FC = () => {
  return (
    <Section id="como-funciona" variant="white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Como funciona o processo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seja na delegacia, no tribunal ou na execução penal, garantimos a defesa dos seus direitos com dedicação, estratégia e conhecimento técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-600 text-white text-3xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
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