'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const Hero: React.FC = () => {
  return (
    <Section backgroundImage="/image/contrato.png" backgroundBlur className="pt-20 ">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Coluna de Conteúdo - Primeira no desktop */}
          <div className="text-left text-bn-gold-light order-1">
            {/* Logo */}
            <Image
              src="/image/logo-sem-fundo-reduzido.png"
              alt="Logo Bruno Boa Nova Advocacia"
              width={350}
              height={350}
              className="mb-6 w-48 md:w-64 lg:w-80 h-auto mx-auto md:mx-0"
            />
            
            {/* Imagem da moça - Aparece aqui no mobile */}
            <div className="relative mix-blend-darken h-[400px] md:h-[600px] overflow-hidden mb-6 md:hidden">
              <Image
                src="/image/moca-1.png"
                alt="Advocacia Criminal"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Conteúdo de texto */}
            <h1 className="text-2xl text-center md:text-3xl lg:text-4xl lg:text-left font-bold mb-6">
              Advogado Especialista em Direito Penal, Família e Consumidor
            </h1>
            <p className="text-base text-center md:text-lg lg:text-xl lg:text-left text-gray-200 mb-8 leading-relaxed">
              Atuação técnica, estratégica e humanizada em casos urgentes e delicados, com atendimento direto pelo advogado.
            </p>
            <a 
              href={getWhatsAppLink(WHATSAPP_NUMBER)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="premium" size="lg">
                ENVIAR MENSAGEM NO WHATSAPP
              </Button>
            </a>
          </div>

          {/* Coluna de Imagem - Só aparece no desktop */}
          <div className="hidden md:block relative mix-blend-darken h-[600px] overflow-hidden order-2">
            <Image
              src="/image/moca-1.png"
              alt="Advocacia Criminal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};