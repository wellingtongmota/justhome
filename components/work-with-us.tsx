import { BuyRentIcon, PropertiesIcon, TrustedIcon } from "@/components/icons"

type TReason = {
  icon: React.ElementType
  title: string
  description: string
}

const reasons: TReason[] = [
  {
    icon: PropertiesIcon,
    title: "Wide Range of Properties",
    description:
      "We offer expert legal help for all related property items in Dubai."
  },
  {
    icon: BuyRentIcon,
    title: "Buy or Rent Homes",
    description:
      "We sell your home at the best market price and very quickly as well."
  },
  {
    icon: TrustedIcon,
    title: "Trusted by Thousands",
    description:
      "We offer you free consultancy to get a loan for your new home."
  }
]

export function WorkWithUs() {
  return (
    <div className="wrapper mx-auto flex flex-col items-center gap-6 pt-8 text-center sm:gap-10 md:pt-16">
      <div>
        <h2 className="text-2xl font-medium sm:text-4xl">
          Why You Should Work With Us
        </h2>
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 xl:gap-12 2xl:gap-16">
        {reasons.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="grid justify-items-center gap-2 lg:gap-4 2xl:gap-6"
          >
            <Icon className="size-8 sm:size-14" />
            <h3 className="text-base font-medium sm:text-lg">{title}</h3>
            <p className="max-w-72 text-sm sm:text-base">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
