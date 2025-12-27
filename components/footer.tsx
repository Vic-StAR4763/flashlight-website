import Link from "next/link"
import { MapPin, Phone, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Flashlight Live Events</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Your trusted partner for memorable events and dignified funeral services in Makueni County, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="hover:underline text-background/90 hover:text-background">
                  Event Services
                </Link>
              </li>
              <li>
                <Link href="/funerals" className="hover:underline text-background/90 hover:text-background">
                  Funeral Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline text-background/90 hover:text-background">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline text-background/90 hover:text-background">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-background/90 hover:text-background">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-3 text-sm text-background/90">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Main Office: Kaiti Location, Mukuyuni Market, Makueni County</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Coffin Sales: Wote Town, Makueni County</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+254722709590"
                  className="flex items-center gap-2 hover:underline text-background/90 hover:text-background"
                >
                  <Phone className="h-4 w-4" />
                  +254 722 709 590
                </a>
              </li>
              <li>
                <a
                  href="mailto:mulistica@gmail.com"
                  className="flex items-center gap-2 hover:underline text-background/90 hover:text-background"
                >
                  <Mail className="h-4 w-4" />
                  mulistica@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100047946672639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline text-background/90 hover:text-background"
                >
                  <Facebook className="h-4 w-4" />
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Flashlight Live Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
