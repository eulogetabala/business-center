"use client"

import { useState, useEffect } from "react"
import { Menu, X, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos espaces", href: "/nos-espaces" },
  { label: "Notre environnement", href: "/notre-environnement" },
  { label: "Nos evenements", href: "/nos-evenements" },
  { label: "Restaurant le detour", href: "/restaurant" },
  { label: "Infos pratiques", href: "/infos-pratiques" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy-dark/20 py-2"
          : "bg-navy/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:scale-105">
            <Image
              src="/assets/1.webp"
              alt="Business Center Tours Jumelles"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-sans text-sm font-semibold tracking-wider text-primary-foreground uppercase leading-tight">
              Business Center
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] text-gold/70 uppercase">
              Tours Jumelles
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center mx-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 font-mono text-xs lg:text-[13px] transition-colors group whitespace-nowrap ${
                  isActive
                    ? "text-gold"
                    : "text-primary-foreground/70 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-300 ${
                    isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Right side: socials + contact */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="https://www.instagram.com/businesscenter_tj/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-all hover:border-gold/40 hover:text-gold"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60 transition-all hover:border-gold/40 hover:text-gold"
            aria-label="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <Link
            href="/contact"
            className="ml-2 border border-gold bg-gold/10 px-6 py-2 font-mono text-sm font-medium text-gold transition-all hover:bg-gold hover:text-navy"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-primary-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 bg-navy/98 px-6 pb-6 pt-4 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b border-primary-foreground/5 py-3 font-mono text-sm transition-colors ${
                  isActive ? "text-gold" : "text-primary-foreground/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://www.instagram.com/businesscenter_tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-primary-foreground/20 text-primary-foreground/60"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <Link
              href="/contact"
              className="flex-1 border border-gold bg-gold/10 py-3 text-center font-mono text-sm font-medium text-gold transition-all hover:bg-gold hover:text-navy"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
