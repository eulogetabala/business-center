"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Shield,
  Wifi,
  Car,
  Coffee,
  Building2,
  Users,
  Headphones,
  FileText,
} from "lucide-react"
import Image from "next/image"

const infos = [
  { icon: Clock, title: "Horaires d'ouverture", desc: "Le Business Center est accessible du lundi au dimanche. L'acces aux bureaux prives peut etre personnalise selon les besoins des entreprises." },
  { icon: MapPin, title: "Localisation", desc: "Tours Jumelles, Centre Ville Nord, Brazzaville, Republique du Congo. Facilement accessible depuis tous les quartiers de la ville." },
  { icon: Shield, title: "Securite 24h/24", desc: "Un systeme de securite avance avec controle d'acces, videosurveillance et personnel de securite present en permanence." },
  { icon: Wifi, title: "Internet Haut Debit", desc: "Connexion internet fibre optique disponible dans tous les espaces du Business Center pour une productivite optimale." },
  { icon: Car, title: "Parking", desc: "Un vaste parking securise est disponible pour les locataires et visiteurs du Business Center." },
  { icon: Coffee, title: "Cafeteria", desc: "Un espace de restauration et de detente est a votre disposition pour vos pauses et dejeuners." },
  { icon: Building2, title: "Accueil & Reception", desc: "Un service d'accueil professionnel pour recevoir vos visiteurs et clients dans les meilleures conditions." },
  { icon: Users, title: "Salles de Reunion", desc: "Des salles de reunion equipees disponibles sur reservation pour vos rendez-vous professionnels." },
  { icon: Headphones, title: "Assistance Technique", desc: "Une equipe technique a votre disposition pour toute assistance informatique ou materielle." },
  { icon: FileText, title: "Secretariat", desc: "Des services de secretariat et d'assistance administrative pour faciliter votre quotidien." },
  { icon: Phone, title: "Telephone", desc: "Contactez-nous pour toute information complementaire. Notre equipe se fera un plaisir de vous repondre." },
  { icon: Mail, title: "Email", desc: "Envoyez-nous vos demandes a desk@rem-cg.com. Nous repondons sous 24 heures." },
]

export function InfosPratiquesContent() {
  const [loaded, setLoaded] = useState(false)
  const [refGrid, isGridVisible] = useScrollAnimation()
  useEffect(() => { setLoaded(true) }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/9.webp"
            alt="Tours Jumelles"
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
              Tout savoir
            </span>
            <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Infos Pratiques
            </h1>
          </div>
        </div>
      </section>

      {/* Grid of info cards */}
      <section ref={refGrid} className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`mb-16 text-center transition-all duration-1000 ${
              isGridVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Tout ce que vous devez savoir
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infos.map((info, i) => (
              <div
                key={info.title}
                className={`group border border-border bg-card p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1 ${
                  isGridVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center border border-gold/20 bg-gold/5 transition-all group-hover:bg-gold/10 group-hover:border-gold/40">
                  <info.icon size={24} className="text-gold" />
                </div>
                <h3 className="mb-3 font-sans text-lg font-semibold text-foreground">
                  {info.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
