"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Building2, Users, Wifi, Shield, Briefcase, Sparkles } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "Bureaux Modernes",
    description: "Espaces de travail design et fonctionnels",
  },
  {
    icon: Users,
    title: "Salles de Réunion",
    description: "Équipées pour vos rendez-vous professionnels",
  },
  {
    icon: Wifi,
    title: "Internet Haut Débit",
    description: "Connexion fibre optique dans tous les espaces",
  },
  {
    icon: Shield,
    title: "Sécurité 24/7",
    description: "Surveillance et contrôle d'accès permanent",
  },
  {
    icon: Briefcase,
    title: "Services Sur Mesure",
    description: "Accompagnement personnalisé pour votre réussite",
  },
]

export function Highlight() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/7.webp"
          alt="Espace moderne du Business Center"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Title and Description */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="text-gold animate-float" size={24} />
              <span className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
                Excellence
              </span>
            </div>
            <h2 className="mb-6 font-sans text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight">
              <span className="block">Un Espace</span>
              <span className="gold-shimmer block">Conçu Pour Réussir</span>
            </h2>
            <div className="h-px w-20 bg-gold mb-8" />
            <p className="mb-8 font-mono text-base leading-relaxed text-white/90 sm:text-lg">
              Bureaux Modernes, Salles de Réunion Équipées, Services Sur Mesure...
              Tout Est Pensé Pour Accompagner Votre Réussite.
            </p>
          </div>

          {/* Right: Features Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative border border-gold/20 bg-navy/80 backdrop-blur-sm p-6 transition-all duration-500 hover:border-gold/50 hover:bg-navy/90 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-gold/30 bg-gold/10 transition-all group-hover:bg-gold/20 group-hover:scale-110">
                  <feature.icon size={24} className="text-gold" />
                </div>
                <h3 className="mb-2 font-sans text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-white/70">
                  {feature.description}
                </p>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-gold/20 group-hover:border-gold/50 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />
    </section>
  )
}
