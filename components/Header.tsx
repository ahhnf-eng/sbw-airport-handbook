"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "./Container"
import { useState, useRef, useEffect } from "react"

const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil", hasDropdown: true },
  { label: "Dasar Hukum", href: "/dasar-hukum" },
  { label: "Dokumen Operasi", href: "/dokumen-operasi" },
  { label: "Kinerja", href: "/kinerja" },
]

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 transition-transform duration-200 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()

  const isProfilActive =
  pathname === "/tim-kami" || pathname === "/tata-usaha"

  const [isProfilOpen, setIsProfilOpen] = useState(false)
  const profilRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profilRef.current &&
        !profilRef.current.contains(event.target as Node)
      ) {
        setIsProfilOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


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

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {/* BERANDA — selalu paling kiri */}
          <Link
            href="/"
            className={`
              relative pb-1 transition-all
              ${
                pathname === "/"
                  ? "text-neutral-900 font-bold"
                  : "text-neutral-700 hover:text-neutral-900 hover:font-medium"
              }
            `}
          >
            Beranda
            {pathname === "/" && (
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-neutral-900" />
            )}
          </Link>

          {/* PROFIL DROPDOWN — TANPA UNDERLINE & TANPA BOLD */}
          <div ref={profilRef} className="relative">
            <button
              type="button"
              onClick={() => setIsProfilOpen((prev) => !prev)}
              className={`
                flex items-center gap-1 pb-1 transition-colors font-medium
                ${
                  isProfilActive || isProfilOpen
                    ? "text-neutral-900"
                    : "text-neutral-700 hover:text-neutral-900"
                }
              `}
            >
              Profil
              <ArrowIcon open={isProfilOpen} />
            </button>


            {/* DROPDOWN */}
            <div
              className={`
                absolute left-0 top-full mt-2 w-44 origin-top
                rounded-lg border border-neutral-200 bg-white shadow-lg
                transition-all duration-200
                ${
                  isProfilOpen
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0"
                }
              `}
            >
              <Link
                href="/tim-kami"
                onClick={() => setIsProfilOpen(false)}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 rounded-t-lg"
              >
                Tim Kami
              </Link>

              <Link
                href="/tata-usaha"
                onClick={() => setIsProfilOpen(false)}
                className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 rounded-b-lg"
              >
                Tata Usaha
              </Link>
            </div>
          </div>

          {/* MENU LAIN */}
          {NAV_ITEMS.filter(
            (item) =>
              item.label !== "Beranda" &&
              item.label !== "Profil" &&
              item.label !== "Tim Kami"
          ).map((item) => {
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
                      : "text-neutral-700 hover:text-neutral-900 hover:font-medium"
                  }
                `}
              >
                {item.label}
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
