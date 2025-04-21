import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { fadeIn } from "@/constants/animations"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Project {
  name: string,
  status: string,
  statusColor: string,
  address: string,
  image: string,
}

interface ProjectCardProps {
  index: number
  project: Project
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const isMobile = useIsMobile();
    const [hasAnimated, setHasAnimated] = useState(false);

    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.5,
      rootMargin: '0px 0px -40%',
    });

    useEffect(() => {
      if (isMobile) {
        if (inView) {
          setHasAnimated(true);
        } else {
          setHasAnimated(false);
        }
      }
    }, [inView, isMobile]);

    return (
      <motion.div variants={fadeIn} custom={index} className="group" ref={ref}>
        <Card className={cn("overflow-hidden h-[400px] border-none rounded-xl relative shadow-md hover:shadow-xl transition-all duration-500", 
          isMobile && hasAnimated && 'shadow-xl'
        )}>
          {/* Image with scale animation */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              fill
              className={cn(
                "object-cover transition-transform duration-1000 ease-out group-hover:scale-110",
                isMobile && hasAnimated && 'scale-110'
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
  
          {/* Gradient overlays for better text visibility */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500",
            isMobile && hasAnimated && 'opacity-90'
          )}></div>
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-[#0F4024]/30 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700",
            isMobile && hasAnimated && 'opacity-60'
          )}></div>
  
          {/* Status badge */}
          <div className="absolute top-4 right-4 z-30">
            <Badge
              className={cn(
                "font-normal text-xs px-2.5 py-1 shadow-md backdrop-blur-sm",
                project.statusColor === "bg-[#0F4024]"
                  ? "bg-[#0F4024]/90 text-white"
                  : project.statusColor === "bg-amber-500"
                    ? "bg-amber-500/90 text-white"
                    : "bg-blue-500/90 text-white",
              )}
            >
              {project.status}
            </Badge>
          </div>
  
          {/* Card content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
            <div className={cn(
              "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out",
              isMobile && hasAnimated && 'translate-y-0'
            )}>
              <h3 className="text-xl font-medium text-white mb-2">{project.name}</h3>
  
              <div className="flex items-center text-gray-200 text-sm mb-4 opacity-80">
                <MapPin className="h-3.5 w-3.5 mr-2 flex-shrink-0" />
                <span>{project.address}</span>
              </div>
  
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-center bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-100",
                  isMobile && hasAnimated && 'bg-white/20 text-white translate-y-0 opacity-100'
                )}
              >
                Подробнее
                <ArrowRight className={cn(
                  "ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                  isMobile && hasAnimated && 'translate-x-1'
                )} />
              </Button>
            </div>
          </div>
  
          {/* Hover effect border */}
          <div className={cn(
            "absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-500 z-10",
            isMobile && hasAnimated && 'border-white/20'
          )}></div>
        </Card>
      </motion.div>
    )
}