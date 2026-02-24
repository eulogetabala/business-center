import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-primary-foreground/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-gold/30 bg-gold/10">
                <svg width="18" height="24" viewBox="0 0 22 28" fill="none" className="text-gold">
                  <rect x="3" y="4" width="6" height="20" rx="1" fill="currentColor" opacity="0.9" />
                  <rect x="13" y="4" width="6" height="20" rx="1" fill="currentColor" opacity="0.9" />
                  <rect x="0" y="24" width="22" height="3" rx="1" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-primary-foreground tracking-wider uppercase">
                  Business Center
                </p>
                <p className="font-mono text-[10px] tracking-widest text-gold/60 uppercase">
                  Tours Jumelles
                </p>
              </div>
            </Link>
            <p className="mt-4 font-mono text-sm leading-relaxed text-primary-foreground/40">
              {"Le Centre d'Affaires International des Tours Jumelles - Brazzaville, Congo."}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/businesscenter_tj/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-primary-foreground/15 text-primary-foreground/40 transition-all hover:border-gold/40 hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-primary-foreground/15 text-primary-foreground/40 transition-all hover:border-gold/40 hover:text-gold"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "Nos espaces", href: "/nos-espaces" },
                { label: "Notre environnement", href: "/notre-environnement" },
                { label: "Nos evenements", href: "/nos-evenements" },
                { label: "Restaurant le detour", href: "/restaurant" },
                { label: "Infos pratiques", href: "/infos-pratiques" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-sm text-primary-foreground/40 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Nos espaces
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Bureaux Prives",
                "Salle de Reunion",
                "Open Spaces",
                "Bureau de Direction",
                "Espaces Evenementiels",
              ].map((s) => (
                <span
                  key={s}
                  className="font-mono text-sm text-primary-foreground/40"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:desk@rem-cg.com"
                className="font-mono text-sm text-primary-foreground/40 transition-colors hover:text-gold"
              >
                desk@rem-cg.com
              </a>
              <span className="font-mono text-sm text-primary-foreground/40">
                Tours Jumelles, Centre Ville Nord
              </span>
              <span className="font-mono text-sm text-primary-foreground/40">
                Brazzaville, Congo
              </span>
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit border border-gold/30 bg-gold/5 px-4 py-2 font-mono text-xs font-medium text-gold transition-all hover:bg-gold hover:text-navy uppercase tracking-wider"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="font-mono text-xs text-primary-foreground/30">
            &copy; {new Date().getFullYear()} Business Center Tours Jumelles. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-xs text-primary-foreground/30 transition-colors hover:text-gold">
              Mentions legales
            </a>
            <a href="#" className="font-mono text-xs text-primary-foreground/30 transition-colors hover:text-gold">
              Politique de confidentialite
            </a>
            <Link href="/contact" className="font-mono text-xs text-primary-foreground/30 transition-colors hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
