import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-neutral-100 text-neutral-800">
        <Header />
        <main className="pt-[96px]">
  {children}
</main>

        <Footer />
      </body>
    </html>
  )
}
