import Image from "next/image"
import Link from "next/link"

export function IntroSection() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              About Us
            </span>
            <h2 className="mb-8 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              <span className="text-balance">A Sanctuary of Elegance</span>
            </h2>
            <p className="mb-6 text-base font-light leading-relaxed text-muted-foreground">
              Nestled in the heart of the coastal highlands, Serene Vista Hotel
              offers an unparalleled luxury experience. Our boutique hotel
              combines timeless elegance with modern comfort, creating a haven
              where every detail is crafted for your ultimate relaxation.
            </p>
            <p className="mb-10 text-base font-light leading-relaxed text-muted-foreground">
              With breathtaking views, world-class amenities, and personalized
              service, we invite you to escape the ordinary and immerse yourself
              in extraordinary hospitality.
            </p>
            <Link
              href="/about"
              className="inline-block border border-foreground/30 px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
            >
              Discover Our Story
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Serene Vista Hotel elegant interior lobby"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-accent/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
