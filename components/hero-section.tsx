import Image from "next/image"

interface HeroSectionProps {
  onScrollToManfaat: () => void
}

export function HeroSection({ onScrollToManfaat }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8e8e8]">
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] right-[-40px] h-[300px] w-[300px] rounded-full bg-[#1a2a5e] opacity-80 md:h-[400px] md:w-[400px]" />
      <div className="absolute top-[40px] right-[80px] h-[250px] w-[250px] rounded-full bg-[#6b9cf7] opacity-70 md:right-[120px] md:h-[350px] md:w-[350px]" />
      <div className="absolute bottom-[-80px] right-[200px] h-[200px] w-[200px] rounded-full bg-[#a0a0a0] opacity-30 md:h-[300px] md:w-[300px]" />

      {/* Logo UBT & CE UBT - Kiri Atas */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-4 md:top-8 md:left-8 md:gap-6">
        <div className="relative w-16 h-16 md:w-24 md:h-24">
          <Image
            src="/images/logo-ubt.png"
            alt="Logo Universitas Borneo Tarakan"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-16 h-16 md:w-24 md:h-24">
          <Image
            src="/images/logo-ce-ubt.png"
            alt="Logo Computer Engineering UBT"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Konten utama – padding atas ditambah agar tidak tertutup logo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 md:pt-32 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-4">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#1a2a5e] md:text-5xl lg:text-6xl xl:text-7xl">
              Eksplorasi Interaktif Lingkungan Kampus
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-relaxed text-[#2a3a6e] md:text-lg lg:mx-0">
              Rasakan pengalaman menjelajahi kampus secara langsung melalui
              Virtual Tour 360 Interaktif. Putar tampilan, klik setiap titik
              informasi, dan temukan berbagai fasilitas, ruang, serta area
              penting kampus dengan cara yang modern dan mudah.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="/virtualtour/index.htm"
                className="rounded-full border-2 border-[#1a2a5e] bg-[#1a2a5e] px-8 py-3 text-sm font-bold text-[#e8e8e8] transition-colors hover:border-[#2a3a7e] hover:bg-[#2a3a7e]"
              >
                Mulai Jelajah
              </a>

              <button
                onClick={onScrollToManfaat}
                className="rounded-full border-2 border-[#1a2a5e] bg-transparent px-8 py-3 text-sm font-bold text-[#1a2a5e] transition-colors hover:bg-[#1a2a5e] hover:text-[#e8e8e8]"
              >
                Selengkapnya
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex flex-1 items-center justify-center">

            <div className="relative z-10 h-[420px] w-[420px] md:h-[600px] md:w-[600px] lg:h-[750px] lg:w-[750px]">
              <Image
                src="/images/karakter3d.png"
                alt="Karakter 3D menggunakan headset VR"
                fill
                priority
                className="object-contain scale-125"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}