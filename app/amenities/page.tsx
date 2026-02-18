import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import {
  Clock,
  Sparkles,
  Heart,
  Waves,
  Dumbbell,
  Briefcase,
  Car,
  ConciergeBell,
  Shirt,
  Plane,
  Baby,
  Compass,
  Gift,
  PawPrint,
  Sun,
  Users,
  Monitor,
  Video,
  Flower2,
  TreePalm,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Amenities | Serene Vista Hotel",
  description:
    "Explore our world-class amenities including spa, infinity pool, fitness center, and business facilities.",
}

const facilities = [
  {
    name: "Serene Spa & Wellness Center",
    image: "/images/spa.jpg",
    description:
      "Surrender to ultimate relaxation at our full-service spa, where ancient healing traditions meet modern wellness techniques. Our expert therapists offer personalized treatments in a serene setting designed to restore your body, mind, and spirit.",
    hours: "08:00 - 21:00",
    treatments: [
      {
        name: "Swedish Relaxation Massage",
        duration: "60 min",
        price: "$150",
      },
      {
        name: "Deep Tissue Therapy",
        duration: "90 min",
        price: "$200",
      },
      {
        name: "Hot Stone Treatment",
        duration: "75 min",
        price: "$180",
      },
      {
        name: "Aromatherapy Journey",
        duration: "60 min",
        price: "$160",
      },
    ],
    wellnessFacilities: [
      { icon: Sparkles, label: "Finnish Sauna & Steam Room" },
      { icon: Flower2, label: "Meditation Garden" },
      { icon: Heart, label: "Yoga Studio with Daily Classes" },
    ],
    icon: Sparkles,
  },
  {
    name: "Infinity Pool & Beach Club",
    image: "/images/pool.jpg",
    description:
      "Our stunning 25-meter heated infinity pool appears to merge seamlessly with the ocean beyond. Relax on plush sun loungers, take a dip in the jacuzzi, or let the kids splash in the dedicated children's pool. Private beach access and water sports equipment complete the perfect seaside experience.",
    hours: "06:00 - 22:00",
    features: [
      "25m heated infinity pool",
      "Children's pool & jacuzzi",
      "Private beach access",
      "Water sports equipment",
      "Poolside bar & dining",
      "Premium sun loungers",
    ],
    icon: Waves,
  },
  {
    name: "Fitness Center",
    image: "/images/fitness.jpg",
    description:
      "Stay active during your stay with our state-of-the-art fitness center, equipped with the latest Technogym machines and expert personal trainers. Whether you prefer cardio, strength training, or group classes, our facility has everything you need.",
    hours: "Open 24 hours",
    features: [
      "Technogym equipment",
      "Cardio machines with ocean views",
      "Free weights area",
      "Group fitness classes",
      "Personal training available",
      "Yoga & Pilates studio",
    ],
    icon: Dumbbell,
  },
  {
    name: "Business Center & Meeting Rooms",
    image: "/images/business-center.jpg",
    description:
      "Host successful events in our sophisticated business facilities. Three versatile meeting rooms accommodate gatherings from 50 to 200 guests, supported by cutting-edge technology and our dedicated events team.",
    hours: "07:00 - 23:00",
    meetingRooms: [
      { name: "Ocean View Hall", capacity: "Up to 200 guests" },
      { name: "Garden Conference Room", capacity: "Up to 100 guests" },
      { name: "Executive Boardroom", capacity: "Up to 50 guests" },
    ],
    techFeatures: [
      { icon: Monitor, label: "Full AV Equipment" },
      { icon: Video, label: "Video Conferencing" },
      { icon: Users, label: "Dedicated Events Team" },
    ],
    icon: Briefcase,
  },
]

const additionalServices = [
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet parking for all hotel guests",
  },
  {
    icon: ConciergeBell,
    title: "24/7 Concierge",
    description: "Personal assistance for dining, tours, and arrangements",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    description: "Same-day laundry and dry cleaning available",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description: "Private luxury transfers to and from the airport",
  },
  {
    icon: Baby,
    title: "Childcare",
    description: "Professional babysitting and kids' club activities",
  },
  {
    icon: Compass,
    title: "Activity Desk",
    description: "Guided tours, excursions, and local experience booking",
  },
  {
    icon: Gift,
    title: "Gift Boutique",
    description: "Curated souvenirs, luxury goods, and local artisan crafts",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly",
    description: "Welcome amenities and services for your furry companions",
  },
]

