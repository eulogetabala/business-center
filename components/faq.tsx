"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Quels types d'espaces sont disponibles ?",
    a: "Nous proposons plusieurs types d'espaces adaptes aux besoins de chaque entreprise : Bureaux prives ideals pour les entreprises souhaitant un espace exclusif, Espaces de coworking parfaits pour les freelances et startups, Salles de reunion disponibles sur reservation pour vos rendez-vous professionnels, et Espaces evenementiels pour l'organisation de seminaires, formations ou evenements d'entreprise.",
  },
  {
    q: "Quels sont les avantages de louer un espace au Business Center ?",
    a: "Adresse prestigieuse au coeur de Brazzaville, Flexibilite des contrats de location (courte et longue duree), Acces a des services premium : Internet haut debit, securite 24/7, menage, reception, et Reseautage et opportunites grace a la communaute d'entrepreneurs presents sur place.",
  },
  {
    q: "Quels sont les horaires d'ouverture ?",
    a: "Le Business Center est ouvert du lundi au dimanche. L'acces aux bureaux prives peut etre personnalise selon les besoins des entreprises.",
  },
  {
    q: "Quels services supplementaires proposons-nous ?",
    a: "En plus des espaces de travail, nous offrons : Secretariat, conciergerie et assistance administrative, Location de materiel audiovisuel et de videoconference, Service de restauration (cafeteria), et Reductions en etant locataires sur les services de nos partenaires.",
  },
  {
    q: "Comment contacter le Business Center ?",
    a: "Vous pouvez facilement nous joindre en nous envoyant un message via le bouton Contact situe en haut de notre site, ou directement par e-mail a l'adresse suivante : desk@rem-cg.com. Notre equipe se fera un plaisir de vous repondre dans les plus brefs delais.",
  },
]

export function FAQ() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="faq" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="relative mx-auto max-w-4xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
            FAQ
          </span>
          <h2 className="mb-6 font-sans text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Des questions ? Nous avons surement la reponse
          </h2>
          <div className="mx-auto h-px w-16 bg-gold" />
        </div>

        {/* Accordion */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/50 transition-colors hover:border-gold/30"
              >
                <AccordionTrigger className="py-6 font-sans text-left text-lg font-semibold text-foreground transition-colors hover:text-gold hover:no-underline [&[data-state=open]]:text-gold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-mono text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
