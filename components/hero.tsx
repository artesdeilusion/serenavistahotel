import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Serene Vista Hotel exterior at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <span className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-primary-foreground/70 md:text-sm">
          Welcome to
        </span>
        <h2 className="mb-6 font-serif text-5xl font-light leading-tight tracking-wide text-primary-foreground md:text-7xl lg:text-8xl">
          <span className="text-balance">Serene Vista Hotel</span>
        </h2>
        <p className="mb-10 text-sm font-light tracking-[0.25em] uppercase text-primary-foreground/80 md:text-base">
          Where Luxury Meets Tranquility
        </p>
        <Link
          href="/booking"
          className="border border-primary-foreground/40 bg-transparent px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-primary-foreground hover:text-primary"
        >
          Book Your Stay
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[10px] font-light tracking-[0.3em] uppercase text-primary-foreground/60">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-primary-foreground/60" />
      </div>
    </section>
  )
}
