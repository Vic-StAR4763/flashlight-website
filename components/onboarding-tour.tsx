"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import type { Step } from "react-joyride"

const Joyride = dynamic(() => import("react-joyride"), { ssr: false })

export function OnboardingTour() {
  const [run, setRun] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("flashlight_tour_seen")
    if (!hasSeenTour && pathname === "/") {
      setRun(true)
    }
  }, [pathname])

  const steps: Step[] = [
    {
      target: "body",
      placement: "center",
      content: (
        <div className="text-left">
          <h3 className="font-bold text-lg mb-2">Welcome to Flashlight!</h3>
          <p>Let us show you around our services and how to get in touch.</p>
        </div>
      ),
      disableBeacon: true,
    },
    {
      target: "#mobile-menu-button",
      content: "On mobile, use this menu to explore our full range of services and gallery.",
      placement: "bottom",
    },
    {
      target: "#desktop-nav",
      content: "Quickly navigate between our Event and Funeral service pages.",
      placement: "bottom",
    },
    {
      target: "#services-section",
      content: "Explore our specific offerings, from tents and catering to dignified hearse services.",
      placement: "top",
    },
    {
      target: "#hero-call-button",
      content: "Ready to book? Use our direct call button to reach our team immediately.",
      placement: "bottom",
    },
  ]

  const handleJoyrideCallback = (data: any) => {
    const { status } = data
    const finishedStatuses: string[] = ["finished", "skipped"]
    if (finishedStatuses.includes(status)) {
      setRun(false)
      localStorage.setItem("flashlight_tour_seen", "true")
    }
  }

  if (!run) return null

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      styles={{
        options: {
          primaryColor: "#1E90FF",
          textColor: "#333333",
          zIndex: 10000,
        },
        buttonNext: {
          borderRadius: "8px",
        },
        buttonBack: {
          marginRight: "10px",
        },
      }}
      callback={handleJoyrideCallback}
    />
  )
}
