"use client"

import { useRouter } from "next/navigation"

import Button from "./button"
import Heading from "./heading"

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Nenhuma correspondência exata",
  subtitle = "Tente alterar ou remover alguns de seus filtros ou ajustar a região da busca.",
  showReset,
}) => {
  const router = useRouter()

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remover todos filtros"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  )
}

export default EmptyState
