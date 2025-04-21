"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Download, Home, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Container } from "@/components/container"

import { fadeIn, staggerContainer, apartments } from "@/constants"
import { Title, Text } from "../ui/typography"


export function ApartmentsSection() {
  return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="apartments">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#0F4024]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#0F4024]/20 to-transparent rounded-full blur-3xl"></div>
  
        <Container>
          {/* Section header */}
          <div className="text-center mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4 px-4 py-1.5 text-sm font-medium">
                Квартиры
              </Badge>
            </motion.div>
  
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              <span className="relative inline-block">
                Выберите свою
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#0F4024]/30 rounded-full"></span>
              </span>{" "}
              <span className="text-[#0F4024]">идеальную квартиру</span>
            </motion.h2>
  
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              Мы предлагаем различные варианты планировок, от компактных студий до просторных пентхаусов. Каждая квартира
              спроектирована с учетом современных требований к комфорту и функциональности.
            </motion.p>
          </div>
  
          {/* Apartments grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {apartments.map((apartment, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="h-full"
              >
                <Card
                  className={cn(
                    "overflow-hidden h-full border-none rounded-xl transition-all duration-500 relative bg-white shadow-lg",
                  )}
                >
                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={apartment.image || "/placeholder.svg"}
                      alt={apartment.type}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700 ease-out",
                      )}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
  
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
  
                    {/* Type badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-white/90 backdrop-blur-sm text-[#0F4024] font-medium text-sm px-3 py-1 rounded-md">
                        {apartment.type}
                      </div>
                    </div>
                  </div>
  
                  {/* Card content */}
                  <div className="p-6">
                    <div className="space-y-5">
                      {/* Price and area */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 text-[#0F4024] mr-2" />
                          <span className="text-sm text-gray-600">{apartment.area} м²</span>
                        </div>
                        <div className="text-[#0F4024] font-medium">{apartment.price} $</div>
                      </div>
  
                      {/* Single feature highlight */}
                      <p className="text-gray-600 text-sm">
                        {apartment.features[0]}
                        {apartment.popular && (
                          <span className="ml-2 inline-flex items-center text-xs font-medium text-[#0F4024]">
                            • Популярная
                          </span>
                        )}
                      </p>
  
                      {/* Button */}
                      <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white rounded-full">
                        Подробнее
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
  
                </Card>
              </motion.div>
            ))}
          </motion.div>
  
          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-[#0F4024] to-[#1a6e3e] p-10 rounded-2xl shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center relative z-10">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4">Не можете выбрать подходящий вариант?</h3>
                  <p className="text-white/80 mb-8 text-lg leading-relaxed">
                    Наши специалисты помогут вам подобрать идеальную квартиру, исходя из ваших предпочтений и бюджета.
                    Оставьте заявку, и мы свяжемся с вами в ближайшее время.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-[#0F4024] hover:bg-white/90 font-bold text-base px-6 py-6 h-auto group">
                      Оставить заявку
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 font-bold text-base px-6 py-6 h-auto group"
                    >
                      Скачать каталог
                      <Download className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
                      alt="Каталог квартир"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4024]/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 bg-white px-6 py-3 rounded-lg shadow-lg transform -rotate-3">
                      <p className="text-lg font-bold text-[#0F4024]">Каталог 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
  )
}
