import Container from "@/components/Container"

const SECTIONS = [
  {
    no: 1,
    title: "Bendahara Pengeluaran",
    color: "bg-teal-600",
    links: [
      { label: "SAKTI", url: "https://sakti.kemenkeu.go.id/" },
      { label: "SPAN INT", url: "https://spanint.kemenkeu.go.id/" },
      { label: "EMON 2022", url: "https://emon2022.dephub.go.id/" },
      { label: "DIGI Kemenkeu", url: "https://digi.kemenkeu.go.id/" },
      { label: "Gaji Kita", url: "https://gajikita-ppnpn.kemenkeu.go.id/" },
    ],
    outputs: [
      { label: "BKU (Buku Kas Umum)", url: "#" },
      { label: "LPJ", url: "#" },
      { label: "Hasil Pemeriksaan Kas", url: "#" },
      { label: "SOP", url: "#" },
    ],
  },
  {
    no: 2,
    title: "Bendahara Penerimaan",
    color: "bg-yellow-500",
    links: [
      { label: "SIMPONI", url: "https://www.simponi.kemenkeu.go.id/" },
      { label: "Dashboard Siasati", url: "https://dashboard-siasati.dephub.go.id/" },
      { label: "SAKTI", url: "https://sakti.kemenkeu.go.id/" },
      { label: "VENBILL", url: "https://venbill.com/" },
    ],
    outputs: [
      { label: "LPJ Bend Penerimaan", url: "#" },
      { label: "Penataan penerimaan & penyetoran", url: "#" },
      { label: "Rekonsiliasi Semester", url: "#" },
      { label: "SOP", url: "#" },
    ],
  },
  {
    no: 3,
    title: "Kepegawaian",
    color: "bg-orange-400",
    links: [
      { label: "SIK", url: "https://sik.dephub.go.id/" },
      { label: "E-Kinerja", url: "https://e-kinerja.kemenhub.go.id/" },
      { label: "ICAP", url: "https://icap.kemenhub.go.id/" },
    ],
    outputs: [
      { label: "Laporan Absensi", url: "#" },
      { label: "Laporan kinerja & disiplin pegawai", url: "#" },
      { label: "DP3", url: "#" },
      { label: "SOP", url: "#" },
      { label: "SK", url: "#" },
    ],
  },
  {
    no: 4,
    title: "Aset",
    color: "bg-blue-400",
    links: [
      { label: "SAKTI", url: "https://sakti.kemenkeu.go.id/" },
      { label: "MONSAKTI", url: "https://monsakti.kemenkeu.go.id/" },
      { label: "SIMAK BMN", url: "#" },
    ],
    outputs: [
      { label: "Laporan permintaan barang", url: "#" },
      { label: "BAR (Berita Acara Rekonsiliasi)", url: "#" },
      { label: "Laporan Penyusutan", url: "#" },
      { label: "SOP", url: "#" },
      { label: "SK", url: "#" },
    ],
  },
  {
    no: 5,
    title: "Perencanaan",
    color: "bg-slate-800",
    links: [
      { label: "E-Planning", url: "https://eplanning.dephub.go.id/" },
    ],
    outputs: [
      { label: "DIPA", url: "#" },
      { label: "POK (Petunjuk Operasional Kegiatan)", url: "#" },
      { label: "Dokumen Perencanaan", url: "#" },
      { label: "SOP", url: "#" },
    ],
  },
  {
    no: 6,
    title: "Kerjasama & Humas",
    color: "bg-red-500",
    links: [
      { label: "ICAP", url: "https://icap.kemenhub.go.id/" },
    ],
    outputs: [
      { label: "Kontrak (MoU)", url: "#" },
      { label: "SKM", url: "#" },
      { label: "Konten Media Sosial", url: "#" },
      { label: "LOCA", url: "#" },
      { label: "LOA", url: "#" },
      { label: "PPID", url: "#" },
      { label: "SOP", url: "#" },
      { label: "BA Audit", url: "#" },
    ],
  },
]

export default function TataUsahaSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="relative space-y-14">

          {/* Vertical line */}
          <div className="absolute left-[40px] top-0 h-full w-px hidden md:block">
            <div className="h-full w-px border-l border-dashed border-neutral-300" />
          </div>

          {SECTIONS.map((item) => (
            <div
              key={item.no}
              className="relative grid md:grid-cols-[80px_1fr_360px] gap-8"
            >
              {/* NODE */}
              <div className="flex justify-center">
                <div
                  className={`z-10 flex h-14 w-14 items-center justify-center rounded-full text-white font-bold shadow-lg ${item.color}`}
                >
                  {item.no}
                </div>
              </div>

              {/* MAIN CARD */}
              <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm transition hover:shadow-md">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-sm">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-500 transition group-hover:scale-125" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* OUTPUT CARD */}
              <div
                className={`rounded-2xl p-6 text-white shadow-md transition hover:shadow-lg ${item.color}`}
              >
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                  Output Kinerja
                </h4>
                <ul className="space-y-2 text-sm">
                  {item.outputs.map((out) => (
                    <li key={out.label}>
                      <a
                        href={out.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-md bg-white/15 px-3 py-1.5 transition hover:bg-white/25"
                      >
                        <span className="group-hover:underline">
                          {out.label}
                        </span>

                        {/* external link icon */}
                        <span className="text-xs opacity-80 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                          ↗
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