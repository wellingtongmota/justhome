import { Facebook, Instagram, Linkedin, MoveRight, Twitter } from "lucide-react"
import { LogoIcon } from "../icons/logo-icon"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { AppleIcon } from "../icons/apple-icon"
import { GooglePlayIcon } from "../icons/google-play-icon"

const discoverLinks = [
  "Miami",
  "New York",
  "Chicago",
  "Florida",
  "Los Angeles",
  "San Diego"
]

const quickLinks = [
  "About",
  "Contact",
  "FAQ's",
  "Blog",
  "Pricing Plans",
  "Privacy Policy",
  "Terms & Conditions"
]

export function Footer() {
  return (
    <footer className="wrapper bg-primary mx-auto space-y-4 px-2 py-8 text-white/90 sm:space-y-8">
      <div className="mx-auto flex w-full flex-col gap-4 px-2 md:px-4 xl:gap-8">
        <div className="flex items-center justify-between">
          <LogoIcon size="32" color="white" />

          <div className="flex items-center gap-4">
            <Facebook className="size-4" />
            <Twitter className="size-4" />
            <Instagram className="size-4" />
            <Linkedin className="size-4" />
          </div>
        </div>
        <Separator className="bg-white/10" />

        <div className="grid space-y-10 space-x-4 pt-6 text-sm sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-medium text-white/80">Subscribe</h3>
            <div className="flex gap-2 pt-6">
              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full focus-visible:outline-none"
              />
              <button className="button border-none bg-white/10 backdrop-blur-xl">
                Send <MoveRight className="size-4" />
              </button>
            </div>
            <Separator className="mt-4 bg-white/10" />
            <p className="mt-6">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-white/80">Discover</h3>

            <div className="grid space-y-2 pt-6">
              {discoverLinks.map((link, index) => (
                <Link key={index} href="#">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white/80">Quick Links</h3>

            <div className="grid space-y-2 pt-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href="#">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white/80">Contact Us</h3>
            <div className="pt-6">
              <p>hi@justhome.com</p>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white/80">Our Address</h3>
            <div className="pt-6">
              <p>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-white/80">Get the app</h3>
            <div className="grid space-y-4 pt-6">
              <div className="flex w-full max-w-52 items-center gap-4 rounded-md bg-white/10 p-4 backdrop-blur-xl">
                <AppleIcon />
                <div>
                  <p>Download on the</p>
                  <p className="text-base font-medium">Apple Store</p>
                </div>
              </div>
              <div className="flex w-full max-w-52 items-center gap-4 rounded-md bg-white/10 p-4 backdrop-blur-xl">
                <GooglePlayIcon />
                <div>
                  <p>Get in on</p>
                  <p className="text-base font-medium">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />
        <h4 className="text-center">Copyright © 2024. JustHome</h4>
      </div>
    </footer>
  )
}
