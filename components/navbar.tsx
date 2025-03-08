import { TLink } from "@/types"
import { LogoIcon } from "./icons/logo-icon"
import Link from "next/link"

const links: TLink[] = [
  {
    title: "Home",
    url: "/#"
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
    <header className="absolute top-4 z-10 mx-auto flex w-full px-4 xl:px-0">
      <div className="mx-auto flex h-14 w-full max-w-screen-xl items-center rounded-full bg-white px-4">
        <div className="basis-1/3">
          <LogoIcon size="32" />
        </div>

        <div className="hidden basis-1/3 items-center lg:flex">
          <nav className="flex gap-8">
            {links.map((link) => (
              <Link key={link.title} href={link.url} className="font-medium">
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden basis-1/3 justify-end lg:flex">User</div>

        <div className="ml-auto block lg:hidden">Menu</div>
      </div>
    </header>
  )
}
