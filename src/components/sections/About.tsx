'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const About: React.FC = () => {
  return (
    <Section variant="dark">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-lg font-semibold text-bn-gold-dark mb-2">QUEM SOU</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-bn-gold-hover mb-6">
              Dr. Bruno Boa Nova
            </h3>
            <div className="space-y-4 leading-relaxed">
              <p className="text-bn-silver">
                Advogado com atuação em Direito Penal, Direito de Família e Direito do Consumidor, focado na defesa firme e estratégica dos direitos de seus clientes em momentos delicados e urgentes
              </p>
              <p className="text-bn-silver">
                Reconhecido pelo atendimento humanizado, técnico e combativo, Bruno conduz cada caso com seriedade, análise detalhada e posicionamento jurídico claro, especialmente em situações que envolvem risco de prisão, medidas protetivas, conflitos familiares e abusos contra o consumidor.
              </p>
              <p className="text-bn-silver">
                Seu trabalho é pautado na estratégia jurídica, na lealdade com o cliente e na busca incansável pela aplicação da justiça dentro da lei.
              </p>
            </div>

            {/* Imagem no mobile - aparece após o texto */}
            <div className="md:hidden bg-bn-gold-gradient rounded-2xl h-96 flex items-center justify-center text-white mt-8">
              <Image
                src="/images/homem.avif"
                alt="Dr. Bruno Boa Nova"
                width={400}
                height={400}
                className="rounded-2xl object-cover h-96 w-full"
              />
            </div>

            <div className="mt-8">
              <a 
                href={getWhatsAppLink(WHATSAPP_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="premium" size="lg" className='uppercase'>
                  Falar com o advogado agora
                </Button>
              </a>
            </div>
          </div>

          {/* Imagem no desktop */}
          <div className="hidden md:flex bg-bn-gold-gradient rounded-2xl h-96 items-center justify-center text-white">
            <Image
              src="/images/homem.avif"
              alt="Dr. Bruno Boa Nova"
              width={400}
              height={400}
              className="rounded-2xl object-cover h-96 w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};