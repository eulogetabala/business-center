import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Highlight } from "@/components/highlight"
import { Stats } from "@/components/stats"
import { Partners } from "@/components/partners"
import { Trust } from "@/components/trust"
import { OfficesGallery } from "@/components/offices-gallery"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Highlight />
      <Stats />
      <Partners />
      <Trust />
      <OfficesGallery />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
