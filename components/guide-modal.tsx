"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GuideSlide {
  title: string
  description: string
  image: string
}

const slides: GuideSlide[] = [
  {
    title: "Menggerakkan Tampilan 360°",
    description:
      "Klik dan tahan layar (atau gunakan mouse) lalu geser ke arah yang diinginkan untuk melihat area sekitar secara menyeluruh.",
    image: "/images/menggerakkan-tampilan.png",
  },
  {
    title: "Menggunakan Hotspot Informasi",
    description:
      "Klik ikon atau titik interaktif (hotspot) yang tersedia pada panorama untuk menampilkan informasi tambahan berupa teks, gambar, audio, atau video.",
    image: "/images/hotspot-informasi.png",
  },
  {
    title: "Berpindah Lokasi",
    description:
      "Gunakan tombol navigasi atau hotspot perpindahan lokasi untuk menuju area lainnya dalam lingkungan kampus.",
    image: "/images/berpindah-lokasi.png",
  },
  {
    title: "Menggunakan Peta Navigasi",
    description:
      "Klik ikon peta untuk melihat denah lokasi dan memilih area yang ingin dikunjungi secara langsung.",
    image: "/images/peta-navigasi.png",
  },
  {
    title: "Mengatur Tampilan (Zoom)",
    description:
      "Gunakan fitur zoom untuk memperbesar atau memperkecil tampilan sesuai kebutuhan agar detail terlihat lebih jelas.",
    image: "/images/zoom.png",
  },
]

interface GuideModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GuideModal({
  isOpen,
  onClose,
}: GuideModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goNext = useCallback(() => {
    setCurrentSlide((prev) =>
      Math.min(prev + 1, slides.length - 1)
    )
  }, [])

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) =>
      Math.max(prev - 1, 0)
    )
  }, [])

  const handleClose = useCallback(() => {
    setCurrentSlide(0)
    onClose()
  }, [onClose])

  if (!isOpen) return null

  const slide = slides[currentSlide]
  const isFirst = currentSlide === 0
  const isLast = currentSlide === slides.length - 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0d1a3a]/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 mx-4 flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-[#f0f0f0] shadow-2xl md:flex-row">

        {/* Area Gambar */}
        <div className="relative flex h-[320px] w-full items-center justify-center bg-white md:h-auto md:w-[45%]">

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-contain p-6"
          />

        </div>

        {/* Konten */}
        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">

          {/* Tombol Tutup */}
          <div className="flex justify-end">
            <button
              onClick={handleClose}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1a2a5e] text-white transition-colors hover:bg-[#2a3a7e]"
            >
              <X className="h-5 w-5" strokeWidth={3} />
            </button>
          </div>

          {/* Isi */}
          <div className="mt-4 flex-1">
            <h3 className="text-xl font-black text-[#1a2a5e] md:text-2xl lg:text-3xl">
              {slide.title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-[#2a3a6e] md:text-lg">
              {slide.description}
            </p>
          </div>

          {/* Tombol Navigasi */}
          <div className="mt-6 flex items-center justify-end gap-3">

            {!isFirst && (
              <button
                onClick={goPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2a5e] text-white hover:bg-[#2a3a7e]"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={3} />
              </button>
            )}

            {!isLast && (
              <button
                onClick={goNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a2a5e] text-white hover:bg-[#2a3a7e]"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={3} />
              </button>
            )}

          </div>

          {/* Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-[#1a2a5e]"
                    : "w-2.5 bg-[#1a2a5e]/30"
                }`}
              />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}