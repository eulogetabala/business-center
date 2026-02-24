"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { useState, useEffect } from "react"

export function ToursJumelles() {
  const [ref, isVisible] = useScrollAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const images = [
    { src: "/assets/14.jpg", alt: "Les Tours Jumelles de Brazzaville - Nuit" },
    { src: "/assets/15.jpg", alt: "Les Tours Jumelles de Brazzaville - Jour" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-background to-muted/20 py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Title */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="font-sans text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl leading-tight italic gold-shimmer">
            Les Tours Jumelles
          </h2>
          <div className="mt-6 h-px w-20 bg-gold animate-glow" />
        </div>

        {/* Image + Quote */}
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          <div
            className={`lg:col-span-3 overflow-hidden transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="relative aspect-[16/9] overflow-hidden group rounded-lg shadow-2xl">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    quality={90}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-navy/20 to-transparent" />
                </div>
              ))}
              <div className="absolute inset-0 border-2 border-gold/20 group-hover:border-gold/40 transition-colors duration-500" />
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-gold" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="border-l-2 border-gold pl-8">
              <p className="font-mono text-base leading-relaxed text-muted-foreground">
                {"Installe dans l'un des complexes les plus emblematiques de la ville, il offre bien plus qu'une simple adresse : un ancrage au coeur de la vie economique congolaise."}
              </p>
              <p className="mt-4 font-mono text-base leading-relaxed text-muted-foreground">
                {"Grace a sa localisation privilegiee et son architecture moderne, il attire entreprises, professionnels et investisseurs a la recherche d'un lieu alliant accessibilite, representativite et fonctionnalite."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
