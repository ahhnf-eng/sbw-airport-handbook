"use client"

import { useState } from "react"
import Container from "@/components/Container"

const TABS = [
  "Identitas & Status",
  "Lokasi & Administrasi",
  "Operasional & Keselamatan",
  "Dokumen Pendukung",
  "AirNav Indonesia",
]

export default function DataUmumBandara() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <section className="bg-white py-20">
      <Container>

        {/* MAIN CARD */}
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">

          {/* HEADER */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Data Umum Bandar Udara
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-neutral-600">
              Informasi umum dan karakteristik operasional Bandar Udara
              Sultan Muhammad Kaharuddin.
            </p>
          </div>

          {/* TABS */}
          <div className="mb-6 flex flex-wrap gap-6 border-b">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-sm transition
                  ${
                    activeTab === tab
                      ? "font-semibold text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }
                `}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-neutral-900" />
                )}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div>
            {activeTab === "Identitas & Status" && (
              <InfoCard title="Identitas & Status">
                <Item label="Nama Bandar Udara" value="Sultan Muhammad Kaharuddin" />
                <Item label="Status Operasi" value="Umum" />
                <Item label="Penggunaan" value="Domestik" />
                <Item label="Hierarki" value="P" />
                <Item label="Klasifikasi" value="4C" />
                <Item label="Pengelola" value="UPT Ditjen Hubud" />
              </InfoCard>
            )}

            {activeTab === "Lokasi & Administrasi" && (
              <InfoCard title="Lokasi & Administrasi">
                <Item label="Provinsi" value="Nusa Tenggara Barat" />
                <Item label="Kabupaten / Kota" value="Kabupaten Sumbawa" />
                <Item label="Kecamatan" value="Sumbawa" />
                <Item label="Kelurahan / Desa" value="Lempeh" />
                <Item label="Alamat" value="Jl. Garuda No. 41, Sumbawa Besar" />
                <Item
                  label="Lokasi (ARP)"
                  value={`08° 29' 19" LS / 117° 24' 51" BT`}
                />
              </InfoCard>
            )}

            {activeTab === "Operasional & Keselamatan" && (
              <InfoCard title="Operasional & Keselamatan">
                <Item label="Critical Aircraft" value="ATR 72-600" />
                <Item label="Pesawat Beroperasi" value="ATR 72-600" />
                <Item label="PKP-PK" value="Kategori 5" />
              </InfoCard>
            )}

            {activeTab === "Dokumen Pendukung" && (
              <InfoCard title="Dokumen Pendukung">
                <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  <li>Renstra Bandara</li>
                  <li>LAKIP</li>
                  <li>Rencana Kerja Tahunan</li>
                  <li>Perjanjian Kinerja</li>
                  <li>Rencana Aksi</li>
                  <li>Laporan Tahunan</li>
                  <li>Sertifikat Bandar Udara</li>
                  <li>ASP</li>
                  <li>AEP</li>
                </ul>
              </InfoCard>
            )}

            {activeTab === "AirNav Indonesia" && (
              <InfoCard title="AirNav Indonesia">
                <p className="text-sm leading-relaxed text-neutral-700">
                  Perum LPPNPI Kantor Cabang Pembantu Sumbawa<br />
                  Bandar Udara Sultan Muhammad Kaharuddin<br />
                  Jl. Garuda No. 41, Sumbawa Besar 84312<br />
                  Nusa Tenggara Barat
                </p>
              </InfoCard>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ===================== */
/* SHARED COMPONENTS     */
/* ===================== */

function InfoCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6">
      <h4 className="mb-4 font-semibold text-neutral-900">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-1 gap-1 text-sm sm:grid-cols-3">
      <span className="text-neutral-500">{label}</span>
      <span className="sm:col-span-2 text-neutral-800">{value}</span>
    </div>
  )
}
