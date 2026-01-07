import Link from "next/link"
import Container from "@/components/Container"

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14m0 0l-6-6m6 6l-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ITEMS = [
  {
    no: "01",
    title: "Regulasi Bandar Udara",
    href: "https://drive.google.com/drive/folders/1GGzN7A6ehmQcq2mzF-4SoFNHSCa0PXyy?usp=drive_link",
    border: "border-red-600",
  },
  {
    no: "02",
    title: "Organisasi dan Tata Kerja Kantor Unit Penyelenggara Bandar Udara",
    href: "https://drive.google.com/file/d/14XxtHsyZfpfZcJRNqTIalHdRd6E3u--y/view?usp=drive_link",
    border: "border-orange-500",
  },
  {
    no: "03",
    title: "Master Plan & Renstra",
    subtitle: "RTT Sisi Darat dan Udara",
    href: "https://drive.google.com/drive/folders/1Z391ORtKy-R9341wUoM9jMOWKV8yI1w6?usp=drive_link",
    border: "border-yellow-500",
  },
  {
    no: "04",
    title: "Struktur Organisasi",
    href: "https://drive.google.com/drive/folders/1BvExq6-ybig1FoiB20pJ56voCMoP0rCW?usp=drive_link",
    border: "border-teal-500",
  },
]

export default function DasarHukumSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="space-y-5">
          {ITEMS.map((item) => (
            <Link
              key={item.no}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group block
                rounded-xl border border-neutral-200
                border-l-8 ${item.border}
                bg-neutral-100 px-6 py-5
                transition
                hover:shadow-md
                hover:bg-neutral-50
                cursor-pointer
              `}
            >
              <div className="flex items-center gap-6">
                {/* NUMBER */}
                <div className="text-xl font-bold text-neutral-700">
                  {item.no}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="font-semibold uppercase text-neutral-900">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p className="mt-1 text-sm text-neutral-600">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* ARROW */}
                <div className="text-lg text-neutral-400 transition group-hover:translate-x-1">
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
