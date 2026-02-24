"use client"

const items = [
  "Finance",
  "Conseil",
  "Energie",
  "Technologies",
  "Services",
  "Industrie",
  "Commerce",
  "Immobilier",
  "Assurance",
  "Logistique",
]

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-gold py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 font-mono text-sm font-medium tracking-wider text-navy uppercase">
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-navy/30" />
          </span>
        ))}
      </div>
    </div>
  )
}
