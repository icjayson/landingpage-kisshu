import { Variants } from 'framer-motion'

export const prizeCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

export const prizeTitleVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const prizeCharacterVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export const glowVariants: Variants = {
  initial: {
    boxShadow: "0 0 0px rgba(240, 192, 52, 0)"
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(240, 192, 52, 0.2)",
      "0 0 30px rgba(240, 192, 52, 0.4)",
      "0 0 20px rgba(240, 192, 52, 0.2)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
} 