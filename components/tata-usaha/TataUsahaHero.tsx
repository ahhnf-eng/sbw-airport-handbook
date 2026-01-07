// components/tata-usaha/TataUsahaHero.tsx
import Container from "@/components/Container"

export default function TataUsahaHero() {
  return (
    <section className="bg-[#163E8C]">
      <Container>
        <div className="py-20 max-w-4xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Tata Usaha
          </h1>
          <p className="mt-6 text-blue-100 text-lg">
            Pengelolaan administrasi, keuangan, kepegawaian, aset,
            perencanaan, serta kerjasama dan kehumasan.
          </p>
        </div>
      </Container>
    </section>
  )
}
