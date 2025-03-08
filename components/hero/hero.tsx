import { cn } from "@/lib/utils"
import SearchInput from "./search-input"

export function Hero() {
  return (
    <section className="animate-fade relative h-[calc(90dvh)] w-full opacity-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero_image.jpg"
        alt="Hero image city"
        className="sticky h-full w-full object-cover object-top"
      />
      <div className="text-primary absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 p-4 text-center text-wrap">
        <div className="border-primary flex place-content-center rounded-full border px-4 py-2 text-xs">
          <h2 className="uppercase">Let us guide your home</h2>
        </div>

        <h1 className="lg:6xl text-4xl tracking-wide md:text-5xl">
          Believe in finding it
        </h1>

        <p className="text-xs">
          Search properties for sale and to rent in the UK
        </p>

        <SearchInput className="mt-4" />
      </div>
    </section>
  )
}
