import Image from "next/image"
import Link from "next/link"

const rooms = [
  {
    name: "Deluxe Ocean View",
    description: "Spacious elegance with sweeping ocean vistas",
    size: "45 m\u00B2",
    bed: "King Bed",
    feature: "Ocean View",
    price: "$450",
    image: "/images/deluxe-room.jpg",
  },
  {
    name: "Executive Suite",
    description: "Sophisticated luxury with private terrace",
    size: "75 m\u00B2",
    bed: "King Bed",
    feature: "Terrace",
    price: "$750",
    image: "/images/executive-suite.jpg",
  },
  {
    name: "Presidential Suite",
    description: "Ultimate opulence with panoramic views",
    size: "120 m\u00B2",
    bed: "2 Bedrooms",
    feature: "Private Pool",
    price: "$1,500",
    image: "/images/presidential-suite.jpg",
  },
]

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Accommodations
          </span>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            <span className="text-balance">Exquisite Rooms & Suites</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group overflow-hidden border border-border bg-card transition-all duration-500 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={`${room.name} at Serene Vista Hotel`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="mb-2 font-serif text-2xl font-light text-card-foreground">
                  {room.name}
                </h3>
                <p className="mb-4 text-sm font-light text-muted-foreground">
                  {room.description}
                </p>
                <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-light tracking-wide text-muted-foreground">
                  <span>{room.size}</span>
                  <span className="text-border">{"/"}</span>
                  <span>{room.bed}</span>
                  <span className="text-border">{"/"}</span>
                  <span>{room.feature}</span>
                </div>
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-light text-foreground">
                    {room.price}
                  </span>
                  <span className="text-xs font-light tracking-wide text-muted-foreground">
                    per night
                  </span>
                </div>
                <Link
                  href="/rooms"
                  className="inline-block border border-foreground/30 px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
