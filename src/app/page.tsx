"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
  Play,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { StatItem } from "@/components/stat-item"
import { Container } from "@/components/container"
import { Headers } from "@/components/headers"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects/projects-section"
import { Title, Text } from "@/components/ui/typography"
import AboutSection from "@/components/sections/about-section"
import { ApartmentsSection } from "@/components/sections/apartments-section"


import { 
  fadeIn, 
  slideInFromLeft, 
  slideInFromRight, 
  staggerContainer, 
  heroSlides,
  stats,
  news,
  faqs,
} 
from "@/constants"
    
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">      

      <Headers/>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="main-section">
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
      <div className="container px-4 md:px-6 m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <AboutSection/>
      
      {/* Featured Project */}
      <section className="py-20 bg-gray-50">
        <Container>
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
                  <Title>
                    Жилой комплекс <span className="text-[#0F4024]">Nova City</span>
                  </Title>
                  <Text className="mt-4 max-w-2xl">
                    Современный жилой комплекс в самом сердце Бишкека, сочетающий в себе инновационные технологии,
                    продуманные планировки и развитую инфраструктуру.
                  </Text>
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
        </Container>
      </section>

      {/* Our Projects */}
      <ProjectsSection/>  

      {/* Apartments */}
      <ApartmentsSection/>

      {/* Purchase Conditions */}
      <section className="py-20 bg-white" id="conditions">
        <Container>
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
        </Container>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-[#0F4024] text-white" id="advantages">
        <Container>
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
        </Container>
      </section>

      {/* News & Blog */}
      <section className="py-20 bg-white" id="news">
        <Container>
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
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <Container>
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
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials">
        <Container>
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
                      <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
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
        </Container>
      </section>

      <section className="py-20 bg-gray-50" id="контакты">
        <Container>
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
            className="mt-12 h-[400px] rounded-lg overflow-hidden"
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
        </Container>
      </section>

      <Footer/>
    </div>
  )
}
