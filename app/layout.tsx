import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import Navbar from "./components/navbar/navbar"
import ClientOnly from "./components/clientonly"
import RegisterModal from "./components/modals/register-modal"
import ToasterProvider from "./providers/toaster-provider"
import LoginModal from "./components/modals/login-modal"
import getCurrentUser from "./actions/getCurrentUser"
import RentModal from "./components/modals/rent-modal"
import SearchModal from "./components/modals/search-modal"

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
}

const font = DM_Sans({
  subsets: ["latin"],
  weight: "400",
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  )
}
