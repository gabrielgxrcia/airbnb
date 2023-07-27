import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/navbar"
import ClientOnly from "./components/clientonly"
import Modal from "./components/modals/modal"
import RegisterModal from "./components/modals/register-modal"
import ToasterProvider from "./providers/toaster-provider"

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
