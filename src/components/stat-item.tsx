import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


export const StatItem = ({ icon, number, text }: { icon: React.ReactNode; number: number; text: string }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-4"
      >                 
        <div>
          <p className="text-3xl md:text-4xl font-bold bg-white/10 flex items-center justify-center gap-3 rounded-full px-4 py-2">
            {icon}
            {inView && (
              <CountUp
                end={number}
                duration={2}
                delay={0.5}
                suffix={number === 3500 ? "+" : ""}
              />
            )}
          </p>
          <p className="text-sm md:text-base text-white/80 mt-2">{text}</p>
        </div>
      </motion.div>
    )
}