import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogContent } from "@/components/blog/blog-content"

export const metadata = {
  title: "Blog | Business Center Tours Jumelles",
  description: "Découvrez nos articles sur le monde du travail moderne, les espaces professionnels et les tendances du Business Center.",
}

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <BlogContent />
      <Footer />
    </main>
  )
}
