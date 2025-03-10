import { TCity } from "@/types"
import { CardCities } from "./card-cities"

const cities: TCity[] = [
  {
    img: "/cities/cities_1.jpg",
    name: "Chicago",
    properties: "2 Properties"
  },
  {
    img: "/cities/cities_2.jpg",
    name: "Los Angeles",
    properties: "1 Property"
  },
  {
    img: "/cities/cities_3.jpg",
    name: "Miami",
    properties: "2 Properties"
  },
  {
    img: "/cities/cities_4.jpg",
    name: "Florida",
    properties: "3 Properties"
  },
  {
    img: "/cities/cities_5.jpg",
    name: "New York",
    properties: "8 Properties"
  }
]

export function CitiesProperties() {
  return (
    <div className="wrapper mx-auto flex flex-col gap-6 bg-gray-50 py-8 sm:gap-10 md:py-16">
      <div className="mx-auto text-center">
        <h2 className="text-2xl font-medium sm:text-4xl">
          Find Properties in These Cities
        </h2>
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="sm: grid grid-cols-3 justify-items-center gap-2 sm:gap-4 md:grid-cols-5">
        {cities.map((city) => (
          <CardCities key={city.name} citie={city} />
        ))}
      </div>
    </div>
  )
}
