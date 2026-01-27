'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const About: React.FC = () => {
  return (
    <Section variant="dark">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-lg font-semibold text-bn-gold-dark mb-2">QUEM SOMOS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-bn-gold-hover mb-6">
              Dr. Bruno Boa Nova — Advogado Responsável
            </h3>
             {/* Imagem no mobile - aparece após o texto */}
            <div className="md:hidden rounded-2xl h-96 flex items-center justify-center text-white mt-8">
              <Image
                src="/images/bruno-sentado-1.png"
                alt="Dr. Bruno Boa Nova"
                width={300}
                height={300}
                className="rounded-2xl object-cover h-96 w-full"
              />
            </div>

            <div className="space-y-4 leading-relaxed pt-2">
              <p className="text-bn-silver">
                Este escritório nasceu com o propósito de oferecer mais do que orientação jurídica: oferecer clareza, apoio e segurança para pessoas que estão enfrentando problemas jurídicos delicados e urgentes.
              </p>
              <p className="text-bn-silver">
                À frente do atendimento, o Dr. Bruno Boa Nova conduz cada caso de forma próxima, atenciosa e responsável, entendendo que por trás de todo processo existe uma história real, uma família e preocupações que precisam de orientação jurídica segura e estratégica.
              </p>
              <p className="text-bn-silver">
                O trabalho é pautado no atendimento humanizado, na análise cuidadosa de cada detalhe e em uma atuação firme na defesa dos direitos do cliente, sempre com lealdade, estratégia jurídica e foco na melhor solução possível.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href={getWhatsAppLink()}
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
          <div className="hidden md:flex rounded-2xl h-full object-cover items-center justify-center text-white">
            <Image
              src="/images/bruno-sentado-1.png"
              alt="Dr. Bruno Boa Nova"
              width={300}
              height={300}
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};