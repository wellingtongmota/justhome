import { CardPropertie } from "@/components/featured-properties/card-propertie"
import { TPropertie } from "@/types"

const properties: TPropertie[] = [
  {
    img: "/properties/propertie_1.jpg",
    name: "Luxury Family Home",
    address: "1800-1818 79th St",
    tags: ["FOR SALE", "FEATURED"],
    value: "$395,000",
    rooms: 4,
    bathrooms: 1,
    area: 400
  },
  {
    img: "/properties/propertie_2.jpg",
    name: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
    tags: ["FOR SALE"],
    value: "$280,000",
    rooms: 4,
    bathrooms: 2,
    area: 450
  },
  {
    img: "/properties/propertie_3.jpg",
    name: "North Dillard Street",
    address: "4330 Bell Shoals Rd",
    tags: ["FOR RENT"],
    value: "$250/month",
    rooms: 4,
    bathrooms: 2,
    area: 400
  },
  {
    img: "/properties/propertie_4.jpg",
    name: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
    tags: ["FOR SALE", "FEATURED"],
    value: "$180,000",
    rooms: 4,
    bathrooms: 2,
    area: 450
  },
  {
    img: "/properties/propertie_5.jpg",
    name: "New Apartment Nice Wiew",
    address: "42 Avenue O, Brooklyn",
    tags: ["FOR RENT", "FEATURED"],
    value: "$850/month",
    rooms: 4,
    bathrooms: 1,
    area: 460
  },
  {
    img: "/properties/propertie_6.jpg",
    name: "Diamond Manor Apartment",
    address: "7802 20th Ave, Brooklyn",
    tags: ["FOR SALE", "FEATURED"],
    value: "$259,000",
    rooms: 4,
    bathrooms: 2,
    area: 500
  }
]

// NOTE: remover pb em section
export function FeaturedProperties() {
  return (
    <section className="wrapper mx-auto flex flex-col items-center gap-4 pt-8 pb-8 sm:gap-6 md:pt-16">
      <div className="grid w-full justify-items-center gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {properties.map((propertie) => (
          <CardPropertie key={propertie.name} propertie={propertie} />
        ))}
      </div>
    </section>
  )
}
