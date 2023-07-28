"use client"

import { Range } from "react-date-range"

import Button from "../button"
import Calendar from "../inputs/calendar"

interface ListingReservationProps {
  price: number
  dateRange: Range
  totalPrice: number
  onChangeDate: (value: Range) => void
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
}

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  const totalPriceForSevenNights = getRandomNumber(200, 400)

  return (
    <div
      className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      "
    >
      <div
        className="
      flex flex-row items-center gap-1 p-4"
      >
        <div className="text-2xl font-semibold">R${price}</div>
        <div className="font-light text-neutral-600">noite</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reservar" onClick={onSubmit} />
        <h1 className="text-center text-sm mt-3 text-gray-500">
          Você ainda não será cobrado
        </h1>
        <div>
          <h1 className="mt-6 flex justify-between items-center">
            <span className="underline">R${price} x 7 noites</span>
            <span>R${price * 7}</span>
          </h1>
          <h1 className="mt-3 flex justify-between items-center">
            <span className="underline">Taxa de limpeza</span>
            <span>R${totalPriceForSevenNights}</span>
          </h1>
        </div>
      </div>
      <hr />
      <div
        className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        "
      >
        <div>Total (sem impostos)</div>
        <div>R${totalPrice}</div>
      </div>
    </div>
  )
}

export default ListingReservation
