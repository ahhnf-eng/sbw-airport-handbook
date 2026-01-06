"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "./Container"

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Dasar Hukum", href: "/dasar-hukum" },
  { label: "Dokumen Operasi", href: "/dokumen-operasi" },
  { label: "Kinerja", href: "/kinerja" },
  { label: "Tim Kami", href: "/tim-kami" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-neutral-200 shadow-sm">
      <Container>
        <div className="flex h-[96px] items-center justify-between">


          {/* BRAND */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <Image
                src="/logo-kemenhub.png"
                alt="Logo Kementerian Perhubungan Republik Indonesia"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            <p className="font-semibold text-neutral-900 leading-tight">
              Handbook UPBU
              <br />
              Sultan Muhammad Kaharuddin
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative pb-1 transition-all
                    ${
                      isActive
                        ? "text-neutral-900 font-bold"
                        : "text-neutral-700 font-normal hover:text-neutral-900 hover:font-medium"
                    }
                  `}
                >
                  {item.label}

                  {/* ACTIVE UNDERLINE ONLY */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-neutral-900" />
                  )}
                </Link>
              )
            })}
          </nav>

        </div>
      </Container>
    </header>
  )
}
