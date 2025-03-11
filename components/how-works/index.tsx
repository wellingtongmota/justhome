import { EstateIcon, KeysIcon, MeetIcon } from "@/components/icons"

type TStep = {
  icon: React.ElementType
  title: string
  description: string
}

const steps: TStep[] = [
  {
    icon: EstateIcon,
    title: "Find Real Estate",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco"
  },
  {
    icon: MeetIcon,
    title: "Meet Realtor",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco"
  },
  {
    icon: KeysIcon,
    title: "Take The Keys",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco"
  }
]

export function HowWorks() {
  return (
    <div className="wrapper mx-auto flex max-w-screen-xl flex-col flex-wrap items-center gap-6 py-8 sm:gap-10 md:flex-row md:py-16">
      <div
        className="aspect-square w-2/3 flex-1 bg-cover md:w-full"
        style={{ backgroundImage: `url('/images/how_works.png')` }}
      />
      <div className="flex-1">
        <div>
          <h2 className="wrapper-title">How It works?</h2>
          <h2 className="wrapper-title">Find a perfect home</h2>
          <p className="max-w-96 pt-2 pb-6 text-sm sm:text-base xl:max-w-xl xl:pb-10 xl:text-xl">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam.
          </p>
        </div>

        <div className="grid space-y-2 xl:space-y-4">
          {steps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <Icon className="size-16 xl:size-20" />

              <div className="space-y-1 xl:space-y-2">
                <h3 className="text-lg font-medium sm:text-xl xl:text-3xl">
                  {title}
                </h3>
                <p className="max-w-96 xl:max-w-xl xl:text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
