'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { services } from '@/data/landing';
import { IconComponent } from '@/components/ui/IconComponent';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const Benefits: React.FC = () => {
  return (
    <Section id="servicos" variant="gray">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Como podemos te ajudar
          </h2>
          <p className="text-xl text-gray-600">
            Se você enfrenta algum desses problemas, <span className="font-semibold text-amber-600">estamos aqui para ajudar</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-amber-600 mb-4">
                  <IconComponent icon={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
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