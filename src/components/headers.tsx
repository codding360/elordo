import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const NAVIGATIONS = [
    {
        title: "Главная", 
        href: "#main-section"
    },
    {
        title: "О компании", 
        href: "#company"
    }, 
    {
        title: "Проекты", 
        href: "#projects"
    }, 
    {
        title: "Квартиры", 
        href: "#apartments"
    }, 
    {
            
        title: "Условия", 
        href: "#conditions"
    }, 
    {
        title: "Новости", 
        href: "#news"
    }, 
    {
        title: "Контакты", 
        href: "#contacts"
    }
]

export function Headers() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
      
    return (
        <header
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-40 h-12">
                <Image
                  src="/placeholder.svg?height=48&width=160&text=Elordo"
                  alt="Elordo Group Logo"
                  fill
                  className={`object-contain transition-all ${isScrolled ? "" : "brightness-0 invert"}`}
                />
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATIONS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-900 hover:text-[#0F4024]" : "text-white hover:text-white/80"}`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="#contacts"
                className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                +996 (XXX) XXX-XXX
              </Link>
              <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Заказать звонок</Button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <MenuIcon className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {NAVIGATIONS.map(
                    (item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-lg font-medium text-gray-900 hover:text-[#0F4024] transition-colors py-2 border-b border-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                </nav>
                <div className="mt-8">
                  <p className="text-lg font-medium text-gray-900 mb-4">+996 (XXX) XXX-XXX</p>
                  <Button className="w-full bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Заказать звонок</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    )
}