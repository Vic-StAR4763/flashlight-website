import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Tent, Heart, Camera, Utensils, Car, Star, Quote, Facebook } from "lucide-react"

const services = [
  {
    title: "Tents & Chairs",
    description: "Quality tents and seating arrangements for any event size",
    icon: Tent,
    href: "/events",
    color: "gold",
  },
  {
    title: "Event Decoration",
    description: "Beautiful decorations for weddings, dowry, and ceremonies",
    icon: Heart,
    href: "/events",
    color: "gold",
  },
  {
    title: "Catering Services",
    description: "Delicious catering for all your event needs",
    icon: Utensils,
    href: "/events",
    color: "gold",
  },
  {
    title: "Video & Photography",
    description: "Professional coverage to capture your special moments",
    icon: Camera,
    href: "/events",
    color: "gold",
  },
  {
    title: "Hearse Services",
    description: "Dignified hearse hire for funeral arrangements",
    icon: Car,
    href: "/funerals",
    color: "teal",
  },
  {
    title: "Coffin Sales",
    description: "Quality coffins available at our Wote branch",
    icon: Heart,
    href: "/funerals",
    color: "teal",
  },
]

const testimonials = [
  {
    name: "Mary Mutheu",
    location: "Makueni",
    text: "Flashlight Live Events made our wedding day absolutely perfect. Their decoration team was professional and the setup was beautiful beyond our expectations.",
  },
  {
    name: "John Mutua",
    location: "Wote",
    text: "During a difficult time, their funeral services team showed great compassion and professionalism. We are truly grateful for their support.",
  },
  {
    name: "Grace Ndinda",
    location: "Mukuyuni",
    text: "We hired their tents and chairs for our graduation party. Excellent service and very reasonable prices. Highly recommended!",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Using primary blue */}
        <section className="relative bg-primary text-primary-foreground">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/elegant-event-tent-setup-wedding-kenya.jpg')" }}
          />
          <div className="relative mx-auto max-w-7xl px-4 py-24 lg:py-32 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Complete Event & Funeral Services You Can Trust
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                From joyful weddings and celebrations to dignified funeral arrangements, we provide professional
                services for all of life&apos;s important moments in Makueni County.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="tel:+254722709590">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <a href="https://wa.me/254722709590" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We offer comprehensive event and funeral services to meet all your needs with professionalism and care.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link key={service.title} href={service.href}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                          service.color === "gold"
                            ? "bg-gold/10 group-hover:bg-gold/20"
                            : "bg-teal/10 group-hover:bg-teal/20"
                        }`}
                      >
                        <service.icon className={`h-6 w-6 ${service.color === "gold" ? "text-gold" : "text-teal"}`} />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/events">View Event Services</Link>
                </Button>
                <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-teal-foreground">
                  <Link href="/funerals">View Funeral Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Locations</h2>
              <p className="mt-4 text-muted-foreground">Serving Makueni County from two convenient locations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Main Office</h3>
                      <p className="text-muted-foreground mt-1">Kaiti Location, Mukuyuni Market</p>
                      <p className="text-muted-foreground">Makueni County, Kenya</p>
                      <p className="text-sm text-primary mt-2">Full event & funeral services available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Coffin Sales Branch</h3>
                      <p className="text-muted-foreground mt-1">Wote Town</p>
                      <p className="text-muted-foreground">Makueni County, Kenya</p>
                      <p className="text-sm text-teal mt-2">Coffin sales & funeral supplies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-muted-foreground">Trusted by families across Makueni County</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-gold/50 mb-4" />
                    <p className="text-foreground leading-relaxed mb-4">{testimonial.text}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://www.facebook.com/profile.php?id=100047946672639"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  View More Reviews on Facebook
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section - Using accent green */}
        <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Ready to Plan Your Event?</h2>
            <p className="mt-4 text-accent-foreground/90 max-w-2xl mx-auto">
              Contact us today for a free consultation. We&apos;re here to make your special moments memorable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                <a href="tel:+254722709590">
                  <Phone className="h-5 w-5 mr-2" />
                  +254 722 709 590
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
