"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Droplets, MonitorPlay, Wifi, Sun } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  { src: "/assets/8.webp", alt: "Salle de reunion vue principale" },
  { src: "/assets/11.webp", alt: "Salle de reunion vue 2" },
]

const advantages = [
  { icon: Droplets, label: "Bouteilles d'eau" },
  { icon: MonitorPlay, label: "Projecteur a disposition" },
  { icon: Wifi, label: "Wifi integre" },
  { icon: Sun, label: "Espace lumineux" },
]

export function SalleReunion() {
  const [ref, isVisible] = useScrollAnimation()
  const [activeImg, setActiveImg] = useState(0)

  return (
    <section ref={ref} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Left text */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <h2 className="mb-8 font-sans text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Salle De Reunion
            </h2>
            <div className="mb-8 h-px w-16 bg-gold" />
            <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground">
              {"Situee au coeur du Business Center des Tours Jumelles, notre salle de reunion allie confort, modernite et fonctionnalite. Concue pour accueillir jusqu'a 30 personnes, elle constitue un cadre ideal pour vos conseils d'administration, entretiens, formations ou reunions strategiques."}
            </p>
            <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground">
              {"Spacieuse, lumineuse et insonorisee, elle favorise la concentration et la qualite des echanges. Grace a son amenagement ergonomique et a ses equipements technologiques :"}
            </p>
            <ul className="mb-6 flex flex-col gap-2">
              {["Projecteur haute definition", "Connexion Wi-Fi haut debit", "Tableau de presentation"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground">
              {"Vous disposez de tout le necessaire pour animer vos seances de travail dans les meilleures conditions."}
            </p>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground/80">
              {"Nous mettons egalement a votre disposition des services complementaires tels que l'accueil des participants, la possibilite de pauses cafe ou de collations, ainsi qu'une assistance technique sur place. Plus qu'un simple espace de travail, notre salle de reunion valorise l'image de votre entreprise et garantit un environnement propice a la reussite de vos projets."}
            </p>
          </div>

          {/* Right gallery */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            {/* Main image */}
            <div className="relative overflow-hidden aspect-[4/3] mb-4">
              <Image
                src={galleryImages[activeImg].src}
                alt={galleryImages[activeImg].alt}
                fill
                className="object-cover transition-all duration-700"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-20 w-24 overflow-hidden border-2 transition-all duration-300 ${
                    activeImg === i 
                      ? "border-gold shadow-lg shadow-gold/30 scale-105" 
                      : "border-border/30 opacity-60 hover:opacity-100 hover:border-gold/50 hover:scale-102"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-300"
                    quality={75}
                  />
                  {activeImg === i && (
                    <div className="absolute inset-0 bg-gold/10" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages bar */}
        <div
          className={`mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4 transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="col-span-full mb-4">
            <h3 className="text-center font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
              Les avantages de notre salle
            </h3>
          </div>
          {advantages.map((adv) => (
            <div
              key={adv.label}
              className="group flex items-center gap-4 border border-border bg-card p-5 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/20 bg-gold/5 transition-all group-hover:bg-gold/10">
                <adv.icon size={22} className="text-gold" />
              </div>
              <p className="font-mono text-sm font-medium text-foreground">{adv.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
