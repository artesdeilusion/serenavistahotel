"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { SiteFooter } from "@/components/site-footer"
import { Check, Phone, Mail } from "lucide-react"

const roomTypes = [
  { label: "Superior Garden View", value: "garden", price: 350 },
  { label: "Deluxe Ocean View", value: "deluxe", price: 450 },
  { label: "Executive Suite", value: "executive", price: 750 },
  { label: "Presidential Suite", value: "presidential", price: 1500 },
]

const includedBenefits = [
  "Complimentary Breakfast Buffet",
  "Free High-Speed Wi-Fi",
  "Spa & Pool Access",
  "Airport Transfer on Request",
  "24/7 Concierge Service",
]

function getTodayString() {
  const d = new Date()
  return d.toISOString().split("T")[0]
}

function getTomorrowString() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split("T")[0]
}

function calcNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0
  const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime()
  return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)))
}

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState(getTodayString())
  const [checkOut, setCheckOut] = useState(getTomorrowString())
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [roomType, setRoomType] = useState("deluxe")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [newsletter, setNewsletter] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const selectedRoom = roomTypes.find((r) => r.value === roomType)
  const nights = useMemo(() => calcNights(checkIn, checkOut), [checkIn, checkOut])
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!termsAccepted) return
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
        title="Book Your Stay"
        subtitle="Reservations"
        image="/images/booking-hero.jpg"
        imageAlt="Luxury hotel room at sunrise"
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Dates */}
                <div>
                  <h3 className="mb-6 font-serif text-2xl font-light text-foreground">
                    Select Dates
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="checkin" className={labelClasses}>
                        Check-in Date
                      </label>
                      <input
                        id="checkin"
                        type="date"
                        value={checkIn}
                        min={getTodayString()}
                        onChange={(e) => {
                          setCheckIn(e.target.value)
                          if (e.target.value >= checkOut) {
                            const next = new Date(e.target.value)
                            next.setDate(next.getDate() + 1)
                            setCheckOut(next.toISOString().split("T")[0])
                          }
                        }}
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout" className={labelClasses}>
                        Check-out Date
                      </label>
                      <input
                        id="checkout"
                        type="date"
                        value={checkOut}
                        min={checkIn || getTodayString()}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <h3 className="mb-6 font-serif text-2xl font-light text-foreground">
                    Guests
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="adults" className={labelClasses}>
                        Adults
                      </label>
                      <select
                        id="adults"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className={inputClasses}
                      >
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Adult" : "Adults"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="children" className={labelClasses}>
                        Children
                      </label>
                      <select
                        id="children"
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className={inputClasses}
                      >
                        {[0, 1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Child" : "Children"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <h3 className="mb-6 font-serif text-2xl font-light text-foreground">
                    Room Type
                  </h3>
                  <div className="flex flex-col gap-3">
                    {roomTypes.map((room) => (
                      <label
                        key={room.value}
                        className={`flex cursor-pointer items-center justify-between border px-5 py-4 transition-all duration-300 ${
                          roomType === room.value
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="roomType"
                            value={room.value}
                            checked={roomType === room.value}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className={`flex h-4 w-4 items-center justify-center border ${
                              roomType === room.value
                                ? "border-accent bg-accent"
                                : "border-muted-foreground/40"
                            }`}
                          >
                            {roomType === room.value && (
                              <Check className="h-3 w-3 text-accent-foreground" />
                            )}
                          </div>
                          <span className="text-sm font-light text-foreground">
                            {room.label}
                          </span>
                        </div>
                        <span className="text-sm font-light text-accent">
                          ${room.price}
                          <span className="text-muted-foreground">{" / night"}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Guest Information */}
                <div>
                  <h3 className="mb-6 font-serif text-2xl font-light text-foreground">
                    Guest Information
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClasses}>
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClasses}>
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className={inputClasses}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="special" className={labelClasses}>
                      Special Requests
                    </label>
                    <textarea
                      id="special"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Any special requirements or preferences..."
                      rows={4}
                      className={inputClasses}
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={newsletter}
                        onChange={(e) => setNewsletter(e.target.checked)}
                        className="h-4 w-4 accent-accent"
                      />
                      <span className="text-xs font-light text-muted-foreground">
                        Subscribe to our newsletter for exclusive offers
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="h-4 w-4 accent-accent"
                        required
                      />
                      <span className="text-xs font-light text-muted-foreground">
                        I agree to the Terms & Conditions and Cancellation
                        Policy
                      </span>
                    </label>
                  </div>
                </div>

                {submitted && (
                  <div className="border border-accent/30 bg-accent/5 px-6 py-4">
                    <p className="text-sm font-light text-foreground">
                      Thank you! Your reservation request has been submitted.
                      We will confirm your booking shortly via email.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-foreground py-4 text-xs font-medium tracking-[0.2em] uppercase text-background transition-all duration-500 hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                  disabled={!termsAccepted}
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-8">
                {/* Summary Box */}
                <div className="border border-border bg-card p-8">
                  <h3 className="mb-6 font-serif text-2xl font-light text-card-foreground">
                    Booking Summary
                  </h3>
                  <div className="flex flex-col gap-4 text-sm font-light">
                    <div className="flex justify-between border-b border-border/50 pb-3">
                      <span className="text-muted-foreground">Check-in</span>
                      <span className="text-foreground">
                        {new Date(checkIn).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-3">
                      <span className="text-muted-foreground">Check-out</span>
                      <span className="text-foreground">
                        {new Date(checkOut).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-3">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground">
                        {nights} {nights === 1 ? "Night" : "Nights"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-3">
                      <span className="text-muted-foreground">Guests</span>
                      <span className="text-foreground">
                        {adults + children} Guest{adults + children !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-3">
                      <span className="text-muted-foreground">Room</span>
                      <span className="text-foreground">
                        {selectedRoom?.label}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-xs font-medium tracking-wide uppercase text-foreground">
                        Total
                      </span>
                      <span className="font-serif text-2xl font-light text-accent">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Included Benefits */}
                <div className="border border-border bg-card p-8">
                  <h4 className="mb-4 text-xs font-medium tracking-[0.15em] uppercase text-card-foreground">
                    Included Benefits
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {includedBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                        <span className="text-sm font-light text-muted-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="border border-border bg-card p-8">
                  <h4 className="mb-4 text-xs font-medium tracking-[0.15em] uppercase text-card-foreground">
                    Need Help?
                  </h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-accent" />
                      <span className="text-sm font-light text-muted-foreground">
                        +1 (555) 123-4567
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-accent" />
                      <span className="text-sm font-light text-muted-foreground">
                        reservations@serenevista.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
