import { Star } from "lucide-react"

const testimonials = [
  {
    text: "An absolutely stunning hotel with impeccable service. The ocean views from our suite were breathtaking, and every staff member went above and beyond to make our stay unforgettable.",
    author: "Sarah Mitchell",
    location: "New York, USA",
  },
  {
    text: "The perfect blend of luxury and comfort. The spa treatments were divine, and the restaurant exceeded all expectations. We can't wait to return!",
    author: "James Chen",
    location: "London, UK",
  },
  {
    text: "From the moment we arrived, we felt pampered and valued. The attention to detail is extraordinary. This is luxury hospitality at its finest.",
    author: "Maria Rodriguez",
    location: "Barcelona, Spain",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
            <span className="text-balance">What Our Guests Say</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="border border-border bg-card p-8 transition-all duration-500 hover:shadow-md lg:p-10"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>
              <div>
                <strong className="block font-serif text-lg font-normal text-foreground">
                  {testimonial.author}
                </strong>
                <span className="text-xs font-light tracking-wide text-muted-foreground">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
