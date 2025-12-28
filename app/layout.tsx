import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { OnboardingTour } from "@/components/onboarding-tour"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flashlight Live Events | Event & Funeral Services in Makueni County, Kenya",
  description:
    "Trusted provider of event and funeral services in Makueni County, Kenya. Complete solutions for weddings, dowry ceremonies, graduations, parties, and funerals.",
  keywords: "event services, funeral services, Makueni County, Kenya, weddings, hearse hire, coffins, tents, chairs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <OnboardingTour />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
