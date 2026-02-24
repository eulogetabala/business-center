import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RestaurantContent } from "@/components/restaurant/restaurant-content"

export const metadata = {
  title: "Restaurant Le Detour | Business Center Tours Jumelles",
  description: "Decouvrez le Restaurant Le Detour au sein des Tours Jumelles, une experience culinaire d'exception au coeur de Brazzaville.",
}

export default function RestaurantPage() {
  return (
    <main>
      <Navbar />
      <RestaurantContent />
      <Footer />
    </main>
  )
}
