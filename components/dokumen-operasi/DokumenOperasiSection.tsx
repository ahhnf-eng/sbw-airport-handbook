import Link from "next/link"
import Container from "@/components/Container"

const ITEMS = [
  {
    title: "Aerodrome Manual",
    desc: "Pedoman operasional bandar udara.",
    href: "https://drive.google.com/drive/folders/1-SfAalj0rqLG9PHWcxg946tfjwO7RSZT?usp=drive_link",
    border: "border-l-blue-500",
  },
  {
    title: "SIPPN",
    desc: "Sistem Informasi Pelaporan dan Pengawasan.",
    href: "https://drive.google.com/drive/folders/1c4-0JX_-fdIbGVWfUr9r2zhF2GDtOWA2?usp=drive_link",
    border: "border-l-blue-500",
  },
  {
    title: "Andalalin dan Lingkungan",
    desc: "Andalalin dan Lingkungan.",
    href: "https://drive.google.com/drive/folders/1193KmUB4NFntIlA_gf9AFduQxjuu78bb?usp=drive_link",
    border: "border-l-blue-500",
  },
  {
    title: "SBU (Sertifikat Bandar Udara)",
    desc: "Dokumen sertifikasi operasional bandara.",
    href: "https://drive.google.com/drive/folders/1193KmUB4NFntIlA_gf9AFduQxjuu78bb?usp=drive_link",
    border: "border-l-red-500",
  },
  {
    title: "Safety Management System",
    desc: "Sistem manajemen keselamatan penerbangan.",
    href: "https://drive.google.com/drive/folders/1XoeBXCCL3X9lKGaIw1qNn-fv4Vkzf8Ut?usp=drive_link",
    border: "border-l-rose-500",
  },
  {
    title: "Airport Security Program",
    desc: "Program pengamanan bandar udara.",
    href: "https://drive.google.com/drive/folders/1EXfxFGoRBjcp8gQd6uouKz6tfaJ9Q8G4?usp=drive_link",
    border: "border-l-red-500",
  },
  {
    title: "Aeronautical Information Publication",
    desc: "Publikasi Informasi Penerbangan.",
    href: "https://drive.google.com/drive/folders/1nyU5oK58ip8G7HtuiID8UQNACxj-42Ow?usp=drive_link",
    border: "border-l-purple-500",
  },
  {
    title: "Dokumen Standar Pelayanan Jasa Kebandarudaraan",
    desc: "Standar Pelayanan Jasa Kebandarudaraan.",
    href: "https://drive.google.com/drive/folders/1zxMJoPnrkMowEdhda5EZ_g-Abqr9eoNR?usp=drive_link",
    border: "border-l-purple-500",
  },
  {
    title: "Airport Emergency Plan",
    desc: "Rencana penanggulangan keadaan darurat.",
    href: "https://drive.google.com/drive/folders/1vdMRR3WDjMjHguAD_OKkq-NsCviW_wuV?usp=drive_link",
    border: "border-l-purple-500",
  },
  {
    title: "Dokumen Kerjasama",
    desc: "Dokumen Kerjasama.",
    href: "https://drive.google.com/drive/folders/149tHkxio1b_32k1tywLhL9LcsVRgl0AM?usp=drive_link",
    border: "border-l-emerald-500",
  },
]


export default function DokumenOperasiSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((doc, i) => (
            <Link
              key={i}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group cursor-pointer
                rounded-xl border border-neutral-200
                border-l-8 ${doc.border}
                bg-neutral-100 p-6
                transition
                hover:bg-neutral-50
                hover:shadow-md
              `}
            >
              <h3 className="font-semibold text-neutral-900 leading-snug">
                {doc.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-600">
                Dokumen resmi operasional bandara
              </p>

              <div className="mt-4 text-sm font-medium text-neutral-500 transition group-hover:text-neutral-700">
                Buka dokumen →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
