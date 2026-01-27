'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink } from '@/lib/whatsapp';

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
          {/* Coluna de Conteúdo - Primeira no desktop */}
          <div className="text-left text-bn-gold-light order-1">
            {/* Logo */}
            <Image
              src="/images/logo-sem-fundo-reduzido.png"
              alt="Logo Bruno Boa Nova Advocacia"
              width={350}
              height={350}
              className="mb-6 w-48 md:w-64 lg:w-80 h-auto mx-auto md:mx-0"
            />
            
            {/* Imagem da moça - Aparece aqui no mobile */}
            {/* <div className="relative mix-blend-soft-light h-75 sm:h-100 overflow-hidden mb-6 md:hidden rounded-lg">
              <Image
                src="/images/bruno-hero-2.jpeg"
                alt="Advocacia Criminal"
                fill
                className="object-cover object-center"
                priority
              />
            </div> */}

            {/* Conteúdo de texto */}
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold mb-6">
              Escristório especializado em Direito Penal, Família e Consumidor
            </h1>
            <p className="text-base text-center md:text-lg lg:text-xl lg:text-left text-slate-200 mb-8 leading-relaxed">
              Atuação técnica, estratégica e humanizada em casos urgentes e delicados, com atendimento direto pelos advogados.
            </p>
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

          {/* Coluna de Imagem - Só aparece no desktop */}
          <div className="hidden right-4 md:block relative mix-blend-soft-light h-100 lg:h-125 xl:h-150 overflow-hidden order-2 rounded-lg">
            {/* <Image
              src="/images/hero-1.png"
              alt="Advocacia Criminal"
              fill
              className="object-cover object-center"
              priority
            /> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};