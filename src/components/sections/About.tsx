'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { WhatsAppCTA } from '@/components/ui/WhatsAppCTA';

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
                Este escritório foi fundado em 2011 com o propósito de oferecer mais do que orientação jurídica: proporcionar clareza, suporte e segurança a pessoas que enfrentam questões delicadas e urgentes. À frente do escritório está o Dr. Bruno Boa Nova, bacharel em Direito pela Universidade Gama Filho, pós-graduado em Direito Penal e Processual Penal pela Ebradi e especialista em crimes relacionados à Lei Maria da Penha.
              </p>
              <p className="text-bn-silver">
                O Dr. Bruno Boa Nova conduz cada caso com atenção personalizada e responsabilidade, compreendendo que por trás de cada processo existem histórias reais, famílias e preocupações que demandam orientação jurídica sólida e estratégica.
              </p>
              <p className="text-bn-silver">
                O atendimento é pautado pela humanização, pela análise criteriosa de cada detalhe e por uma atuação firme na defesa dos direitos do cliente, sempre com ética, planejamento estratégico e foco na melhor solução possível.
              </p>
            </div>

            <div className="mt-8">
              <WhatsAppCTA buttonClassName="uppercase" />
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