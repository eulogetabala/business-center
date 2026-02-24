"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useCounter } from "@/hooks/use-counter"

const statsRow1 = [
  { value: 25321, suffix: "", label: "m\u00B2 de bureaux" },
  { value: 96, suffix: "", label: "Bureaux" },
  { value: 23, suffix: "", label: "Etages" },
]

const statsRow2 = [
  { value: 500, prefix: "+", suffix: "", label: "Entreprises installees" },
  { value: 24, suffix: "H 7/7", label: "Acces permanent" },
  { value: 2800, prefix: "+", suffix: "", label: "Postes permanents" },
  { value: 33, suffix: "%", label: "Taux d'occupation" },
]

export function Stats() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="chiffres" className="relative overflow-hidden py-24 md:py-32 bg-muted">
      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        {/* Title */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <span className="mb-4 inline-block font-mono text-xs tracking-[0.25em] text-gold uppercase">
            Les chiffres cles
          </span>
          <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Le Business Center en chiffres
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
        </div>

        {/* Row 1 - Big numbers */}
        <div className="mx-auto mb-6 grid max-w-4xl grid-cols-3 gap-4">
          {statsRow1.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} variant="large" />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {statsRow2.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i + 3} isVisible={isVisible} variant="small" />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  index,
  isVisible,
  variant,
}: {
  stat: { value: number; suffix: string; prefix?: string; label: string }
  index: number
  isVisible: boolean
  variant: "large" | "small"
}) {
  const count = useCounter(stat.value, 2500, isVisible)

  return (
    <div
      className={`group relative border bg-background text-center transition-all duration-700 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-2 ${
        variant === "large" ? "border-gold/20 p-8 md:p-10" : "border-border p-6 md:p-8"
      } ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <p className={`mb-2 font-sans font-bold text-navy transition-all duration-300 group-hover:scale-110 ${
        variant === "large" ? "text-3xl sm:text-4xl md:text-5xl" : "text-2xl sm:text-3xl"
      }`}>
        {stat.prefix || ""}{count.toLocaleString()}{stat.suffix}
      </p>
      <div className="mx-auto my-3 h-px w-8 bg-gold/30 transition-all duration-500 group-hover:w-16 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(200,164,94,0.5)]" />
      <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase sm:text-sm transition-colors duration-300 group-hover:text-foreground">
        {stat.label}
      </p>
    </div>
  )
}
