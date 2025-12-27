import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tent, Heart, Utensils, Camera, Phone, MessageCircle, Check } from "lucide-react"
import Link from "next/link"

const eventServices = [
  {
    id: "tents-chairs",
    title: "Tents & Chairs for Hire",
    description:
      "We provide a wide range of quality tents and comfortable seating arrangements suitable for any event size. From intimate gatherings to large celebrations, we have the perfect setup for your occasion.",
    icon: Tent,
    features: [
      "Various tent sizes available",
      "White and colored tent options",
      "Comfortable plastic and wooden chairs",
      "Tables and high tables included",
      "Setup and takedown service",
      "Delivery within Makueni County",
    ],
    image: "/IMG-20251215-WA0025.jpg",
  },
  {
    id: "decorations",
    title: "Event Decoration",
    description:
      "Transform your venue into a stunning space with our professional decoration services. We specialize in creating beautiful atmospheres for weddings, dowry ceremonies, graduations, and all types of celebrations.",
    icon: Heart,
    features: [
      "Wedding decoration packages",
      "Traditional dowry ceremony setups",
      "Graduation party themes",
      "Balloon arrangements",
      "Flower arrangements",
      "Stage and backdrop design",
      "Lighting effects",
    ],
    image: "/IMG-20251214-WA0020.jpg",
  },
  {
    id: "catering",
    title: "Catering Services",
    description:
      "Delight your guests with our delicious catering services. We offer a variety of traditional and modern dishes prepared with fresh, quality ingredients to suit any event and budget.",
    icon: Utensils,
    features: [
      "Traditional Kenyan dishes",
      "Modern cuisine options",
      "Buffet and plated service",
      "Professional serving staff",
      "Customizable menus",
      "Dietary accommodations",
    ],
    image: "/IMG-20251215-WA0034.jpg",
  },
  {
    id: "video-photography",
    title: "Video & Photography",
    description:
      "Capture every precious moment of your event with our professional video and photography coverage. Our experienced team ensures you have lasting memories of your special day.",
    icon: Camera,
    features: [
      "Professional photographers",
      "HD video coverage",
      "Drone photography available",
      "Same-day photo editing",
      "Photo albums and prints",
      "Digital delivery of all media",
    ],
    image: "/Screenshot 2025-12-22 014944.png",
  },
]

export default function EventServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Using primary blue for vibrant event feel */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">Event Services</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                From weddings and dowry ceremonies to graduations and parties, we provide everything you need to create
                unforgettable celebrations. Let us handle the details while you enjoy your special moments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <a href="tel:+254722709590">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-16 lg:space-y-24">
              {eventServices.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-gold" />
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Events We Cover</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Whatever your celebration, we have the experience and expertise to make it special
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {["Weddings", "Dowry Ceremonies", "Graduations", "Birthday Parties", "Corporate Events"].map((event) => (
                <Card key={event} className="text-center">
                  <CardContent className="p-6">
                    <p className="font-medium text-foreground">{event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Accent green for CTA */}
        <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Let&apos;s Plan Your Perfect Event</h2>
            <p className="mt-4 text-accent-foreground/90 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We&apos;ll work with you to create an event that
              exceeds your expectations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                <a href="https://wa.me/254722709590" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
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
