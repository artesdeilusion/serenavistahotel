import Link from "next/link"

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative   overflow-hidden bg-primary py-24 md:py-32"
    >

      {/* Subtle decorative border - matches max-w-7xl + px-6 lg:px-8 of other sections */}
      <div className="absolute inset-0 flex items-stretch justify-center py-8 md:py-12">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="h-full border border-primary-foreground/10" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="mb-6 font-serif text-4xl font-light text-primary-foreground md:text-5xl">
          <span className="text-balance">Ready to Experience Luxury?</span>
        </h2>
        <p className="mb-10 text-sm font-light leading-relaxed tracking-wide text-primary-foreground/70 md:text-base">
          Book your stay today and discover the perfect escape
        </p>
        <Link
          href="/booking"
          className="inline-block border border-primary-foreground/40 bg-transparent px-12 py-4 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-primary-foreground hover:text-primary"
        >
          Reserve Your Room
        </Link>
      </div>
    </section>
  )
}
