import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import {
  Clock,
  Shirt,
  UtensilsCrossed,
  Music,
  Wine,
  Coffee,
  ConciergeBell,
  Grape,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dining Experience | Serene Vista Hotel",
  description:
    "Savor exceptional cuisine at our award-winning restaurants and bars, from fine dining to casual terrace fare.",
}

const restaurants = [
  {
    name: "The Coastal Table",
    type: "Fine Dining",
    image: "/images/coastal-table.jpg",
    description:
      "Our signature restaurant celebrates the bounty of the coast with contemporary cuisine that honors local traditions. Executive Chef Alexandre Dubois crafts menus that highlight sustainably sourced seafood and farm-to-table ingredients, paired with an exceptional wine list curated by our sommelier.",
    cuisine: "Contemporary Coastal",
    dressCode: "Smart Casual",
    hours: "18:00 - 22:30",
    signatureDishes: [
      "Pan-Seared Sea Bass with Citrus Beurre Blanc",
      "Wagyu Beef Tenderloin with Truffle Jus",
      "Lobster Risotto with Saffron Cream",
      "Chocolate Fondant with Sea Salt Caramel",
    ],
    note: "Reservations recommended",
    icon: UtensilsCrossed,
  },
  {
    name: "Vista Terrace Caf\u00E9",
    type: "Casual Dining",
    image: "/images/vista-cafe.jpg",
    description:
      "Start your mornings with a fresh ocean breeze and artisanal coffee, or enjoy a leisurely Mediterranean-inspired lunch on our sun-drenched terrace. The Vista Terrace offers an all-day dining experience with locally inspired dishes and international favorites in a relaxed, inviting atmosphere.",
    cuisine: "International & Mediterranean",
    dressCode: "Casual",
    hours: "07:00 - 18:00",
    signatureDishes: [
      "Avocado Toast with Poached Eggs & Microgreens",
      "Mediterranean Grain Bowl with Grilled Halloumi",
      "Club Sandwich with Truffle Fries",
      "Fresh Tropical Fruit Smoothie Bowls",
    ],
    note: "Walk-ins welcome",
    icon: Coffee,
  },
  {
    name: "Sunset Lounge",
    type: "Cocktail Bar",
    image: "/images/sunset-lounge.jpg",
    description:
      "As the sun dips below the horizon, the Sunset Lounge transforms into an enchanting retreat of craft cocktails and live music. Our expert mixologists create signature drinks inspired by the coastal landscape, while live piano performances set the perfect ambiance on Friday and Saturday evenings.",
    cuisine: "Craft Cocktails & Light Bites",
    dressCode: "Smart Casual",
    hours: "17:00 - 01:00",
    signatureDishes: [
      "Serene Sunset - Mango, Passion Fruit & Rum",
      "Coastal Breeze - Gin, Cucumber & Elderflower",
      "Vista Negroni - Aged Bourbon & Sweet Vermouth",
      "Ocean Mist - Vodka, Blue Cura\u00E7ao & Coconut",
    ],
    note: "Live piano Friday & Saturday",
    icon: Wine,
  },
]

const roomServiceFeatures = [
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Order anytime, day or night, from our full room service menu",
  },
  {
    icon: UtensilsCrossed,
    title: "Full Menu Selection",
    description:
      "Choose from all three restaurant menus delivered to your room",
  },
  {
    icon: ConciergeBell,
    title: "In-Room Dining Setup",
    description: "Elegant table settings arranged in the comfort of your suite",
  },
  {
    icon: Grape,
    title: "Wine Pairing",
    description:
      "Our sommelier can recommend the perfect wine for your meal",
  },
]

export default function DiningPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Dining Experience"
        subtitle="Culinary Excellence"
        image="/images/dining-hero.jpg"
        imageAlt="Fine dining restaurant at Serene Vista Hotel"
      />

      {/* Dining Intro */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Our Philosophy
          </span>
          <h2 className="mb-8 font-serif text-4xl font-light text-foreground md:text-5xl">
            <span className="text-balance">A Feast for Every Sense</span>
          </h2>
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            At Serene Vista, dining is more than a meal -- it is an experience.
            Our culinary team sources the finest local ingredients to craft
            dishes that celebrate the flavors of the coast while honoring
            international traditions. From intimate fine dining to relaxed
            terrace fare, every bite tells a story.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.name}
                className={`grid items-center gap-12 border-b border-border py-24 last:border-b-0 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={restaurant.image}
                    alt={`${restaurant.name} at Serene Vista Hotel`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <restaurant.icon className="h-5 w-5 text-accent" />
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                      {restaurant.type}
                    </span>
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl">
                    {restaurant.name}
                  </h3>
                  <p className="mb-6 text-sm font-light leading-relaxed text-muted-foreground">
                    {restaurant.description}
                  </p>

                  {/* Details */}
                  <div className="mb-6 flex flex-wrap gap-6 text-xs font-light text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="h-3.5 w-3.5 text-accent" />
                      <span>{restaurant.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shirt className="h-3.5 w-3.5 text-accent" />
                      <span>{restaurant.dressCode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-accent" />
                      <span>{restaurant.hours}</span>
                    </div>
                    {restaurant.note && (
                      <div className="flex items-center gap-2">
                        <Music className="h-3.5 w-3.5 text-accent" />
                        <span>{restaurant.note}</span>
                      </div>
                    )}
                  </div>

                  {/* Signature Dishes */}
                  <div className="border-t border-border pt-6">
                    <h4 className="mb-3 text-xs font-medium tracking-[0.15em] uppercase text-foreground">
                      {restaurant.type === "Cocktail Bar"
                        ? "Signature Cocktails"
                        : "Signature Dishes"}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {restaurant.signatureDishes.map((dish) => (
                        <li
                          key={dish}
                          className="text-sm font-light text-muted-foreground"
                        >
                          {dish}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Service */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              Always Available
            </span>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              <span className="text-balance">24/7 Room Service</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roomServiceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-border p-8 text-center transition-all duration-500 hover:shadow-md"
              >
                <feature.icon className="mx-auto mb-5 h-7 w-7 text-accent" />
                <h3 className="mb-3 font-serif text-xl font-light text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Cellar */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
                Wine Collection
              </span>
              <h2 className="mb-6 font-serif text-4xl font-light text-primary-foreground md:text-5xl">
                <span className="text-balance">The Wine Cellar</span>
              </h2>
              <p className="mb-6 text-sm font-light leading-relaxed text-primary-foreground/70">
                Our curated collection features over 300 labels from the
                world{"'"}s most celebrated wine regions. From bold Bordeaux to
                crisp New Zealand Sauvignon Blancs, our wine cellar offers a
                journey through the finest vineyards across the globe.
              </p>
              <p className="text-sm font-light leading-relaxed text-primary-foreground/70">
                Our in-house sommelier is available for private tastings,
                personalized recommendations, and exclusive wine-pairing dinners.
                Discover a new favorite or revisit a cherished vintage in our
                temperature-controlled cellar.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/wine-cellar.jpg"
                alt="Wine cellar at Serene Vista Hotel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </main>
  )
}
