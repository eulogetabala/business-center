import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EvenementsContent } from "@/components/evenements/evenements-content"

export const metadata = {
  title: "Nos Evenements | Business Center Tours Jumelles",
  description: "Decouvrez les evenements exclusifs du Business Center des Tours Jumelles a Brazzaville : cocktails, networking, conferences et plus encore.",
}

export default function NosEvenementsPage() {
  return (
    <main className="bg-navy-dark">
      <Navbar />
      <EvenementsContent />
      <Footer />
    </main>
  )
}
