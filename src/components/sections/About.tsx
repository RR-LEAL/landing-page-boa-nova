'use client';

import React from 'react';
import { Scale, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const About: React.FC = () => {
  return (
    <Section id="quem-somos" variant="gray">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-lg font-semibold text-amber-600 mb-2">QUEM SOU</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dra. [Seu Nome]
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Advogada formada em [ano], com atuação desde [ano]. Possui pós-graduação em Direito Penal e especialização em Audiências e Tribunal do Júri.
              </p>
              <p>
                Atuação principal no Direito Penal, com foco em defesa estratégica, audiências e atuação técnica especializada. Experiência sólida em acompanhamento de processos criminais, desde a fase de inquérito até o trânsito em julgado.
              </p>
              <p>
                Atendimento personalizado com compromisso de garantir os direitos dos clientes em todas as fases do processo penal, sempre com ética, transparência e dedicação.
              </p>
            </div>
            <div className="mt-8">
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
          </div>
          <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl h-96 flex items-center justify-center text-white">
            <Scale className="w-32 h-32 opacity-20" />
          </div>
        </div>
      </Container>
    </Section>
  );
};