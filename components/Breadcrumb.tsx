"use client"

import { usePathname } from "next/navigation"

const BREADCRUMB_MAP: Record<
  string,
  { parent: string; parentHref: string; label: string }
> = {
  "/tim-kami": {
    parent: "Profil",
    parentHref: "#",
    label: "Tim Kami",
  },
  "/tata-usaha": {
    parent: "Profil",
    parentHref: "#",
    label: "Tata Usaha",
  },
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const data = BREADCRUMB_MAP[pathname]

  if (!data) return null

  return (
    <nav className="mb-6 text-sm text-neutral-500">
      <div className="flex items-center gap-2">
        <span>{data.parent}</span>
        <span className="text-neutral-400">/</span>
        <span className="font-medium text-neutral-800">
          {data.label}
        </span>
      </div>
    </nav>
  )
}
