"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

const categories = ["All", "Weddings", "Ceremonies", "Graduations", "Funerals", "Setups"]

const galleryImages = [
  //weddings
  {
    src: "/IMG-20251215-WA0050.jpg",
    caption: "Elegant wedding tent setup with decorations",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0051.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0052.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0053.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0054.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0055.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0056.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0058.jpg",
    caption: "Elegant wedding tent setup with white draping",
    category: "Weddings",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.29f.jpeg",
    caption: "Bridal car well decorated for the event",
    category: "Weddings",
  },
  {
    src: "/IMG-20251215-WA0036.jpg",
    caption: "wedding tent setup with tables",
    category: "Weddings",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.34.jpeg",
    caption: "The bride and the bridegroom isle with red carpet",
    category: "Weddings",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.35.jpeg",
    caption: "cake cutting wedding tent",
    category: "Weddings",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.38.jpeg",
    caption: "Bride and bridegroom isle",
    category: "Weddings",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.44.jpeg",
    caption: "Bride and bridegroom isle",
    category: "Weddings",
  },
  //Ceremonies
  {
    src: "/IMG-20251214-WA0021.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0012.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0013.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0014.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0015.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
 {
    src: "/IMG-20251215-WA0016.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0017.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0021.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0022.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0023.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0024.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0026.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0027.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0028.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0029.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0056.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0057.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0058.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0059.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0060.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0061.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
 {
    src: "/IMG-20251215-WA0062.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0063.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0064.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0065.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0066.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0067.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0075.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0084.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0085.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0086.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0087.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251219-WA0009.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251219-WA0010.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/Screenshot 2025-12-22 015040.png",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/Screenshot 2025-12-22 015200.png",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251214-WA0013.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0108.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.43.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.40.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.32.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.31.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.30.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.23.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.19.jpeg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/Screenshot 2025-12-22 015200.png",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251215-WA0117.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251219-WA0005.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251219-WA0006.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251219-WA0007.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  {
    src: "/IMG-20251219-WA0008.jpg",
    caption: "Traditional dowry ceremony arrangement",
    category: "Ceremonies",
  },
  //Funerals
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.35d.jpeg",
    caption: "Respectful funeral tent and seating arrangement",
    category: "Funerals",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.42.jpeg",
    caption: "Dignified funeral flower arrangements",
    category: "Funerals",
  },
  {
    src: "/IMG-20251215-WA0107.jpg",
    caption: "Respectful funeral tent and seating arrangement",
    category: "Funerals",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.12.jpeg",
    caption: "Dignified funeral flower arrangements",
    category: "Funerals",
  },
  {
    src: "/IMG_1812.jpg",
    caption: "Respectful funeral tent and seating arrangement",
    category: "Funerals",
  },
  {
    src: "/IMG_2110.jpg",
    caption: "Dignified funeral flower arrangements",
    category: "Funerals",
  },
  {
    src: "/gallery-funeral-tent-seating-arrangement.jpg",
    caption: "Respectful funeral tent and seating arrangement",
    category: "Funerals",
  },
  {
    src: "/gallery-funeral-flowers-arrangement.jpg",
    caption: "Dignified funeral flower arrangements",
    category: "Funerals",
  },
  {
    src: "/gallery-funeral-tent-seating-arrangement.jpg",
    caption: "Respectful funeral tent and seating arrangement",
    category: "Funerals",
  },
  {
    src: "/gallery-funeral-flowers-arrangement.jpg",
    caption: "Dignified funeral flower arrangements",
    category: "Funerals",
  },
  {
    src: "/gallery-funeral-tent-seating-arrangement.jpg",
    caption: "Respectful funeral tent and seating arrangement",
    category: "Funerals",
  },
  {
    src: "/gallery-funeral-flowers-arrangement.jpg",
    caption: "Dignified funeral flower arrangements",
    category: "Funerals",
  },
  //Setups
  {
    src: "/IMG-20251214-WA0014.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251214-WA0015.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251214-WA0016.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251214-WA0017.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251214-WA0018.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251214-WA0019.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251214-WA0020.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0001.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0002.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0003.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0004.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0005.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0006.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0007.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0008.jpg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0009.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0010.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0011.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0018.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0019.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/IMG-20251215-WA0020.jpg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.00.jpeg",
    caption: "Professional catering buffet setup",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.07.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.22.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.25.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.26.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.28.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.33.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.36.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
  {
    src: "/WhatsApp Image 2025-12-27 at 00.57.40d.jpeg",
    caption: "Event tent interior with ambient lighting",
    category: "Setups",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Gallery</h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our portfolio of events and setups. See the quality and attention to detail we bring to
                every occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 border-b border-border sticky top-[73px] bg-card z-40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 lg:py-16 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxImage(image)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-background">{image.caption}</p>
                  </div>
                </button>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section - Using primary blue */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Want Results Like These?</h2>
            <p className="mt-4 text-primary-foreground/90 max-w-2xl mx-auto">
              Contact us today to discuss your event and let us create something beautiful for you.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-background hover:text-background/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.caption}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-background text-center mt-4 text-lg">{lightboxImage.caption}</p>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
