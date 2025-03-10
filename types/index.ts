export type TLink = {
  title: string
  url: string
}

export type TTag = "FOR SALE" | "FEATURED" | "FOR RENT"

export type TPropertie = {
  tags?: Array<TTag>
  img: string
  name: string
  address: string
  value: string
  rooms: number
  bathrooms: number
  area: number
}
