import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Award, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const values = [
  {
    title: "Professionalism",
    description:
      "We deliver high-quality services with attention to detail and commitment to excellence in every event we handle.",
    icon: Award,
  },
  {
    title: "Respect",
    description:
      "We treat every client and occasion with the utmost respect, understanding the significance of each moment.",
    icon: Heart,
  },
  {
    title: "Reliability",
    description:
      "You can count on us to be there when you need us. We honor our commitments and deliver on our promises.",
    icon: Clock,
  },
  {
    title: "Family Values",
    description:
      "As a family-owned business, we understand the importance of community and treat every client like family.",
    icon: Users,
  },
]

const milestones = [
  { year: "Founded", description: "Started as a small tent hire service in Mukuyuni" },
  { year: "Expanded", description: "Added decoration and catering services" },
  { year: "Growth", description: "Opened coffin sales branch in Wote Town" },
  { year: "Today", description: "Serving hundreds of families across Makueni County" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Using primary blue */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">About Us</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Learn about our story, our values, and our commitment to serving the people of Makueni County with
                excellence and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Flashlight Live Events was born from a simple vision: to help families in Makueni County celebrate
                    life&apos;s most important moments with dignity and joy. What started as a small tent hire service
                    in Mukuyuni has grown into a comprehensive event and funeral services company trusted by hundreds of
                    families.
                  </p>
                  <p>
                    As a family-owned business, we understand that every event matters. Whether it&apos;s a joyful
                    wedding celebration, a traditional dowry ceremony, a proud graduation party, or a solemn funeral
                    service, we bring the same level of care, professionalism, and attention to detail.
                  </p>
                  <p>
                    Our team has years of experience serving the people of Makueni County. We know the traditions, we
                    understand the culture, and we are committed to delivering services that exceed expectations while
                    respecting our community&apos;s values.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                <img
                  src="/ourteam.jpg"
                  alt="Flashlight Live Events team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Journey</h2>
              <p className="mt-4 text-muted-foreground">From humble beginnings to trusted community partner</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gold text-gold-foreground flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-semibold text-lg text-foreground">{milestone.year}</h3>
                      <p className="text-muted-foreground mt-1">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Visit Us</h2>
              <p className="mt-4 text-muted-foreground">Two convenient locations to serve you better</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      <p className="mt-3 flex items-center gap-2 text-foreground">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href="tel:+254722709590" className="hover:underline">
                          +254 722 709 590
                        </a>
                      </p>
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
                      <p className="mt-3 flex items-center gap-2 text-foreground">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href="tel:+254722709590" className="hover:underline">
                          +254 722 709 590
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Using accent green */}
        <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
            <p className="mt-4 text-accent-foreground/90 max-w-2xl mx-auto">
              Ready to plan your event or need assistance with funeral arrangements? We&apos;re here to help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                <Link href="/gallery">View Our Work</Link>
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
