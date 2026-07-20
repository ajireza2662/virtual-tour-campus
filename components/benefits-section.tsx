import { MapPin, Clock, Navigation, Info } from "lucide-react"
import type { ReactNode } from "react"

interface BenefitsSectionProps {
  onOpenGuide: () => void
}

const benefits: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <MapPin className="h-10 w-10 text-[#1a2a5e]" strokeWidth={2.5} />,
    title: "Mengenal Kampus Secara Nyata",
    description:
      "Pengguna dapat melihat lingkungan kampus secara visual 360\u00B0, sehingga mendapatkan gambaran yang lebih jelas dan realistis.",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#1a2a5e]" strokeWidth={2.5} />,
    title: "Menghemat Waktu dan Biaya",
    description:
      "Tidak perlu datang langsung ke lokasi untuk mengetahui fasilitas dan area kampus.",
  },
  {
    icon: <Navigation className="h-10 w-10 text-[#1a2a5e]" strokeWidth={2.5} />,
    title: "Navigasi yang Mudah Dipahami",
    description:
      "Dengan adanya hotspot dan peta interaktif, pengguna dapat berpindah lokasi dengan cepat dan terarah.",
  },
  {
    icon: <Info className="h-10 w-10 text-[#1a2a5e]" strokeWidth={2.5} />,
    title: "Informasi yang Lengkap",
    description:
      "Setiap lokasi dilengkapi dengan deskripsi, gambar, audio, atau video untuk membantu memahami fungsi dan aktivitas pada area tersebut.",
  },
]

export function BenefitsSection({ onOpenGuide }: BenefitsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1e3270] py-20 lg:py-28">
      {/* Decorative blobs */}
      <div className="absolute top-[-40px] left-[-40px] w-[160px] h-[160px] rounded-full bg-[#6b9cf7] opacity-40 md:w-[220px] md:h-[220px]" />
      <div className="absolute top-[-20px] left-[30px] w-[100px] h-[100px] rounded-full bg-[#1a2a5e] opacity-60 md:w-[140px] md:h-[140px]" />
      <div className="absolute top-[20px] right-[-30px] w-[140px] h-[140px] rounded-full bg-[#6b9cf7] opacity-30 md:w-[200px] md:h-[200px]" />
      <div className="absolute bottom-[-40px] left-[50px] w-[120px] h-[120px] rounded-full bg-[#6b9cf7] opacity-25 md:w-[160px] md:h-[160px]" />
      <div className="absolute bottom-[30px] right-[-20px] w-[100px] h-[100px] rounded-full bg-[#6b9cf7] opacity-20" />

      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V60C360 0 720 0 1080 30C1260 45 1380 60 1440 60V120H0Z"
            fill="#253d82"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-center text-3xl font-black text-[#e8e8e8] md:text-4xl lg:text-5xl xl:text-6xl text-balance">
          {"Manfaat Virtual Tour 360\u00B0"}
        </h2>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-start rounded-2xl bg-[#e8e8e8] p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e8e8] border-2 border-[#1a2a5e]">
                {benefit.icon}
              </div>
              <h3 className="mt-5 text-base font-bold text-[#1a2a5e]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#3a4a7e]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Panduan Pengguna button */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={onOpenGuide}
            className="rounded-full border-2 border-[#e8e8e8] bg-transparent px-10 py-3.5 text-base font-bold text-[#e8e8e8] transition-colors hover:bg-[#e8e8e8] hover:text-[#1a2a5e]"
          >
            Panduan Pengguna
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-[#e8e8e8]/70 md:text-base">
            &copy; 2026 Aji Reza Mazlan | Teknik Komputer
          </p>
        </div>
      </div>
    </section>
  )
}