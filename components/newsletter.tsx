"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Send } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [ref, isVisible] = useScrollAnimation()
  const [email, setEmail] = useState("")

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-navy via-navy-dark to-navy py-24 md:py-32 overflow-hidden">
      {/* Animated Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full animate-pulse-slow"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(200,164,94,0.4) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="mb-4 font-sans text-3xl font-bold text-primary-foreground sm:text-4xl text-balance gold-shimmer">
            Newsletter
          </h2>
          <p className="mb-10 font-mono text-sm text-primary-foreground/70 leading-relaxed">
            {"Abonnez-vous a notre newsletter pour suivre l'actualite du business center."}
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Entrez votre e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm px-5 py-4 font-mono text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none transition-all focus:border-gold/50 focus:ring-2 focus:ring-gold/30 focus:bg-primary-foreground/15"
            />
            <button className="group flex items-center justify-center gap-2 bg-gold px-8 py-4 font-mono text-sm font-semibold tracking-wider text-navy uppercase transition-all hover:bg-gold-light hover:shadow-[0_0_40px_rgba(200,164,94,0.5)] hover:scale-105">
              <span>{"S'inscrire"}</span>
              <Send size={16} className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
