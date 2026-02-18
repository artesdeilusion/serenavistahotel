import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle?: string
  image: string
  imageAlt: string
}

export function PageHero({ title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-6 pt-20 text-center">
        {subtitle && (
          <span className="mb-4 text-xs font-light tracking-[0.4em] uppercase text-primary-foreground/70">
            {subtitle}
          </span>
        )}
        <h1 className="font-serif text-4xl font-light tracking-wide text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">{title}</span>
        </h1>
      </div>
    </section>
  )
}
