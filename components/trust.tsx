"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote } from "lucide-react"

export function Trust() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="confiance" className="relative bg-gradient-to-b from-background via-background to-muted/10 py-24 md:py-32 overflow-hidden">
      {/* Soft organic shapes background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(200,164,94,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,41,59,0.05)_0%,transparent_50%)]" />
      </div>
      {/* Subtle diagonal lines */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          currentColor 2px,
          currentColor 4px
        )`
      }} />
      {/* Soft animated blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/3 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-navy/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
            Confiance
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ils nous font confiance
          </h2>
          <div className="h-px w-16 bg-gold" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground">
              De nombreuses entreprises locales et internationales ont choisi de
              s{"'"}installer au Business Center des Tours Jumelles pour beneficier
              d{"'"}un environnement de travail moderne, central et prestigieux.
            </p>
            <p className="mb-6 font-mono text-base leading-relaxed text-muted-foreground">
              Ces organisations, issues de secteurs varies - finance, conseil,
              energie, nouvelles technologies, services - contribuent a la dynamique
              d{"'"}affaires qui anime quotidiennement nos espaces.
            </p>
            <p className="font-mono text-base leading-relaxed text-muted-foreground">
              Rejoindre le Business Center, c{"'"}est integrer un ecosysteme professionnel
              ou se cotoient des acteurs influents et innovants, favorisant ainsi
              les opportunites de synergies et de partenariats.
            </p>
          </div>

          {/* Testimonial Card */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <div className="relative border border-border bg-card p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Gold top accent with animation */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold animate-shimmer" />

              <Quote size={36} className="mb-6 text-gold/30" />
              <blockquote className="mb-8 font-sans text-lg leading-relaxed text-foreground italic">
                {"\""}Depuis l{"'"}arrivee d{"'"}un building manager Hines a residence, la tour
                est parfaitement geree et la responsivite est forte. Les nouveaux
                espaces de services sont superbes et nous permettent d{"'"}attirer et
                de retenir les meilleurs talents. Sans oublier les services
                dispenses par la conciergerie qui sont extraordinaires.{"\""}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-gold/10 border border-gold/20">
                  <span className="font-sans text-lg font-bold text-gold">NE</span>
                </div>
                <div>
                  <p className="font-sans text-base font-semibold text-foreground">
                    Nadia El Ayoubi
                  </p>
                  <p className="font-mono text-sm text-muted-foreground">
                    CEO chez Total Afrique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
