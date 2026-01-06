import Image from "next/image"
import Container from "@/components/Container"

const AWARDS = [
  {
    title: "Bandara Idaman",
    year: "2023",
    image: "/awards/award-1.jpg",
  },
  {
    title: "Bandara Sehat",
    year: "2024",
    image: "/awards/award-2.jpg",
  },
  {
    title: "Penghargaan KPPN Kinerja Terbaik Pertama",
    year: "2025",
    image: "/awards/award-3.jpg",
  },
]

export default function AwardSection() {
  return (
    <section className="bg-white py-20">
      <Container>

        {/* OUTER CARD */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-100 p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-10 flex items-start gap-4 max-w-3xl">
            {/* MEDAL ICON (INLINE SVG) */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#003A8F]/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-[#003A8F]"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
              </svg>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900">
                Penghargaan Bandar Udara
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Pengakuan resmi atas komitmen Bandar Udara Sultan Muhammad
                Kaharuddin dalam menjaga standar keselamatan, keamanan,
                dan mutu pelayanan penerbangan.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="group rounded-xl border border-neutral-200 bg-white p-6 transition hover:shadow-sm"
              >
                {/* IMAGE */}
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="text-center">
                  <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                    Tahun {award.year}
                  </p>
                  <h3 className="mt-2 font-semibold text-neutral-900">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
