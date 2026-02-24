import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { InfosPratiquesContent } from "@/components/infos/infos-pratiques-content"

export const metadata = {
  title: "Infos Pratiques | Business Center Tours Jumelles",
  description: "Retrouvez toutes les informations pratiques du Business Center des Tours Jumelles : horaires, acces, services et contacts.",
}

export default function InfosPratiquesPage() {
  return (
    <main>
      <Navbar />
      <InfosPratiquesContent />
      <Footer />
    </main>
  )
}
