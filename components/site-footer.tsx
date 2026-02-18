import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms & Suites", href: "/rooms" },
  { label: "Dining", href: "/dining" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
]

const infoLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: "/booking" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-primary py-8  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-light tracking-wide text-primary-foreground">
              Serene Vista Hotel
            </h3>
            <p className="mb-6 text-sm font-light leading-relaxed text-primary-foreground/60">
              Where luxury meets tranquility. Experience the finest in boutique
              hospitality.
            </p>
            <div className="flex gap-6">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-xs font-light tracking-wide text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/80">
              Information
            </h4>
            <ul className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/80">
              Contact
            </h4>
            <p className="mb-4 text-sm font-light leading-relaxed text-primary-foreground/50">
              123 Coastal Highway
              <br />
              Vista Point, CA 90210
            </p>
            <p className="text-sm font-light leading-relaxed text-primary-foreground/50">
              Phone: +1 (555) 123-4567
              <br />
              Email: info@serenevista.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs font-light tracking-wide text-primary-foreground/40">
            &copy; 2026 Serene Vista Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