export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Amenities"
        subtitle="World-Class Facilities"
        image="/images/amenities-hero.jpg"
        imageAlt="Infinity pool at Serene Vista Hotel"
      />

      {/* Facilities */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.name}
              className={`grid items-start gap-12 border-b border-border py-24 last:border-b-0 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={facility.image}
                  alt={`${facility.name} at Serene Vista Hotel`}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-3">
                  <facility.icon className="h-5 w-5 text-accent" />
                  <span className="text-xs font-light tracking-wide text-muted-foreground">
                    <Clock className="mr-1.5 inline h-3 w-3" />
                    {facility.hours}
                  </span>
                </div>
                <h2 className="mb-4 font-serif text-3xl font-light text-foreground md:text-4xl">
                  {facility.name}
                </h2>
                <p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
                  {facility.description}
                </p>

                {/* Spa Treatments */}
                {"treatments" in facility && facility.treatments && (
                  <div className="mb-8">
                    <h4 className="mb-4 text-xs font-medium tracking-[0.15em] uppercase text-foreground">
                      Spa Treatments
                    </h4>
                    <div className="flex flex-col gap-3">
                      {facility.treatments.map((treatment) => (
                        <div
                          key={treatment.name}
                          className="flex items-center justify-between border-b border-border/50 pb-3"
                        >
                          <div>
                            <span className="text-sm font-light text-foreground">
                              {treatment.name}
                            </span>
                            <span className="ml-2 text-xs text-muted-foreground">
                              ({treatment.duration})
                            </span>
                          </div>
                          <span className="text-sm font-light text-accent">
                            {treatment.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wellness Facilities */}
                {"wellnessFacilities" in facility &&
                  facility.wellnessFacilities && (
                    <div className="mb-8">
                      <h4 className="mb-4 text-xs font-medium tracking-[0.15em] uppercase text-foreground">
                        Wellness Facilities
                      </h4>
                      <div className="flex flex-col gap-3">
                        {facility.wellnessFacilities.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center gap-3"
                          >
                            <item.icon className="h-4 w-4 text-accent" />
                            <span className="text-sm font-light text-muted-foreground">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Features list */}
                {"features" in facility && facility.features && (
                  <div className="mb-8">
                    <h4 className="mb-4 text-xs font-medium tracking-[0.15em] uppercase text-foreground">
                      Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {facility.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <Sun className="h-3.5 w-3.5 text-accent" />
                          <span className="text-sm font-light text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Meeting Rooms */}
                {"meetingRooms" in facility && facility.meetingRooms && (
                  <div className="mb-8">
                    <h4 className="mb-4 text-xs font-medium tracking-[0.15em] uppercase text-foreground">
                      Meeting Spaces
                    </h4>
                    <div className="flex flex-col gap-3">
                      {facility.meetingRooms.map((room) => (
                        <div
                          key={room.name}
                          className="flex items-center justify-between border-b border-border/50 pb-3"
                        >
                          <span className="text-sm font-light text-foreground">
                            {room.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {room.capacity}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      {facility.techFeatures?.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-3"
                        >
                          <item.icon className="h-4 w-4 text-accent" />
                          <span className="text-sm font-light text-muted-foreground">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              At Your Service
            </span>
            <h2 className="font-serif text-4xl font-light text-primary-foreground md:text-5xl">
              <span className="text-balance">Additional Services</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="group border border-primary-foreground/10 p-6 text-center transition-all duration-500 hover:border-primary-foreground/30 hover:bg-primary-foreground/5"
              >
                <service.icon className="mx-auto mb-4 h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mb-2 font-serif text-lg font-light text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-xs font-light leading-relaxed text-primary-foreground/60">
                  {service.description}
                </p>
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
