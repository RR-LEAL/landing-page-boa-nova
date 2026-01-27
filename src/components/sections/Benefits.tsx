'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { services } from '@/data/landing';
import { IconComponent } from '@/components/ui/IconComponent';
import { getWhatsAppLink } from '@/lib/whatsapp';

export const Benefits: React.FC = () => {
  return (
    <Section variant="dark">
      <Container>
        <div className="text-center mb-16 text-slate-200">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Como podemos te ajudar
          </h2>
          <p className="text-xl text-slate-200">
            Se você enfrenta algum desses problemas, <span className="font-semibold text-bn-gold-dark">estamos aqui para ajudar</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl shadow-md shadow-bn-gold-dark/20 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out bg-slate-900 h-full cursor-pointer"
            >
              <div className="text-bn-gold-dark mb-4">
                <IconComponent icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-bn-gold-dark mb-4">
                {service.title}
              </h3>
              <p className="text-slate-200 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
      </Container>
    </Section>
  );
};