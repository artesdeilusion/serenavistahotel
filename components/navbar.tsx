"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
   { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
 ]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group">
          <h1 className="font-serif text-xl font-light tracking-[0.3em] text-primary-foreground md:text-2xl">
            SERENE VISTA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs font-light tracking-[0.15em] uppercase text-primary-foreground/80 transition-colors duration-300 hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/booking"
              className="border border-primary-foreground/40 px-6 py-2.5 text-xs font-light tracking-[0.15em] uppercase text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Reserve
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="text-primary-foreground lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1   bg-primary/95 px-6 pb-6 pt-2 backdrop-blur-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-sm font-light tracking-[0.1em] uppercase text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/booking"
              className="inline-block border border-primary-foreground/40 px-6 py-2.5 text-sm font-light tracking-[0.1em] uppercase text-primary-foreground transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
