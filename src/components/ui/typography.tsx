import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { fadeIn } from "@/constants/animations"

interface TypographyProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function Title({ children, className, animate = true, as: Component = "h2" }: TypographyProps) {
  const content = (
    <Component
      className={cn(
        "text-3xl md:text-4xl font-medium text-gray-900 tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  )

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export function Subtitle({ children, className, animate = true, as: Component = "h3" }: TypographyProps) {
  const content = (
    <Component
      className={cn(
        "text-xl md:text-2xl font-semibold text-gray-900",
        className
      )}
    >
      {children}
    </Component>
  )

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export function Text({ children, className, animate = false, as: Component = "p" }: TypographyProps) {
  const content = (
    <Component
      className={cn(
        "text-gray-500 text-sm md:text-base leading-relaxed",
        className
      )}
    >
      {children}
    </Component>
  )

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {content}
      </motion.div>
    )
  }

  return content
} 