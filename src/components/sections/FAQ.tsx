'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { faqs } from '@/data/landing'
import { Section } from '../ui/Section'


export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section variant="slate">
      <div className="max-w-5xl mx-auto">
      {/* Título */}
      <div className="relative text-center mb-20 select-none">
      {/* Camada base (dourado com sombra interna) */}
      <h2 className="faq-gold text-center text-[64px] md:text-[88px] lg:text-[140px] leading-none tracking-wide font-serif">
        DÚVIDAS
      </h2>

      {/* Overlay central claro (efeito de luz no meio das letras) */}
      <h2 className="faq-gold-light absolute inset-0 text-center text-[64px] md:text-[88px] lg:text-[140px] leading-none tracking-wide font-serif">
        DÚVIDAS
      </h2>

      {/* Texto sobreposto */}
      <span className="absolute inset-x-0 top-10 md:top-13 lg:top-22 flex justify-center pb-2 text-slate-200 font-semibold sm:text-sm md:text-lg lg:text-3xl xl:text-3xl sm:tracking-[0.3em] md:tracking-[0.35em]">
        Perguntas Frequentes
      </span>
    </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <button
                key={faq.question}
                type="button"
                className="w-full text-left border-b border-white/10 pb-4 cursor-pointer group"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg text-slate-200 group-hover:text-bn-gold-dark transition-colors duration-300">
                    {faq.question}
                  </p>

                  <ChevronRight
                    className={`transition-transform duration-300 text-bn-gold-dark ${
                      isOpen ? 'rotate-90' : ''
                    }`}
                    size={22}
                  />
                </div>

                {isOpen && (
                  <p className="mt-4 text-bn-silver text-sm leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default FAQ
