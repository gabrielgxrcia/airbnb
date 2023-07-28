import EmptyState from "@/app/components/empty-state"
import ClientOnly from "@/app/components/clientonly"

import getCurrentUser from "@/app/actions/getCurrentUser"
import getFavoriteListings from "@/app/actions/getFavoriteListings"

import FavoritesClient from "./favorites-client"
import Link from "next/link"

const ListingPage = async () => {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-center">
            <EmptyState
              title="Ainda não há itens salvos"
              subtitle="Ao buscar, clique no ícone do coração para salvar os lugares e experiências que você mais gostar nos favoritos."
            />
            <Link href={"/"}>
              <button className="text-white border bg-zinc-800 hover:bg-black px-6 py-3 rounded-lg">
                Comece a explorar
              </button>
            </Link>
          </div>
        </div>
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default ListingPage
