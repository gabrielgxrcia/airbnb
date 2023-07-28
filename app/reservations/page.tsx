import EmptyState from "@/app/components/empty-state"
import ClientOnly from "@/app/components/clientonly"

import getCurrentUser from "@/app/actions/getCurrentUser"
import getReservations from "@/app/actions/getReservations"

import TripsClient from "./reservations-client"

const ReservationsPage = async () => {
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

  const reservations = await getReservations({ authorId: currentUser.id })

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Nenhuma reserva encontrada"
          subtitle="Parece que você não tem reservas em suas propriedades."
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default ReservationsPage
