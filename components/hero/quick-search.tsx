import { cn } from "@/lib/utils"

type QuickSearchProps = {
  className?: string
  icon: React.ReactElement
  children: React.ReactNode
}

export function QuickSearch({ className, icon, children }: QuickSearchProps) {
  return (
    <div
      className={cn([
        "flex cursor-pointer items-center gap-2 rounded-full py-1 pr-4 pl-1 backdrop-blur-xl hover:ring-1 hover:ring-white",
        className
      ])}
    >
      <div className="grid size-10 place-content-center rounded-full bg-white p-2">
        {icon}
      </div>
      <div className="text-xs text-white sm:text-sm">{children}</div>
    </div>
  )
}
