'use client'

import { processSteps } from "@/data/landing"
import { Container } from "@/components/ui/Container"
import { useEffect, useRef, useState } from "react"

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
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('[data-process-card]')
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-bn-gold-light py-28">
      {/* Glow radial no fundo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#1e3a5f] opacity-20 blur-3xl" />
      </div>

      <Container>
        {/* Título */}
        <div className="mb-24 text-center">
          <p className="mb-3 text-sm tracking-[0.4em] text-amber-400">
            O PASSO A PASSO
          </p>
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            COMO FUNCIONA <span className="text-amber-400">O ATENDIMENTO</span>
          </h2>
        </div>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-amber-400/70" />

          <div className="space-y-20">
            {processSteps.map((processStep, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleCards.has(index)

              return (
                <div
                  key={processStep.number}
                  data-process-card
                  data-index={index}
                  className="relative flex w-full items-center justify-between"
                >
                  {/* Ponto central */}
                  <div className={`absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-amber-400 bg-[#0b2232] transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`} />

                  {/* Card */}
                  <div
                    className={`w-full md:w-[46%] transition-all duration-700 ease-out ${
                      isLeft
                        ? 'md:mr-auto md:pr-16 text-right'
                        : 'md:ml-auto md:pl-16 text-left'
                    } ${
                      isVisible 
                        ? 'opacity-100 translate-x-0 translate-y-0' 
                        : isLeft 
                        ? 'opacity-0 -translate-x-20 translate-y-10'
                        : 'opacity-0 translate-x-20 translate-y-10'
                    }`}
                  >
                    <div className="rounded-2xl bg-white p-8 shadow-2xl">
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-700">
                        {processStep.number}
                      </div>

                      <h3 className="mb-3 text-lg font-semibold text-slate-800">
                        {processStep.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-slate-600">
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
    </section>
  )
}
