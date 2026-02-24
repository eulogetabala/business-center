"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Building2, Globe, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function About() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="apropos" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="relative overflow-hidden aspect-[4/5] group">
              <Image
                src="/assets/13.webp"
                alt="Interieur moderne du Business Center"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
            </div>
            {/* Floating badge with animation */}
            <div className="absolute -bottom-6 -right-6 bg-navy border border-gold/30 p-6 shadow-2xl md:-right-8 animate-float">
              <p className="font-sans text-3xl font-bold text-gold animate-glow">25 321</p>
              <p className="font-mono text-xs tracking-wider text-primary-foreground/60 uppercase">
                m2 de bureaux
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
              A propos
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Le Centre d{"'"}Affaires International des Tours Jumelles
            </h2>
            <div className="mb-8 h-px w-16 bg-gold" />
            <p className="mb-8 font-mono text-base leading-relaxed text-muted-foreground">
              Le Centre d{"'"}Affaires International des Tours Jumelles s{"'"}impose
              comme un pole strategique incontournable a Brazzaville. Un espace
              concu pour reussir avec des bureaux modernes, salles de reunion
              equipees, services sur mesure... Tout est pense pour accompagner
              votre reussite.
            </p>

            <Link
              href="/notre-environnement"
              className="group mb-8 inline-flex items-center gap-3 border border-gold bg-gold px-8 py-4 font-mono text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-[0_0_40px_rgba(200,164,94,0.5)] hover:scale-105 uppercase tracking-wider w-fit"
            >
              En savoir plus
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>

            {/* Features */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Building2,
                  title: "Adresse Prestigieuse",
                  desc: "Au coeur de Brazzaville, un emplacement strategique",
                },
                {
                  icon: Globe,
                  title: "Rayonnement International",
                  desc: "Entreprises locales et internationales reunies",
                },
                {
                  icon: Shield,
                  title: "Services Premium",
                  desc: "Securite 24/7, internet haut debit, conciergerie",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/20 bg-gold/5 transition-all group-hover:bg-gold/10 group-hover:border-gold/40">
                    <item.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
