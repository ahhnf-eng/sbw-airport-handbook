// components/tim-kami/TimKamiHero.tsx
import Container from "@/components/Container"

export default function TimKamiHero() {
  return (
    <section className="bg-[#163E8C]">
      <Container>
        <div className="py-20 max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Tim Kami
          </h1>
          <p className="mt-6 text-blue-100 text-lg">
            Struktur organisasi dan unit kerja di lingkungan
            Bandara Sultan Muhammad Kaharuddin.
          </p>
        </div>
      </Container>
    </section>
  )
}
