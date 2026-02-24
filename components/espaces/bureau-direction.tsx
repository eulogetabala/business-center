"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function BureauDirection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left: image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/assets/13.webp"
                alt="Bureau de direction"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/20 -z-10 hidden md:block" />
          </div>

          {/* Right text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
              Espace Executif
            </span>
            <h2 className="mb-6 font-sans text-4xl font-bold text-foreground sm:text-5xl leading-tight italic">
              Notre Bureau De Direction
            </h2>
            <div className="mb-8 h-px w-16 bg-gold" />
            <p className="mb-8 font-mono text-base leading-relaxed text-muted-foreground">
              {"Un cadre de travail dynamique, flexible et moderne, ideal pour les professionnels en quete d'efficacite et de synergie d'equipe. Implantez-vous dans un espace qui reflete votre position et vos ambitions."}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 font-mono text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(200,164,94,0.3)] uppercase tracking-wider"
            >
              Decouvrir
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
