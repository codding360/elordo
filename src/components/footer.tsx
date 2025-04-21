
import { Container } from "./container"
import { motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import {
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
  } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-48 h-16 relative mb-4"
                >
                  <Image
                    src="/placeholder.svg?height=64&width=192"
                    alt="Elordo Group Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </motion.div>
                <p className="text-gray-400 mt-4">Лидер в строительстве элитной недвижимости в Бишкеке</p>
                <div className="flex space-x-4 mt-6">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#0F4024] transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#0F4024] transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Меню</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link href="#about-company" className="text-gray-400 hover:text-white transition-colors">
                      О компании
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                      Проекты
                    </Link>
                  </li>
                  <li>
                    <Link href="#apartments" className="text-gray-400 hover:text-white transition-colors">
                      Квартиры
                    </Link>
                  </li>
                  <li>
                    <Link href="#conditions" className="text-gray-400 hover:text-white transition-colors">
                      Условия
                    </Link>
                  </li>
                  <li>
                    <Link href="#news" className="text-gray-400 hover:text-white transition-colors">
                      Новости
                    </Link>
                  </li>
                  <li>
                    <Link href="#contacts" className="text-gray-400 hover:text-white transition-colors">
                      Контакты
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Проекты</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Nova City
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Южные Ворота
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      New York
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Art City
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Olymp
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-gray-400">Бишкек, ул. Киевская 168</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-gray-400">+996 (XXX) XXX-XXX</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-gray-400">info@elordogroup.kg</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Elordo Group. Все права защищены.</p>
            </div>
          </Container>
        </footer>
    )
}