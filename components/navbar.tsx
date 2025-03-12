import { LogoIcon } from "@/components/icons/logo-icon"
import { NavUser } from "@/components/nav-user"
import { SidebarSheet } from "@/components/sidebar-sheet"
import { Button } from "@/components/ui/button"
import { TLink } from "@/types"
import { Menu } from "lucide-react"
import Link from "next/link"

const links: TLink[] = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Listings",
    url: "/#"
  },
  {
    title: "Members",
    url: "/#"
  },
  {
    title: "Blog",
    url: "/#"
  },
  {
    title: "Pages",
    url: "/#"
  },
  {
    title: "Contact",
    url: "/#"
  }
]

export function Navbar() {
  return (
    <header className="absolute top-6 z-10 mx-auto flex w-full px-4 xl:px-0">
      <div className="mx-auto flex h-14 w-full max-w-screen-xl items-center rounded-full bg-white px-4">
        <div className="basis-1/3">
          <Link href="/">
            <LogoIcon size="32" />
          </Link>
        </div>

        <div className="hidden basis-1/3 items-center md:flex">
          <nav className="flex gap-8">
            {links.map((link) => (
              <Link key={link.title} href={link.url} className="font-medium">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <NavUser className="hidden basis-1/3 justify-end gap-4 xl:flex" />

        <div className="ml-auto flex basis-1/3 justify-end xl:hidden">
          <SidebarSheet links={links}>
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
            </Button>
          </SidebarSheet>
        </div>
      </div>
    </header>
  )
}
