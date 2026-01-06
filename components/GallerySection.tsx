import Image from "next/image"
import Container from "@/components/Container"

const GALLERY_IMAGES = [
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
]

export default function GallerySection() {
  return (
    <section className="bg-white py-20">
      <Container>

        {/* HEADER */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold text-neutral-900">
            Galeri Bandar Udara
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Dokumentasi visual fasilitas dan aktivitas operasional
            Bandar Udara Sultan Muhammad Kaharuddin.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
            >
              <Image
                src={src}
                alt={`Galeri Bandara ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Optional overlay (subtle) */}
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
