"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, inView } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Check,
  Star,
  ArrowRight,
  Calendar,
  Clock,
  Building,
  ChevronDown,
  Play,
  X,
  MenuIcon,
  Home,
  Trophy,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const slideInFromLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const slideInFromRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
      title: "Лидер в строительстве элитной недвижимости",
      subtitle: "11 лет успешной работы",
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop",
      title: "Создаем пространства для комфортной жизни",
      subtitle: "Инновационные решения и современные технологии",
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
      title: "Квартиры премиум-класса в центре города",
      subtitle: "Эксклюзивные предложения для ценителей комфорта",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const news = [
    {
      title: "Открытие нового жилого комплекса Nova City",
      date: "15 марта 2023",
      image: "/placeholder.svg?height=400&width=600&text=Nova+City",
      excerpt:
        "Мы рады сообщить об успешном завершении строительства и открытии нового жилого комплекса Nova City в центре Бишкека.",
    },
    {
      title: "Elordo Group получила награду «Застройщик года»",
      date: "2 февраля 2023",
      image: "/placeholder.svg?height=400&width=600&text=Award",
      excerpt:
        "Наша компания была признана лучшим застройщиком года по версии престижной премии в области недвижимости.",
    },
    {
      title: "Старт продаж квартир в ЖК «Южные Ворота»",
      date: "10 января 2023",
      image: "/placeholder.svg?height=400&width=600&text=South+Gates",
      excerpt:
        "Открыты продажи квартир в новом жилом комплексе «Южные Ворота». Специальные условия для первых покупателей.",
    },
  ]

  const apartments = [
    {
      type: "1-комнатная",
      area: "45-60",
      price: "от 50 000",
      image: "/placeholder.svg?height=400&width=600&text=1-Room",
    },
    {
      type: "2-комнатная",
      area: "65-85",
      price: "от 75 000",
      image: "/placeholder.svg?height=400&width=600&text=2-Room",
    },
    {
      type: "3-комнатная",
      area: "90-120",
      price: "от 100 000",
      image: "/placeholder.svg?height=400&width=600&text=3-Room",
    },
    {
      type: "Пентхаус",
      area: "150-200",
      price: "от 200 000",
      image: "/placeholder.svg?height=400&width=600&text=Penthouse",
    },
  ]

  const faqs = [
    {
      question: "Какие документы нужны для покупки квартиры?",
      answer:
        "Для покупки квартиры вам понадобится паспорт, ИНН и документы, подтверждающие вашу платежеспособность. Наши менеджеры помогут вам подготовить все необходимые документы и проведут через весь процесс покупки.",
    },
    {
      question: "Как происходит процесс покупки в рассрочку?",
      answer:
        "При покупке в рассрочку вы вносите первоначальный взнос (обычно от 30% стоимости), после чего мы заключаем договор рассрочки. Оставшуюся сумму вы выплачиваете равными частями в течение согласованного срока (до 24 месяцев) без процентов.",
    },
    {
      question: "Можно ли посмотреть квартиру перед покупкой?",
      answer:
        "Да, конечно. Мы организуем для вас просмотр квартиры в удобное время. Если дом еще строится, вы можете посетить наш офис продаж, где представлены макеты квартир и виртуальные туры по будущим помещениям.",
    },
    {
      question: "Какие гарантии дает застройщик?",
      answer:
        "Мы предоставляем гарантию на конструктивные элементы здания сроком на 5 лет и на инженерные системы сроком на 3 года. Все наши объекты строятся с соблюдением строгих стандартов качества и проходят многоуровневый контроль.",
    },
    {
      question: "Когда происходит передача ключей?",
      answer:
        "Передача ключей происходит после полной оплаты стоимости квартиры и подписания акта приема-передачи. Обычно это происходит в течение 30 дней после получения разрешения на ввод объекта в эксплуатацию.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              {["Главная", "О компании", "Проекты", "Квартиры", "Условия", "Новости", "Контакты"].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-900 hover:text-[#0F4024]" : "text-white hover:text-white/80"}`}
                >
                  {item}
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
                  {["Главная", "О компании", "Проекты", "Квартиры", "Условия", "Новости", "Контакты"].map(
                    (item, index) => (
                      <Link
                        key={index}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-lg font-medium text-gray-900 hover:text-[#0F4024] transition-colors py-2 border-b border-gray-100"
                      >
                        {item}
                      </Link>
                    ),
                  )}
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="главная">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroSlides[currentSlide].image || "/placeholder.svg"}
              alt="Modern residential complex"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>

        <div className="container relative z-20 text-white px-4 md:px-6">
          <div className="flex flex-col items-start gap-8 max-w-3xl">

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-2xl font-medium"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white px-8 py-6 text-lg rounded-full">
                Выбрать квартиру
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 h-5 w-5 fill-white" />
                Смотреть видео
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video bg-black"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Elordo Group Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Banner */}
      <section className="py-12 md:py-16 bg-[#0F4024] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Building className="h-6 w-6" />, number: 17, text: "жилых комплексов" },
              { icon: <Home className="h-6 w-6" />, number: 3500, text: "счастливых семей" },
              { icon: <Clock className="h-6 w-6" />, number: 11, text: "лет на рынке" },
              { icon: <span>№</span>, number: 1, text: "застройщик года" },
            ].map((stat, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              })

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-4"
                >                 
                  <div>
                    <p className="text-3xl md:text-4xl font-bold bg-white/10 flex items-center justify-center gap-3 rounded-full px-4 py-2">
                      {stat.icon}
                      {inView && (
                        <CountUp
                          end={stat.number}
                          duration={2}
                          delay={0.5}
                          suffix={index === 1 ? "+" : ""}
                        />
                      )}

                    </p>
                    <p className="text-sm md:text-base text-white/80 mt-2">{stat.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-white" id="о-компании">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromLeft}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop"
                    alt="Elordo Group Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">Центральный офис Elordo Group</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromRight}
              className="flex flex-col gap-6"
            >
              <div>
                <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">О компании</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Создаем пространства для <span className="text-[#0F4024]">комфортной жизни</span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Elordo Group — ведущая строительная компания в Бишкеке, специализирующаяся на возведении элитной
                  недвижимости. Мы создаем не просто здания, а пространства для комфортной и качественной жизни.
                </p>
                <p className="text-gray-600 mb-6">
                  За 11 лет работы мы построили 17 жилых комплексов, в которых сегодня проживает более 3500 семей. Наша
                  миссия — создавать современные, комфортные и безопасные дома, которые станут надежным вложением для
                  наших клиентов.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Качество", text: "Используем только проверенные материалы и современные технологии" },
                  { title: "Надежность", text: "Все объекты сдаются в срок с полным пакетом документов" },
                  { title: "Комфорт", text: "Продуманные планировки и развитая инфраструктура" },
                  { title: "Безопасность", text: "Охраняемая территория и современные системы безопасности" },
                ].map((item, index) => (
                  <div key={index} className="p-4 border border-gray-100 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white w-fit mt-4">
                Подробнее о компании
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromLeft}
              className="order-2 lg:order-1 flex flex-col gap-6"
            >
              <div>
                <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 mb-4">Флагманский проект</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Жилой комплекс <span className="text-[#0F4024]">Nova City</span>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Современный жилой комплекс в самом сердце Бишкека, сочетающий в себе инновационные технологии,
                  продуманные планировки и развитую инфраструктуру.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Расположение", value: "ул. Токтогула, 125" },
                    { label: "Статус", value: "Сдан" },
                    { label: "Квартиры", value: "1-4 комнатные" },
                    { label: "Площадь", value: "45-200 м²" },
                  ].map((detail, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-sm text-gray-500">{detail.label}</span>
                      <span className="font-medium text-gray-900">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-900">Преимущества</h3>
                <div className="space-y-3">
                  {[
                    "Подземный паркинг на 200 машиномест",
                    "Закрытая охраняемая территория",
                    "Детские и спортивные площадки",
                    "Коммерческие помещения на первом этаже",
                    "Современные инженерные системы",
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#0F4024] mr-2 mt-0.5 shrink-0" />
                      <p className="text-gray-600">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Выбрать квартиру</Button>
                <Button variant="outline" className="border-[#0F4024] text-[#0F4024]">
                  Записаться на просмотр
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInFromRight}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop"
                    alt="Nova City Residential Complex"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full w-16 h-16"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="h-8 w-8 fill-white" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-20 bg-white" id="проекты">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">Наши проекты</Badge>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Жилые комплексы
              </motion.h2>
              <p className="text-gray-600 mt-4 max-w-2xl">
                Мы создаем не просто дома, а целые экосистемы для комфортной жизни. Каждый наш проект — это уникальное
                сочетание современной архитектуры, продуманных планировок и развитой инфраструктуры.
              </p>
            </div>
            <Button variant="link" className="text-[#0F4024] mt-4 md:mt-0">
              Все проекты
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="bg-gray-100 p-1">
              <TabsTrigger value="all" className="rounded-full">
                Все проекты
              </TabsTrigger>
              <TabsTrigger value="completed" className="rounded-full">
                Сданные
              </TabsTrigger>
              <TabsTrigger value="construction" className="rounded-full">
                Строящиеся
              </TabsTrigger>
              <TabsTrigger value="planned" className="rounded-full">
                Планируемые
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[
                  {
                    name: "Nova City",
                    status: "Сдан",
                    address: "ул. Токтогула, 125",
                    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
                  },
                  {
                    name: "Южные Ворота",
                    status: "Строится",
                    address: "ул. Ахунбаева, 98",
                    image:
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "New York",
                    status: "Сдан",
                    address: "ул. Киевская, 210",
                    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "Art City",
                    status: "Строится",
                    address: "ул. Манаса, 54",
                    image:
                      "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "Olymp",
                    status: "Сдан",
                    address: "ул. Байтик Баатыра, 36",
                    image:
                      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2926&auto=format&fit=crop",
                  },
                  {
                    name: "Академия",
                    status: "Строится",
                    address: "ул. Чуй, 156",
                    image:
                      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2940&auto=format&fit=crop",
                  },
                ].map((project, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group"
                    >
                      <Card className="overflow-hidden h-full border-none shadow-lg">
                        <div className="relative h-64">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <Badge
                            className={`absolute top-4 right-4 ${
                              project.status === "Сдан" ? "bg-[#0F4024]" : "bg-amber-500"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
                          <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{project.address}</span>
                          </div>
                          <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                            Подробнее
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="completed" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Nova City",
                    status: "Сдан",
                    address: "ул. Токтогула, 125",
                    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
                  },
                  {
                    name: "New York",
                    status: "Сдан",
                    address: "ул. Киевская, 210",
                    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "Olymp",
                    status: "Сдан",
                    address: "ул. Байтик Баатыра, 36",
                    image:
                      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2926&auto=format&fit=crop",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full border-none shadow-lg">
                      <div className="relative h-64">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute top-4 right-4 bg-[#0F4024]">{project.status}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{project.address}</span>
                        </div>
                        <Button className="w-full bg-[#0F4024] hover:bg-[#0a2e1a] text-white">
                          Подробнее
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="construction" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Южные Ворота",
                    status: "Строится",
                    address: "ул. Ахунбаева, 98",
                    image:
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "Art City",
                    status: "Строится",
                    address: "ул. Манаса, 54",
                    image:
                      "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "Академия",
                    status: "Строится",
                    address: "ул. Чуй, 156",
                    image:
                      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2940&auto=format&fit=crop",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full border-none shadow-lg">
                      <div className="relative h-64">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute top-4 right-4 bg-amber-500">{project.status}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{project.address}</span>
                        </div>
                        <Button className="w-full bg-[#0F4024] hover:bg-[#0a2e1a] text-white">
                          Подробнее
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="planned" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Manhattan",
                    status: "Планируется",
                    address: "ул. Исанова, 45",
                    image:
                      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2940&auto=format&fit=crop",
                  },
                  {
                    name: "Green Park",
                    status: "Планируется",
                    address: "ул. Горького, 120",
                    image:
                      "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2940&auto=format&fit=crop",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full border-none shadow-lg">
                      <div className="relative h-64">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute top-4 right-4 bg-blue-500">{project.status}</Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{project.address}</span>
                        </div>
                        <Button className="w-full bg-[#0F4024] hover:bg-[#0a2e1a] text-white">
                          Подробнее
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button variant="outline" className="border-[#0F4024] text-[#0F4024]">
              Загрузить еще
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Apartments */}
      <section className="py-20 bg-gray-50" id="квартиры">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">Квартиры</Badge>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Выберите свою идеальную квартиру
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем различные варианты планировок, от компактных студий до просторных пентхаусов. Каждая
              квартира спроектирована с учетом современных требований к комфорту и функциональности.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {apartments.map((apartment, index) => (
              <motion.div key={index} variants={fadeIn}>
                <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }} className="group">
                  <Card className="overflow-hidden h-full border-none shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={apartment.image || "/placeholder.svg"}
                        alt={apartment.type}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{apartment.type}</h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Площадь:</span>
                          <span className="font-medium text-gray-900">{apartment.area} м²</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Цена:</span>
                          <span className="font-medium text-gray-900">{apartment.price} $</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Подробнее</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Не можете выбрать подходящий вариант?</h3>
                <p className="text-gray-600 mb-6">
                  Наши специалисты помогут вам подобрать идеальную квартиру, исходя из ваших предпочтений и бюджета.
                  Оставьте заявку, и мы свяжемся с вами в ближайшее время.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Оставить заявку</Button>
                  <Button variant="outline" className="border-[#0F4024] text-[#0F4024]">
                    Скачать каталог
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/placeholder.svg?height=200&width=300&text=Catalog"
                  alt="Каталог квартир"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Conditions */}
      <section className="py-20 bg-white" id="условия">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">Условия покупки</Badge>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Удобные способы покупки
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем различные варианты оплаты, чтобы сделать покупку квартиры максимально доступной и комфортной
              для вас.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "%",
                title: "Рассрочка без процентов",
                description: "Выгодные условия рассрочки без переплат на срок до 24 месяцев",
                details: [
                  "Первоначальный взнос от 30%",
                  "Срок рассрочки до 24 месяцев",
                  "Без скрытых комиссий",
                  "Гибкий график платежей",
                ],
              },
              {
                icon: "$",
                title: "100% оплата со скидкой",
                description: "Получите существенную скидку при полной оплате стоимости квартиры",
                details: [
                  "Скидка до 10% от стоимости",
                  "Быстрое оформление документов",
                  "Приоритетный выбор квартиры",
                  "Специальные бонусы от компании",
                ],
              },
              {
                icon: "↔",
                title: "Бартер",
                description: "Возможность обмена на автомобили, квартиры или земельные участки",
                details: [
                  "Индивидуальная оценка вашего имущества",
                  "Возможность доплаты",
                  "Юридическое сопровождение сделки",
                  "Быстрое оформление документов",
                ],
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-2 border-[#0F4024]/10 h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-[#0F4024]/10 flex items-center justify-center mb-6">
                        <span className="text-[#0F4024] text-2xl font-bold">{item.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mb-6">{item.description}</p>
                      <div className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-[#0F4024] mr-2 mt-0.5 shrink-0" />
                            <p className="text-gray-600 text-sm">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Нужна консультация по условиям покупки? Наши специалисты готовы ответить на все ваши вопросы.
            </p>
            <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Получить консультацию</Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#0F4024] text-white" id="advantages">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Мы создаём пространство для жизни
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {[
              { icon: <Check className="h-8 w-8" />, title: "Охраняемая территория" },
              { icon: <Check className="h-8 w-8" />, title: "Закрытый двор без машин" },
              { icon: <Check className="h-8 w-8" />, title: "Детские и спортивные площадки" },
              { icon: <Check className="h-8 w-8" />, title: "Подземный паркинг" },
              { icon: <Check className="h-8 w-8" />, title: "Полный пакет документов" },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-[#0F4024]/80 rounded-lg backdrop-blur-sm border border-white/10"
              >
                <div className="mb-4 text-white">{advantage.icon}</div>
                <h3 className="text-lg font-semibold">{advantage.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News & Blog */}
      <section className="py-20 bg-white" id="новости">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">Новости</Badge>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Последние новости
              </motion.h2>
              <p className="text-gray-600 max-w-2xl">
                Следите за последними новостями и событиями компании Elordo Group.
              </p>
            </div>
            <Button variant="link" className="text-[#0F4024] mt-4 md:mt-0">
              Все новости
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {news.map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }} className="group">
                  <Card className="overflow-hidden h-full border-none shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-4 w-4 text-[#0F4024] mr-2" />
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900 line-clamp-2">{item.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">{item.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto text-[#0F4024]">
                        Читать далее
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">FAQ</Badge>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Часто задаваемые вопросы
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о покупке недвижимости в наших жилых комплексах.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Не нашли ответ на свой вопрос? Свяжитесь с нами, и мы с радостью поможем вам.
            </p>
            <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Задать вопрос</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">Отзывы</Badge>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Отзывы наших клиентов
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят о нас те, кто уже приобрел квартиру в наших жилых комплексах.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Алексей Иванов",
                project: "Nova City",
                text: "Очень доволен своей квартирой. Качество строительства на высоте, все сдано в срок. Рекомендую Elordo Group всем друзьям.",
              },
              {
                name: "Мария Петрова",
                project: "Art City",
                text: "Прекрасная планировка, удобное расположение комплекса. Менеджеры компании всегда были на связи и помогали решать все вопросы.",
              },
              {
                name: "Дмитрий Сидоров",
                project: "Olymp",
                text: "Купил квартиру в рассрочку на очень выгодных условиях. Качество жилья превзошло все ожидания. Спасибо Elordo Group!",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-none shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#0F4024]/20 flex items-center justify-center text-[#0F4024] font-bold mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">ЖК {testimonial.project}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-[#0F4024] text-[#0F4024]">
              Смотреть все отзывы
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50" id="контакты">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4">Контакты</Badge>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Свяжитесь с нами
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы всегда рады ответить на ваши вопросы и помочь с выбором идеальной квартиры.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Наш офис</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-[#0F4024] mt-1 mr-3" />
                  <p className="text-gray-700">Бишкек, ул. Киевская 168</p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-[#0F4024] mr-3" />
                  <p className="text-gray-700">+996 (XXX) XXX-XXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#0F4024] mr-3" />
                  <p className="text-gray-700">info@elordogroup.kg</p>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Режим работы</h3>
                <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-700">Сб: 10:00 - 15:00</p>
                <p className="text-gray-700">Вс: выходной</p>
              </div>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0F4024] flex items-center justify-center text-white hover:bg-[#0a2e1a] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#0F4024] flex items-center justify-center text-white hover:bg-[#0a2e1a] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <form className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Заказать обратный звонок</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Имя
                      </label>
                      <Input id="name" placeholder="Ваше имя" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <Input id="phone" placeholder="+996 (XXX) XXX-XXX" className="w-full" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение
                      </label>
                      <Textarea id="message" placeholder="Ваше сообщение" className="w-full min-h-[120px]" />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-[#0F4024] hover:bg-[#0a2e1a] text-white">Отправить заявку</Button>
                    </motion.div>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.2099423184513!2d74.58746931547983!3d42.87656601094355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c5c1e0d6c3%3A0x7e5f481a9c0e502!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1650000000000!5m2!1sru!2skg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
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
                  <Link href="#о-компании" className="text-gray-400 hover:text-white transition-colors">
                    О компании
                  </Link>
                </li>
                <li>
                  <Link href="#проекты" className="text-gray-400 hover:text-white transition-colors">
                    Проекты
                  </Link>
                </li>
                <li>
                  <Link href="#квартиры" className="text-gray-400 hover:text-white transition-colors">
                    Квартиры
                  </Link>
                </li>
                <li>
                  <Link href="#условия" className="text-gray-400 hover:text-white transition-colors">
                    Условия
                  </Link>
                </li>
                <li>
                  <Link href="#новости" className="text-gray-400 hover:text-white transition-colors">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link href="#контакты" className="text-gray-400 hover:text-white transition-colors">
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
                  <MapPin className="h-4 w-4 mr-2 text-[#0F4024]/80" />
                  <span className="text-gray-400">Бишкек, ул. Киевская 168</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-[#0F4024]/80" />
                  <span className="text-gray-400">+996 (XXX) XXX-XXX</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#0F4024]/80" />
                  <span className="text-gray-400">info@elordogroup.kg</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Elordo Group. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
