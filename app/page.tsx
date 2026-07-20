"use client"

import { useState, useRef, useCallback } from "react"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { GuideModal } from "@/components/guide-modal"

export default function Home() {
  const [guideOpen, setGuideOpen] = useState(false)
  const manfaatRef = useRef<HTMLDivElement>(null)

  const scrollToManfaat = useCallback(() => {
    manfaatRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const openGuide = useCallback(() => {
    setGuideOpen(true)
  }, [])

  const closeGuide = useCallback(() => {
    setGuideOpen(false)
  }, [])

  return (
    <main>
      {/* Page 1-2: Hero Section */}
      <HeroSection onScrollToManfaat={scrollToManfaat} />

      {/* Page 3-4: Benefits Section */}
      <div ref={manfaatRef}>
        <BenefitsSection onOpenGuide={openGuide} />
      </div>

      {/* Page 5-9: Guide Modal Carousel */}
      <GuideModal isOpen={guideOpen} onClose={closeGuide} />
    </main>
  )
}
