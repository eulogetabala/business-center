"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Article {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
  content: string
}

export function ArticleContent({ article }: { article: Article }) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[60vh] min-h-[500px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/60" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 font-mono text-sm text-gold transition-all hover:gap-4"
            >
              <ArrowLeft size={16} />
              Retour au blog
            </Link>
            <div className="mb-4 inline-block bg-gold/90 px-3 py-1 font-mono text-xs text-navy uppercase tracking-wider">
              {article.category}
            </div>
            <h1 className="mb-6 font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div
            className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:text-foreground prose-p:font-mono prose-p:text-muted-foreground prose-p:leading-relaxed prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 border border-gold/30 bg-gold/5 px-8 py-4 font-mono text-sm text-gold transition-all hover:bg-gold hover:text-navy hover:scale-105 uppercase tracking-wider"
            >
              <ArrowLeft size={16} />
              Retour aux articles
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
