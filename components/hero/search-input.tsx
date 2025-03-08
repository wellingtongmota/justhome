import { cn } from "@/lib/utils"
import { PiMagnifyingGlassLight } from "react-icons/pi"

type SearchInputProps = {
  className?: string
}

export default function SearchInput({ className }: SearchInputProps) {
  return (
    <div
      className={cn([
        "focus-within:ring-secondary flex w-full max-w-lg gap-2 overflow-hidden rounded-full bg-white p-1 text-black focus-within:ring-1",
        className
      ])}
    >
      <input
        type="text"
        placeholder="Enter Name, Keywords..."
        className="flex-1 px-4 focus:outline-hidden"
      />
      <button className="bg-secondary hover:bg-secondary/90 grid size-9 cursor-pointer place-content-center rounded-full">
        <PiMagnifyingGlassLight />
      </button>
    </div>
  )
}
