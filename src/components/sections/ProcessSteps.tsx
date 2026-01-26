'use client'

import { processSteps } from "@/data/landing"
import { Container } from "@/components/ui/Container"
import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/ui/Section"

export function ProcessSteps() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index))
          } else {
            setVisibleCards((prev) => {
              const newSet = new Set(prev)
              newSet.delete(index)
              return newSet
            })
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const elements = document.querySelectorAll('[data-process-card]')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <Section variant="slate" className="relative overflow-hidden py-28">
      {/* Glow radial no fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-256 w-5xl -translate-x-1/2 rounded-full bg-bn-gold-light opacity-10 blur-[250px]" />
      </div>

      <Container>
        {/* Título */}
        <div className="mb-24 text-center">
          <p className="mb-3 text-sm tracking-[0.4em] text-bn-gold-dark">
            O PASSO A PASSO
          </p>
          <h2 className="text-4xl font-semibold text-slate-200 md:text-5xl">
            COMO FUNCIONA <span className="text-bn-gold-dark">O ATENDIMENTO</span>
          </h2>
        </div>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-bn-gold-gradient opacity-40" />

          <div className="">
            {processSteps.map((processStep, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={processStep.number}
                  data-process-card
                  data-index={index}
                  className="relative flex w-full items-center justify-between mb-4 md:mb-0"
                >
                  {/* Ponto central */}
                  <div className={`hidden md:flex absolute left-1/2 z-10 h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-bn-gold-dark transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`} />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[46%] transition-all duration-1000 ease-in-out ${
                      isLeft
                        ? 'md:mr-auto md:pr-16 md:text-right text-left'
                        : 'md:ml-auto md:pl-16 text-left'
                    } ${
                      isVisible 
                        ? 'opacity-100 translate-x-0 translate-y-0' 
                        : isLeft 
                        ? 'opacity-0 md:-translate-x-20 translate-y-10'
                        : 'opacity-0 md:translate-x-20 translate-y-10'
                    }`}
                  >
                    <div className="rounded-2xl bg-bn-black p-8 shadow-2xl">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bn-gold-light/90 px-4 py-1 text-sm font-bold text-bn-black">
                        {processStep.number}
                      </div>

                      <h3 className="mb-3 text-lg font-semibold text-bn-gold-dark">
                        {processStep.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-200">
                        {processStep.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
