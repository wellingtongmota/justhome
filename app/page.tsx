import { BestProperties } from "@/components/best-properties"
import { CitiesProperties } from "@/components/cities-properties"
import { FeaturedProperties } from "@/components/featured-properties"
import { Hero } from "@/components/hero/hero"
import { HowWorks } from "@/components/how-works"
import { MeetTeam } from "@/components/meet-team"
import { PopularMarkets } from "@/components/popular-markets"
import { Testimonials } from "@/components/testimonials"
import { WorkWithUs } from "@/components/work-with-us"

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkWithUs />
      <FeaturedProperties />
      <CitiesProperties />
      <HowWorks />
      <Testimonials />
      {/* <BestProperties /> */}
      <MeetTeam />
      <PopularMarkets />
    </div>
  )
}
