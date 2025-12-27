"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, MessageCircle, Facebook, Clock, CheckCircle } from "lucide-react"

const services = [
  "Tents & Chairs Hire",
  "Event Decoration",
  "Catering Services",
  "Video & Photography",
  "Hearse Hire",
  "Funeral Setup",
  "Coffin Purchase",
  "Other",
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Using primary blue */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl text-balance">Contact Us</h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
                Ready to plan your event or need assistance? Get in touch with us today. We&apos;re here to help make
                your special moments memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We&apos;d love to hear from you. Reach out to us through any of the following channels or fill out the
                  form to request a quote.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a
                        href="tel:+254722709590"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +254 722 709 590
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Click to call directly</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <a
                        href="https://wa.me/254722709590"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#25D366] transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Quick responses during business hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a
                        href="mailto:mulistica@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        mulistica@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center shrink-0">
                      <Facebook className="h-5 w-5 text-[#1877F2]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Facebook</h3>
                      <a
                        href="https://www.facebook.com/profile.php?id=100047946672639"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                      >
                        Follow us on Facebook
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">See our latest events and updates</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 7:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm text-teal mt-1">24/7 for funeral emergencies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Request Form */}
              <div>
                <Card>
                  <CardContent className="p-6 lg:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                        <p className="text-muted-foreground mb-6">
                          We&apos;ve received your request and will get back to you within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
                      </div>
                    ) : (
                      <>
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Request a Quote</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div>
                            <Label htmlFor="name">Your Name *</Label>
                            <Input
                              id="name"
                              value={formState.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="Enter your full name"
                              required
                              className="mt-1.5"
                            />
                          </div>

                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formState.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="0722 709 590"
                              required
                              className="mt-1.5"
                            />
                          </div>

                          <div>
                            <Label htmlFor="service">Service Needed *</Label>
                            <Select
                              value={formState.service}
                              onValueChange={(value) => handleInputChange("service", value)}
                              required
                            >
                              <SelectTrigger className="mt-1.5">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="date">Event Date</Label>
                            <Input
                              id="date"
                              type="date"
                              value={formState.date}
                              onChange={(e) => handleInputChange("date", e.target.value)}
                              className="mt-1.5"
                            />
                          </div>

                          <div>
                            <Label htmlFor="location">Event Location</Label>
                            <Input
                              id="location"
                              value={formState.location}
                              onChange={(e) => handleInputChange("location", e.target.value)}
                              placeholder="Where is the event?"
                              className="mt-1.5"
                            />
                          </div>

                          <div>
                            <Label htmlFor="message">Additional Details</Label>
                            <Textarea
                              id="message"
                              value={formState.message}
                              onChange={(e) => handleInputChange("message", e.target.value)}
                              placeholder="Tell us more about your event or requirements..."
                              rows={4}
                              className="mt-1.5"
                            />
                          </div>

                          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Quote Request"}
                          </Button>
                        </form>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Locations</h2>
              <p className="mt-4 text-muted-foreground">Visit us at one of our two convenient locations</p>
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
                      <p className="text-sm text-primary mt-2">All services available</p>
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
                      <p className="text-sm text-teal mt-2">Coffins & funeral supplies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
