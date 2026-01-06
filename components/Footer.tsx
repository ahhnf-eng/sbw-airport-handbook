import Container from "./Container"

export default function Footer() {
  return (
    <footer className="mt-20 bg-primary text-white">
      <Container>
        {/* MAIN CONTENT */}
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Info Bandara */}
          <div>
            <h3 className="text-lg font-semibold">
              Bandara Sultan Muhammad Kaharuddin
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Bandara pelayanan publik di wilayah Sumbawa, Nusa Tenggara Barat.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-4 flex items-center gap-4">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/80 transition hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.5V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/80 transition hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5a4.6 4.6 0 0 1 1.7 1.1 4.6 4.6 0 0 1 1.1 1.7c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3a4.6 4.6 0 0 1-1.1 1.7 4.6 4.6 0 0 1-1.7 1.1c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5a4.6 4.6 0 0 1-1.7-1.1 4.6 4.6 0 0 1-1.1-1.7c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3a4.6 4.6 0 0 1 1.1-1.7A4.6 4.6 0 0 1 5.6 2.8c.4-.2 1.1-.4 2.3-.5C8.2 2.2 8.6 2.2 12 2.2zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm6.7-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </a>
            </div>
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

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/20 py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Bandara Sultan Muhammad Kaharuddin.  
          Seluruh hak cipta dilindungi.
        </div>
      </Container>
    </footer>
  )
}
