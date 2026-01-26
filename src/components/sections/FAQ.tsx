'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { faqs } from '@/data/landing';

export const FAQ: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  return (
    <Section variant="white">
      <Container size="md">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-amber-600 transition-transform ${faqOpen === index ? 'rotate-180' : ''}`}
                />
              </button>
              {faqOpen === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};