"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { featureVariant, slideInFromLeft, slideInFromRight, staggerContainer,  } from "@/constants/animations"
import { Text, Title } from "@/components/ui/typography"

import {features} from "@/constants/features"

import {
  ArrowRight, 
  Check 
} from "lucide-react";


// Feature card component
const FeatureCard = ({ title, text, index, logo }: { title: string; text: string; index: number, logo?: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      variants={featureVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className="group"
    >
      <div className="p-3 border border-gray-100 rounded-xl bg-white/50 backdrop-blur-sm hover:border-[#0F4024]/20 hover:bg-[#0F4024]/5 transition-all duration-300 h-full">
        <div className="flex items-center gap-3 mb-3 justify-start ">
          <div className="rounded-full bg-[#0F4024]/10 p-1.5 text-[#0F4024] flex-shrink-0 mt-0.5 group-hover:bg-[#0F4024]/20 transition-colors duration-300">
            {
              logo ?  logo : <Check className="h-4 w-4" />
            }
          </div>
          <Text className="text-lg font-medium text-gray-900 group-hover:text-[#0F4024] transition-colors duration-300">
              {title}
            </Text>
        </div>
        <Text className="font-normal text-gray-600 md:text-sm text-sm leading-relaxed">
          {text}
        </Text>
      </div>
    </motion.div>
  )
}

export default function AboutSection() {
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const featuresRef = useRef(null)

  const imageInView = useInView(imageRef, { once: true, amount: 0.3 })
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden" id="company">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0F4024]/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0F4024]/5 rounded-full blur-3xl opacity-60"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <motion.div
            ref={imageRef}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            variants={slideInFromLeft}
            className="relative z-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Main image */}
              <div className="aspect-[4/3] lg:aspect-[3/4] xl:aspect-[1/1] relative">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop"
                  alt="Elordo Group Office"
                  fill
                  className="object-cover transition-transform duration-10000 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60"></div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-white text-lg font-medium">Центральный офис Elordo Group</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-[#0F4024]/20 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-[#0F4024]/20 blur-2xl rounded-full"></div>

              {/* Border effect */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
            </div>

          </motion.div>

          {/* Content column */}
          <div className="flex flex-col gap-4">
            <motion.div
              ref={contentRef}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={slideInFromRight}
            >
              <Badge className="bg-[#0F4024]/10 text-[#0F4024] hover:bg-[#0F4024]/20 mb-4 px-3 py-1 text-xs font-normal">
                О компании
              </Badge>

              <Title>
                Создаем пространства для{" "}
                <span className="text-[#0F4024] relative">
                  комфортной жизни
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#0F4024]/10 rounded-full"></span>
                </span>
              </Title>

              <Text className="mt-6 space-y-4">
                Elordo Group — ведущая строительная компания в Бишкеке. За 11 лет мы построили 17 жилых комплексов, 
                где живут более 3500 семей. Мы создаём современные, комфортные и безопасные дома, которые становятся 
                надёжным вложением для наших клиентов.
              </Text>
            </motion.div>

            {/* Features grid */}
            <motion.div
              ref={featuresRef}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title} text={feature.text} logo={feature.logo} index={index} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="bg-[#0F4024] hover:bg-[#0a2e1a] text-white mt-2 group">
                Подробнее о компании
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
