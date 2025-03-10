import { Separator } from "@/components/ui/separator"
import { TPropertie } from "@/types"
import { Bath, Bed, MapPin, SquareDashed } from "lucide-react"
import { TagPropertie } from "./tag-propertie"

type CardPropertieProps = {
  propertie: TPropertie
}

export function CardPropertie({ propertie }: CardPropertieProps) {
  const { img, name, tags, address, area, bathrooms, rooms, value } = propertie
  return (
    <div
      className="animate-fade flex aspect-square w-full max-w-md flex-col justify-center overflow-hidden rounded-md border bg-cover bg-center p-2 opacity-0"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex gap-2">
        {tags?.map((tag) => <TagPropertie key={tag} input={tag} />)}
      </div>
      <div className="mx-auto mt-auto grid w-full space-y-2 rounded-md bg-white p-3">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-1">
          <MapPin className="size-4" />
          {address}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-1">
          <h3 className="text-destructive mr-auto text-lg font-medium">
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
