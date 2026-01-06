import Image from "next/image"
import Container from "@/components/Container"

const GALLERY = Array.from({ length: 6 }).map((_, i) => ({
  src: `/gallery/gallery-${i + 1}.jpg`,
}))

export default function GallerySection() {
  return (
    <section className="bg-white py-10">
      <Container>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-100 p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-10 flex items-start gap-4 max-w-3xl">
            {/* ICON */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#003A8F]/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-[#003A8F]"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900">
                Galeri Bandar Udara
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Dokumentasi fasilitas, aktivitas operasional, dan lingkungan
                Bandar Udara Sultan Muhammad Kaharuddin.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-200"
              >
                <Image
                  src={img.src}
                  alt={`Galeri ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
