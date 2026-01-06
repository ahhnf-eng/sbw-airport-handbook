import Container from "./Container"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Info Bandara */}
          <div>
            <h3 className="font-semibold text-lg">
              Bandara Sultan Muhammad Kaharuddin
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Bandara pelayanan publik di wilayah Sumbawa, Nusa Tenggara Barat.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>📍 Sumbawa Besar, NTB</li>
              <li>☎️ (0371) 123456</li>
              <li>✉️ info@bandarasumbawa.go.id</li>
            </ul>
          </div>

          {/* Instansi */}
          <div>
            <h4 className="font-semibold">Instansi</h4>
            <p className="mt-3 text-sm text-white/80">
              Handbook resmi sebagai pedoman operasional dan standar kerja
              Bandara Sultan Muhammad Kaharuddin.
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs text-white/70">
          Dokumen ini digunakan sebagai referensi internal dan dapat diperbarui
          sesuai kebijakan yang berlaku.
        </p>
      </Container>
    </footer>
  )
}
