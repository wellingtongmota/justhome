export function Testimonials() {
  return (
    <div className="wrapper mx-auto bg-[#FFF8F6] py-8 md:py-16">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 p-4 sm:p-8 xl:p-16">
          <h3 className="wrapper-title max-w-96">
            What our customers are saying us?
          </h3>
          <p className="wrapper-subtitle">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </p>
        </div>
        {/* TODO: adicionar slider */}
        <div className="p-4 sm:p-8 xl:p-16"></div>
      </div>
    </div>
  )
}
