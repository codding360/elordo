"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Container } from "@/components/container"
import { cn } from "@/lib/utils"
import { fadeIn, staggerContainer } from "@/constants/animations"
import { ProjectCard } from "./project"
import { Title, Subtitle, Text } from "@/components/ui/typography"

// Project data
const projects = {
  all: [
    {
      name: "Nova City",
      status: "Сдан",
      statusColor: "bg-[#0F4024]",
      address: "ул. Токтогула, 125",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
    },
    {
      name: "Южные Ворота",
      status: "Строится",
      statusColor: "bg-amber-500",
      address: "ул. Ахунбаева, 98",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "New York",
      status: "Сдан",
      statusColor: "bg-[#0F4024]",
      address: "ул. Киевская, 210",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Art City",
      status: "Строится",
      statusColor: "bg-amber-500",
      address: "ул. Манаса, 54",
      image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Olymp",
      status: "Сдан",
      statusColor: "bg-[#0F4024]",
      address: "ул. Байтик Баатыра, 36",
      image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2926&auto=format&fit=crop",
    },
    {
      name: "Академия",
      status: "Строится",
      statusColor: "bg-amber-500",
      address: "ул. Чуй, 156",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2940&auto=format&fit=crop",
    },
  ],
  completed: [
    {
      name: "Nova City",
      status: "Сдан",
      statusColor: "bg-[#0F4024]",
      address: "ул. Токтогула, 125",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
    },
    {
      name: "New York",
      status: "Сдан",
      statusColor: "bg-[#0F4024]",
      address: "ул. Киевская, 210",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Olymp",
      status: "Сдан",
      statusColor: "bg-[#0F4024]",
      address: "ул. Байтик Баатыра, 36",
      image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2926&auto=format&fit=crop",
    },
  ],
  construction: [
    {
      name: "Южные Ворота",
      status: "Строится",
      statusColor: "bg-amber-500",
      address: "ул. Ахунбаева, 98",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Art City",
      status: "Строится",
      statusColor: "bg-amber-500",
      address: "ул. Манаса, 54",
      image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Академия",
      status: "Строится",
      statusColor: "bg-amber-500",
      address: "ул. Чуй, 156",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2940&auto=format&fit=crop",
    },
  ],
  planned: [
    {
      name: "Manhattan",
      status: "Планируется",
      statusColor: "bg-blue-500",
      address: "ул. Исанова, 45",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Green Park",
      status: "Планируется",
      statusColor: "bg-blue-500",
      address: "ул. Горького, 120",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Manhattan",
      status: "Планируется",
      statusColor: "bg-blue-500",
      address: "ул. Исанова, 45",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Green Park",
      status: "Планируется",
      statusColor: "bg-blue-500",
      address: "ул. Горького, 120",
      image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2940&auto=format&fit=crop",
    },
    {
      name: "Manhattan",
      status: "Планируется",
      statusColor: "bg-blue-500",
      address: "ул. Исанова, 45",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2940&auto=format&fit=crop",
    },
  ],
}

// Tab data
const tabItems = [
  { value: "all", label: "Все проекты" },
  { value: "completed", label: "Сданные" },
  { value: "construction", label: "Строящиеся" },
  { value: "planned", label: "Планируемые" },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(6)

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3)
  }

  const currentProjects = projects[activeTab as keyof typeof projects]
  const hasMoreProjects = visibleProjects < currentProjects.length

  return (
    <section
      className="py-20 bg-white"
      id="projects"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <Badge className="bg-[#0F4024]/5 text-[#0F4024] hover:bg-amber-500/20 mb-4">Наши проекты</Badge>
            <Title>Жилые комплексы</Title>
            <Text className="mt-4 max-w-2xl">
              Мы создаем не просто дома, а целые экосистемы для комфортной жизни. Каждый наш проект — это уникальное
              сочетание современной архитектуры, продуманных планировок и развитой инфраструктуры.
            </Text>
          </div>
          <Button
            variant="ghost"
            className="text-[#0F4024] mt-4 md:mt-0 font-normal hover:text-[#0a2e1a] hover:bg-transparent transition-colors duration-300 p-0"
          >
            Все проекты
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative mb-12">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="relative overflow-x-auto pb-2">
              <TabsList className="bg-gray-50/80 backdrop-blur-sm p-1.5 rounded-full h-auto w-full sm:w-auto flex flex-nowrap overflow-x-auto scrollbar-hide border border-gray-100/80">
                {tabItems.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-normal whitespace-nowrap transition-all duration-300",
                      activeTab === tab.value
                        ? "bg-white text-[#0F4024] shadow-sm"
                        : "text-gray-500 hover:text-[#0F4024]",
                    )}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(projects).map(([key, projectList]) => (
              <TabsContent key={key} value={key} className="mt-8 focus-visible:outline-none focus-visible:ring-0">
                <motion.div
                  key={key}
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
                >
                  {projectList.slice(0, visibleProjects).map((project, index) => (
                    <ProjectCard key={`${key}-${index}`} project={project} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <Button
              variant="outline"
              className="border border-gray-200 text-gray-600 hover:bg-[#0F4024]/5 hover:text-[#0F4024] hover:border-[#0F4024]/20 transition-all duration-300 rounded-full px-6 shadow-sm"
              onClick={handleLoadMore}
            >
              Загрузить еще
              <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
