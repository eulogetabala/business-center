"use client"

import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getAllArticles } from "@/lib/articles"

const articles = getAllArticles()

export function BlogContent() {
  const [loaded, setLoaded] = useState(false)
  const [ref, isVisible] = useScrollAnimation()
  useEffect(() => { setLoaded(true) }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/7.webp"
            alt="Blog Business Center"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/50" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
          <div
            className={`transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
              Actualités & Conseils
            </span>
            <h1 className="font-sans text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
              Notre Blog
            </h1>
            <p className="mt-4 max-w-2xl font-mono text-base text-primary-foreground/80">
              Découvrez nos articles sur le monde du travail moderne, les espaces professionnels et les tendances du Business Center.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={ref} className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`mb-16 text-center transition-all duration-1000 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Derniers Articles
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <article
                key={article.id}
                className={`group border border-border bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-gold/90 px-3 py-1 font-mono text-xs text-navy uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 font-sans text-xl font-bold text-foreground transition-colors group-hover:text-gold">
                      {article.title}
                    </h3>
                    <p className="mb-4 font-mono text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 font-mono text-sm text-gold transition-all group-hover:gap-4">
                      Lire la suite
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
