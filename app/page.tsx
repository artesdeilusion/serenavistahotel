import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { FeaturesSection } from "@/components/features-section"
import { RoomsSection } from "@/components/rooms-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturesSection />
      <RoomsSection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
