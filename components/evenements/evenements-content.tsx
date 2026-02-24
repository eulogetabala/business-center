"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CalendarDays, MapPin, Instagram, ArrowRight } from "lucide-react"

const instagramPosts = [
  "/assets/23.webp",
  "/assets/24.webp",
  "/assets/25.webp",
]

export function EvenementsContent() {
  const [loaded, setLoaded] = useState(false)
  const [refInsta, isInstaVisible] = useScrollAnimation()
  useEffect(() => { setLoaded(true) }, [])

  return (
    <>
      {/* Hero + Event */}
      <section className="relative pt-32 pb-24 md:pb-32 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Left: Event details */}
            <div
              className={`transition-all duration-1000 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="mb-10 font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl leading-tight">
                Cocktail Dinatoire
              </h1>

              <div className="mb-8 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-gold/30 bg-gold/10">
                    <CalendarDays size={22} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-2xl font-bold text-gold">10 Avril</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/10">
                    <MapPin size={22} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-wider text-primary-foreground/40 uppercase">Lieu</p>
                    <p className="font-mono text-sm text-primary-foreground/80 leading-relaxed">
                      {"30E ETAGE DU CENTRE D'AFFAIRES des Tours Jumelles du Centre Ville Nord"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 h-px w-full bg-primary-foreground/10" />

              <p className="mb-6 font-mono text-base leading-relaxed text-primary-foreground/70">
                {"A l'occasion de l'ouverture prochaine du "}
                <strong className="text-primary-foreground">cabinet medical</strong>
                {" au sein du Business Center des Tours Jumelles a Brazzaville, REM organisera un evenement dedie a la decouverte de ce nouvel espace de sante."}
              </p>
              <p className="mb-10 font-mono text-base leading-relaxed text-primary-foreground/70">
                {"L'evenement se deroulera dans une ambiance conviviale et professionnelle, avec un "}
                <strong className="text-primary-foreground">cocktail dinatoire</strong>
                {", afin de marquer cette nouvelle etape dans le developpement des services offerts au sein du Business Center."}
              </p>

              <a
                href="#"
                className="group inline-flex items-center gap-3 font-mono text-sm text-gold transition-colors hover:text-gold-light uppercase tracking-wider"
              >
                Lire plus
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <div className="mt-2 h-px w-20 bg-gold" />
            </div>

            {/* Right: Event images */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative overflow-hidden aspect-[3/4] max-h-[600px]">
                  <img
                    src="/assets/15.webp"
                    alt="Cocktail dinatoire"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Overlapping image */}
                <div className="absolute -bottom-8 -right-4 w-64 h-48 overflow-hidden border-4 border-navy-dark shadow-2xl hidden md:block">
                  <img
                    src="/assets/22.webp"
                    alt="Interieur luxueux"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section ref={refInsta} className="relative py-24 md:py-32 overflow-hidden">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div
            className={`mb-12 transition-all duration-1000 ${
              isInstaVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="flex justify-center gap-6">
              {instagramPosts.map((src, i) => (
                <div
                  key={i}
                  className="group relative w-48 overflow-hidden aspect-[3/4] border border-primary-foreground/10 transition-all hover:border-gold/30"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <img
                    src={src}
                    alt={`Post Instagram ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <Instagram size={28} className="text-gold" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://www.instagram.com/businesscenter_tj/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-3 border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-4 font-mono text-sm text-primary-foreground/60 transition-all hover:border-gold/40 hover:text-gold uppercase tracking-wider ${
              isInstaVisible ? "animate-fade-up delay-300" : "opacity-0"
            }`}
          >
            <Instagram size={18} />
            Notre Instagram
          </a>
        </div>
      </section>
    </>
  )
}
