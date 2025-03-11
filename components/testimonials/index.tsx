"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react.es"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { QuoteIcon } from "../icons"

type TTestimonial = {
  clientName: string
  profession: string
  testimonial: string
}

const testimonials: TTestimonial[] = [
  {
    clientName: "Emily Johnson",
    profession: "Marketing Manager",
    testimonial:
      "Justhome made the home-buying process smooth and stress-free! Their team was professional, knowledgeable, and always available to answer my questions. Highly recommended!"
  },
  {
    clientName: "Michael Smith",
    profession: "Software Engineer",
    testimonial:
      "I found my dream home thanks to Justhome! The agents were extremely helpful and understood exactly what I was looking for. The entire process was seamless!"
  },
  {
    clientName: "Sophia Martinez",
    profession: "Interior Designer",
    testimonial:
      "Justhome helped me find the perfect rental apartment. They listened to my needs and provided multiple great options. I'm so happy with my new place!"
  },
  {
    clientName: "James Wilson",
    profession: "Financial Analyst",
    testimonial:
      "Their expertise and market knowledge were invaluable in selling my property. The team at Justhome was supportive throughout, and I got a great deal!"
  },
  {
    clientName: "Olivia Brown",
    profession: "Freelance Photographer",
    testimonial:
      "I was relocating for work and needed a reliable real estate agency. Justhome exceeded my expectations with their efficiency and dedication. Thank you!"
  }
]

export function Testimonials() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    mode: "snap"
  })

  return (
    <div className="wrapper mx-auto bg-[#FFF8F6] py-8 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 p-4 sm:p-8 xl:p-16">
          <h3 className="wrapper-title max-w-96">
            What our customers are saying about us?
          </h3>
          <p className="wrapper-subtitle">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose, injecting humour and the like.
          </p>
          <div className="flex gap-6">
            <div>
              <h4 className="text-2xl font-medium">10m+</h4>
              <p>Happy People</p>
            </div>
            <div>
              <h4 className="text-2xl font-medium">4.88</h4>
              <p>Overall rating</p>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slider de Depoimentos */}
        <div className="overflow-hidden p-4 sm:p-8 xl:p-16">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-lg font-medium xl:text-2xl">
                      {testimonial.clientName}
                    </h5>
                    <p className="text-sm xl:text-base">
                      {testimonial.profession}
                    </p>
                  </div>

                  <QuoteIcon />
                </div>
                <p className="mt-6 text-base xl:text-lg">
                  {testimonial.testimonial}
                </p>
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
          <div className="mt-6 flex gap-4">
            <button
              className="button"
              onClick={() => instanceRef.current?.prev()}
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              className="button"
              onClick={() => instanceRef.current?.next()}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
