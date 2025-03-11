"use client"

import { TagPropertie } from "@/components/featured-properties/tag-propertie"
import { Separator } from "@/components/ui/separator"
import { TPropertie } from "@/types"
import { Bath, Bed, MapPin, MoveRight, Play, SquareDashed } from "lucide-react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react.es"
import { ChevronLeft, ChevronRight } from "lucide-react"

const propertie: TPropertie = {
  img: "/images/house_villa_one.jpg",
  name: "Villa One Hyde Park",
  address: "2050 Bloomingdale Ave",
  tags: ["FOR SALE", "FEATURED"],
  value: "$120,000",
  rooms: 4,
  bathrooms: 2,
  area: 350
}

const slides = [
  "/interior/interior_1.jpg",
  "/interior/interior_2.jpg",
  "/interior/interior_3.jpg"
]

export function BestProperties() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 0 },
    mode: "snap"
  })

  return (
    <div className="wrapper bg-foreground mx-auto py-8 text-white md:py-16">
      <div className="space-y-8 px-0 sm:space-y-16 sm:px-2">
        <div className="space-y-1 text-center">
          <h2 className="wrapper-title">Best Properties</h2>
          <p className="wrapper-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mx-auto grid w-5/6 max-w-screen-lg gap-4 md:w-full md:grid-cols-4 md:grid-rows-2">
          {/* BOX 1 */}
          <div
            className="aspect-square overflow-hidden rounded-md bg-cover bg-center md:col-span-2 lg:row-span-2"
            style={{ backgroundImage: `url(${propertie.img})` }}
          >
            <div className="flex h-full w-full flex-col bg-linear-to-t from-black/70 via-black/0 to-black/0 p-4">
              <div className="flex gap-2">
                {propertie.tags?.map((tag) => (
                  <TagPropertie key={tag} input={tag} />
                ))}
              </div>

              <div className="mt-auto grid w-full space-y-1">
                <h3 className="font-medium">{propertie.name}</h3>
                <div className="flex items-center gap-1">
                  <MapPin className="size-4" />
                  {propertie.address}
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <h3 className="text-lg font-medium">{propertie.value}</h3>

                  <div className="flex items-center gap-2">
                    <Bed className="size-4" />
                    {propertie.rooms}
                    <Separator orientation="vertical" />
                    <Bath className="size-4" />
                    {propertie.bathrooms}
                    <Separator orientation="vertical" />
                    <SquareDashed className="size-4" />
                    {propertie.area}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="relative aspect-video overflow-hidden rounded-md md:col-span-2 md:aspect-auto">
            <div
              ref={sliderRef}
              className="keen-slider h-full w-full overflow-hidden"
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide})` }}
                ></div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between p-2">
              <button
                className="button border-none backdrop-blur-xl"
                onClick={() => instanceRef.current?.prev()}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                className="button border-none backdrop-blur-xl"
                onClick={() => instanceRef.current?.next()}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {/* BOX 3 */}
          <div
            className="flex aspect-video items-center justify-center overflow-hidden rounded-md bg-cover bg-center p-6 md:col-span-1 md:aspect-square"
            style={{ backgroundImage: `url('/images/bg_video.jpg')` }}
          >
            <button className="button border-none bg-black/50 !p-3">
              <Play className="size-4" />
            </button>
          </div>

          {/* BOX 4 */}
          <div className="bg-secondary text-foreground flex aspect-video flex-col rounded-md p-6 md:col-span-1 md:aspect-square">
            <h4 className="text-xl font-medium md:text-3xl">280+</h4>
            <p className="pt-1">Properties</p>
            <p className="truncate pt-4 text-sm">
              Explore our wide variety of properties to fid your dream home
              today
            </p>

            <button className="button mt-auto ml-auto border-none bg-white !p-2">
              <MoveRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
