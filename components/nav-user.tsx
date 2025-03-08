import { PhoneIcon } from "@/components/icons/phone-icon"
import { Button } from "@/components/ui/button"
import { UserIcon } from "@/components/icons/user-icon"
import { cn } from "@/lib/utils"

type NavUserProps = {
  className?: string
}

export function NavUser({ className }: NavUserProps) {
  return (
    <div className={cn(["", className])}>
      <div className="flex items-center space-x-2">
        <PhoneIcon className="" />
        <p className="font-medium">+68 685 88666</p>
        <Button
          variant="outline"
          size="icon"
          className="ml-1 cursor-pointer rounded-full"
        >
          <UserIcon />
        </Button>
      </div>

      <Button
        variant="outline"
        className="cursor-pointer rounded-full font-medium"
      >
        Add Property
      </Button>
    </div>
  )
}
