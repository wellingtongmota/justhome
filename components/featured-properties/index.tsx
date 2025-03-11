"use client"

import { CardPropertie } from "@/components/featured-properties/card-propertie"
import { TPropertie, TTag } from "@/types"
import { useState } from "react"
import { FilterButton } from "./filter-button"
import { MoveRight } from "lucide-react"

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

export function FeaturedProperties() {
  const [filter, setFilter] = useState<TTag | "ALL">("ALL")

  const filteredProperties = properties.filter((property) => {
    if (filter === "ALL") return true
    return property?.tags?.includes(filter)
  })

  return (
    <section className="wrapper mx-auto flex flex-col items-center gap-6 py-8 sm:gap-10 md:py-16">
      <div className="space-y-1 text-center">
        <h2 className="wrapper-title">Featured Properties</h2>
        <p className="wrapper-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex gap-4">
        <FilterButton
          filter={filter === "ALL"}
          onClick={() => setFilter("ALL")}
        >
          All Properties
        </FilterButton>
        <FilterButton
          filter={filter === "FOR SALE"}
          onClick={() => setFilter("FOR SALE")}
        >
          For Sale
        </FilterButton>
        <FilterButton
          filter={filter === "FOR RENT"}
          onClick={() => setFilter("FOR RENT")}
        >
          For Rent
        </FilterButton>
      </div>

      <div className="grid w-full justify-items-center gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <CardPropertie
            key={property.name}
            propertie={property}
            cardInfoClassName="bg-white"
            valueClassName="text-destructive"
          />
        ))}
      </div>

      <button className="bg-secondary hover:bg-secondary/90 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium sm:text-base">
        See All Listing
        <MoveRight className="size-4" />
      </button>
    </section>
  )
}
