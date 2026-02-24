"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function EspacesHero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <section className="relative flex h-[70vh] min-h-[500px] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/3.webp"
          alt="Salle de reunion du Business Center"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute left-[90%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
            Nos Espaces
          </span>
          <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Des Espaces</span>
            <span className="gold-shimmer block">{"D'Exception"}</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
