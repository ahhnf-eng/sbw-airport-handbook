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
  { title: "E-PERFORMANCE", href: "eperformance.dephub.go.id/", border: "border-l-blue-500" },
  { title: "RENSTRA", href: "https://drive.google.com/drive/folders/1DQJobR1yagRP2ng0AixK-tePbqj34jKx?usp=drive_link", border: "border-l-indigo-500" },
  { title: "SAKIP / LAKIP", href: "https://drive.google.com/drive/folders/191L1iFaOtxcp0IxB8ThKeod3H6KiQL-g?usp=drive_link", border: "border-l-emerald-500" },
  { title: "EMON SMART DJA", href: "https://e-monev.kemenkeu.go.id/", border: "border-l-teal-500" },
  { title: "SIK", href: "https://sik.dephub.go.id/", border: "border-l-cyan-500" },
  { title: "MANAJEMEN RISIKO", href: "https://drive.google.com/drive/folders/1hE4Zx-heicIhev8VYBtr9k4kJOcxnDwR?usp=drive_link", border: "border-l-amber-500" },
  { title: "UKI", href: "https://drive.google.com/drive/folders/15FzSSHzfP-C7eqAvH6I5dgNU1o6vGkpB?usp=drive_link", border: "border-l-orange-500" },
  { title: "CAPUT SAKTI", href: "https://sakti.kemenkeu.go.id/", border: "border-l-red-500" },
  { title: "EMONEV BAPPENAS", href: "https://e-monev.bappenas.go.id/portal/", border: "border-l-rose-500" },
  { title: "SPIP & PPID", href: "https://drive.google.com/drive/folders/1Aqpk_wjLx0krawaOy7K0IGB8WIePoxR9?usp=drive_link", border: "border-l-purple-500" },
  { title: "E-KINERJA", href: "https://e-kinerja.kemenhub.go.id/", border: "border-l-violet-500" },
  { title: "BANDARA SEHAT", href: "https://drive.google.com/drive/folders/1zccJjCVFWxQ0eCm5Hjg93IpxerAd8nec?usp=drive_link", border: "border-l-lime-500" },
]

export default function KinerjaSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group bg-gray-100 border-l-8 ${item.border}
                rounded-xl p-6 transition
                hover:bg-gray-50 hover:shadow-md
                cursor-pointer
              `}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-gray-800 font-semibold text-lg">
                  {item.title}
                </h3>

                <span className="text-gray-400 group-hover:text-blue-600 transition">
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}