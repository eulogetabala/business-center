import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArticleContent } from "@/components/blog/article-content"
import { notFound } from "next/navigation"
import { getAllArticles, getArticleBySlug } from "@/lib/articles"

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      <ArticleContent article={article} />
      <Footer />
    </main>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: "Article non trouvé",
    }
  }

  return {
    title: `${article.title} | Blog Business Center`,
    description: article.excerpt,
  }
}
