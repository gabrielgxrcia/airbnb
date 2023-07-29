"use client"

import { AiOutlineMenu } from "react-icons/ai"
import Avatar from "../avatar"
import { useState, useCallback, useEffect, useRef } from "react"
import MenuItem from "./menuitem"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import useLoginModal from "@/app/hooks/useLoginModal"
import { signOut } from "next-auth/react"
import { SafeUser } from "@/app/types"
import useRentModal from "@/app/hooks/useRentModal"
import { useRouter } from "next/navigation"

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const rentModal = useRentModal()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) {
      loginModal.onOpen()
    }
    rentModal.onOpen()
  }, [currentUser, loginModal, rentModal])

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    },
    [setIsOpen]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick)
    } else {
      document.removeEventListener("click", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [isOpen, handleOutsideClick])

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-medium py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Anuncie seu espaço no Airbnb
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm text-zinc-800">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="Viagens"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="Favoritos"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="Reservas"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label="Propiedades"
                />
                <MenuItem
                  onClick={rentModal.onOpen}
                  label="Anuncie seu espaço"
                />
                <hr />
                <MenuItem onClick={() => signOut()} label="Sair da conta" />
              </>
            ) : (
              <>
                <MenuItem onClick={registerModal.onOpen} label="Cadastrar-se" />
                <MenuItem onClick={loginModal.onOpen} label="Entrar" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
