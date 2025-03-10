import { TPropertie } from "@/types"

type CardPropertieProps = {
  propertie: TPropertie
}

export function CardPropertie({ propertie }: CardPropertieProps) {
  const { img, name, tags, address, area, bathrooms, rooms, value } = propertie
  return (
    <div className="animate-fade relative flex aspect-square w-full max-w-md justify-center overflow-hidden rounded-md border opacity-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={name} className="w-full object-cover object-center" />
    </div>
  )
}
