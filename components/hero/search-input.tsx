import React from "react"

export default function SearchInput() {
  return (
    <div className="focus-within:ring-secondary flex w-full max-w-lg gap-2 overflow-hidden rounded-full bg-white p-1 focus-within:ring-1">
      <input type="text" className="flex-1 px-2 focus:outline-hidden" />
      <button className="bg-secondary size-9 rounded-full text-black">S</button>
    </div>
  )
}
