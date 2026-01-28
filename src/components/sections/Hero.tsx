'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

export const Hero: React.FC = () => {
  return (
    <Section 
      backgroundImage="/images/hero-5.png"
      backgroundImageMobile="/images/hero-1.png"
      backgroundPosition="center 20%"
      overlayIntensity="medium"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="text-left text-bn-gold-light order-1">
            {/* Logo */}
            <Image
              src="/images/logo-sem-fundo-reduzido.jpeg"
              alt="Logo Bruno Boa Nova Advocacia"
              width={350}
              height={350}
              className="mb-6 w-48 md:w-64 lg:w-80 h-auto mx-auto md:mx-0"
            />
            
            {/* Conteúdo de texto */}
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold mb-6">
              Escritório especializado em Direito Penal, Família e Consumidor
            </h1>
            <p className="text-base text-center md:text-lg lg:text-xl lg:text-left text-slate-200 mb-8 leading-relaxed">
              Atuação técnica, estratégica e humanizada em casos urgentes e delicados, com atendimento direto pelos advogados.
            </p>
            <WhatsAppCTA buttonClassName="uppercase" />
          </div>
        </div>
      </Container>
    </Section>
  );
};