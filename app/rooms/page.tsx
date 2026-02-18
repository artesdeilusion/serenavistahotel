import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import {
  Bed,
  Maximize,
  Mountain,
  Coffee,
  Tv,
  Wifi,
  Wine,
  Bath,
  Waves,
  TreePalm,
  Check,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Rooms & Suites | Serene Vista Hotel",
  description:
    "Discover our exquisite rooms and suites with ocean views, private terraces, and world-class amenities.",
}

const rooms = [
  {
    name: "Deluxe Ocean View",
    price: "$450",
    size: "45 m\u00B2",
    image: "/images/deluxe-room.jpg",
    description:
      "Wake up to the sound of waves and mesmerizing ocean panoramas from your private balcony. Our Deluxe Ocean View rooms blend sophisticated design with coastal charm, featuring premium furnishings, marble bathrooms, and every modern convenience for an unforgettable stay.",
    amenities: [
      { icon: Maximize, label: "45 m\u00B2 Living Space" },
      { icon: Bed, label: "King-Size Bed" },
      { icon: Mountain, label: "Ocean View Balcony" },
      { icon: Bath, label: "Rainfall Shower" },
      { icon: Coffee, label: "Nespresso Machine" },
      { icon: Tv, label: '55" Smart TV' },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Wine, label: "Premium Minibar" },
    ],
  },
  {
    name: "Executive Suite",
    price: "$750",
    size: "75 m\u00B2",
    image: "/images/executive-suite.jpg",
    description:
      "Indulge in the spacious elegance of our Executive Suite, where a separate living area meets luxurious bedroom design. Enjoy your private terrace with stunning views, a deep soaking tub, and personalized butler service for a truly elevated experience.",
    amenities: [
      { icon: Maximize, label: "75 m\u00B2 Living Space" },
      { icon: Bed, label: "King-Size Bed" },
      { icon: Mountain, label: "Private Terrace" },
      { icon: Bath, label: "Deep Soaking Tub & Rainfall Shower" },
      { icon: Coffee, label: "Nespresso Machine" },
      { icon: Tv, label: '65" Smart TV' },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Wine, label: "Fully Stocked Bar" },
    ],
  },
  {
    name: "Presidential Suite",
    price: "$1,500",
    size: "120 m\u00B2",
    image: "/images/presidential-suite.jpg",
    description:
      "The pinnacle of luxury living. Our Presidential Suite spans 120 square meters of pure opulence with two bedrooms, a grand living area, private plunge pool, and panoramic ocean views. Dedicated butler service and exclusive amenities ensure an unmatched experience.",
    amenities: [
      { icon: Maximize, label: "120 m\u00B2 Living Space" },
      { icon: Bed, label: "2 Bedrooms, King Beds" },
      { icon: Waves, label: "Private Plunge Pool" },
      { icon: Bath, label: "Marble Bathroom & Jacuzzi" },
      { icon: Coffee, label: "Full Kitchen & Bar" },
      { icon: Tv, label: '75" Smart TV in Each Room' },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Wine, label: "Champagne on Arrival" },
    ],
  },
  {
    name: "Superior Garden View",
    price: "$350",
    size: "40 m\u00B2",
    image: "/images/garden-room.jpg",
    description:
      "Find peace among our lush tropical gardens. The Superior Garden View room offers a serene retreat with direct garden access, elegant furnishings, and all the comforts of a luxury stay. Perfect for those seeking a tranquil escape surrounded by nature.",
    amenities: [
      { icon: Maximize, label: "40 m\u00B2 Living Space" },
      { icon: Bed, label: "King-Size Bed" },
      { icon: TreePalm, label: "Garden Terrace" },
      { icon: Bath, label: "Walk-in Rainfall Shower" },
      { icon: Coffee, label: "Nespresso Machine" },
      { icon: Tv, label: '50" Smart TV' },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Wine, label: "Premium Minibar" },
    ],
  },
]

const standardAmenities = [
  "Complimentary Breakfast Buffet",
  "High-Speed Wi-Fi",
  "Daily Housekeeping",
  "24/7 Room Service",
  "Access to Spa & Fitness Center",
  "Infinity Pool Access",
  "Concierge Service",
  "Turndown Service",
]

export default function RoomsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Rooms & Suites"
        subtitle="Accommodations"
        image="/images/rooms-hero.jpg"
        imageAlt="Luxury hotel hallway"
      />

      {/* Room Details */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-24 md:gap-32">
            {rooms.map((room, index) => (
              <div
                key={room.name}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={`${room.name} at Serene Vista Hotel`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute right-4 top-4 bg-primary/90 px-4 py-2 text-xs font-light tracking-wider text-primary-foreground">
                    From {room.price}
                    <span className="text-primary-foreground/60">{" / night"}</span>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl">
                    {room.name}
                  </h2>
                  <p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>

                  <div className="mb-8 grid grid-cols-2 gap-4">
                    {room.amenities.map((amenity) => (
                      <div
                        key={amenity.label}
                        className="flex items-center gap-3"
                      >
                        <amenity.icon className="h-4 w-4 shrink-0 text-accent" />
                        <span className="text-xs font-light text-muted-foreground">
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/booking"
                    className="inline-block border border-foreground/30 px-8 py-3.5 text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Amenities */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Included with Every Stay
          </span>
          <h2 className="mb-12 font-serif text-4xl font-light text-primary-foreground md:text-5xl">
            <span className="text-balance">Standard Amenities</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standardAmenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-3 border border-primary-foreground/10 px-5 py-4 text-left"
              >
                <Check className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm font-light text-primary-foreground/80">
                  {amenity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <SiteFooter />
    </main>
  )
}
