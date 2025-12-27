import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Car, Tent, Heart, Phone, MapPin, Clock, Check } from "lucide-react"
import Link from "next/link"

const funeralServices = [
  {
    id: "hearse",
    title: "Hearse for Hire",
    description:
      "We provide dignified hearse services for transporting your loved ones with respect and care. Our well-maintained vehicles and professional drivers ensure a smooth and respectful journey.",
    icon: Car,
    features: [
      "Well-maintained hearse vehicles",
      "Professional, respectful drivers",
      "Available 24/7 for emergencies",
      "Service throughout Makueni County",
      "Long-distance transport available",
      "Coordination with funeral homes",
    ],
    image: "/WhatsApp Image 2025-12-27 at 00.57.24.jpeg",
  },
  {
    id: "funeral-setup",
    title: "Funeral Tents & Seating",
    description:
      "We understand the importance of providing a comfortable space for families and friends to gather and pay their respects. Our funeral tent setups are arranged with care and dignity.",
    icon: Tent,
    features: [
      "Large capacity tents",
      "Comfortable seating arrangements",
      "Chairs and tables provided",
      "Setup at home or burial site",
      "Respectful arrangement design",
      "Same-day setup available",
    ],
    image: "/WhatsApp Image 2025-12-27 at 00.57.42.jpeg",
  },
  {
    id: "coffins",
    title: "Coffin Sales",
    description:
      "Our Wote Town branch offers a selection of quality coffins to suit different needs and budgets. We provide compassionate guidance to help families make the right choice during difficult times.",
    icon: Heart,
    features: [
      "Various designs and sizes",
      "Different material options",
      "Affordable pricing",
      "Available at Wote branch",
      "Viewing before purchase",
      "Delivery service available",
    ],
    image: "/WhatsApp Image 2025-12-27 at 00.57.14.jpeg",
  },
]

export default function FuneralServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Using teal for subdued funeral page feel */}
        <section className="bg-teal text-teal-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Funeral Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-teal-foreground/90">
                During life&apos;s most difficult moments, we are here to support you with compassionate and dignified
                funeral services. Let us help you honor your loved ones with the respect they deserve.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="tel:+254722709590">
                    <Phone className="h-5 w-5 mr-2" />
                    Call for Assistance
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Banner - Using foreground (dark gray) for subdued look */}
        <section className="bg-foreground text-background py-6">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6" />
                <span className="font-semibold">24/7 Emergency Support Available</span>
              </div>
              <a href="tel:+254722709590" className="flex items-center gap-2 font-bold text-lg hover:underline">
                <Phone className="h-5 w-5" />
                +254 722 709 590
              </a>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Funeral Services</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We provide complete funeral arrangements with care, dignity, and professionalism
              </p>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {funeralServices.map((service, index) => (
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
                      <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-teal" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-teal hover:bg-teal/90 text-teal-foreground">
                      <a href="tel:+254722709590">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact Us
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coffin Sales Location */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-8 w-8 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Coffin Sales Branch</h3>
                    <p className="text-muted-foreground mb-4">
                      Visit our dedicated coffin sales branch in Wote Town for a wide selection of coffins and funeral
                      supplies. Our compassionate staff will assist you in making the right choice for your loved one.
                    </p>
                    <div className="space-y-2 text-foreground">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        Wote Town, Makueni County
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href="tel:+254722709590" className="hover:underline">
                          +254 722 709 590
                        </a>
                      </p>
                    </div>
                    <Button asChild className="mt-6 bg-teal hover:bg-teal/90 text-teal-foreground">
                      <a href="tel:+254722709590">Call for Availability</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support Message */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl mb-6">
                We&apos;re Here to Support You
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Losing a loved one is never easy. At Flashlight Live Events, we understand the pain and stress that
                comes during these times. Our dedicated team is committed to handling all funeral arrangements with the
                utmost care, allowing you to focus on your family and the memories of your loved one.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We serve families throughout Makueni County and are available 24 hours a day, 7 days a week for
                emergency support. Please don&apos;t hesitate to reach out to us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-teal hover:bg-teal/90 text-teal-foreground">
                  <a href="tel:+254722709590">
                    <Phone className="h-5 w-5 mr-2" />
                    +254 722 709 590
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
