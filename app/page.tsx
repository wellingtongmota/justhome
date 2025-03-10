import { CitiesProperties } from "@/components/cities-properties"
import { FeaturedProperties } from "@/components/featured-properties"
import { Hero } from "@/components/hero/hero"
import { WorkWithUs } from "@/components/work-with-us"

export default function Home() {
  return (
    <div>
      <Hero />
      <WorkWithUs />
      <FeaturedProperties />
      <CitiesProperties />
    </div>
  )
}
