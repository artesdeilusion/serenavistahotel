"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { SiteFooter } from "@/components/site-footer"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ConciergeBell,
  Sparkles,
  Calendar,
  UtensilsCrossed,
  Heart,
  Car,
  Plane,
  Bus,
} from "lucide-react"

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Coastal Highway", "Vista Point, CA 90210", "United States"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      "Reservations: +1 (555) 123-4567",
      "General: +1 (555) 123-4568",
      "Toll-free: 1-800-SERENE-1",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [
      "reservations@serenevista.com",
      "info@serenevista.com",
      "events@serenevista.com",
    ],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: [
      "Front Desk: 24/7",
      "Check-in: 3:00 PM",
      "Check-out: 11:00 AM",
    ],
  },
]

const subjects = [
  "Reservation Inquiry",
  "Room Information",
  "Events & Meetings",
  "Spa Services",
  "Dining Reservations",
  "Feedback",
  "Other",
]

const departments = [
  {
    icon: Calendar,
    name: "Reservations",
    description: "Book your stay or modify existing reservations",
    phone: "+1 (555) 123-4567",
    email: "reservations@serenevista.com",
  },
  {
    icon: ConciergeBell,
    name: "Concierge",
    description: "Local tips, tour arrangements, and special requests",
    phone: "+1 (555) 123-4570",
    email: "concierge@serenevista.com",
  },
  {
    icon: Sparkles,
    name: "Spa & Wellness",
    description: "Treatment bookings and wellness program inquiries",
    phone: "+1 (555) 123-4571",
    email: "spa@serenevista.com",
  },
  {
    icon: Calendar,
    name: "Events & Catering",
    description: "Corporate events, weddings, and private dining",
    phone: "+1 (555) 123-4572",
    email: "events@serenevista.com",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurant",
    description: "Dining reservations and special dietary requirements",
    phone: "+1 (555) 123-4573",
    email: "dining@serenevista.com",
  },
  {
    icon: Heart,
    name: "Guest Relations",
    description: "Feedback, suggestions, and special occasion planning",
    phone: "+1 (555) 123-4574",
    email: "guestrelations@serenevista.com",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClasses =
    "w-full border border-border bg-card px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none transition-colors"
  const labelClasses =
    "mb-2 block text-xs font-medium tracking-[0.1em] uppercase text-foreground"

  return (
    <main>
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        image="/images/contact-hero.jpg"
        imageAlt="Hotel reception at Serene Vista Hotel"
      />

      {/* Contact Info Cards */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="border border-border p-8 text-center transition-all duration-500 hover:shadow-md"
              >
                <card.icon className="mx-auto mb-5 h-7 w-7 text-accent" />
                <h3 className="mb-4 font-serif text-xl font-light text-foreground">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {card.lines.map((line) => (
                    <p
                      key={line}
                      className="text-sm font-light text-muted-foreground"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Directions */}
      <section className="bg-muted py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
                Send a Message
              </span>
              <h2 className="mb-8 font-serif text-4xl font-light text-foreground md:text-5xl">
                <span className="text-balance">We{"'"}d Love to Hear from You</span>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClasses}>
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+1 (555) 123-4567"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className={labelClasses}>
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={inputClasses}
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClasses}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can we help you?"
                    rows={6}
                    className={inputClasses}
                    required
                  />
                </div>

                {submitted && (
                  <div className="border border-accent/30 bg-accent/5 px-6 py-4">
                    <p className="text-sm font-light text-foreground">
                      Thank you for your message! Our team will respond within
                      24 hours.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-foreground py-4 text-xs font-medium tracking-[0.2em] uppercase text-background transition-all duration-500 hover:bg-accent hover:text-accent-foreground"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Directions */}
            <div>
              <div className="mb-8 aspect-[4/3] overflow-hidden border border-border bg-card">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-3 h-8 w-8 text-muted-foreground/30" />
                    <p className="text-sm font-light text-muted-foreground/50">
                      Interactive Map
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-border bg-card p-8">
                <h3 className="mb-6 font-serif text-2xl font-light text-foreground">
                  Getting Here
                </h3>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <Plane className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-foreground">
                        From the Airport
                      </h4>
                      <p className="text-sm font-light text-muted-foreground">
                        30-minute drive from Vista Point International Airport.
                        Complimentary airport transfers available on request.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Car className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-foreground">
                        By Car
                      </h4>
                      <p className="text-sm font-light text-muted-foreground">
                        Take Coastal Highway north for 15 km. The hotel entrance
                        is on the right. Complimentary valet parking.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Bus className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="mb-1 text-sm font-medium text-foreground">
                        Public Transport
                      </h4>
                      <p className="text-sm font-light text-muted-foreground">
                        Bus route 42 stops directly in front of the hotel.
                        Service runs every 30 minutes from the city center.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
              Direct Lines
            </span>
            <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
              <span className="text-balance">Our Departments</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="border border-border p-8 transition-all duration-500 hover:shadow-md"
              >
                <dept.icon className="mb-4 h-6 w-6 text-accent" />
                <h3 className="mb-2 font-serif text-xl font-light text-foreground">
                  {dept.name}
                </h3>
                <p className="mb-4 text-sm font-light text-muted-foreground">
                  {dept.description}
                </p>
                <div className="flex flex-col gap-2 border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    <span className="text-xs font-light text-muted-foreground">
                      {dept.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-accent" />
                    <span className="text-xs font-light text-muted-foreground">
                      {dept.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
