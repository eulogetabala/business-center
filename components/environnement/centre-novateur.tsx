"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export function CentreNovateur() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className="relative bg-muted py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <h2 className="mb-6 font-sans text-4xl font-bold text-foreground sm:text-5xl leading-tight italic">
              Un Centre Novateur
            </h2>
            <div className="mb-8 h-px w-16 bg-gold" />
            <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground">
              {"C'est un centre dynamique et novateur, concu pour repondre aux exigences des professionnels d'aujourd'hui. Il offre un environnement de travail de qualite superieure, avec des bureaux haut de gamme, confortables et ergonomiques, parfaitement adaptes aux besoins des entreprises locales comme internationales."}
            </p>
            <p className="mb-6 font-mono text-sm leading-relaxed text-muted-foreground/80">
              {"Dote de services complets tels que :"}
            </p>
            <ul className="mb-6 flex flex-col gap-3">
              {[
                "Le secretariat",
                "La reception",
                "Une connexion internet haut debit",
                "Une securite assuree 24h/24",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground/80">
              {"Le centre favorise egalement les echanges grace a des opportunites uniques de networking. Le tout s'inscrit dans une atmosphere prestigieuse et stimulante, propice a la productivite, a la croissance et a la collaboration."}
            </p>
          </div>

          {/* Right images */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden aspect-[4/5] rounded-lg group">
              <Image
                src="/assets/14.jpg"
                alt="Interieur bureau moderne"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative overflow-hidden aspect-[4/5] rounded-lg group mt-8">
              <Image
                src="/assets/13.webp"
                alt="Salle de reunion"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
