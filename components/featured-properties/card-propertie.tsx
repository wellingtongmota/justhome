import { Separator } from "@/components/ui/separator"
import { TPropertie } from "@/types"
import { Bath, Bed, MapPin, SquareDashed } from "lucide-react"
import { TagPropertie } from "./tag-propertie"
import { cn } from "@/lib/utils"

type CardPropertieProps = {
  propertie: TPropertie
  className?: string
  cardInfoClassName?: string
  valueClassName?: string
}

export function CardPropertie({
  propertie,
  className,
  cardInfoClassName,
  valueClassName
}: CardPropertieProps) {
  const { img, name, tags, address, area, bathrooms, rooms, value } = propertie
  return (
    <div
      className={cn([
        "animate-fade flex aspect-square w-full max-w-md flex-col justify-center overflow-hidden rounded-md border bg-cover bg-center p-2 opacity-0 hover:cursor-pointer hover:shadow-lg",
        className
      ])}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex gap-2">
        {tags?.map((tag) => <TagPropertie key={tag} input={tag} />)}
      </div>
      <div
        className={cn([
          "mx-auto mt-auto grid w-full space-y-2 rounded-md p-3",
          cardInfoClassName
        ])}
      >
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-1">
          <MapPin className="size-4" />
          {address}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-1">
          <h3 className={cn(["text-lg font-medium", valueClassName])}>
            {value}
          </h3>

          <div className="flex items-center gap-2">
            <Bed className="size-4" />
            {rooms}
            <Separator orientation="vertical" />
            <Bath className="size-4" />
            {bathrooms}
            <Separator orientation="vertical" />
            <SquareDashed className="size-4" />
            {area}
          </div>
        </div>
      </div>
    </div>
  )
}
