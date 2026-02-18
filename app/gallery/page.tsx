"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { SiteFooter } from "@/components/site-footer"

type Category = "all" | "rooms" | "dining" | "amenities" | "exterior"

interface GalleryImage {
  src: string
  title: string
  category: Category
  tall?: boolean
}

const galleryImages: GalleryImage[] = [
  { src: "/images/deluxe-room.jpg", title: "Deluxe Ocean View Room", category: "rooms", tall: true },
  { src: "/images/coastal-table.jpg", title: "The Coastal Table Restaurant", category: "dining" },
  { src: "/images/pool.jpg", title: "Infinity Pool at Sunset", category: "amenities" },
  { src: "/images/gallery-exterior.jpg", title: "Hotel Exterior at Twilight", category: "exterior", tall: true },
  { src: "/images/executive-suite.jpg", title: "Executive Suite Living Area", category: "rooms" },
  { src: "/images/gallery-dining.jpg", title: "Signature Dish Presentation", category: "dining", tall: true },
  { src: "/images/spa.jpg", title: "Serene Spa Treatment Room", category: "amenities" },
  { src: "/images/hero.jpg", title: "Aerial Hotel View", category: "exterior" },
  { src: "/images/presidential-suite.jpg", title: "Presidential Suite", category: "rooms", tall: true },
  { src: "/images/sunset-lounge.jpg", title: "Sunset Lounge Bar", category: "dining" },
  { src: "/images/fitness.jpg", title: "State-of-the-Art Fitness Center", category: "amenities" },
  { src: "/images/about.jpg", title: "Grand Lobby Interior", category: "exterior", tall: true },
  { src: "/images/garden-room.jpg", title: "Superior Garden View Room", category: "rooms" },
  { src: "/images/vista-cafe.jpg", title: "Vista Terrace Cafe", category: "dining" },
  { src: "/images/business-center.jpg", title: "Executive Meeting Room", category: "amenities", tall: true },
  { src: "/images/gallery-hero.jpg", title: "Panoramic Coastal View", category: "exterior" },
]

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Rooms & Suites", value: "rooms" },
  { label: "Dining", value: "dining" },
  { label: "Amenities", value: "amenities" },
  { label: "Exterior & Views", value: "exterior" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
  }

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(
      (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
    )
  }

  return (
    <main>
      <Navbar />
      <PageHero
        title="Gallery"
        subtitle="Visual Journey"
        image="/images/gallery-hero.jpg"
        imageAlt="Panoramic view of Serene Vista Hotel"
      />

      {/* Filter & Gallery */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Masonry-style */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {filteredImages.map((image, index) => (
              <button
                key={`${image.src}-${activeCategory}`}
                onClick={() => openLightbox(index)}
                className="group relative mb-4 block w-full overflow-hidden break-inside-avoid"
              >
                <div className={`relative ${image.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-serif text-lg font-light text-primary-foreground">
                      {image.title}
                    </span>
                    <span className="mt-1 text-xs font-light tracking-widest uppercase text-primary-foreground/70">
                      {image.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Placeholder */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Immersive Experience
          </span>
          <h2 className="mb-6 font-serif text-4xl font-light text-primary-foreground md:text-5xl">
            <span className="text-balance">360 Virtual Tour</span>
          </h2>
          <p className="mb-10 text-sm font-light leading-relaxed text-primary-foreground/70">
            Explore every corner of our hotel from the comfort of your home.
            Our interactive virtual tour lets you walk through our rooms, restaurants,
            spa, and gardens before you arrive.
          </p>
          <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden border border-primary-foreground/20">
            <div className="flex h-full items-center justify-center bg-primary-foreground/5">
              <p className="text-sm font-light tracking-wide text-primary-foreground/50">
                Virtual Tour Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            aria-label="Close lightbox"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 text-primary-foreground/70 transition-colors hover:text-primary-foreground md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div
            className="relative mx-16 max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="font-serif text-lg font-light text-primary-foreground">
                {filteredImages[lightboxIndex].title}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 text-primary-foreground/70 transition-colors hover:text-primary-foreground md:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </main>
  )
}
