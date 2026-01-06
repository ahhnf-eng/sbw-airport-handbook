import HeroSection from "@/components/HeroSlideshow"
import Container from "@/components/Container"
import DataUmumBandara from "@/components/DataUmumBandara"
import GallerySection from "@/components/GallerySection"
import AwardSection from "@/components/AwardSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-white py-20">
        <Container>
            <DataUmumBandara />
            <GallerySection />
            <AwardSection />
        </Container>
      </section>
    </>
  )
}
