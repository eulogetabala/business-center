"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function OpenSpaces() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
              Espaces partages
            </span>
            <h2 className="mb-6 font-sans text-4xl font-bold text-primary-foreground sm:text-5xl leading-tight italic">
              Nos Open Spaces
            </h2>
            <div className="mb-8 h-px w-16 bg-gold" />
            <p className="mb-8 font-mono text-base leading-relaxed text-primary-foreground/70">
              {"Un cadre de travail dynamique, flexible et moderne, ideal pour les professionnels en quete d'efficacite et de synergie d'equipe."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-gold bg-gold/10 px-8 py-4 font-mono text-sm font-medium text-gold transition-all hover:bg-gold hover:text-navy uppercase tracking-wider"
            >
              Decouvrir
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: stacked images */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src="/assets/10.webp"
                  alt="Open space moderne"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={85}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 overflow-hidden border-4 border-navy shadow-2xl hidden md:block">
                <Image
                  src="/assets/11.webp"
                  alt="Detail open space"
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
