"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

const landmarks = [
  {
    name: "Institut National De La Statistique",
    image: "/assets/19.webp",
  },
  {
    name: "Brazza Mall",
    image: "/assets/16.webp",
  },
 
  {
    name: "Bon Boeuf",
    image: "/assets/17.webp",
  },
]

export function Landmarks() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            {"En Decouvrir Plus..."}
          </h2>
          <div className="mt-4 h-px w-16 bg-gold" />
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          {landmarks.map((landmark, i) => (
            <div
              key={landmark.name}
              className="group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-4 rounded-lg">
                <Image
                  src={landmark.image}
                  alt={landmark.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-foreground transition-colors group-hover:text-gold">
                {landmark.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
