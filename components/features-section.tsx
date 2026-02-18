import { Star, Diamond, Droplets, Sparkles } from "lucide-react"

const features = [
  {
    icon: Star,
    title: "Luxury Accommodations",
    description:
      "45 elegantly appointed rooms and suites with panoramic ocean views",
  },
  {
    icon: Diamond,
    title: "Fine Dining",
    description:
      "Award-winning restaurant featuring local and international cuisine",
  },
  {
    icon: Droplets,
    title: "Wellness Spa",
    description:
      "Full-service spa offering rejuvenating treatments and therapies",
  },
  {
    icon: Sparkles,
    title: "Infinity Pool",
    description:
      "Heated infinity pool overlooking the pristine coastline",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-primary-foreground/10 p-8 text-center transition-all duration-500 hover:border-primary-foreground/30 hover:bg-primary-foreground/5"
            >
              <feature.icon className="mx-auto mb-6 h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mb-3 font-serif text-xl font-light text-primary-foreground">
                {feature.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-primary-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
