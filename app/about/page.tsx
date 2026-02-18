import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import {
  Award,
  Star,
  Leaf,
  Gem,
  Lightbulb,
  Sun,
  Droplets,
  Sprout,
  Zap,
  TreePalm,
  Recycle,
  ShieldCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Serene Vista Hotel",
  description:
    "Discover the heritage, values, and team behind Serene Vista Hotel - a story of luxury, sustainability, and heartfelt hospitality since 1998.",
}

const values = [
  {
    icon: Star,
    title: "Excellence",
    description:
      "We pursue perfection in every detail, from the thread count of our linens to the warmth of our welcome.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Our commitment to the environment shapes every decision, from energy sourcing to locally grown produce.",
  },
  {
    icon: Gem,
    title: "Authenticity",
    description:
      "We celebrate local culture and traditions, creating genuine experiences that connect guests with the community.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We blend timeless hospitality with modern technology to create seamless, memorable experiences.",
  },
]

const teamMembers = [
  {
    name: "Isabella Martinez",
    role: "General Manager",
    image: "/images/team-isabella.jpg",
    bio: "With over 20 years in luxury hospitality, Isabella brings warmth, vision, and a relentless dedication to guest satisfaction. She has led Serene Vista to multiple international awards since taking the helm in 2015.",
  },
  {
    name: "Chef Alexandre Dubois",
    role: "Executive Chef",
    image: "/images/team-chef.jpg",
    bio: "Trained in Michelin-starred kitchens across Paris and Tokyo, Chef Alexandre brings a global perspective to coastal cuisine. His farm-to-table philosophy ensures every dish tells the story of our region.",
  },
  {
    name: "Dr. Maya Patel",
    role: "Spa Director",
    image: "/images/team-maya.jpg",
    bio: "A certified wellness expert with a doctorate in holistic health, Dr. Maya designs transformative spa programs that blend Eastern and Western healing traditions for complete rejuvenation.",
  },
  {
    name: "Marcus Chen",
    role: "Head Concierge",
    image: "/images/team-marcus.jpg",
    bio: "A member of Les Clefs d'Or, Marcus possesses an encyclopedic knowledge of the region and a talent for turning any request into an unforgettable experience.",
  },
]

const awards = [
  { year: "2025", title: "World's Best Boutique Hotel", org: "World Travel Awards" },
  { year: "2024", title: "5-Star Hotel Award", org: "Forbes Travel Guide" },
  { year: "2024", title: "Best Spa Resort", org: "International Spa Awards" },
  { year: "2023", title: "Sustainable Tourism Award", org: "Green Globe" },
  { year: "2023", title: "Best Fine Dining Hotel", org: "Gourmet Traveller" },
  { year: "2022", title: "AAA Five Diamond Award", org: "AAA" },
]

const sustainabilityStats = [
  { value: "85%", label: "Renewable Energy" },
  { value: "Zero", label: "Single-Use Plastics" },
  { value: "100%", label: "Locally Sourced Food" },
]

const greenInitiatives = [
  { icon: Sun, label: "Solar panel arrays powering hotel operations" },
  { icon: Droplets, label: "Rainwater harvesting for garden irrigation" },
  { icon: Sprout, label: "On-site organic herb and vegetable garden" },
  { icon: Zap, label: "Electric vehicle charging stations" },
  { icon: TreePalm, label: "Coastal conservation partnerships" },
  { icon: Recycle, label: "Comprehensive recycling and composting" },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Story"
        subtitle="About Us"
        image="/images/about-hero.jpg"
        imageAlt="Historic exterior of Serene Vista Hotel"
      />

      {/* Heritage Section */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-2 inline-block border border-accent/30 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-accent">
                Since 1998
              </span>
              <h2 className="mb-8 mt-4 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                <span className="text-balance">A Legacy of Elegance</span>
              </h2>
              <p className="mb-6 text-base font-light leading-relaxed text-muted-foreground">
                Founded by visionary hotelier Elena Martinez in 1998, Serene
                Vista Hotel began as a dream to create a sanctuary where the
                beauty of the coastal highlands meets the art of luxury
                hospitality. What started as a charming 12-room guesthouse has
                blossomed into one of the region{"'"}s most celebrated boutique
                hotels.
              </p>
              <p className="mb-6 text-base font-light leading-relaxed text-muted-foreground">
                Over the decades, we have thoughtfully expanded while preserving
                the intimate character that makes Serene Vista unique. Every
                addition has been designed to harmonize with the natural
                landscape, from our cliffside infinity pool to the
                garden-wrapped spa pavilion.
              </p>
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                Today, under the stewardship of the Martinez family, Serene
                Vista continues to set new standards in boutique hospitality --
                a place where three generations of passion come alive in every
                guest experience.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/heritage.jpg"
                alt="Heritage lounge at Serene Vista Hotel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-accent/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              What Guides Us
            </span>
            <h2 className="font-serif text-4xl font-light text-primary-foreground md:text-5xl">
              <span className="text-balance">Our Core Values</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group border border-primary-foreground/10 p-8 text-center transition-all duration-500 hover:border-primary-foreground/30 hover:bg-primary-foreground/5"
              >
                <value.icon className="mx-auto mb-6 h-8 w-8 text-accent transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mb-3 font-serif text-xl font-light text-primary-foreground">
                  {value.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-primary-foreground/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              The People Behind the Experience
            </span>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              <span className="text-balance">Meet Our Team</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden border border-border transition-all duration-500 hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 font-serif text-xl font-light text-foreground">
                    {member.name}
                  </h3>
                  <p className="mb-3 text-xs font-medium tracking-[0.15em] uppercase text-accent">
                    {member.role}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              Recognition
            </span>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              <span className="text-balance">Awards & Accolades</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <div
                key={`${award.year}-${award.title}`}
                className="flex items-start gap-5 border border-border bg-card p-6 transition-all duration-500 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/30">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-medium tracking-wide text-accent">
                    {award.year}
                  </span>
                  <h3 className="mb-1 font-serif text-lg font-light text-foreground">
                    {award.title}
                  </h3>
                  <p className="text-xs font-light text-muted-foreground">
                    {award.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              Our Commitment
            </span>
            <h2 className="mb-6 font-serif text-4xl font-light text-foreground md:text-5xl">
              <span className="text-balance">Sustainability & Environment</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
              We believe luxury and sustainability go hand in hand. Our
              comprehensive environmental program ensures that every stay at
              Serene Vista contributes to the preservation of our beautiful
              coastal ecosystem.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            {sustainabilityStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-border p-8 text-center"
              >
                <ShieldCheck className="mx-auto mb-4 h-6 w-6 text-accent" />
                <span className="mb-2 block font-serif text-4xl font-light text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm font-light tracking-wide text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Green Initiatives */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {greenInitiatives.map((initiative) => (
              <div
                key={initiative.label}
                className="flex items-center gap-4 border border-border px-6 py-5 transition-all duration-500 hover:shadow-md"
              >
                <initiative.icon className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-light text-foreground">
                  {initiative.label}
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
