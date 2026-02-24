"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  { src: "/assets/14.jpg", alt: "Tours Jumelles vue nocturne illuminée" },
  { src: "/assets/15.jpg", alt: "Tours Jumelles vue extérieure moderne" },
]

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated Slider Background */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark/90" />
          </div>
        ))}
        
        {/* Parallax overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent animate-pulse-slow" />
      </div>

      {/* Animated Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-pulse-slow" />
        <div className="absolute left-[85%] top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-pulse-slow delay-1000" />
        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent animate-pulse-slow delay-500" />
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold transition-all hover:bg-gold/20 hover:border-gold/50 hover:scale-110 group"
        aria-label="Image précédente"
      >
        <ChevronLeft size={24} className="transition-transform group-hover:-translate-x-1" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold transition-all hover:bg-gold/20 hover:border-gold/50 hover:scale-110 group"
        aria-label="Image suivante"
      >
        <ChevronRight size={24} className="transition-transform group-hover:translate-x-1" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-gold"
                : "w-2 bg-gold/30 hover:bg-gold/50"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 border border-gold/30 bg-gold/5 px-5 py-2 backdrop-blur-sm transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
            Brazzaville, Congo
          </span>
        </div>

        {/* Heading with enhanced animations */}
        <h1
          className={`mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-pretty animate-fade-in-up">Le Centre d{"'"}Affaires</span>
          <span className="gold-shimmer block animate-fade-in-up delay-300 mt-2">Tours Jumelles</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mx-auto mb-5 max-w-2xl font-mono text-base leading-relaxed text-primary-foreground/70 sm:text-lg transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Un Hub d{"'"}excellence pour accroitre et diversifier les opportunites
          de votre entreprise.
        </p>

        {/* Fiscal note */}
        <p
          className={`mx-auto mb-10 max-w-xl font-mono text-sm leading-relaxed text-gold/60 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Optez pour la domiciliation de votre activite au Business Center pour
          beneficier de la loi de finances 2024 sur l{"'"}optimisation fiscale et
          douaniere des Infrastructures Commerciales.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col items-center gap-4 sm:flex-row sm:justify-center transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/nos-espaces"
            className="group relative overflow-hidden border border-gold bg-gold px-8 py-4 font-mono text-sm font-semibold tracking-wider text-navy uppercase transition-all hover:shadow-[0_0_40px_rgba(200,164,94,0.5)] hover:scale-105 animate-float"
          >
            <span className="relative z-10">Decouvrir nos espaces</span>
            <span className="absolute inset-0 bg-gold-light translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
          <Link
            href="/contact"
            className="group border border-primary-foreground/20 px-8 py-4 font-mono text-sm font-semibold tracking-wider text-primary-foreground uppercase transition-all hover:border-gold/50 hover:text-gold hover:scale-105 hover:bg-gold/10"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#apropos"
          className="flex flex-col items-center gap-2 text-primary-foreground/40 transition-colors hover:text-gold"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            Explorer
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
