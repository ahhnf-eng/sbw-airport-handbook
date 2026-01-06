"use client"

import ImageSlideshow from "@/components/ImageSlideshow"

const HERO_IMAGES = [
  "/hero/airport-1.jpg",
  "/hero/airport-2.jpg",
  "/hero/airport-3.jpg",
]

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#003A8F]">
      <div className="grid min-h-[440px] grid-cols-1 md:grid-cols-2">

        {/* TEXT */}
        <div className="flex items-center px-8 py-16 text-white md:px-16">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Handbook Bandara
              <br />
              Sultan Muhammad Kaharuddin
            </h1>

            <p className="mt-6 text-white/85">
              Data bandara terintegrasi yang mendukung pengelolaan operasional
              dan non-operasional, sekaligus menjadi panduan praktis bagi
              kepala bandara.
            </p>

            <a className="mt-8 inline-flex rounded bg-white px-5 py-3 text-sm font-semibold text-[#003A8F]">
              Baca Handbook ↗
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative h-full overflow-hidden">
          <ImageSlideshow images={HERO_IMAGES} className="h-full" />
        </div>
      </div>
    </section>
  )
}
