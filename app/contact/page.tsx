import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata = {
  title: "Contact | Business Center Tours Jumelles",
  description: "Contactez le Business Center des Tours Jumelles a Brazzaville. Notre equipe est a votre disposition pour repondre a toutes vos demandes.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  )
}
