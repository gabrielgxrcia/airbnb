import EmptyState from "@/app/components/empty-state"
import ClientOnly from "@/app/components/clientonly"

import getCurrentUser from "@/app/actions/getCurrentUser"
import getListings from "@/app/actions/getListings"

import PropertiesClient from "./properties-client"

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <EmptyState title="Não autorizado" subtitle="Por favor, faça o login!" />
    )
  }

  const listings = await getListings({ userId: currentUser.id })

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-center">
            <EmptyState
              title="Ainda não há propiedades"
              subtitle="Ao clicar em anunciar seu espaço, você poderá anuncia-lo e ter controle total em propiedades."
            />
          </div>
        </div>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default PropertiesPage
