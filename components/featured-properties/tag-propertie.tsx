import { TTag } from "@/types"
import { JSX } from "react"

export function TagPropertie({ input }: { input: TTag }) {
  const translations: Record<string, JSX.Element> = {
    "FOR SALE": (
      <div className="bg-primary flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white">
        FOR SALE
      </div>
    ),
    "FOR RENT": (
      <div className="bg-primary flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white">
        FOR RENT
      </div>
    ),
    FEATURED: (
      <div className="bg-secondary flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white">
        FEATURED
      </div>
    )
  }
  return translations[input]
}
