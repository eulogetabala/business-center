import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnvironnementHero } from "@/components/environnement/environnement-hero"
import { ToursJumelles } from "@/components/environnement/tours-jumelles"
import { CentreNovateur } from "@/components/environnement/centre-novateur"
import { Landmarks } from "@/components/environnement/landmarks"
import { Club } from "@/components/environnement/club"

export const metadata = {
  title: "Notre Environnement | Business Center Tours Jumelles",
  description: "Decouvrez l'environnement exceptionnel des Tours Jumelles a Brazzaville : emplacement strategique, services novateurs et cadre prestigieux.",
}

export default function NotreEnvironnementPage() {
  return (
    <main>
      <Navbar />
      <EnvironnementHero />
      <ToursJumelles />
      <CentreNovateur />
      <Landmarks />
      <Club />
      <Footer />
    </main>
  )
}
