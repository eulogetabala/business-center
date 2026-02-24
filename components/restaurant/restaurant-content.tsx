"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Plus, Check } from "lucide-react"

export function RestaurantContent() {
  const [loaded, setLoaded] = useState(false)
  const [refHero, isHeroVisible] = useScrollAnimation()
  const [refOffers, isOffersVisible] = useScrollAnimation()
  const [refSocietaires, isSocietairesVisible] = useScrollAnimation()
  const [refConcept, isConceptVisible] = useScrollAnimation()
  const [refCadre, isCadreVisible] = useScrollAnimation()
  const [refResto, isRestoVisible] = useScrollAnimation()
  const [refAbonnements, isAbonnementsVisible] = useScrollAnimation()
  
  useEffect(() => { setLoaded(true) }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[600px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Restaurant Le Detour"
            className="h-full w-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/50" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center">
          <div
            ref={refHero}
            className={`transition-all duration-1000 ${
              loaded && isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Logo Détour */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img
                  src="/assets/5.webp"
                  alt="Logo Le Détour"
                  className="h-32 w-32 object-contain"
                  loading="eager"
                />
              </div>
            </div>
            <h1 className="font-sans text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl mb-4">
              Détour Restaurant D'entreprise
            </h1>
            <div className="inline-block border border-gold/50 bg-gold/10 px-6 py-2 backdrop-blur-sm">
              <span className="font-mono text-sm tracking-wider text-gold uppercase">By REM</span>
            </div>
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--background)"/>
          </svg>
        </div>
      </section>

      {/* Offres/Menu Categories */}
      <section ref={refOffers} className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3 items-center">
            {/* Top Row */}
            <div
              className={`transition-all duration-1000 ${
                isOffersVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <div className="group relative aspect-square overflow-hidden rounded-full border-4 border-gold/30 transition-all hover:border-gold hover:scale-105 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&q=80"
                  alt="Petit Déjeuner"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-sans text-xl font-bold text-white">Petit Déjeuner</h3>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-150 ${
                isOffersVisible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <div className="group relative aspect-square overflow-hidden rounded-full border-4 border-gold/30 transition-all hover:border-gold hover:scale-105 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80"
                  alt="Déjeuner"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-sans text-xl font-bold text-white">Déjeuner</h3>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isOffersVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="bg-navy/5 p-8 border-l-4 border-gold">
                <p className="font-sans text-2xl font-bold text-foreground leading-tight">
                  DES PRODUITS SOIGNEUSEMENT SÉLECTIONNÉS
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div
              className={`transition-all duration-1000 delay-450 ${
                isOffersVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <p className="font-mono text-base text-foreground">Une Signature Gustative Unique</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-gold shrink-0 mt-1" />
                  <p className="font-mono text-base text-foreground">Une Création Raffinée</p>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 ${
                isOffersVisible ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden border-4 border-gold/30 transition-all hover:border-gold hover:scale-105 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80"
                  alt="Dîner"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-sans text-xl font-bold text-white">Dîner</h3>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-750 ${
                isOffersVisible ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden border-4 border-gold/30 transition-all hover:border-gold hover:scale-105 hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80"
                  alt="Boissons"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-sans text-xl font-bold text-white">Boissons</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Restaurant D'entreprise Des Sociétaires */}
      <section ref={refSocietaires} className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div
              className={`transition-all duration-1000 ${
                isSocietairesVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <h2 className="font-sans text-4xl font-bold text-gold sm:text-5xl lg:text-6xl mb-6 leading-tight">
                Le Restaurant D'entreprise Des Sociétaires
              </h2>
              <div className="mb-6 h-px w-16 bg-gold" />
              <p className="font-mono text-base leading-relaxed text-white/90 mb-4">
                Le Détour, restaurant officiel du Business Center propose une restauration d'entreprise conçue pour les sociétés et leurs collaborateurs, du matin au soir.
              </p>
              <p className="font-mono text-base leading-relaxed text-white/90">
                Une restauration en convivialité, responsable, au pied de la Tour.
              </p>
            </div>

            <div
              className={`grid gap-4 transition-all duration-1000 delay-300 ${
                isSocietairesVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 transition-all hover:border-gold/50 hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Intérieur restaurant"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 transition-all hover:border-gold/50 hover:scale-[1.02]">
                <img
                  src="/assets/7.webp"
                  alt="Tours Jumelles"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept & Positionnement */}
      <section ref={refConcept} className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`mb-12 transition-all duration-1000 ${
              isConceptVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h2 className="font-sans text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
              Concept & Positionnement
            </h2>
            <div className="mb-8 h-px w-16 bg-gold" />
            <p className="font-mono text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Le Détour est un restaurant d'entreprise situé au sein du Business Center, offrant une solution simple et raffinée pour les collaborateurs sans quitter les lieux. Une expérience culinaire unique alliant qualité, convivialité et praticité.
            </p>
          </div>

          <div
            className={`grid gap-4 md:grid-cols-2 transition-all duration-1000 delay-300 ${
              isConceptVisible ? "animate-scale-in" : "opacity-0"
            }`}
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 transition-all hover:border-gold/50 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Ambiance restaurant"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                crossOrigin="anonymous"
              />
            </div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 transition-all hover:border-gold/50 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Salle restaurant"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le Cadre Du Détour */}
      <section ref={refCadre} className="relative bg-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div
              className={`transition-all duration-1000 ${
                isCadreVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <h2 className="font-sans text-4xl font-bold text-gold sm:text-5xl lg:text-6xl">
                Le Cadre Du Détour.
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isCadreVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-gold/20 transition-all hover:border-gold/50 hover:scale-[1.02]">
                <img
                  src="/assets/4.webp"
                  alt="Cadre du restaurant"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Offres De Restauration */}
      <section ref={refResto} className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div
              className={`transition-all duration-1000 ${
                isRestoVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <h2 className="font-sans text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
                Nos Offres De Restauration
              </h2>
              <div className="mb-8 h-px w-16 bg-gold" />
              
              {/* Image */}
              <div className="mt-12 flex justify-center lg:justify-start">
                <div className="relative rounded-lg border-2 border-gold/30 shadow-xl overflow-hidden">
                  <img
                    src="/assets/2.webp"
                    alt="Menu ou offre"
                    className="w-64 h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isRestoVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              {[
                "Petit-Déjeuner",
                "Déjeuner",
                "Vente À La Carte & Formules",
                "Livraison Interne"
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-b border-gold/20 pb-4 transition-all hover:border-gold/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-mono text-lg text-foreground group-hover:text-gold transition-colors">
                    {item}
                  </span>
                  <Plus className="h-6 w-6 text-gold/50 group-hover:text-gold group-hover:rotate-90 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Abonnements & Offres */}
      <section ref={refAbonnements} className="relative bg-navy py-24 md:py-32 overflow-hidden">
        {/* Background image with blur */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
            alt="Buffet"
            className="h-full w-full object-cover opacity-20"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div
            className={`mb-12 text-center transition-all duration-1000 ${
              isAbonnementsVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h2 className="font-sans text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
              Abonnements & Offres
            </h2>
            <p className="font-mono text-sm text-white/80 max-w-2xl mx-auto">
              Des abonnements ont été conçus afin d'offrir une solution de restauration pratique et économique :
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <div
              className={`bg-white/95 backdrop-blur-sm rounded-lg p-8 border-2 border-gold/30 shadow-xl transition-all duration-1000 hover:border-gold hover:scale-105 hover:shadow-2xl ${
                isAbonnementsVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <h3 className="font-sans text-2xl font-bold text-navy mb-4">
                Abonnement Entreprise (pour les salariés) :
              </h3>
              <div className="space-y-3">
                <p className="font-mono text-lg font-semibold text-gold">
                  100 000 FCFA / personne / mois
                </p>
                <p className="font-mono text-sm text-muted-foreground">
                  incluant 15 % de réduction sur les prix à la carte.
                </p>
              </div>
            </div>

            <div
              className={`bg-white/95 backdrop-blur-sm rounded-lg p-8 border-2 border-gold/30 shadow-xl transition-all duration-1000 hover:border-gold hover:scale-105 hover:shadow-2xl ${
                isAbonnementsVisible ? "animate-slide-right" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="font-sans text-2xl font-bold text-navy mb-4">
                Abonnement Individuel :
              </h3>
              <div className="space-y-3">
                <p className="font-mono text-lg font-semibold text-gold">
                  120 000 FCFA / personne / mois
                </p>
                <p className="font-mono text-sm text-muted-foreground">
                  incluant 15 % de réduction sur les prix à la carte.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mt-12 text-right max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
              isAbonnementsVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <p className="font-mono text-xs text-white/70 italic">
              NB: Les abonnements entreprises sont négociés et centralisés par la Direction du Business Center, garantissant une gestion simplifiée pour les sociétés résidentes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
