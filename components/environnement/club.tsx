"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Club() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className="relative bg-muted py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Title */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="font-sans text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl italic">
            <span className="gold-shimmer">Rejoignez Le Club</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div
            className={`overflow-hidden transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/8.webp"
                alt="Business networking"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                quality={85}
              />
            </div>
          </div>

          {/* Content card */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="border border-border bg-card p-8 md:p-10">
              <div className="mb-1 h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold" />
              <h3 className="mt-8 mb-4 font-sans text-2xl font-bold text-foreground sm:text-3xl">
                {"Etre Societaire..."}
              </h3>
              <div className="mb-6 h-px w-12 bg-gold" />
              <p className="mb-4 font-mono text-base leading-relaxed text-muted-foreground">
                {"Etre societaire, c'est aussi profiter de 10 % sur toutes les commodites a la suite de louer."}
              </p>
              <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground font-semibold">
                {"Rejoignez-nous des a present !"}
              </p>
              <p className="mb-8 font-mono text-sm leading-relaxed text-muted-foreground/70">
                {"Offre valable pour les collaborateurs et clients des entreprises domiciliees au Business Center."}
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-mono text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(200,164,94,0.3)] uppercase tracking-wider"
              >
                Nous rejoindre
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
