import Container from "@/components/Container"

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14m0 0l-6-6m6 6l-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const TEAMS = [
  {
    name: "AVSEC",
    items: [
      "Dasar Hukum",
      "Security Program",
      "Personel",
      "Peralatan",
      "BA Audit",
      "Laporan / Checklist",
      "SOP",
      "PAS Bandara",
    ],
  },
  {
    name: "PKP-PK",
    items: [
      "Dasar Hukum",
      "Personel",
      "Peralatan",
      "BA Audit",
      "Laporan / Checklist",
      "SOP",
    ],
  },
  {
    name: "Bangland",
    items: [
      "Dasar Hukum",
      "KKOP",
      "Personel",
      "PMS",
      "BA Audit",
      "Laporan / Checklist",
      "SOP",
    ],
  },
  {
    name: "Listrik dan Air",
    items: [
      "Dasar Hukum",
      "Diagram Instalasi",
      "Personel",
      "Peralatan",
      "BA Audit",
      "Laporan / Checklist",
    ],
  },
  {
    name: "A2B",
    items: [
      "Dasar Hukum",
      "Personel",
      "Peralatan",
      "Laporan / Checklist",
      "SOP",
    ],
  },
  {
    name: "ELBAND",
    items: [
      "Dasar Hukum",
      "Personel",
      "Peralatan",
      "BA Audit",
      "Laporan / Checklist",
      "SOP",
    ],
  },
  {
    name: "AMC",
    items: [
      "NAC Apron",
      "ARO",
      "Personel",
      "Slot Time",
      "BA Audit",
      "Laporan / Checklist",
      "SOP",
    ],
  },
  {
    name: "Informasi",
    items: [
      "Tarif Angkutan",
      "SISFOANGUD",
    ],
  },
  {
    name: "Terminal & Hygiene",
    items: [
      "NAC Terminal",
      "Personel",
      "Peralatan",
      "SOP",
      "Laporan / Checklist",
    ],
  },
]

export default function TimKamiSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {TEAMS.map((team) => (
            <div
              key={team.name}
              className="border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* FOTO (PLACEHOLDER) */}
              <div className="h-44 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                Foto Tim
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {team.name}
                </h3>

                <ul className="space-y-2">
                  {team.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between text-sm text-gray-700 hover:text-blue-600 transition cursor-pointer"
                      >
                        <span>{item}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition">
                          <ArrowIcon />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}