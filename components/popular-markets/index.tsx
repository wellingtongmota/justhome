const realEstateLocations = [
  "The Villages, FL real estate",
  "New York, Real estate",
  "Madera, CA real estate",
  "Fontana, CA real estate",
  "Moreno Valley, CA real estate",
  "Aurora, IL real estate",
  "Perris, CA real estate",
  "Minnesota Lake, MN real estate",
  "Woodbridge, VA real estate"
]

export function PopularMarkets() {
  return (
    <div className="wrapper mx-auto gap-4 space-y-4 py-8 sm:space-y-8 md:py-16 xl:gap-8">
      <div className="space-y-1 text-center">
        <h2 className="wrapper-title">Popular Real Estate Markets</h2>
        <p className="wrapper-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="mx-auto flex max-w-screen-xl flex-wrap justify-center gap-2 sm:gap-4">
        {realEstateLocations.map((location, index) => (
          <button className="button text-sm xl:text-base" key={index}>
            {location}
          </button>
        ))}
      </div>
    </div>
  )
}
