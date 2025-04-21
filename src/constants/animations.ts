export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }
  
export const staggerContainer = {
hidden: { opacity: 0 },
visible: {
    opacity: 1,
    transition: {
    staggerChildren: 0.1,
    },
},
}

export const slideInFromLeft = {
hidden: { x: -60, opacity: 0 },
visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
},
}

export const slideInFromRight = {
hidden: { x: 60, opacity: 0 },
visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
},
}


export const featureVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}