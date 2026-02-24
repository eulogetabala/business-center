"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Mail, MapPin, Clock, Phone, Send, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ContactContent() {
  const [loaded, setLoaded] = useState(false)
  const [refForm, isFormVisible] = useScrollAnimation()
  useEffect(() => { setLoaded(true) }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/11.webp"
            alt="Contact Business Center"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-navy/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
              Nous contacter
            </span>
            <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              <span className="block">Parlons De</span>
              <span className="gold-shimmer block">Votre Projet</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section ref={refForm} className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Left: Info */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 ${
                isFormVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <h2 className="mb-6 font-sans text-3xl font-bold text-foreground">
                {"Restons en contact"}
              </h2>
              <div className="mb-8 h-px w-16 bg-gold" />
              <p className="mb-10 font-mono text-base leading-relaxed text-muted-foreground">
                {"Notre equipe se fera un plaisir de vous repondre dans les plus brefs delais. N'hesitez pas a nous contacter pour toute information complementaire."}
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: Mail, label: "Email", value: "desk@rem-cg.com", href: "mailto:desk@rem-cg.com" },
                  { icon: MapPin, label: "Adresse", value: "Tours Jumelles, Centre Ville Nord, Brazzaville, Congo", href: null },
                  { icon: Clock, label: "Horaires", value: "Lundi - Dimanche", href: null },
                  { icon: Phone, label: "Telephone", value: "+242 XX XXX XXXX", href: null },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/20 bg-gold/5 transition-all group-hover:bg-gold/10">
                      <item.icon size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-wider text-muted-foreground/60 uppercase mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="font-mono text-sm text-foreground transition-colors hover:text-gold">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-mono text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
                isFormVisible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="border border-border bg-card p-8 md:p-10">
                <div className="mb-1 h-1 w-full bg-gradient-to-r from-gold via-gold-light to-gold" />
                <h3 className="mt-8 mb-8 font-sans text-2xl font-bold text-foreground">
                  Envoyez-nous un message
                </h3>

                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nom de votre entreprise"
                        className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-mono text-xs tracking-wider text-muted-foreground uppercase">
                        Sujet
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground outline-none transition-all focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                      >
                        <option value="">Selectionnez un sujet</option>
                        <option value="bureau">Location de bureau</option>
                        <option value="reunion">Salle de reunion</option>
                        <option value="evenement">Evenement</option>
                        <option value="visite">Demande de visite</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      rows={5}
                      className="w-full resize-none border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-gold px-8 py-4 font-mono text-sm font-semibold tracking-wider text-navy uppercase transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(200,164,94,0.3)]"
                  >
                    <span>Envoyer le message</span>
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <span className="font-mono text-xs text-muted-foreground/40 uppercase">ou</span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <a
                  href="mailto:desk@rem-cg.com"
                  className="mt-6 flex w-full items-center justify-center gap-3 border border-gold/30 bg-gold/5 py-4 font-mono text-sm font-medium text-gold transition-all hover:bg-gold/10 uppercase tracking-wider"
                >
                  <Mail size={16} />
                  desk@rem-cg.com
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
