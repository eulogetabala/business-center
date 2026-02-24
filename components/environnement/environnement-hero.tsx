"use client"

import { useEffect, useState } from "react"

export function EnvironnementHero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/7.webp"
          alt="Tours Jumelles de Brazzaville"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/60 to-navy-dark/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-6 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
            Notre Environnement
          </span>
          <h1 className="mb-6 font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            <span className="block">Decouvrez Le</span>
            <span className="gold-shimmer block">Business Center</span>
          </h1>
          <p
            className={`mx-auto max-w-2xl font-mono text-base text-primary-foreground/70 leading-relaxed sm:text-lg transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {"Offrez a votre esprit l'espace pour stimuler votre reflexion et liberer votre creativite au service de vos projets."}
          </p>
        </div>
      </div>
    </section>
  )
}
