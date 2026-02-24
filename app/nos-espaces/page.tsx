import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EspacesHero } from "@/components/espaces/espaces-hero"
import { SalleReunion } from "@/components/espaces/salle-reunion"
import { OpenSpaces } from "@/components/espaces/open-spaces"
import { BureauDirection } from "@/components/espaces/bureau-direction"

export const metadata = {
  title: "Nos Espaces | Business Center Tours Jumelles",
  description: "Decouvrez nos espaces de travail premium : salles de reunion, open spaces et bureaux de direction au coeur de Brazzaville.",
}

export default function NosEspacesPage() {
  return (
    <main>
      <Navbar />
      <EspacesHero />
      <SalleReunion />
      <OpenSpaces />
      <BureauDirection />
      <Footer />
    </main>
  )
}
