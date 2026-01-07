// components/kinerja/KinerjaHero.tsx
import Container from "@/components/Container"

export default function KinerjaHero() {
  return (
    <section className="bg-[#163E8C]">
      <Container>
        <div className="py-20 max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Kinerja
          </h1>
          <p className="mt-6 text-blue-100 text-lg">
            Informasi dan sistem pendukung pengukuran, evaluasi, dan pelaporan
            kinerja penyelenggaraan bandar udara.
          </p>
        </div>
      </Container>
    </section>
  )
}
