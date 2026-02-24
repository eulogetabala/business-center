"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const images = [
  {
    src: "/assets/7.webp",
    alt: "Bureau moderne avec vue panoramique",
    label: "Bureaux executifs",
  },
  {
    src: "/assets/8.webp",
    alt: "Espace de coworking collaboratif",
    label: "Espace coworking",
  },
  {
    src: "/assets/9.webp",
    alt: "Salle de conference equipee",
    label: "Salle de conference",
  },
]

export function OfficesGallery() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div>
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
              Nos bureaux
            </span>
            <h2 className="font-sans text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Decouvrir nos locaux
            </h2>
          </div>
          <a
            href="#contact"
            className="group flex items-center gap-2 border border-gold/30 bg-gold/5 px-6 py-3 font-mono text-sm text-gold transition-all hover:bg-gold hover:text-navy hover:scale-105 hover:shadow-lg hover:shadow-gold/30 uppercase tracking-wider"
          >
            Visiter
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={img.label}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${
                i === 0 ? "md:row-span-2 md:aspect-auto aspect-[4/3]" : "aspect-[4/3]"
              } ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                  i === 0 ? "md:h-full" : ""
                }`}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-all duration-500 group-hover:translate-y-0">
                <p className="font-sans text-xl font-semibold text-primary-foreground mb-2">
                  {img.label}
                </p>
                <div className="h-0.5 w-12 bg-gold transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
