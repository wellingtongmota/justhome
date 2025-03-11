import { QuickSearch } from "@/components/hero/quick-search"
import { SearchInput } from "@/components/hero/search-input"
import { ApartmentIcon } from "@/components/icons/apartment-icon"
import { TownHouseIcon } from "@/components/icons/town-house-icon"
import { VillaIcon } from "@/components/icons/villa-icon"

export function Hero() {
  return (
    <section className="animate-fade relative h-[calc(90dvh)] w-full opacity-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero_image.jpg"
        alt="Hero image city"
        className="sticky h-full w-full object-cover object-bottom"
      />
      <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 p-4 text-center text-wrap">
        <div className="border-primary flex place-content-center rounded-full border px-4 py-2 text-xs">
          <h2 className="text-primary uppercase">Let us guide your home</h2>
        </div>

        <h1 className="wrapper-title text-primary tracking-wide">
          Believe in finding it
        </h1>

        <p className="text-primary text-xs">
          Search properties for sale and to rent in the UK
        </p>

        <SearchInput className="mt-4" />

        <div className="space-y-4">
          <h3 className="text-white">What are you looking for?</h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <QuickSearch icon={<VillaIcon />}>Mordern Villa</QuickSearch>
            <QuickSearch icon={<ApartmentIcon />}>Apartment</QuickSearch>
            <QuickSearch icon={<TownHouseIcon />}>Town House</QuickSearch>
          </div>
        </div>
      </div>
    </section>
  )
}
