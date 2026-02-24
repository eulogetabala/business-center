"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const partners = [
  { name: "Partenaire 1", logo: "/assets/part-1.webp" },
  { name: "Partenaire 2", logo: "/assets/part-2.webp" },
  { name: "Partenaire 3", logo: "/assets/part-3.webp" },
  { name: "Partenaire 4", logo: "/assets/part-4.webp" },
  { name: "Partenaire 5", logo: "/assets/part-5.webp" },
]

// Duplicate partners for seamless loop
const duplicatedPartners = [...partners, ...partners]

export function Partners() {
  const [ref, isVisible] = useScrollAnimation()
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section ref={ref} className="relative bg-background py-20 md:py-24 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/2 rounded-full blur-3xl" />
      </div>
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          className={`mb-12 text-center transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="font-sans text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl text-balance">
            {"Ils Ont Choisi De S'implanter Au Business Center"}
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        {/* Infinite Scrolling Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-8 md:gap-12 lg:gap-16 ${
              isPaused ? "animate-none" : "animate-marquee"
            }`}
            style={{
              animationDuration: "30s",
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group relative flex h-24 w-32 md:h-32 md:w-44 shrink-0 items-center justify-center bg-white p-6 rounded-lg shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-2 hover:scale-105 border border-border"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={90}
                  className="h-full w-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
