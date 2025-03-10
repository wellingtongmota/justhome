import { cn } from "@/lib/utils"

type FilterButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
  filter: boolean
}

export function FilterButton({
  children,
  className,
  filter,
  ...props
}: FilterButtonProps) {
  return (
    <button
      className={cn([
        "cursor-pointer px-4 py-2 text-sm font-medium sm:text-base",
        className,
        filter && "border-primary rounded-full border-1 bg-[#FFF8F6]"
      ])}
      {...props}
    >
      {children}
    </button>
  )
}
