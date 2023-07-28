import EmptyState from "@/app/components/empty-state"
import ClientOnly from "@/app/components/clientonly"

import getCurrentUser from "@/app/actions/getCurrentUser"
import getReservations from "@/app/actions/getReservations"

import TripsClient from "./trips-client"
import Link from "next/link"

const TripsPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Não autorizado"
          subtitle="Por favor, faça o login!"
        />
      </ClientOnly>
    )
  }

  const reservations = await getReservations({ userId: currentUser.id })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-center">
            <EmptyState
              title="Não há viagens programadas... ainda!"
              subtitle="Hora de tirar o pó das malas e começar a planejar a próxima aventura"
            />
            <Link href={"/"}>
              <button className="text-black border border-black px-6 py-3 rounded-lg">
                Começar a busca
              </button>
            </Link>
          </div>
        </div>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default TripsPage
