import axios from "axios"
import { useRouter } from "next/navigation"
import { useCallback, useMemo } from "react"
import { toast } from "react-hot-toast"

import { SafeUser } from "@/app/types"

import useLoginModal from "./useLoginModal"

interface IUseFavorite {
  listingId: string
  currentUser?: SafeUser | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter()

  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []
    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if (!currentUser) {
        return loginModal.onOpen()
      }

      try {
        let request
        let successMessage

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`)
          successMessage = "Removido com sucesso!"
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`)
          successMessage = "Salvo"
        }

        await request()

        router.refresh()

        const updatedHasFavorited = !hasFavorited
        toast.success(updatedHasFavorited ? "Salvo" : "Removido com sucesso!")
      } catch (error) {
        toast.error("Tente novamente")
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  )

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite
