import { TCity } from "@/types"

type CardCitiesProps = {
  citie: TCity
}

export function CardCities({ citie }: CardCitiesProps) {
  const { img, name, properties } = citie
  return (
    <div
      className="animate-fade flex aspect-2/3 w-full max-w-64 flex-col overflow-hidden rounded-md border bg-cover bg-center opacity-0 hover:cursor-pointer hover:shadow-lg"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="h-full w-full truncate bg-linear-to-b from-black/60 to-black/0 p-3 text-sm sm:p-6">
        <div className="space-y-1 text-white">
          <h3 className="text-s font-medium">{name}</h3>
          <p>{properties}</p>
        </div>
      </div>
    </div>
  )
}
