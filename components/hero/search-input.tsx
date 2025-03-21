import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

type SearchInputProps = {
  className?: string
}

export function SearchInput({ className }: SearchInputProps) {
  return (
    <div
      className={cn([
        "focus-within:ring-secondary flex w-full max-w-lg gap-2 overflow-hidden rounded-full bg-white p-1 focus-within:ring-1",
        className
      ])}
    >
      <input
        type="text"
        placeholder="Enter Name, Keywords..."
        className="flex-1 px-4 focus:outline-hidden"
      />
      <button className="bg-secondary hover:bg-secondary/90 grid size-9 cursor-pointer place-content-center rounded-full">
        <Search className="size-4" />
      </button>
    </div>
  )
}
