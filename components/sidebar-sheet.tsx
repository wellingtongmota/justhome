"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { TLink } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NavUser } from "./nav-user"

type SidebarSheetProps = {
  children: React.ReactNode
  links: TLink[]
}

export function SidebarSheet({ children, links }: SidebarSheetProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>{children}</div>
      </SheetTrigger>
      <SheetContent className="z-50">
        <SheetHeader>
          <SheetTitle className="text-xl">Menu</SheetTitle>
          <SheetDescription className="sr-only">Page menu</SheetDescription>
        </SheetHeader>
        <div>
          <NavUser className="flex flex-col gap-4 p-4 xl:hidden" />
          <div className="block md:hidden">
            <nav className="grid gap-4 p-4">
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.title}
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
