import HeroSection from "@/components/HeroSlideshow"
import Container from "@/components/Container"
import AirportGeneralDataSection from "@/components/AirportGeneralDataSection"
import GallerySection from "@/components/GallerySection"
import AwardSection from "@/components/AwardSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-white py-10">
        <Container>
            <AirportGeneralDataSection />
            <GallerySection />
            <AwardSection />
        </Container>
      </section>
    </>
  )
}
